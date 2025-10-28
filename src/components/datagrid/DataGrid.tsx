import DxDataGrid, { Column, FilterRow, SearchPanel } from "devextreme-react/data-grid";
import "devextreme/dist/css/dx.light.css";
import Card from "../Card";

const DataGrid = <T,>({ id, columns = [], dataSource = [] }: DataGridProps<T>) => {
	return (
		<Card>
			<div className="overflow-x-auto">
				<DxDataGrid id={id} dataSource={dataSource} columnAutoWidth={true} allowColumnReordering={true} rtlEnabled>
					{columns.map((column: ColumnCellProps) => (
						<Column key={column.dataField} {...column}></Column>
					))}
					<SearchPanel visible={true} />
					<FilterRow visible={true} />
				</DxDataGrid>
			</div>
		</Card>
	);
};

interface DataGridProps<T> {
	id: string;
	dataSource: T[];
	columns: ColumnCellProps[];
}

interface ColumnCellProps {
	dataField: string;
	dataType: DataType;
	width?: number;
	caption: string;
}

type DataType = "boolean" | "date" | "datetime" | "number" | "object" | "string";

export default DataGrid;
