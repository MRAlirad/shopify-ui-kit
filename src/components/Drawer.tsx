import { useEffect, type ReactNode } from "react";
import { createPortal } from "react-dom";
import classNames from "classnames";
import { useLockBodyScroll, useToggle } from "react-use";
import { Button } from ".";
import type { ButtonProps } from "./props";
import { CloseIcon } from "./icon";

const Drawer = ({ title = "", children, className = "", actions = [], onClose = () => {} }: DrawerProps) => {
	const [locked, toggleLocked] = useToggle(false);
	useLockBodyScroll(locked);

	useEffect(() => {
		toggleLocked(true);
		return () => toggleLocked(false);
	}, [toggleLocked]);

	return createPortal(
		<div
			className="modal fixed inset-0 flex justify-start bg-black/60 z-1000 backdrop-blur-sm"
			onClick={(e) => {
				if (e.target === e.currentTarget) onClose();
			}}
		>
			<div
				className={classNames({
					"grid overflow-hidden animate-fadeInRight": true,
					"h-screen w-full sm:w-96 bg-white": true,
					"grid-rows-[max-content_1fr_max-content]": !!actions.length,
					"grid-rows-[max-content_1fr]": actions.length === 0,
					[className]: className,
				})}
			>
				<div className="flex items-center justify-between gap-2 py-3 px-6 border-b border-neutral-200 bg-neutral-100">
					<h3 className="text-lg">{title}</h3>
					<Button color="simple" size="small" icon={<CloseIcon size={20} />} onClick={onClose} />
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

interface DrawerProps {
	title: string;
	children: ReactNode;
	actions?: ButtonProps[];
	className?: string;
	onClose: () => void;
}

export default Drawer;
