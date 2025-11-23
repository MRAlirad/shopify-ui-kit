import { useContext } from "react";
import TableContext from "./services/TableContext";
import Column from "./Column";
import type { ActionProps, ColumnProps } from "./services/Props";
import ColumnFilter from "./ColumnFilter";

const TableHead = <T,>() => {
	const { columns, actions } = useContext(TableContext);

	const hasColumnFilter = columns.some((column: ColumnProps<T>) => column.search);
	const hasVisibleActions = actions.filter((action: ActionProps<T>) => action.visibility !== false).length > 0;

	return (
		<thead className="sticky top-0 z-10">
			<tr className="text-neutral-600 text-xs border-b border-blue-200">
				<Column name="row" label="ردیف" className="w-[1%] p-3! sticky start-0" />
				{columns.map((column: ColumnProps<T>) => (
					<Column key={column.name} {...column} />
				))}
				{hasVisibleActions && <Column name="actions" label="" className="w-[1%] p-3! sticky end-0" />}
			</tr>

			{hasColumnFilter && (
				<tr className="border-b border-blue-200">
					{/* row */}
					<th></th>
					{/* columns */}
					{columns.map((column: ColumnProps<T>) => (
						<ColumnFilter key={column.name} column={column} />
					))}
					{/* actions */}
					<th></th>
				</tr>
			)}
		</thead>
	);
};

export default TableHead;
