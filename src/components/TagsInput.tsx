import { useFormContext } from "react-hook-form";
import Input, { type InputProps } from "./Input";
import Button from "./Button";
import { CloseIcon, PlusCircleIcon } from "./icon";

const TagsInput = ({ ...props }: InputProps) => {
	const { watch, setValue, getValues, setError, clearErrors } = useFormContext();

	const addTag = (tagValue: string) => {
		if (tagValue.trim() === "") return;

		if (getValues("tags").includes(tagValue.trim())) {
			setError("tag", { type: "local", message: "برچسب تکراری است" });
			return;
		}
		setValue("tags", [...getValues("tags"), tagValue]);

		setValue("tag", "");
		clearErrors("tag");
	};

	const removeTag = (tagValue: string) => {
		setValue(
			"tags",
			getValues("tags").filter((value: string) => value !== tagValue)
		);
	};

	return (
		<div className="tags-box relative">
			<Input {...props} />
			{!!watch("tags").length && (
				<div className="flex flex-wrap gap-2 mt-4">
					{watch("tags").map((tag: string, index: number) => (
						<div key={index} className="flex items-center text-xs bg-neutral-100 p-1 pr-2 rounded-full">
							<span>{tag}</span>
							<Button color="simple" size="small" icon={<CloseIcon size={13} />} onClick={() => removeTag(tag)} />
						</div>
					))}
				</div>
			)}

			{watch("tag")?.trim() && (
				<Button
					color="simple"
					size="small"
					icon={<PlusCircleIcon size={15} />}
					className="absolute top-8 end-1 text-neutral-700 !rounded-full"
					onClick={() => addTag(watch("tag"))}
                    disabled={props.disabled}
				/>
			)}
		</div>
	);
};

export default TagsInput;
