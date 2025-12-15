import { type ReactNode } from "react";
import { IconContext } from "react-icons";

const Icon = ({ children, color = "inherit", className = "", size = "18" }: IconProps) => {
	return (
		<IconContext.Provider value={{ size: size }}>
			<div className={`flex text-neutral-900 dark:text-white ${color} ${className}`}>{children}</div>
		</IconContext.Provider>
	);
};

interface IconProps {
	children: ReactNode;
	color?: string;
	className?: string;
	size?: string;
}

export default Icon;
