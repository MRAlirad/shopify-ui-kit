import { useContext } from "react";
import TableContext from "./services/TableContext";
import Column from "./Column";
import type { ColumnProps } from "./services/Props";
import ColumnFilter from "./ColumnFilter";

const TableHead = <T,>() => {
	const { columns, actions } = useContext(TableContext);

	const hasColumnFilter = columns.some((column: ColumnProps<T>) => column.search);

	return (
		<thead>
			<tr className="text-neutral-600 text-xs border-b border-neutral-200">
				<Column name="row" label="ردیف" className="w-[1%] !p-3 sticky start-0" />
				{columns.map((column: ColumnProps<T>) => (
					<Column key={column.name} {...column} />
				))}
				{actions.length > 0 && <Column name="actions" label="" className="w-[1%] !p-3 sticky end-0" />}
			</tr>
			{hasColumnFilter && (
				<tr className="border-b border-neutral-200">
					<th></th>
					{columns.map((column: ColumnProps<T>) => (
						<ColumnFilter key={column.name} column={column} />
					))}
					<th></th>
				</tr>
			)}
		</thead>
	);
};

export default TableHead;
