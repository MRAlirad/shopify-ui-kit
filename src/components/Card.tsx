import type { ReactNode } from "react";
import Button, { type ButtonProps } from "./Button";
import { Icon } from "./icon";

const Card = ({ title, icon, text, className = "", children, action }: CardProps) => {
	return (
		<div className={`card grid gap-4 px-6 py-4 h-max ${className}`}>
			{(title || action || text) && (
				<div className="grid grid-cols-[1fr_max-content] items-center gap-1">
					<div className="grid grid-cols-[max-content_1fr] items-center gap-x-2 gap-y-1">
						{icon && <Icon size="20">{icon}</Icon>}
						<h3 className="text-neutral-900 text-base font-bold">{title}</h3>
						{text && <p className="col-span-2 text-neutral-500 text-xs line-clamp-1">{text}</p>}
					</div>
					{action && <Button size="small" color="simple" {...action} />}
				</div>
			)}

			{children}
		</div>
	);
};

interface CardProps {
	title?: string;
	className?: string;
	icon?: ReactNode;
	children: ReactNode;
	text?: string;
	action?: ButtonProps; // Button properties
}

export default Card;
