import { useContext } from "react";
import TableContext from "./services/TableContext";
import { TableBodySkeleton } from "../Skeletons";
import EmptySearchBox from "./EmptySearchBox";
import Row from "./Row";

const TableBody = <T,>({ columnFilteredData, paginatedData }: { columnFilteredData: T[]; paginatedData: T[] }) => {
	const { loading, columns, keyExpr } = useContext(TableContext);

	if (loading) return <TableBodySkeleton count={columns.filter((column) => column.visibility !== false).length + 1} />;

	if (columnFilteredData.length === 0) return <EmptySearchBox />;

	return (
		<tbody>
			{paginatedData.map((row, index) => (
				<Row<T> key={(row as Record<string, string | number>)[keyExpr]} rowData={row} index={index} />
			))}
		</tbody>
	);
};

export default TableBody;