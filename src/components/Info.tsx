import classNames from "classnames";

const Info = ({ title, value, size = "medium", color = "simple", className = "" }: InfoProps) => {
	return (
		<div className={classNames("info grid grid-rows-[max-content] gap-1", color, `${size === "medium" ? "p-3" : "p-1.5"}`, className)}>
			<span className="text-xs text-neutral-500">{title}</span>
			<span className="value text-sm font-bold">{value}</span>
		</div>
	);
};

interface InfoProps {
	title: string;
	value: string;
	size?: "small" | "medium";
	color?: "green" | "red" | "blue" | "neutral" | "simple";
	className?: string;
}

export default Info;
