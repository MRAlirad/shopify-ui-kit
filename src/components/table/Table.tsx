import { FormProvider, useForm, useWatch } from "react-hook-form";
import { TableBodySkeleton } from "../Skeletons";
import FilterSearch from "./FilterSearch";
import TableHead from "./TableHead";
import Row from "./Row";
import Pagination from "../Pagination";
import EmptySearchBox from "./EmptySearchBox";
import type { TableProps } from "./services/Props";
import TableContext from "./services/TableContext";
import PageSize from "./PageSize";
import { filterDataSource, searchDataSourceColumns, sortDataSource } from "./services/helper";

function Table<T>({
	type = "local",
	columns = [],
	dataSource = [],
	// pagination,
	loading = false,
	actions = [],
	searchPanel = false,
	selectable = false,
	moreInfo = false,
	className = "",
	allowedPageSizes = [10, 20, 50, 100],
	columnHidingEnabled = false,
}: TableProps<T>) {
	const form = useForm({
		defaultValues: (() => {
			const output: Record<string, boolean | string | T[] | null | number> = {};
			for (const row of dataSource) {
				output[`select-${(row as { id: string | number }).id}`] = false;
			}
			for (const column of columns) {
				output[`search-${column.name}`] = "";
				output[`display-${column.name}`] = true;
			}
			output["search"] = "";
			output["selectedRows"] = [];
			output["moreInfo"] = null;
			output["pageSize"] = allowedPageSizes[0];
			output["currentPage"] = 1;
			output["sort"] = "";
			output["sortDirection"] = "";
			return output;
		})(),
	});

	const { setValue, watch, control } = form;

	const currentPage = useWatch({ control: control, name: "currentPage" }) as number;
	const pageSize = useWatch({ control: control, name: "pageSize" }) as number;
	const sort = useWatch({ control: control, name: "sort" }) as string;
	const sortDirection = useWatch({ control: control, name: "sortDirection" }) as "asc" | "desc";
	const search = useWatch({ control: control, name: "search" }) as string;

	// Apply filters in sequence: sort -> general search -> column-specific filters
	const sortedData = sortDataSource<T>({ dataSource, sort, sortDirection });
	const generalSearchFiltered = filterDataSource<T>({ dataSource: sortedData, search });
	const columnFilteredData = searchDataSourceColumns<T>({
		dataSource: generalSearchFiltered,
		columns,
		filters: watch(),
	});


	const paginatedData = columnFilteredData.slice((currentPage - 1) * pageSize, currentPage * pageSize);

	return (
		<TableContext.Provider value={{ allowedPageSizes, type, searchPanel, selectable, moreInfo, columns, actions, columnHidingEnabled }}>
			<FormProvider {...form}>
				<div className={`grid gap-6 ${className}`}>
					<div className="table-container card">
						<FilterSearch />

						<div className="table-wrapper overflow-x-auto">
							<table className="w-full">
								<TableHead<T> />
								{loading ? (
									<TableBodySkeleton count={columns.filter((column) => column.visibility !== false).length + 1} />
								) : columnFilteredData.length === 0 ? (
									<EmptySearchBox />
								) : (
									<tbody className="max-h-[500px] overflow-y-auto">
										{paginatedData.map((row, index) => (
											<Row<T> key={(row as { id: string | number }).id} rowData={row} index={index} />
										))}
									</tbody>
								)}
							</table>
						</div>
					</div>

					<div className="flex flex-wrap items-center justify-between gap-2">
						{Math.ceil(columnFilteredData.length / pageSize) > 1 ? (
							<Pagination
								currentPage={+currentPage}
								pageCount={Math.ceil(columnFilteredData.length / pageSize)}
								onChangePage={(page) => setValue("currentPage", page)}
							/>
						) : (
							<span></span>
						)}
						<PageSize />
					</div>
				</div>
			</FormProvider>
		</TableContext.Provider>
	);
}

export default Table;
