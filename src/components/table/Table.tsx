import type { ReactNode } from "react";
import Column, { type ColumnProps } from "./Column";

const Table = ({ columns = [], pagination = {}, isLoading = false }: TableProps) => {
	return <div></div>;
};

interface TableProps {
	columns: (ColumnProps & {
        cellTemplate?: ReactNode;
    })[];
}

export default Table;
