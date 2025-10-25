import type { ReactNode } from "react";
import type { PaginationProps } from "../Pagination";
import type { ButtonProps } from "../Button";

export interface TableProps<T> {
	columns: ColumnProps<T>[];
	dataSource: T[];
	pagination?: PaginationProps;
	loading?: boolean;
	filterOptions?: FilterOptionProps[];
	searchPanel?: boolean;
	selectable?: boolean;
	moreInfo?: boolean;
	actions?: ActionProps<T>[];
}

export interface RowProps<T> {
	index: number;
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

export interface RowCellProps<T> {
	index: number;
	rowData: T;
}

export interface SelectedRowsModalProps {
	onClose: () => void;
}

export interface ActionProps<T> extends Omit<ButtonProps, "onClick"> {
	visibility?: boolean;
	onClick?: (row: T) => void;
}
export interface FilterOptionProps {
	value: string | number;
	label: string;
}
