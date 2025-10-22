import classNames from "classnames";
import type { ColumnProps } from "./Props";

function Column<T>({ name, label, visibility = true, className = "" }: ColumnProps<T>) {
	if (!visibility) return;

	return (
		<th
			className={classNames({
				"bg-neutral-100 text-start px-6 py-3": true,
				[className]: className,
			})}
            onClick={() => console.log(name)}
		>
			<div className="min-w-max">
				{label}
			</div>
		</th>
	);
};

export default Column;
