import classNames from "classnames";
import { useController, useFormContext } from "react-hook-form";

const Checkbox = ({ name = "", label = "", className = "", disabled = false, description = "", onChange = () => {}, onCheck = () => {}, onUncheck = () => {} }: CheckboxProps) => {
	const { control } = useFormContext();
	const { field } = useController({ control, name, disabled });

	return (
		<div
			className={classNames({
				"grid gap-2": true,
				[className]: className,
			})}
		>
			<label
				className={classNames({
					"flex items-center gap-2 cursor-pointer": true,
					"opacity-50": disabled,
					"!cursor-auto": disabled,
				})}
			>
				<input
					type="checkbox"
					{...field}
					checked={field.value}
					className="size-4 accent-neutral-900"
					onChange={(e) => {
						const isChecked = e.currentTarget.checked;

						if (isChecked) onCheck();
						else onUncheck();

						onChange(isChecked);
						field.onChange(e);
					}}
				/>
				{label && <span className="text-neutral-900 text-xs">{label}</span>}
			</label>

			{description && <span className="text-neutral-400 text-[10px] ms-6">{description}</span>}
		</div>
	);
};

interface CheckboxProps {
	name: string;
	label?: string;
	className?: string;
	disabled?: boolean;
	description?: string;
	onChange?: (value?: boolean) => void;
	onCheck?: () => void;
	onUncheck?: () => void;
}

export default Checkbox;
