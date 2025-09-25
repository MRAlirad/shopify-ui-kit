import type { ReactNode } from "react";
import Button from "./Button";
import type { ButtonProps } from "./Button";

const Card = ({ title, className = "", children, action }: CardProps) => {
	return (
		<div className={`card grid gap-4 px-6 py-4 h-max ${className}`}>
			{(title || action) && (
				<div className="flex items-center justify-between">
					<h3 className="text-neutral-900 text-base font-bold">{title}</h3>
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
	children: ReactNode;
	action?: ButtonProps; // Button properties
}

export default Card;
