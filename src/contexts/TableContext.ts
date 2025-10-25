import React from "react";

interface TableContextType {
	columns: [];
	actions: [];
	filterOptions: [];
	searchPanel: boolean;
	selectable: boolean;
	moreInfo: boolean;
}

const TableContext = React.createContext<TableContextType>({} as TableContextType);

export default TableContext;