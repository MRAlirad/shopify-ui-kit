import { useEffect } from "react";
import { createPortal } from "react-dom";
import { useLockBodyScroll, useToggle } from "react-use";
import Button from "./Button";
import { CloseIcon, WarningCircleIcon } from "./icon";

const DeleteModal = ({ title, onClose, onDelete, isDeleting = false }: DeleteModalProps) => {
	const [locked, toggleLocked] = useToggle(false);
	useLockBodyScroll(locked);

	useEffect(() => {
		toggleLocked(true);
		return () => toggleLocked(false);
	}, [toggleLocked]);

	return createPortal(
		<div
			className="fixed inset-0 flex items-end sm:items-center justify-center bg-black/60 z-1500 backdrop-blur-sm"
			onClick={(e) => {
				if (e.target === e.currentTarget) onClose();
			}}
		>
			<div className="w-full sm:max-w-md bg-white max-h-full p-4 sm:rounded-lg overflow-hidden shadow animate-fadeInUp">
				<Button color="simple" size="small" icon={<CloseIcon size={20} />} onClick={onClose} className="text-neutral-500 ms-auto" />

				<div className="flex flex-col items-center gap-4 p-4 text-center">
					<WarningCircleIcon size="100" className="text-neutral-400" />

					<h3 className="text-lg text-neutral-700">{title}</h3>
					<p className="text-sm text-red-500">این کار غیر قابل بازگشت است!</p>

					<div className="flex items-center justify-center gap-4 flex-wrap">
						<Button color="red" text="بله، مطمئنم" size="medium" onClick={onDelete} loading={isDeleting} />
						<Button color="white" text="خیر، انصراف" size="medium" onClick={onClose} />
					</div>
				</div>
			</div>
		</div>,
		document.body
	);
};

interface DeleteModalProps {
	title: string;
	isDeleting: boolean;
	onClose: () => void;
	onDelete: () => void;
}

export default DeleteModal;
