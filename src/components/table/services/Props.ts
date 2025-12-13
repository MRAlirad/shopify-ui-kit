import type { ReactNode } from "react";
import type { PaginationProps } from "../../Pagination";
import type { ButtonProps, CardProps } from "../../props";

export interface TableProps<T> {
	type?: "local" | "remote";
	id: string;
	keyExpr: string;
	card?: Omit<CardProps, "children">;
	columns?: ColumnProps<T>[];
	dataSource: T[];
	pagination?: PaginationProps;
	loading?: boolean;
	searchPanel?: boolean;
	selectable?: boolean;
	moreInfo?: boolean;
	actions?: ActionProps<T>[];
	columnHidingEnabled?: boolean;
	height?: number;
	paging?: PagingProps;
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
	search?: "text" | "select" | "date" | "number";
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

export interface PagingProps {
	visible?: boolean,
	defaultPageSize?: number,
	allowedPageSizes?: number[],
	showInfo?: boolean,
	displayMode?: "compact" | "full" | "adaptive"
};
