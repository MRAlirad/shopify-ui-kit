import classNames from "classnames";
import { useController, useFormContext } from "react-hook-form";
import { ErrorMessage } from "./Error";

const RadioBtn = ({ name = "", options = [], defaultValue = "", direction = "horizontal", className = "", disabled = false, onChange = () => {} }: RadioBtnProps) => {
	const { control, getValues } = useFormContext();
	const { field, fieldState } = useController({ control, name, disabled, defaultValue });

	return (
		<div className="grid gap-2">
			<div
				className={classNames({
					"flex gap-2": true,
					"flex-col": direction === "vertical",
					"flex-row flex-wrap": direction === "horizontal",
					"opacity-50": disabled,
					[className]: className,
				})}
			>
				{options.map(({ label, value }) => (
					<label
						key={value}
						className={classNames({
							"flex items-center gap-2": true,
							"cursor-pointer": !disabled,
							"cursor-default": disabled,
						})}
					>
						<input
							{...field}
							className="accent-blue-600 size-4"
							type="radio"
							defaultChecked={getValues(name) === value}
							name={name}
							onChange={() => {
								onChange(value);
								if (field) return field.onChange(value);
							}}
						/>
						<span className="text-sm text-neutral-900 select-none">{label}</span>
					</label>
				))}
			</div>

			{fieldState?.error?.message && <ErrorMessage error={fieldState?.error?.message} />}
		</div>
	);
};

interface RadioBtnProps {
	name: string;
	options: { value: string | number; label: string }[];
	defaultValue?: string;
	direction?: "horizontal" | "vertical";
	className?: string;
	disabled?: boolean;
	onChange?: (value: string | number) => void;
}

export default RadioBtn;
