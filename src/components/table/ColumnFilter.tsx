import DatePicker from "../DatePicker";
import Input from "../Input";
import Select from "../Select";
import type { ColumnProps } from "./Props";

const ColumnFilter = <T,>({ column }: { column: ColumnProps<T> }) => {
	if (!column.filter) return <th></th>;

	return (
		<th className="px-3 py-1 text-xs font-normal">
			{column.filter === "text" && <Input name={`filter-${column.name}`} type="search" />}
			{column.filter === "select" && <Select name={`filter-${column.name}`} options={column.filterOptions ?? []} clearable />}
			{column.filter === "date" && <DatePicker name={`filter-${column.name}`} />}
			{column.filter === "number" && <Input name={`filter-${column.name}`} type="number" />}
		</th>
	);
};

export default ColumnFilter;
