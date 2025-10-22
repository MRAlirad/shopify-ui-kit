import Column from "./Column";
import Row from "./Row";
import Pagination from "../Pagination";
import { TableBodySkeleton } from "../Skeletons";
import type { TableProps } from "./Props";

const Table = ({ columns = [], dataSet = [], pagination, isLoading = false, actions = [] }: TableProps) => {
	return (
		<div className="grid gap-6">
			<div className="table-container card">
				<div className="table-wrapper overflow-x-auto">
					<table className="w-full">
						<thead>
							<tr className="text-neutral-600 text-xs border-b border-neutral-200">
								<Column name="row" label="ردیف" className="w-[1%] !p-3 sticky start-0" />
								{columns.map((column) => (
									<Column key={column.name} {...column} />
								))}
								{actions.filter((action) => action.visibility !== false).length > 0 && <Column name="actions" label="" className="w-[1%] !p-3 sticky end-0" />}
							</tr>
						</thead>
						{isLoading ? (
							<TableBodySkeleton count={columns.length + 1} />
						) : (
							<tbody>
								{dataSet.map((row, index) => (
									<Row key={row?.id ?? index} {...row} index={index} columns={columns} actions={actions} />
								))}
							</tbody>
						)}
					</table>
				</div>
			</div>
			{pagination && pagination?.pageCount > 1 && <Pagination {...pagination} />}
		</div>
	);
};

export default Table;
