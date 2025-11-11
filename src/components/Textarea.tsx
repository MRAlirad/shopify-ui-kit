import classNames from "classnames";
import { useController, useFormContext } from "react-hook-form";
import { ErrorMessage } from "./Error";

const Textarea = ({ name = "", label = "", className = "", disabled = false, readOnly = false, placeholder = "", size = "medium", onChange = () => {} }: TextareaProps) => {
	const { control } = useFormContext();
	const { field, fieldState } = useController({ control, name, disabled });

	return (
		<div
			className={classNames({
				"form-input": true,
				error: fieldState?.error,
				disabled: disabled,
				[size]: size,
				[className]: className,
			})}
		>
			{label && <label htmlFor={name}>{label}</label>}

			<textarea
				{...field}
				id={name}
				placeholder={placeholder}
				readOnly={readOnly}
				disabled={disabled}
				onChange={(e) => {
					onChange(e.target.value);
					if (field) return field.onChange(e);
				}}
				className="min-h-32"
			></textarea>

			{fieldState?.error?.message && <ErrorMessage error={fieldState?.error?.message} />}
		</div>
	);
};

interface TextareaProps {
	name: string;
	label?: string;
	className?: string;
	disabled?: boolean;
	readOnly?: boolean;
	placeholder?: string;
	size?: "small" | "medium";
	onChange?: (value: string) => void;
}

export default Textarea;
