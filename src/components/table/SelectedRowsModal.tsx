import Modal from "../Modal";
import Table from "./Table";
import { useFormContext } from "react-hook-form";
import type { SelectedRowsModalProps } from "./Props";
import { TrashIcon } from "../icon";

function SelectedRowsModal<T>({ columns, onClose }: SelectedRowsModalProps<T>) {
	const { setValue, getValues, watch } = useFormContext();

    const deleteSelectedRows = () => {
        getValues('selectedRows').forEach((value: T) => {
            setValue(`select-${(value as { id: string | number }).id}`, false);
        });
        setValue("selectedRows", []);
        onClose();
    }

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
				columns={columns.map((column) => ({ ...column, visibility: true, sort: false }))}
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
