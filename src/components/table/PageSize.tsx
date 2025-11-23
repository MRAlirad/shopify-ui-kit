import { useContext } from "react";
import { useFormContext } from "react-hook-form";
import TableContext from "./services/TableContext";
import Button from "../Button";

const PageSize = () => {
	const { setValue, watch } = useFormContext();
	const {
		paging: { visible, allowedPageSizes },
	} = useContext(TableContext);

	if (!visible) return null;

	return (
		<div className="flex items-center flex-row-reverse">
			{allowedPageSizes?.map((size) => (
				<Button
					key={size}
					color="blue-simple"
					size="icon"
					text={`${size}`}
					className={watch("pageSize") === size ? "bg-blue-100" : ""}
					onClick={() => {
						setValue("pageSize", size);
						setValue("currentPage", 1);
					}}
				/>
			))}
		</div>
	);
};

export default PageSize;
