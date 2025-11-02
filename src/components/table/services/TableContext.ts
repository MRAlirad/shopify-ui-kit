import React from "react";

interface TableContextType {
	columns: [];
	actions: [];
	searchPanel: boolean;
	selectable: boolean;
	moreInfo: boolean;
	filterType: 'text' | 'select' | 'date' | 'number';
	type: 'local' | 'remote';
	allowedPageSizes: number[];
	columnHidingEnabled: boolean;
}

const TableContext = React.createContext<TableContextType>({} as TableContextType);

export default TableContext;