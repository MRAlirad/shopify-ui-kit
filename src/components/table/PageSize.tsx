import { useContext } from "react";
import { useFormContext } from "react-hook-form";
import TableContext from "../../contexts/TableContext";
import Button from "../Button";

const PageSize = () => {
	const { setValue, watch } = useFormContext();
	const { allowedPageSizes } = useContext(TableContext);

	return (
		<div className="flex items-center flex-row-reverse border rounded border-neutral-400">
			{allowedPageSizes.map((size) => (
				<Button
					key={size}
					color="black-simple"
					size="icon"
					text={`${size}`}
					className={watch("pageSize") === size ? "bg-neutral-200" : ""}
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
