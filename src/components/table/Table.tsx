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
}: TableProps<T>) {
	const form = useForm({
		defaultValues: (() => {
			const output: Record<string, boolean | string | T[] | null | number> = {};
			for (const row of dataSource) {
				output[`select-${(row as { id: string | number }).id}`] = false;
			}
			for (const column of columns) {
				output[`search-${column.name}`] = "";
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
	const sortDirection = form.watch("sortDirection") as "asc" | "desc";
	const search = form.watch("search") as string;

	const sortFilteredDataSource = filterDataSource<T>({ dataSource: sortDataSource<T>({ dataSource, sort, sortDirection }), search });

	const paginatedData = sortFilteredDataSource.slice((currentPage - 1) * pageSize, currentPage * pageSize);

	searchDataSourceColumns({ dataSource, columns, filters: form.watch() });

	return (
		<TableContext.Provider value={{ allowedPageSizes, type, searchPanel, selectable, moreInfo, columns, actions }}>
			<FormProvider {...form}>
				<div className={`grid gap-6 ${className}`}>
					<div className="table-container card">
						<FilterSearch />

						<div className="table-wrapper overflow-x-auto">
							<table className="w-full">
								<TableHead<T> />
								{loading ? (
									<TableBodySkeleton count={columns.filter((column) => column.visibility !== false).length + 1} />
								) : sortFilteredDataSource.length === 0 ? (
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
						{Math.ceil(sortFilteredDataSource.length / pageSize) > 1 ? (
							<Pagination
								currentPage={+currentPage}
								pageCount={Math.ceil(sortFilteredDataSource.length / pageSize)}
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
