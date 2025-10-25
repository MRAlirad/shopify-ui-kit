import { useFormContext } from "react-hook-form";
import Checkbox from "../Checkbox";
import type { RowCellProps } from "./Props";
import { ArrowCaretLeftIcon } from "../icon";
import Button from "../Button";

function RowCell<T>({ selectable, index, rowData, moreInfo = false }: RowCellProps<T>) {
	const { setValue, getValues, watch } = useFormContext();

	const handleMoreInfoClick = () => {
		if(watch("moreInfo") === (rowData as { id: string | number }).id) {
			setValue("moreInfo", null);
		} else {
			setValue("moreInfo", (rowData as { id: string | number }).id);
		}
	};

	return (
		<td className="p-3 bg-white sticky start-0 group-hover:bg-neutral-50">
			<div className="flex items-center">
			{selectable && (
					<Checkbox
						name={`select-${(rowData as { id: string | number }).id}`}
						className="w-4 h-4"
						onCheck={() => {
							if(getValues("selectedRows").find((row: T) => (row as { id: string | number }).id === (rowData as { id: string | number }).id))
								return;
							setValue("selectedRows", [...getValues("selectedRows"), rowData]);
						}}
						onUncheck={() => {
							setValue("selectedRows", getValues("selectedRows").filter((row: T) => (row as { id: string | number }).id !== (rowData as { id: string | number }).id));
						}}
					/>
				)}
				{moreInfo && (
					<Button
						color="simple"
						size="small"
						icon={<ArrowCaretLeftIcon size={18} />}
						className={watch("moreInfo") === (rowData as { id: string | number }).id ? "-rotate-90" : ""}
						onClick={handleMoreInfoClick}
					/>
				)}

				<span className={!moreInfo && selectable ? "block ms-2" : ""}>{index + 1}</span>
			</div>
		</td>
	);
}

export default RowCell;
