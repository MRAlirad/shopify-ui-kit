import type { ReactNode } from "react";
import type { PaginationProps } from "../Pagination";
import type { ButtonProps } from "../Button";

export interface TableProps<T> {
	columns: ColumnProps<T>[];
	dataSet: T[];
	pagination?: PaginationProps;
    loading?: boolean;
	// sortOptions: SortOptionProps[];
	// filterOptions: FilterOptionProps[];
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
    cellTemplate?: (row: T) => ReactNode;
}

export interface ActionProps<T> extends Omit<ButtonProps, "onClick"> {
	visibility?: boolean;
	onClick?: (row: T) => void;
}