import type { ReactNode } from "react";
import classNames from "classnames";
import { LoaderIcon } from "./icon";

const Button = ({
	color = "black",
	size = "medium",
	text = "",
	icon,
	type = "button",
	fullWidth = false,
	disabled = false,
	loading = false,
	className = "",
	onClick = () => {},
}: ButtonProps) => {
	return (
		<button
			className={classNames({
				btn: true,
				[color]: true,
				[size]: true,
				disabled: disabled || loading,
				"w-full": fullWidth,
				[className]: className,
			})}
			disabled={disabled || loading}
			type={type}
			onClick={onClick}
		>
			<div className="flex items-center justify-center gap-2">
				{loading && <LoaderIcon size='20' className="animate-spin" />}
				{icon && !loading && icon}
				{text && <span>{text}</span>}
			</div>
		</button>
	);
};

export interface ButtonProps {
	color?: "black" | "white" | "simple" | "red" | "green" | "blue" | "black-outline"| "green-outline" | "red-outline" | "blue-outline" | "black-simple"| "green-simple" | "red-simple" | "blue-simple";
	size?: "small" | "medium" | "large" | "icon";
	text?: string;
	icon?: ReactNode;
	type?: "submit" | "button";
	fullWidth?: boolean;
	disabled?: boolean;
	loading?: boolean;
	className?: string;
	onClick?: () => void;
}

export default Button;
