import { useContext } from "react";
import { useWatch } from "react-hook-form";
import { useFormContext } from "react-hook-form";
import Pagination from "../Pagination";
import PageSize from "./PageSize";
import TableContext from "./services/TableContext";

const TableFooter = <T,>({ columnFilteredData }: { columnFilteredData: T[] }) => {
	const { dataSource } = useContext(TableContext);
	const { control, setValue } = useFormContext();
	const currentPage = useWatch({ control: control, name: "currentPage" }) as number;
	const pageSize = useWatch({ control: control, name: "pageSize" }) as number;
	const pageCount = Math.ceil(columnFilteredData.length / pageSize);
	const onChangePage = (page: number) => setValue("currentPage", page);

	return (
		<div className="flex flex-wrap items-center justify-between gap-2">
			{pageCount > 1 ? <Pagination {...{ currentPage, pageCount, onChangePage }} /> : <span></span>}
			{dataSource ? <PageSize /> : <span></span>}
		</div>
	);
};

export default TableFooter;