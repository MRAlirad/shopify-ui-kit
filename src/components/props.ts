import type { ReactNode } from "react";

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