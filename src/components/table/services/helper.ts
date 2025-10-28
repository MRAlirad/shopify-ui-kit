export function sortDataSource<T>({ dataSource, sort, sortDirection }: SortDataSourceProps<T>): T[] {
	if (!sort) return dataSource;

	const sortedUsers = [...dataSource];

	sortedUsers.sort((a, b) => {
		const aValue = (a as Record<string | number, unknown>)[sort];
		const bValue = (b as Record<string | number, unknown>)[sort];
		const aStr = aValue == null ? "" : String(aValue);
		const bStr = bValue == null ? "" : String(bValue);

		if (typeof aValue === "number" && typeof bValue === "number") {
			if (sortDirection === "asc") return aValue - bValue;
			else return bValue - aValue;
		} else if (typeof aValue === "string" && typeof bValue === "string") {
			if (sortDirection === "asc") return aStr.localeCompare(bStr);
			else return bStr.localeCompare(aStr);
		}

		// For other types or mismatched types, ensure a number is always returned
		return 0;
	});

	return sortedUsers;
}

interface SortDataSourceProps<T> {
	dataSource: T[];
	sort: string;
	sortDirection: "asc" | "desc";
}
