import classNames from "classnames";

const Divider = ({ direction = "horizontal", className = "" }: DividerProps) => {
	return (
		<hr
			className={classNames({
				"bg-neutral-200 border-0": true,
				"h-px w-full": direction === "horizontal",
				"w-px h-full": direction === "vertical",
				[className]: className,
			})}
		/>
	);
};

interface DividerProps {
	direction?: "vertical" | "horizontal";
	className?: string;
}

export default Divider;
