import type { ReactNode } from "react";
import type { ChartType } from "../utils/enums";

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

export interface BadgeProps {
	variant?: 'primary' | 'secondary' | 'outline';
	color?: "green" | "blue" | "neutral" | "red" | "yellow" | "purple";
	text: string;
	pill?: boolean;
	size?: "small" | "medium" | "large";
	className?: string;
}

export interface ButtonProps {
	color?:
		| "black"
		| "white"
		| "simple"
		| "red"
		| "green"
		| "purple"
		| "blue"
		| "black-outline"
		| "green-outline"
		| "purple-outline"
		| "red-outline"
		| "blue-outline"
		| "black-simple"
		| "green-simple"
		| "purple-simple"
		| "red-simple"
		| "blue-simple";
	size?: "small" | "medium" | "large" | "icon";
	text?: string;
	icon?: ReactNode;
	type?: "submit" | "button";
	fullWidth?: boolean;
	disabled?: boolean;
	loading?: boolean;
	className?: string;
	onClick?: () => void;
	hint?: string;
}

export interface CardProps {
	title?: string;
	className?: string | { wrapper?: string; title?: string; content?: string };
	icon?: ReactNode;
	children: ReactNode;
	text?: string;
	action?: ButtonProps; // Button properties
	leftComponent?: ReactNode;
	blueTitleBg?: boolean;
	badge?: BadgeProps;
	loading?: boolean;
}

export interface ChartProps {
	id: string;
	type: ChartType;
	labels: string[];
	loading?: boolean;
	datasets: {
		label?: string;
		data: (number | null)[];
		borderColor?: string;
		backgroundColor?: string;
		tension?: number; // 0 to 1, 0 is straight line, 1 is curved line
	}[];
	options?: {
		title?: string;
		hasTooltip?: boolean;
		hasLegend?: boolean;
		subtitle?: string;
		xAxisLabel?: string;
		yAxisLabel?: string;
	};
}

export interface CheckboxProps {
	name: string;
	label?: string;
	className?: string;
	disabled?: boolean;
	readOnly?: boolean;
	description?: string;
	onChange?: (value?: boolean) => void;
	onCheck?: () => void;
	onUncheck?: () => void;
}