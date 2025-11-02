import { useContext } from "react";
import Popup from "../Popup";
import Button from "../Button";
import { ThreeDotsHorizontalIcon } from "../icon";
import TableContext from "./services/TableContext";
import { generateRandomString } from "../../helpers/String";
import type { ActionProps } from "./services/Props";

function ActionCell<T>({ rowData }: { rowData: T }) {
	const { actions } = useContext(TableContext);
	const uId = generateRandomString();

	if (actions.filter((action: ActionProps<T>) => action.visibility !== false).length === 0) return;

	return (
		<td className="p-3 bg-white sticky end-0 group-hover:bg-neutral-50">
			<div className="flex items-center justify-center">
				<Button
					color="simple"
					size="small"
					className={`action-${uId} size-7 hover:bg-neutral-200`}
					icon={<ThreeDotsHorizontalIcon size={18} className="text-neutral-500" />}
				/>
				<Popup anchorSelect={`.action-${uId}`} place="right" className="grid p-2 min-w-40 w-max" portal>
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
	);
}

export default ActionCell;
