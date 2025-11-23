import classNames from "classnames";

const Badge = ({ text, color = "blue", size = "medium", className = '' }: BadgeProps) => {
	return (
		<span
			className={classNames({
				badge: true,
				[color]: true,
				[size]: true,
				[className]: className,
			})}
		>
			{text}
		</span>
	);
};

export interface BadgeProps {
	text: string;
	color?: "green" | "blue" | "neutral" | "red" | "yellow" | "purple";
	size?: "small" | "medium" | "large";
	className?: string;
}

export default Badge;
