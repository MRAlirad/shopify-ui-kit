import classNames from "classnames";
import RowCell from "./RowCell";
import Button from "../Button";
import Popup from "../Popup";
import { ThreeDotsHorizontalIcon } from "../icon";
import type { RowProps } from "./Props";
import { generateRandomString } from "../../helpers/String";

function Row<T>({ columns, actions = [], index, rowData, selectable = false }: RowProps<T>) {
	const uId = generateRandomString();

	return (
		<tr className="group relative text-xs font-bold hover:bg-neutral-50 border-b last:border-0 border-neutral-200 text-start">
			<RowCell selectable={selectable} index={index} rowData={rowData} />
			{columns
				.filter((column) => column.visibility !== false)
				.map((column) => (
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
			{actions.filter((action) => action.visibility !== false).length > 0 && (
				<td className="p-3 bg-white sticky end-0 group-hover:bg-neutral-50">
					<div className="flex items-center justify-center">
						<Button
							color="simple"
							size="small"
							className={`action-${uId} size-7 hover:bg-neutral-200`}
							icon={<ThreeDotsHorizontalIcon size={18} className="text-neutral-500" />}
						/>
						<Popup anchorSelect={`.action-${uId}`} place="right" className="grid p-2 min-w-40 w-max">
							{actions.map(({ text, color = "black-simple", icon, className, loading = false, onClick, disabled = false }, index) => (
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
	);
}

export default Row;
