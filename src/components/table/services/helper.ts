import type { ColumnProps } from "../Props";

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

export function filterDataSource<T>({ dataSource, search }: FilterDataSourceProps<T>): T[] {
	if (!search) return dataSource;

	return dataSource.filter((item: T) => {
		return Object.values(item as Record<string, unknown>).some((value) => String(value).toLowerCase().includes(search.toLowerCase()));
	});
}

export function searchDataSourceColumns<T>({ dataSource, columns, filters }: SearchDataSourceColumnsProps<T>): T[] {
	const columnsValues: { [key: string]: string | undefined } = {};
	for (const col of columns) columnsValues[col.name] = col.search;

	const filterValues = Object.fromEntries(
		Object.entries(filters)
			.filter(([key]) => key.startsWith("search-"))
			.map(([key, value]) => [key.slice("search-".length), value])
	);

	console.log(columnsValues);

	return dataSource.filter((item: T) => {
		for (const filter in filters) {
			if (columnsValues[filter] === "text") {
				if (item[filter].includes(filters[filter])) return true;
				return false;
			}
		}
	});

	console.log(filterValues);
	console.log(columnsValues);
}

interface SearchDataSourceColumnsProps<T> {
	columns: ColumnProps<T>[];
	dataSource: T[];
	filters: { [key: string]: string | boolean | string | T[] | null | number };
}

interface FilterDataSourceProps<T> {
	dataSource: T[];
	search: string;
}

interface SortDataSourceProps<T> {
	dataSource: T[];
	sort: string;
	sortDirection: "asc" | "desc";
}
