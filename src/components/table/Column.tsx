import classNames from "classnames";
import { useFormContext } from "react-hook-form";
import type { ColumnProps } from "./services/Props";
import { ArrowUpLongIcon } from "../icon";

function Column<T>({ name, label, visibility = true, sort = false, className = "" }: ColumnProps<T>) {
	const { watch, setValue, getValues } = useFormContext();

	const handleSortClick = () => {
		if (!sort) return;

		if (getValues("sort") === name && getValues("sortDirection") === "desc") {
			setValue("sort", "");
			setValue("sortDirection", "");
		} else {
			setValue("sort", name);
			setValue("sortDirection", watch("sort") !== name ? "asc" : watch("sortDirection") === "asc" ? "desc" : "asc");
		}
	};

	if (!visibility) return;

	if (watch(`display-${name}`) === false) return;

	return (
		<th
			className={classNames({
				"bg-white text-start px-6 py-3 select-none": true,
				"cursor-pointer": sort,
				[className]: className,
			})}
			onClick={handleSortClick}
		>
			<div className="min-w-max flex items-center gap-0">
				<span>{label}</span>
				{sort && watch("sort") === name && <ArrowUpLongIcon size={16} className={watch("sortDirection") === "asc" ? "rotate-180" : ""} />}
			</div>
		</th>
	);
}

export default Column;
