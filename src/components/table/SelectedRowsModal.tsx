import Modal from "../Modal";
import Table from "./Table";
import { useFormContext } from "react-hook-form";
import type { ColumnProps, SelectedRowsModalProps } from "./services/Props";
import { TrashIcon } from "../icon";
import { useContext } from "react";
import TableContext from "./services/TableContext";

function SelectedRowsModal<T>({ onClose }: SelectedRowsModalProps) {
	const { columns } = useContext(TableContext);
	const { setValue, getValues, watch } = useFormContext();

	const deleteSelectedRows = () => {
		getValues("selectedRows").forEach((value: T) => {
			setValue(`select-${(value as { id: string | number }).id}`, false);
		});
		setValue("selectedRows", []);
		onClose();
	};

	return (
		<Modal
			title="انتخاب شده ها"
			onClose={onClose}
			width="4xl"
			actions={[
				{
					text: "حذف همه از لیست",
					color: "red",
					icon: <TrashIcon size={18} />,
					onClick: deleteSelectedRows,
					// loading: true,
					disabled: watch("selectedRows").length === 0,
				},
			]}
		>
			<Table<T>
				key={watch("selectedRows").length}
				columns={columns.map((column: ColumnProps<T>) => ({ ...column, visibility: true }))}
				dataSource={watch("selectedRows")}
				actions={[
					{
						text: "حذف از لیست",
						color: "red-simple",
						icon: <TrashIcon size={18} />,
						onClick: (rowData) => {
							setValue(
								"selectedRows",
								getValues("selectedRows").filter((row: T) => (row as { id: string | number }).id !== (rowData as { id: string | number }).id)
							);
							setValue(`select-${(rowData as { id: string | number }).id}`, false);
						},
					},
				]}
			/>
		</Modal>
	);
}

export default SelectedRowsModal;
