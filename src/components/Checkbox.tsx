import classNames from "classnames";
import { useController, useFormContext } from "react-hook-form";

const Checkbox = ({ name = "", label = "", className = "", disabled = false, description = "", onChange = () => {}, onCheck = () => {}, onUncheck = () => {} }: CheckboxProps) => {
	const { control } = useFormContext();
	const { field } = useController({ control, name, disabled });

	return (
		<div
			className={classNames({
				"grid gap-1 text-sm": true,
				[className]: className,
			})}
		>
			<label
				className={classNames({
					"flex items-center gap-2 cursor-pointer": true,
					"opacity-50 cursor-auto!": disabled,
				})}
			>
				<input
					type="checkbox"
					{...field}
					checked={field.value}
					className="size-4 accent-blue-700"
					onChange={(e) => {
						const isChecked = e.currentTarget.checked;

						if (isChecked) onCheck();
						else onUncheck();

						onChange(isChecked);
						field.onChange(e);
					}}
				/>
				{label && <span className="text-neutral-900 select-none">{label}</span>}
			</label>

			{description && <span className="text-neutral-500 ms-6">{description}</span>}
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
