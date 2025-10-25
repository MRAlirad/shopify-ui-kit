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
	selectable?: boolean;
	moreInfo?: boolean;
	actions?: ActionProps<T>[];
}

export interface RowProps<T> {
	columns: ColumnProps<T>[];
	id?: string | number;
	index: number;
	selectable?: boolean;
	actions?: ActionProps<T>[];
	rowData: T;
	moreInfo?: boolean;
}

export interface ColumnProps<T> {
	name: string;
	label: string;
	visibility?: boolean;
	className?: string;
	sort?: boolean;
	cellTemplate?: (row: T) => ReactNode;
}

export interface RowCellProps<T> {
	selectable?: boolean;
	index: number;
	moreInfo?: boolean;
	rowData: T;
}

export interface SelectedRowsModalProps<T> {
	columns: ColumnProps<T>[];
	onClose: () => void;
}

export interface ActionProps<T> extends Omit<ButtonProps, "onClick"> {
	visibility?: boolean;
	onClick?: (row: T) => void;
}

export interface FilterSearchProps<T> {
	filterOptions?: FilterOptionProps[];
	columns: ColumnProps<T>[];
	searchPanel?: boolean;
	selectable?: boolean;
}

export interface FilterOptionProps {
	value: string | number;
	label: string;
}
