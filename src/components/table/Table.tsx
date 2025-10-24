import { useSearchParams } from "react-router";
import { TableBodySkeleton } from "../Skeletons";
import FilterSort from "./FilterSort";
import Column from "./Column";
import Row from "./Row";
import Pagination from "../Pagination";
import EmptySearchBox from "./EmptySearchBox";
import type { TableProps } from "./Props";

function Table<T>({ columns = [], dataSet = [], pagination, loading = false, actions = [], filterOptions = [], searchPanel }: TableProps<T>) {
	const [searchParams, setSearchParams] = useSearchParams();

	return (
		<div className="grid gap-6">
			<div className="table-container card">
				{(filterOptions.length > 0 || searchPanel) && <FilterSort {...{ filterOptions, searchPanel }} />}

				<div className="table-wrapper overflow-x-auto">
					<table className="w-full">
						<thead>
							<tr className="text-neutral-600 text-xs border-b border-neutral-200">
								<Column name="row" label="ردیف" className="w-[1%] !p-3 sticky start-0" />
								{columns.map((column) => (
									<Column key={column.name} {...column} />
								))}
								{actions.length > 0 && <Column name="actions" label="" className="w-[1%] !p-3 sticky end-0" />}
							</tr>
						</thead>
						{loading ? (
							<TableBodySkeleton count={columns.filter((column) => column.visibility !== false).length + 1} />
						) : dataSet.length === 0 ? (
							<EmptySearchBox />
						) : (
							<tbody>
								{dataSet.map((row, index) => (
									<Row<T> key={index} rowData={row} index={index} columns={columns} actions={actions} />
								))}
							</tbody>
						)}
					</table>
				</div>
			</div>

			{pagination && pagination?.pageCount > 1 && (
				<Pagination
					currentPage={pagination.currentPage}
					pageCount={pagination.pageCount}
					onChangePage={(page) => {
						const params: Record<string, string> = {};

						for (const [key, value] of searchParams.entries()) {
							params[key] = value;
						}
						setSearchParams({ ...params, page: page.toString() });
					}}
				/>
			)}
		</div>
	);
}

export default Table;
