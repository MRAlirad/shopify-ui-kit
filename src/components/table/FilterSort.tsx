import { useState } from "react";
import { useSearchParams } from "react-router";
import Button from "../Button";
import { UndoIcon } from "../icon";
import Input from "../Input";
import type { FilterSortProps } from "./Props";
import { useFormContext } from "react-hook-form";
import SelectedRowsModal from "./SelectedRowsModal";

function FilterSort<T>({ columns, filterOptions, searchPanel, selectable }: FilterSortProps<T>) {
	const [searchParams, setSearchParams] = useSearchParams();
	const [setselectedRowsModalDisplay, setSetselectedRowsModalDisplay] = useState(false)

	const { reset } = useFormContext();

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
							onClick={() => {
								const params: Record<string, string> = {};

								for (const [key, value] of searchParams.entries()) params[key] = value;

								setSearchParams({ ...params, filter: value.toString() });
							}}
						/>
					))}
				</div>
				<div className="flex items-center gap-1.5">
					<Button
						color="black-simple"
						size="small"
						icon={<UndoIcon size={13} />}
						onClick={() => {
							reset();
							setSearchParams({});
						}}
					/>
					{selectable && <Button color="black-simple" size="small" text="انتخاب شده ها" onClick={() => setSetselectedRowsModalDisplay(true)} />}
				</div>
				{searchPanel && (
					<Input
						name="search"
						placeholder="جست و جو کنید"
						className="col-span-2"
						onChange={(value) => {
							if (value) setSearchParams({ search: value });
							else setSearchParams({});
						}}
					/>
				)}
			</div>
			{setselectedRowsModalDisplay &&<SelectedRowsModal columns={columns} onClose={() => setSetselectedRowsModalDisplay(false)} />}
		</>
	);
}

export default FilterSort;
