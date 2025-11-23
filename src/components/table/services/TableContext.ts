import React from "react";
import type { ColumnProps, ActionProps, PagingProps } from "./Props";

interface TableContextType<T> {
	columns: ColumnProps<T>[];
	actions: ActionProps<T>[];
	dataSource: T[];
	searchPanel: boolean;
	selectable: boolean;
	moreInfo: boolean;
	type: "local" | "remote";
	columnHidingEnabled: boolean;
	keyExpr: string;
	id: string;
	loading: boolean;
	paging: PagingProps;
}

function createTableContext<T>() {
	return React.createContext<TableContextType<T>>({} as TableContextType<T>);
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const TableContext = createTableContext<any>();

export default TableContext;
