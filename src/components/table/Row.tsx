import { useContext } from "react";
import classNames from "classnames";
import { useFormContext } from "react-hook-form";
import RowCell from "./RowCell";
import ActionCell from "./ActionCell";
import type { ColumnProps, RowProps } from "./services/Props";
import TableContext from "./services/TableContext";
import MoreInfoRow from "./MoreInfoRow";
import { generateRandomString } from "../../helpers/String";
import Popup from "../Popup";

function Row<T>({ index, rowData }: RowProps<T>) {
	const { columns } = useContext(TableContext);
	const { watch } = useFormContext();
	const uId = generateRandomString();

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
					.filter((column: ColumnProps<T>) => column.visibility !== false || watch(`display-${column.name}`) !== false)
					.map((column: ColumnProps<T>) => {
						if (watch(`display-${column.name}`) === false) return;

						return (
							<td
								key={column.name}
								className={classNames({
									"px-6 py-3": true,
									[`row-cell-${uId}`]: column.hint,
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
									{column.hint && (
										<Popup anchorSelect={`.row-cell-${uId}`} className="grid p-2" place="top" openOnClick={false} offset={0} clickable={false}>
											{column.cellTemplate ? (
												column.cellTemplate(rowData)
											) : (
												<div>
													{rowData && typeof rowData === "object" && rowData !== null && column.name in rowData
														? (rowData as Record<string, string | number | undefined>)[column.name]
														: ""}
												</div>
											)}
										</Popup>
									)}
								</div>
							</td>
						);
					})}
				<ActionCell<T> rowData={rowData} />
			</tr>
			<MoreInfoRow<T> rowData={rowData} />
		</>
	);
}

export default Row;
