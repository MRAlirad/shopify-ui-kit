import { useContext, useState } from "react";
import { useFormContext } from "react-hook-form";
import Button from "../Button";
import Input from "../Input";
import SelectedRowsModal from "./SelectedRowsModal";
import TableContext from "../../contexts/TableContext";
import { UndoIcon, ThreeDotsVerticalIcon, CheckedBoxIcon, ColumnDisplayIcon } from "../icon";
import { generateRandomString } from "../../helpers/String";
import Popup from "../Popup";
import type { ColumnProps } from "./Props";
import Checkbox from "../Checkbox";

function FilterSearch<T>() {
	const { columns, searchPanel, selectable, columnHidingEnabled } = useContext(TableContext);
	const [setselectedRowsModalDisplay, setSetselectedRowsModalDisplay] = useState(false);
	const uId = generateRandomString();

	const { setValue, reset } = useFormContext();

	if (!searchPanel && !selectable) return null;

	return (
		<>
			<div className="grid grid-cols-[1fr_max-content] gap-6 px-3 py-2">
				<div>{searchPanel && <Input name="search" type="search" placeholder="جست و جو کنید" onChange={() => setValue("currentPage", 1)} />}</div>
				<div className="flex items-center">
					<Button className={`table-actions-${uId}`} icon={<ThreeDotsVerticalIcon />} size="icon" color="black-simple" />
					<Popup anchorSelect={`.table-actions-${uId}`} className="grid p-2 min-w-40 w-max *:!py-1.5 *:justify-start">
						<Button color="black-simple" size="small" text="ریست کردن فیلتر ها" icon={<UndoIcon size={16} />} onClick={() => reset()} fullWidth />
						{selectable && (
							<Button
								color="black-simple"
								size="small"
								text="انتخاب شده ها"
								icon={<CheckedBoxIcon size={16} />}
								onClick={() => setSetselectedRowsModalDisplay(true)}
								fullWidth
							/>
						)}
						{columnHidingEnabled && (
							<Button
								className={`column-display-${uId}`}
								color="black-simple"
								size="small"
								text="نمایش/عدم نمایش ستون ها"
								icon={<ColumnDisplayIcon size={16} />}
								// onClick={() => setSetselectedRowsModalDisplay(true)}
								fullWidth
							/>
						)}
						<Popup anchorSelect={`.column-display-${uId}`} className="grid gap-1 p-2 min-w-40 w-max" place='right-start'>
							{columns.map((col: ColumnProps<T>) => {
								if (col.visibility !== false) return <Checkbox name={`display-${col.name}`} label={col.label} />;
							})}
						</Popup>
					</Popup>
				</div>
			</div>

			{setselectedRowsModalDisplay && <SelectedRowsModal onClose={() => setSetselectedRowsModalDisplay(false)} />}
		</>
	);
}

export default FilterSearch;
