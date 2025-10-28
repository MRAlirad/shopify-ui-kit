import DatePicker from "../DatePicker";
import Input from "../Input";
import Select from "../Select";
import type { ColumnProps } from "./Props";

const ColumnFilter = <T,>({ column }: { column: ColumnProps<T> }) => {
	if (!column.search) return <th></th>;

	return (
		<th className="px-3 py-1 font-normal">
			{column.search === "text" && <Input size="small" name={`search-${column.name}`} type="search" />}
			{column.search === "select" && <Select size="small" name={`search-${column.name}`} options={column.searchOptions ?? []} clearable />}
			{column.search === "date" && <DatePicker size="small" name={`search-${column.name}`} />}
			{column.search === "number" && <Input size="small" name={`search-${column.name}`} type="number" />}
		</th>
	);
};

export default ColumnFilter;
