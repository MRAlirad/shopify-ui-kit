import type { ReactNode } from "react";
import type { PaginationProps } from "../Pagination";
import type { ButtonProps } from "../Button";

export interface TableProps {
	columns: ColumnProps[];
	dataSet: RowProps[];
	pagination?: PaginationProps;
    loading?: boolean;
	// sortOptions: SortOptionProps[];
	// filterOptions: FilterOptionProps[];
	searchPanel?: boolean;
	actions?: ActionProps[];
}

export interface ColumnProps {
	name: string;
	label: string;
	visibility?: boolean;
	className?: string;
    cellTemplate?: (row: { [key: string]: string | number }) => ReactNode;
}

export interface RowProps {
    columns: ColumnProps[];
	id?: string | number;
	index: number;
	actions?: ActionProps[];
	[key: string]: string | number | boolean | ReactNode | ColumnProps[] | ActionProps[];
}

export interface ActionProps extends Omit<ButtonProps, "onClick"> {
	visibility?: boolean;
	onClick?: (row: RowProps) => void;
}