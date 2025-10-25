import { useContext } from "react";
import classNames from "classnames";
import { useFormContext } from "react-hook-form";
import RowCell from "./RowCell";
import ActionCell from "./ActionCell";
import type { ColumnProps, RowProps } from "./Props";
import TableContext from "../../contexts/TableContext";
import MoreInfoRow from "./MoreInfoRow";

function Row<T>({ index, rowData }: RowProps<T>) {
	const {  columns } = useContext(TableContext);
	const { watch } = useFormContext();

	return (
		<>
			<tr
				className={classNames({
					"group relative text-xs font-bold hover:bg-neutral-50 text-start": true,
					"border-b last:border-0 border-neutral-200": watch("moreInfo") !== (rowData as { id: string | number }).id,
				})}
			>
				<RowCell index={index} rowData={rowData} />
				{columns
					.filter((column: ColumnProps<T>) => column.visibility !== false)
					.map((column: ColumnProps<T>) => (
						<td
							key={column.name}
							className={classNames({
								"px-6 py-3": true,
							})}
						>
							<div className="min-w-max">
								{column.cellTemplate ? (
									column.cellTemplate(rowData)
								) : (
									<div>
										{rowData && typeof rowData === "object" && rowData !== null && column.name in rowData
											? (rowData as Record<string, string | number | undefined>)[column.name]
											: ""}
									</div>
								)}
							</div>
						</td>
					))}
				<ActionCell<T> rowData={rowData} />
			</tr>
			<MoreInfoRow<T> rowData={rowData} />
		</>
	);
}

export default Row;
