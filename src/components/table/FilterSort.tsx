import Button from "../Button";
import { UndoIcon } from "../icon";
import Input from "../Input";
import type { FilterSortProps } from "./Props";
import { FormProvider, useForm } from "react-hook-form";

const FilterSort = ({ filterOptions = [], searchPanel = false }: FilterSortProps) => {
	const formMethods = useForm<{ search: string; sort: string | number }>({
		defaultValues: {
			search: "",
			sort: "",
		},
	});

	const {setValue, watch, reset} = formMethods;

	return (
		<FormProvider {...formMethods}>
			<div className="grid grid-cols-[1fr_max-content] gap-2 px-3 py-2">
				<div className="flex items-center gap-1.5">
					{filterOptions?.map(({ label, value }) => (
						<Button key={value} color="black-simple" size="small" className={watch('sort') === value ? 'bg-neutral-100' : ''} text={label} onClick={() => setValue("sort", value)} />
					))}
				</div>
				<div>
					<Button
						color="simple"
						size="small"
						icon={<UndoIcon size={13} />}
						onClick={() => reset()}
					/>
				</div>
				{searchPanel && <Input name="search" placeholder="جست و جو کنید" className="col-span-2" onChange={(value) => console.log(value)} />}
			</div>
		</FormProvider>
	);
};

export default FilterSort;
