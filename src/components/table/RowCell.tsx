import { useFormContext } from "react-hook-form";
import Checkbox from "../Checkbox";
import type { RowCellProps } from "./services/Props";
import { ArrowCaretLeftIcon } from "../icon";
import Button from "../Button";
import { useContext } from "react";
import TableContext from "./services/TableContext";

function RowCell<T>({ index, rowData }: RowCellProps<T>) {
	const { moreInfo, selectable, keyExpr } = useContext(TableContext);
	const rowKey = (rowData as Record<string, string | number>)[keyExpr];
	const { setValue, getValues, watch } = useFormContext();

	const handleMoreInfoClick = () => {
		// Toggle the more info row
		if (watch("moreInfo") === rowKey) setValue("moreInfo", null);
		else setValue("moreInfo", rowKey);
	};

	const handleSelectRow = () => {
		// Check if the row is already selected and if not, add it to the selected rows
		if (getValues("selectedRows").find((row: T) => (row as Record<string, string | number>)[keyExpr] === rowKey)) return;
		setValue("selectedRows", [...getValues("selectedRows"), rowData]);
	};

	const handleUnSelectRow = () => {
		// Remove the row from the selected rows
		setValue(
			"selectedRows",
			getValues("selectedRows").filter((row: T) => (row as Record<string, string | number>)[keyExpr] !== rowKey)
		);
	};

	return (
		<td className={`p-3 sticky start-0 bg-white`}>
			<div className="flex items-center">
				{selectable && <Checkbox name={`select-${rowKey}`} onCheck={handleSelectRow} onUncheck={handleUnSelectRow} />}

				{moreInfo && (
					<Button
						color="simple"
						size="small"
						icon={<ArrowCaretLeftIcon size={18} />}
						className={watch("moreInfo") === rowKey ? "-rotate-90" : ""}
						onClick={handleMoreInfoClick}
					/>
				)}

				<span className={!moreInfo && selectable ? "block ms-2" : ""}>{watch("currentPage") * watch("pageSize") - watch("pageSize") + index + 1}</span>
			</div>
		</td>
	);
}

export default RowCell;
