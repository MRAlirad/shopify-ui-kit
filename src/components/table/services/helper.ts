import type { ColumnProps } from "./Props";

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
	// Extract filter values for columns (filters are stored as "search-{columnName}")
	console.log('sdf')
	const filterValues: Record<string, string | number> = {};
	const columnSearchTypes: Record<string, "text" | "select" | "date" | "number" | undefined> = {};

	// Build a map of column names to their search types
	for (const col of columns) {
		if (col.search) {
			columnSearchTypes[col.name] = col.search;
			const filterKey = `search-${col.name}`;
			const filterValue = filters[filterKey];
			// Only include non-empty filter values
			if (filterValue !== undefined && filterValue !== null && filterValue !== "") {
				filterValues[col.name] = filterValue as string | number;
			}
		}
	}

	// If no filters are active, return all data
	if (Object.keys(filterValues).length === 0) {
		return dataSource;
	}

	// Filter dataSource: all column filters must match (AND logic)
	return dataSource.filter((item: T) => {
		const itemRecord = item as Record<string, unknown>;

		// Check each active filter
		for (const [columnName, filterValue] of Object.entries(filterValues)) {
			const searchType = columnSearchTypes[columnName];
			const itemValue = itemRecord[columnName];

			console.log(searchType, itemValue, filterValue);
			if (searchType === "text") {
				// Text search: case-insensitive substring match
				const itemStr = itemValue == null ? "" : String(itemValue).toLowerCase();
				const filterStr = String(filterValue).toLowerCase();
				if (!itemStr.includes(filterStr)) {
					return false; // This filter doesn't match, exclude item
				}
			} else if (searchType === "select") {
				// Select search: exact match
				if (itemValue !== filterValue) {
					return false; // This filter doesn't match, exclude item
				}
			} else if (searchType === "number") {
				// Number search: exact numeric match
				const itemNum = typeof itemValue === "number" ? itemValue : Number(itemValue);
				const filterNum = typeof filterValue === "number" ? filterValue : Number(filterValue);
				if (isNaN(itemNum) || isNaN(filterNum) || itemNum !== filterNum) {
					return false; // This filter doesn't match, exclude item
				}
			} else if (searchType === "date") {
				// Date search: compare date values (can be extended for date range, etc.)
				const itemDate = itemValue instanceof Date ? itemValue : new Date(itemValue as string | number);
				const filterDate = typeof filterValue === "string" || typeof filterValue === "number" 
					? new Date(filterValue) 
					: new Date(String(filterValue));
				
				// Compare dates by year, month, day (ignoring time)
				const itemDateStr = itemDate.toISOString().split("T")[0];
				const filterDateStr = filterDate.toISOString().split("T")[0];
				
				if (isNaN(itemDate.getTime()) || isNaN(filterDate.getTime()) || itemDateStr !== filterDateStr) {
					return false; // This filter doesn't match, exclude item
				}
			}
		}

		// All filters matched
		return true;
	});
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
