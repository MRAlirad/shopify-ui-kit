import classNames from "classnames";
import { useController, useFormContext } from "react-hook-form";

const Toggle = ({ name = "", label = "", size = "small", className = "", disabled = false, onChange = () => {}, onCheck = () => {}, onUncheck = () => {} }: ToggleProps) => {
	const { control } = useFormContext();
	const { field } = useController({ control, name, disabled });

	return (
		<label
			className={classNames({
				"flex gap-2 cursor-pointer items-center": true,
				[className]: className,
			})}
		>
			<input
				{...field}
				type="checkbox"
				checked={field.value}
				className="sr-only peer"
				onChange={(e) => {
					const isChecked = e.currentTarget.checked;

					if (isChecked) onCheck();
					else onUncheck();

					onChange(isChecked);
					field.onChange(e);
				}}
			/>
			<div
				className={classNames({
					"relative bg-neutral-200 rounded-full peer peer-checked:bg-primary": true,
					"peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:transition-all": true,
					"w-9 h-5 after:h-4 after:w-4": size === "small",
					"w-11 h-6 after:h-5 after:w-5": size === "medium",
				})}
			></div>
			{label && <span className="text-sm text-neutral-900 select-none">{label}</span>}
		</label>
	);
};

interface ToggleProps {
	name: string;
	label?: string;
	size?: "small" | "medium";
	className?: string;
	disabled?: boolean;
	onChange?: (value?: boolean) => void;
	onCheck?: () => void;
	onUncheck?: () => void;
}

export default Toggle;
