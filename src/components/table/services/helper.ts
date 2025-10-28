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
    const columnsValues = columns.map((column: ColumnProps<T>) => column.name.toLowerCase());

    console.log(columnsValues)

    // return dataSource.filter((item: T) => {
    //     return columnsValues.some((columnValue) => String(item[columnValue as keyof T]).toLowerCase().includes(search.toLowerCase()));
    // });
}

interface SearchDataSourceColumnsProps<T> {
	columns: ColumnProps<T>[];
	dataSource: T[];
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
