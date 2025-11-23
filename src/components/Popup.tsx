import { Tooltip } from "react-tooltip";
import classNames from "classnames";
import { createPortal } from "react-dom";

const Popup = ({
	anchorSelect,
	children,
	className = "",
	defaultIsOpen = false,
	offset = 10,
	place = "bottom",
	fullWidh = false,
	position,
	clickable = true,
	openOnClick = true,
	portal = true,
}: PopupProps) => {
	const tooltip = (
		<Tooltip
			{...{
				anchorSelect,
				defaultIsOpen,
				offset,
				place,
				position,
				clickable,
				openOnClick,
				opacity: 1,
			}}
			disableStyleInjection={true}
			className={classNames({
				"bg-white text-black text-xs shadow-xl rounded-xl border border-neutral-200 z-1000": true,
				"w-full!": fullWidh,
				[className]: className,
			})}
		>
			{children}
		</Tooltip>
	);

	if (portal) return createPortal(tooltip, document.body);

	return tooltip;
};

interface PopupProps {
	anchorSelect: string;
	children: React.ReactNode;
	className?: string;
	fullWidh?: boolean;
	defaultIsOpen?: boolean;
	offset?: number;
	clickable?: boolean;
	openOnClick?: boolean;
	portal?: boolean;
	place?: "top" | "top-start" | "top-end" | "right" | "right-start" | "right-end" | "bottom" | "bottom-start" | "bottom-end" | "left" | "left-start" | "left-end";
	position?: { x: number; y: number };
}

export default Popup;
