import type { ReactNode } from "react";
import type { PaginationProps } from "../Pagination";
import type { ButtonProps } from "../Button";

export interface TableProps<T> {
	type?: 'local' | 'remote';
	columns: ColumnProps<T>[];
	dataSource: T[];
	pagination?: PaginationProps;
	loading?: boolean;
	searchPanel?: boolean;
	selectable?: boolean;
	moreInfo?: boolean;
	actions?: ActionProps<T>[];
	className?: string;
	allowedPageSizes?: number[];
	columnHidingEnabled?: boolean;
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
	search?: 'text' | 'select' | 'date' | 'number';
	hint?: boolean;
	searchOptions?: FilterOptionProps[];
	allowHiding?: boolean;
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
