import React from "react";

interface TableContextType {
	columns: [];
	actions: [];
	filterOptions: [];
	searchPanel: boolean;
	selectable: boolean;
	moreInfo: boolean;
	filterType: 'text' | 'select' | 'date' | 'number';
	type: 'local' | 'remote';
	allowedPageSizes: number[];
}

const TableContext = React.createContext<TableContextType>({} as TableContextType);

export default TableContext;