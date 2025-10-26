import classNames from "classnames";
import { useController, useFormContext } from "react-hook-form";

const Switch = ({ name = "", label = "", className = "", disabled = false, onChange = () => {}, onCheck = () => {}, onUncheck = () => {} }: SwitchProps) => {
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
			<div className="relative w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-neutral-900"></div>
			{label && <span className="text-sm font-medium text-gray-900 select-none">{label}</span>}
		</label>
	);
};

interface SwitchProps {
	name: string;
	label?: string;
	className?: string;
	disabled?: boolean;
	onChange?: (value?: boolean) => void;
	onCheck?: () => void;
	onUncheck?: () => void;
}

export default Switch;
