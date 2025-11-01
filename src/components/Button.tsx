import type { ReactNode } from "react";
import classNames from "classnames";
import { LoaderIcon } from "./icon";
import { Link } from "react-router";
import { generateRandomString } from "../helpers/String";
import Popup from "./Popup";

const Button = ({
	color = "black",
	size = "medium",
	text = "",
	to = "",
	icon,
	type = "button",
	fullWidth = false,
	disabled = false,
	loading = false,
	className = "",
	onClick = () => {},
	hint = "",
}: ButtonProps) => {
	const Component = to ? Link : "button";
	const uId = generateRandomString();

	return (
		<Component
			className={classNames({
				[`btn-${uId}`]: hint,
				btn: true,
				[color]: true,
				[size]: true,
				disabled: disabled || loading,
				"w-full": fullWidth,
				[className]: className,
			})}
			disabled={disabled || loading}
			type={type}
			to={to}
			onClick={onClick}
		>
			<div className="flex items-center justify-center gap-2">
				{loading && <LoaderIcon size="20" className="animate-spin" />}
				{icon && !loading && icon}
				{text && <span>{text}</span>}
			</div>

			{hint && (
				<Popup anchorSelect={`.btn-${uId}`} place="top" className="!p-1 !w-max !rounded-md" openOnClick={false} clickable={false} portal>
					<span className="text-xs text-neutral-700">{hint}</span>
				</Popup>
			)}
		</Component>
	);
};

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
	to?: string;
	fullWidth?: boolean;
	disabled?: boolean;
	loading?: boolean;
	className?: string;
	onClick?: () => void;
	hint?: string;
}

export default Button;
