import Modal from "../Modal";
import Table from "./Table";
import { useFormContext } from "react-hook-form";
import type { ColumnProps, SelectedRowsModalProps } from "./services/Props";
import { TrashIcon } from "../icon";
import { useContext } from "react";
import TableContext from "./services/TableContext";

function SelectedRowsModal<T>({ onClose }: SelectedRowsModalProps) {
	const {id, columns, keyExpr } = useContext(TableContext);
	const { setValue, getValues, watch } = useFormContext();

	const deleteSelectedRows = () => {
		// deselect the checkbox of the selected rows
		getValues("selectedRows").forEach((value: T) => {
			const rowKey = (value as Record<string, string | number>)[keyExpr || "id"];
			setValue(`select-${rowKey}`, false);
		});
		// clear the selected rows
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
				id={`selected-rows-table-${id}`}
				keyExpr={keyExpr || "id"}
				key={watch("selectedRows").length}
				columns={columns.map((column: ColumnProps<T>) => ({ ...column, visibility: true }))}
				dataSource={watch("selectedRows")}
				actions={[
					{
						text: "حذف از لیست",
						color: "red-simple",
						icon: <TrashIcon size={18} />,
						onClick: (rowData) => {
							const rowKey = (rowData as Record<string, string | number>)[keyExpr];
							setValue(
								"selectedRows",
								getValues("selectedRows").filter((row: T) => (row as Record<string, string | number>)[keyExpr] !== rowKey)
							);
							setValue(`select-${rowKey}`, false);
						},
					},
				]}
			/>
		</Modal>
	);
}

export default SelectedRowsModal;
