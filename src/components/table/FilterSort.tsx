import { useSearchParams } from "react-router";
import Button from "../Button";
import { UndoIcon } from "../icon";
import Input from "../Input";
import type { FilterSortProps } from "./Props";
import { FormProvider, useForm } from "react-hook-form";

const FilterSort = ({ filterOptions = [], searchPanel = false }: FilterSortProps) => {
	const [searchParams, setSearchParams] = useSearchParams();
	const formMethods = useForm<{ search: string }>();

	const { reset } = formMethods;

	return (
		<FormProvider {...formMethods}>
			<div className="grid grid-cols-[1fr_max-content] gap-2 px-3 py-2">
				<div className="flex items-center gap-1.5">
					{filterOptions?.map(({ label, value }) => (
						<Button
							key={value}
							color="black-simple"
							size="small"
							className={searchParams.get("filter") === value.toString() ? "bg-neutral-100" : ""}
							text={label}
							onClick={() => {
								const params: Record<string, string> = {};

								for (const [key, value] of searchParams.entries()) {
									params[key] = value;
								}

								setSearchParams({ ...params, filter: value.toString() });
							}}
						/>
					))}
				</div>
				<div>
					<Button color="black-simple" size="small" icon={<UndoIcon size={13} />} onClick={() => {
						reset();
						setSearchParams({});
					}} />
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
		</FormProvider>
	);
};

export default FilterSort;
