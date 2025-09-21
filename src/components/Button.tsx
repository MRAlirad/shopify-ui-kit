import type { ReactNode } from "react";
import classNames from "classnames";

export interface Props {
	color?: 'black'| 'white'| 'simple'| 'red'| 'green'| 'blue'| 'green-outline'| 'red-outline'| 'blue-outline';
	size?: 'small' | 'medium' | 'large' | 'icon';
	text?: string;
	to?: string;
	icon?: ReactNode;
	type?: 'submit' | 'button';
	fluid?: boolean;
	disabled?: boolean;
	loading?: boolean;
	className?: string;
	onClick?: () => void;
}

const Button = ({
	color = "black",
	text = "",
	icon,
	size = "medium",
	fluid = false,
	disabled = false,
	loading = false,
	type = "button",
	className = "",
	onClick = () => {},
}: Props) => {
	return (
		<button
			className={classNames({
				btn: true,
				[color]: true,
				[size]: true,
				disabled: disabled || loading,
				"w-full": fluid,
				[className]: className,
			})}
			disabled={disabled || loading}
			type={type}
			onClick={onClick}
		></button>
	);
};

export default Button;
