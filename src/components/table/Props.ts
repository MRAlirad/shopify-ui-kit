import type { ReactNode } from "react";
import type { PaginationProps } from "../Pagination";
import type { ButtonProps } from "../Button";

export interface TableProps<T> {
	columns: ColumnProps<T>[];
	dataSource: T[];
	pagination?: PaginationProps;
	loading?: boolean;
	// sortOptions: SortOptionProps[];
	filterOptions?: FilterOptionProps[];
	searchPanel?: boolean;
	actions?: ActionProps<T>[];
}

export interface RowProps<T> {
	columns: ColumnProps<T>[];
	id?: string | number;
	index: number;
	actions?: ActionProps<T>[];
	rowData: T;
}

export interface ColumnProps<T> {
	name: string;
	label: string;
	visibility?: boolean;
	className?: string;
	sort?: boolean;
	cellTemplate?: (row: T) => ReactNode;
}

export interface ActionProps<T> extends Omit<ButtonProps, "onClick"> {
	visibility?: boolean;
	onClick?: (row: T) => void;
}

export interface FilterSortProps {
	filterOptions?: FilterOptionProps[];
	searchPanel?: boolean;
}

export interface FilterOptionProps {
	value: string | number;
	label: string;
}
