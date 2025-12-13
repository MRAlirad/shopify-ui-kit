import { useEffect, type ReactNode } from "react";
import { createPortal } from "react-dom";
import classNames from "classnames";
import { useLockBodyScroll, useToggle } from "react-use";
import { Button } from ".";
import type { ButtonProps } from "./props";
import { CloseIcon, ArrowRightIcon } from "./icon";

const Modal = ({ title, children, actions = [], className = "", backBtn = false, width = "2xl", onBack = () => {}, onClose = () => {} }: ModalProps) => {
	const [locked, toggleLocked] = useToggle(false);
	useLockBodyScroll(locked);

	//! Lock body scroll when modal is open
	useEffect(() => {
		toggleLocked(true);
		return () => toggleLocked(false);
	}, [toggleLocked]);

	//! Handle escape key to close modal
	useEffect(() => {
		const handleEscape = (event: KeyboardEvent) => {
			if (event.key === "Escape") onClose();
		};

		document.addEventListener("keydown", handleEscape);

		return () => document.removeEventListener("keydown", handleEscape);
	}, [onClose]);

	const widthClass = {
		sm: "md:max-w-sm",
		md: "md:max-w-md",
		lg: "md:max-w-lg",
		xl: "md:max-w-xl",
		"2xl": "md:max-w-2xl",
		"3xl": "md:max-w-3xl",
		"4xl": "md:max-w-4xl",
		"5xl": "md:max-w-5xl",
		"6xl": "md:max-w-6xl",
		"7xl": "md:max-w-7xl",
	};

	return createPortal(
		<div
			className="modal fixed inset-0 flex items-end md:items-center justify-center bg-black/60 z-1000 backdrop-blur-sm md:px-4"
			onClick={(e) => {
				if (e.target === e.currentTarget) onClose();
			}}
		>
			<div
				className={classNames({
					"grid overflow-hidden animate-fadeInUp": true,
					"w-full h-max max-h-[95vh] bg-white md:rounded-xl": true,
					"grid-rows-[max-content_1fr_max-content]": !!actions.length,
					"grid-rows-[max-content_1fr]": actions.length === 0,
					[widthClass[width]]: width,
					[className]: className,
				})}
			>
				<div className="flex items-center gap-2 py-3 px-6 border-b border-neutral-200 bg-neutral-100">
					{backBtn && <Button color="simple" size="small" icon={<ArrowRightIcon size={18} />} onClick={onBack} />}
					<h3 className="text-lg">{title}</h3>
					<Button color="simple" size="small" className="ms-auto" icon={<CloseIcon size={20} />} onClick={onClose} />
				</div>

				<div className="overflow-x-hidden overflow-y-auto p-4">{children}</div>

				{actions.length > 0 && (
					<div className="actions flex items-center flex-row-reverse flex-wrap gap-1.5 w-full py-4 px-6 border-t border-neutral-200 bg-neutral-50">
						{actions.map((action, index) => (
							<Button key={index} size="medium" {...action} />
						))}
					</div>
				)}
			</div>
		</div>,
		document.body
	);
};

interface ModalProps {
	title: string;
	children: ReactNode;
	actions?: ButtonProps[];
	className?: string;
	backBtn?: boolean;
	width?: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl";
	onBack?: () => void;
	onClose: () => void;
}

export default Modal;
