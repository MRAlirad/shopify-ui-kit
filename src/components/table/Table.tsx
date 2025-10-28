import { FormProvider, useForm } from "react-hook-form";
import { TableBodySkeleton } from "../Skeletons";
import FilterSearch from "./FilterSearch";
import TableHead from "./TableHead";
import Row from "./Row";
import Pagination from "../Pagination";
import EmptySearchBox from "./EmptySearchBox";
import type { TableProps } from "./Props";
import TableContext from "../../contexts/TableContext";
import PageSize from "./PageSize";
import { sortDataSource } from "./services/helper";

function Table<T>({
	columns = [],
	dataSource = [],
	// pagination,
	loading = false,
	actions = [],
	filterOptions = [],
	searchPanel = false,
	selectable = false,
	moreInfo = false,
	type = "local",
	className = "",
	allowedPageSizes = [10, 20, 50, 100],
}: TableProps<T>) {
	const form = useForm({
		defaultValues: (() => {
			const output: Record<string, boolean | string | T[] | null | number> = {};
			for (const row of dataSource) {
				output[`select-${(row as { id: string | number }).id}`] = false;
			}
			for (const column of columns) {
				output[`filter-${column.name}`] = "";
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

	const currentPage = form.watch("currentPage") as number;
	const pageSize = form.watch("pageSize") as number;
	const sort = form.watch("sort") as string;
	const sortDirection = form.watch("sortDirection") as 'asc' | 'desc';

	const outputedData = sortDataSource({ dataSource, sort, sortDirection }).slice((currentPage - 1) * pageSize, currentPage * pageSize);

	return (
		<TableContext.Provider value={{ allowedPageSizes, type, searchPanel, selectable, moreInfo, columns, actions, filterOptions }}>
			<FormProvider {...form}>
				<div className={`grid gap-6 ${className}`}>
					<div className="table-container card">
						<FilterSearch />

						<div className="table-wrapper overflow-x-auto">
							<table className="w-full">
								<TableHead<T> />
								{loading ? (
									<TableBodySkeleton count={columns.filter((column) => column.visibility !== false).length + 1} />
								) : dataSource.length === 0 ? (
									<EmptySearchBox />
								) : (
									<tbody>
										{outputedData.map((row, index) => (
											<Row<T> key={(row as { id: string | number }).id} rowData={row} index={index} />
										))}
									</tbody>
								)}
							</table>
						</div>
					</div>

					<div className="flex flex-wrap items-center justify-between gap-2">
						{Math.ceil(dataSource.length / pageSize) > 1 ? (
							<Pagination
								currentPage={+currentPage}
								pageCount={Math.ceil(dataSource.length / pageSize)}
								onChangePage={(page) => form.setValue("currentPage", page)}
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
