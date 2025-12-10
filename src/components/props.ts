import type { ButtonProps } from "./Button";

export interface AccordionProps {
	list: { question: string; answer: string }[];
	title?: string;
	openFirstItem?: boolean;
}

export interface AccordionItemProps {
	question: string;
	answer: string;
	isActive: boolean;
	activeItem: number | null;
	onClick: () => void;
}

export interface AlertProps {
	color: "info" | "success" | "warning" | "error";
	title?: string;
	text?: string;
	items?: string[];
	actions?: ButtonProps[];
	accentBorder?: boolean;
	className?: string;
    onDismiss?: () => void;
}
