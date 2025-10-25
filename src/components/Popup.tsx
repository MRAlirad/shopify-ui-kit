import { Tooltip } from "react-tooltip";
import classNames from "classnames";
import { createPortal } from "react-dom";

const Popup = ({ anchorSelect, children, className = "", defaultIsOpen = false, offset = 10, place = "bottom", fullWidh = false, position }: PopupProps) => {
	return createPortal(
		<Tooltip
			{...{
				anchorSelect,
				defaultIsOpen,
				offset,
				place,
				position,
				clickable: true,
				opacity: 1,
				openOnClick: true,
			}}
			disableStyleInjection={true}
			className={classNames({
				"!bg-white !text-black !text-xs !shadow-xl !rounded-xl !border !border-neutral-200 z-[2000]": true,
				"!w-full": fullWidh,
				[className]: className,
			})}
		>
			{children}
		</Tooltip>,
		document.body
	);
};

interface PopupProps {
	anchorSelect: string;
	children: React.ReactNode;
	className?: string;
	fullWidh?: boolean;
	defaultIsOpen?: boolean;
	offset?: number;
	place?: "top" | "top-start" | "top-end" | "right" | "right-start" | "right-end" | "bottom" | "bottom-start" | "bottom-end" | "left" | "left-start" | "left-end";
	position?: { x: number; y: number };
}

export default Popup;
