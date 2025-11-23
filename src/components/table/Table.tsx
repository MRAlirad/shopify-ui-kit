import { FormProvider, useForm, useWatch } from "react-hook-form";
import FilterSearch from "./FilterSearch";
import TableHead from "./TableHead";
import type { TableProps } from "./services/Props";
import TableContext from "./services/TableContext";
import { filterDataSource, searchDataSourceColumns, sortDataSource } from "./services/helper";
import Card from "../Card";
import TableBody from "./TableBody";
import TableFooter from "./TableFooter";

function Table<T>({
	type = "local",
	card,
	height,
	id = "datagridId",
	keyExpr = "id",
	columns = [],
	dataSource = [],
	loading = false,
	actions = [],
	searchPanel = false,
	selectable = false,
	moreInfo = false,
	paging = {
		visible: true,
		allowedPageSizes: [10, 20, 50, 100],
		displayMode: "compact",
		defaultPageSize: 5,
	},
	columnHidingEnabled = false,
}: TableProps<T>) {
	const form = useForm({
		defaultValues: (() => {
			const output: Record<string, boolean | string | T[] | null | number> = {};
			// initialize the select-checkboxes of the rows to false
			for (const row of dataSource) {
				output[`select-${(row as Record<string, string | number>)[keyExpr]}`] = false;
			}
			for (const column of columns) {
				output[`search-${column.name}`] = ""; // initialize the search-inputs of the columns to empty string
				output[`display-${column.name}`] = true; // initialize the display-columns to true
			}
			output["search"] = ""; // initialize the general search to empty string
			output["selectedRows"] = []; // initialize the selected rows to empty array
			output["moreInfo"] = null; // initialize the selected more info row to null
			output["pageSize"] = paging.defaultPageSize ?? paging.allowedPageSizes?.[0] ?? 5; // initialize the page size to the first allowed page size
			output["currentPage"] = 1; // initialize the current page to 1
			output["sort"] = ""; // initialize the sort based on columns to empty string
			output["sortDirection"] = ""; // initialize the sort direction based on columns to empty string
			return output;
		})(),
	});

	const { control } = form;

	// get the values of the form
	const filters = useWatch({ control }) as Record<string, boolean | string | T[] | null | number>;
	const currentPage = useWatch({ control: control, name: "currentPage" }) as number;
	const pageSize = useWatch({ control: control, name: "pageSize" }) as number;
	const sort = useWatch({ control: control, name: "sort" }) as string;
	const sortDirection = useWatch({ control: control, name: "sortDirection" }) as "asc" | "desc";
	const search = useWatch({ control: control, name: "search" }) as string;

	// Apply filters in sequence: sort -> general search -> column-specific filters
	const sortedData = sortDataSource<T>({ dataSource, sort, sortDirection });
	const generalSearchFiltered = filterDataSource<T>({ dataSource: sortedData, search });
	const columnFilteredData = searchDataSourceColumns<T>({ dataSource: generalSearchFiltered, columns, filters });
	const paginatedData = columnFilteredData.slice((currentPage - 1) * pageSize, currentPage * pageSize);

	return (
		<TableContext.Provider value={{ paging, type, searchPanel, selectable, moreInfo, columns, actions, columnHidingEnabled, keyExpr, loading, id, dataSource }}>
			<FormProvider {...form}>
				<Card {...card} className={{ content: "space-y-2 overflow-x-auto" }}>
					<div className="table-container">
						<FilterSearch />
						<div className="table-wrapper overflow-x-auto overflow-y-auto h-auto" style={{ maxHeight: `${height ? `${height}px` : "100%"}` }}>
							<table className="w-full">
								<TableHead<T> />
								<TableBody<T> columnFilteredData={columnFilteredData} paginatedData={paginatedData} />
							</table>
						</div>
					</div>
					<TableFooter<T> columnFilteredData={columnFilteredData} />
				</Card>
			</FormProvider>
		</TableContext.Provider>
	);
}

export default Table;
