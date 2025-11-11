import { Column } from "devextreme-react/data-grid";
import Button, { type ButtonProps } from "../Button";
import Popup from "../Popup";
import { ThreeDotsHorizontalIcon } from "../icon";

const ActionCell = <T,>({ keyExpr, actions = [] }: { keyExpr: string; actions: ActionProps<T>[] }) => {
	if (actions.filter((action: ActionProps<T>) => action.visibility !== false).length === 0) return null;

	return (
		<Column
			caption=""
			dataField="َAction"
			width={50}
			alignment="center"
			allowSorting={false}
			allowFiltering={false}
			allowReordering={false}
			fixed
			fixedPosition="left"
			cellRender={(row) => (
				<div className="flex items-center justify-center">
					<Button
						color="simple"
						size="small"
						className={`action-${row.data[keyExpr]} size-7 hover:bg-neutral-200`}
						icon={<ThreeDotsHorizontalIcon size={18} className="text-neutral-500" />}
					/>

					<Popup anchorSelect={`.action-${row.data[keyExpr]}`} place="right" className="grid p-2 min-w-40 w-max" portal>
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
								className={`py-1.5! justify-start ${className}`}
								onClick={() => onClick?.(row.data)}
							/>
						))}
					</Popup>
				</div>
			)}
		/>
	);
};

export interface ActionProps<T> extends Omit<ButtonProps, "onClick"> {
	visibility?: boolean;
	onClick?: (row: T) => void;
}

export default ActionCell;
