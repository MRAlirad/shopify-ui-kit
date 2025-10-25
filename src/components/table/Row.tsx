import { Fragment, useContext } from "react";
import classNames from "classnames";
import { useFormContext } from "react-hook-form";
import RowCell from "./RowCell";
import Button from "../Button";
import Popup from "../Popup";
import { ThreeDotsHorizontalIcon } from "../icon";
import type { ActionProps, ColumnProps, RowProps } from "./Props";
import { generateRandomString } from "../../helpers/String";
import TableContext from "../../contexts/TableContext";

function Row<T>({ index, rowData }: RowProps<T>) {
	const {actions, columns} = useContext(TableContext);
	const uId = generateRandomString();
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
				{actions.filter((action: ActionProps<T>) => action.visibility !== false).length > 0 && (
					<td className="p-3 bg-white sticky end-0 group-hover:bg-neutral-50">
						<div className="flex items-center justify-center">
							<Button
								color="simple"
								size="small"
								className={`action-${uId} size-7 hover:bg-neutral-200`}
								icon={<ThreeDotsHorizontalIcon size={18} className="text-neutral-500" />}
							/>
							<Popup anchorSelect={`.action-${uId}`} place="right" className="grid p-2 min-w-40 w-max">
								{actions.map(({ text, color = "black-simple", icon, className, loading = false, onClick, disabled = false }: ActionProps<T>, index) => (
									<Button
										key={index}
										text={text}
										fullWidth
										size="small"
										color={color}
										loading={loading}
										disabled={disabled}
										icon={icon}
										className={`!py-1.5 justify-start ${className}`}
										onClick={() => onClick?.(rowData)}
									/>
								))}
							</Popup>
						</div>
					</td>
				)}
			</tr>
			{watch("moreInfo") === (rowData as { id: string | number }).id && (
				<tr className="border-b last:border-0 border-neutral-200">
					<td className="px-6" colSpan={columns.filter((column: ColumnProps<T>) => column.visibility !== false).length + 1}>
						<div className="grid grid-cols-[max-content_1fr] items-center gap-1 text-xs pt-0.5 pb-2">
							{columns.map((column: ColumnProps<T>) => (
								<Fragment key={column.name}>
									<span className="text-neutral-700  font-bold">{column.label}:</span>
									<span>
										{column.cellTemplate ? (
											column.cellTemplate(rowData)
										) : (
											<div>
												{rowData && typeof rowData === "object" && rowData !== null && column.name in rowData
													? (rowData as Record<string, string | number | undefined>)[column.name]
													: ""}
											</div>
										)}
									</span>
								</Fragment>
							))}
						</div>
					</td>
				</tr>
			)}
		</>
	);
}

export default Row;
