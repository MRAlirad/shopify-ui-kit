import { useContext, useState } from "react";
import { useSearchParams } from "react-router";
import Button from "../Button";
import { UndoIcon } from "../icon";
import Input from "../Input";
import { useFormContext } from "react-hook-form";
import SelectedRowsModal from "./SelectedRowsModal";
import TableContext from "../../contexts/TableContext";

function FilterSearch() {
	const { searchPanel, selectable } = useContext(TableContext);
	const [searchParams, setSearchParams] = useSearchParams();
	const [setselectedRowsModalDisplay, setSetselectedRowsModalDisplay] = useState(false);

	const { setValue, watch } = useFormContext();

	const handleUndoClick = () => {
		setValue("search", "");
		setSearchParams({});
	};

	const handleSearchChange = (value: string) => {
		if (value) setSearchParams({ search: value });
		else setSearchParams({});
	};

	if (!searchPanel && !selectable) return null;

	return (
		<>
			<div className="grid grid-cols-[1fr_max-content] gap-6 px-3 py-2">
				<div>{searchPanel && <Input name="search" placeholder="جست و جو کنید" onChange={handleSearchChange} />}</div>
				<div className="flex items-center">
					<Button color="black-simple" size="icon" icon={<UndoIcon size={18} />} onClick={handleUndoClick} disabled={searchParams.size === 0} />
					{selectable && (
						<Button color="black-simple" text="انتخاب شده ها" onClick={() => setSetselectedRowsModalDisplay(true)} disabled={watch("selectedRows").length === 0} />
					)}
				</div>
			</div>

			{setselectedRowsModalDisplay && <SelectedRowsModal onClose={() => setSetselectedRowsModalDisplay(false)} />}
		</>
	);
}

export default FilterSearch;
