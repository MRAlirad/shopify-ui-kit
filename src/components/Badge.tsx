import classNames from "classnames";
import type { BadgeProps } from "./props";

const Badge = ({ variant = "primary", color = "blue", text, pill = true, size = "medium", className = "" }: BadgeProps) => {
	return (
		<span
			className={classNames({
				"badge flex gap-1 items-center w-max h-max outline-none": true,
				"rounded-md": !pill,
				"rounded-full": pill,
				[variant]: true,
				[color]: true,
				[size]: true,
				[className]: className,
			})}
		>
			{text}
		</span>
	);
};

export default Badge;
