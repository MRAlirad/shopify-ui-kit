import classNames from "classnames";
import type { ColumnProps } from "./Props";
import { useSearchParams } from "react-router";
import { ArrowUpLongIcon } from "../icon";

function Column<T>({ name, label, visibility = true, sort = false, className = "" }: ColumnProps<T>) {
	const [searchParams, setSearchParams] = useSearchParams();

	if (!visibility) return;

	const handleSortClick = () => {
		if (!sort) return;
		const params: Record<string, string> = {};

		for (const [key, value] of searchParams.entries()) params[key] = value;

		if (params.sort === name && params.sortDirection === "desc") {
			searchParams.delete("sort");
			searchParams.delete("sortDirection");
			setSearchParams(searchParams);
		} else {
			const sortParams: Record<string, string> = {
				sort: name,
				sortDirection: searchParams.get("sort") !== name ? "asc" : searchParams.get("sortDirection") === "asc" ? "desc" : "asc",
			};

			setSearchParams({ ...params, ...sortParams });
		}
	};

	return (
		<th
			className={classNames({
				"bg-neutral-100 text-start px-6 py-3": true,
				"cursor-pointer select-none": sort,
				[className]: className,
			})}
			onClick={handleSortClick}
		>
			<div className="min-w-max flex items-center gap-0">
				<span>{label}</span>
				{sort && searchParams.get("sort") === name && <ArrowUpLongIcon size={16} className={searchParams.get("sortDirection") === "asc" ? "rotate-180" : ""} />}
			</div>
		</th>
	);
}

export default Column;
