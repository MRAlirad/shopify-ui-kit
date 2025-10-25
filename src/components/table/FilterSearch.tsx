import { useState } from "react";
import { useSearchParams } from "react-router";
import Button from "../Button";
import { UndoIcon } from "../icon";
import Input from "../Input";
import type { FilterSearchProps } from "./Props";
import { useFormContext } from "react-hook-form";
import SelectedRowsModal from "./SelectedRowsModal";

function FilterSearch<T>({ columns, filterOptions = [], searchPanel = false, selectable = false }: FilterSearchProps<T>) {
	const [searchParams, setSearchParams] = useSearchParams();
	const [setselectedRowsModalDisplay, setSetselectedRowsModalDisplay] = useState(false);

	const { setValue } = useFormContext();

	const handleFilterClick = (value: string) => {
		const params: Record<string, string> = {};
		searchParams.delete("page");

		for (const [key, value] of searchParams.entries()) params[key] = value;

		if (params.filter && params.filter === value.toString()) {
			searchParams.delete("filter");
			setSearchParams(searchParams);
		} else {
			setSearchParams({ ...params, filter: value.toString() });
		}
	};

	const handleUndoClick = () => {
		setValue("search", "");
		setSearchParams({});
	};

	const handleSearchChange = (value: string) => {
		if (value) setSearchParams({ search: value });
		else setSearchParams({});
	};

	if (filterOptions.length === 0 && !searchPanel && !selectable) return null;

	return (
		<>
			<div className="grid grid-cols-[1fr_max-content] gap-2 px-3 py-2">
				<div className="flex items-center gap-1.5">
					{filterOptions?.map(({ label, value }) => (
						<Button
							key={value}
							color="black-simple"
							size="small"
							className={searchParams.get("filter") === value.toString() ? "bg-neutral-200" : ""}
							text={label}
							onClick={() => handleFilterClick(value.toString())}
						/>
					))}
				</div>
				<div className="flex items-center gap-1.5">
					<Button color="black-simple" size="small" icon={<UndoIcon size={13} />} onClick={handleUndoClick} />
					{selectable && <Button color="black-simple" size="small" text="انتخاب شده ها" onClick={() => setSetselectedRowsModalDisplay(true)} />}
				</div>
				{searchPanel && <Input name="search" placeholder="جست و جو کنید" className="col-span-2" onChange={handleSearchChange} />}
			</div>
			{setselectedRowsModalDisplay && <SelectedRowsModal columns={columns} onClose={() => setSetselectedRowsModalDisplay(false)} />}
		</>
	);
}

export default FilterSearch;
