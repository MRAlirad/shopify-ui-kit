import { useFormContext } from "react-hook-form";
import Checkbox from "../Checkbox";
import type { RowCellProps } from "./Props";

function RowCell<T>({ selectable, index, rowData }: RowCellProps<T>) {
	const { setValue, getValues } = useFormContext();

	return (
		<td className="p-3 bg-white sticky start-0 group-hover:bg-neutral-50">
			<div className="flex items-center gap-1">
				{selectable && (
					<Checkbox
						name={`select-${(rowData as { id: string | number }).id}`}
						label=""
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
				<span>{index + 1}</span>
			</div>
		</td>
	);
}

export default RowCell;
