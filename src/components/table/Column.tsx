import classNames from "classnames";
import type { ColumnProps } from "./Props";
import { useSearchParams } from "react-router";

function Column<T>({ name, label, visibility = true, sort = false, className = "" }: ColumnProps<T>) {
	const [searchParams, setSearchParams] = useSearchParams();

	if (!visibility) return;

	return (
		<th
			className={classNames({
				"bg-neutral-100 text-start px-6 py-3": true,
                'cursor-pointer select-none': sort,
				[className]: className,
			})}
			onClick={() => {
                if(!sort) return;
                console.log(name);
            }}
		>
			<div className="min-w-max">{label}</div>
		</th>
	);
}

export default Column;
