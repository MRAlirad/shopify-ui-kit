import { useState, type ChangeEvent } from "react";
import { useController, useFormContext } from "react-hook-form";
import classNames from "classnames";
import { ErrorMessage } from "./Error";
import Button from "./Button";
import { EyeIcon, EyeSlashIcon } from "./icon";
import { numberToCurrency } from "../helpers/Number";

const Input = ({
	name = "",
	label = "",
	className = "",
	type = "text",
	readOnly = false,
	disabled = false,
	placeholder = "",
	description = "",
	onChange = () => {},
	onEnter = () => {},
}: InputProps) => {
	const [passwordDisplay, setPasswordDisplay] = useState(false);

	const { control, watch } = useFormContext();
	const { field, fieldState } = useController({ control, name, disabled });

	return (
		<div
			className={classNames({
				"form-input": true,
				error: fieldState?.error,
				disabled: disabled,
				[className]: className,
			})}
		>
			{label && <label>{label}</label>}

			<div className="relative">
				<input
					type={(() => {
						if (type === "password") return passwordDisplay ? "text" : "password";
						else if (type === "currency" || type === "count") return "number";
						return type;
					})()}
					{...field}
					readOnly={readOnly}
					disabled={disabled}
					placeholder={placeholder}
					autoComplete="off"
					autoCorrect="off"
					onChange={(e) => {
						onChange(e.target.value, e);
						if (field) return field.onChange(e);
					}}
					onKeyDownCapture={(e) => {
						if (e.key === "Enter") onEnter();
					}}
					className={classNames({
						"hide-arrow": type === "count" ? false : true,
					})}
				/>

				{type === "password" && (
					<Button
						color="simple"
						size="icon"
						className="absolute top-0.5 end-0"
						icon={passwordDisplay ? <EyeSlashIcon size={18} /> : <EyeIcon size={18} />}
						disabled={disabled}
						onClick={() => setPasswordDisplay((prev) => !prev)}
					/>
				)}
			</div>

			{fieldState?.error?.message && <ErrorMessage error={fieldState?.error?.message} />}

			{type === "currency" && <span className="text-xs text-end pe-1">{numberToCurrency(watch(name) ? +watch(name) : 0)} ريال </span>}

			{description && <p className="text">{description}</p>}
		</div>
	);
};

interface InputProps {
	name: string;
	label?: string;
	className?: string;
	type?: string;
	readOnly?: boolean;
	disabled?: boolean;
	placeholder?: string;
	description?: string;
	onChange?: (value: string, e: ChangeEvent<HTMLInputElement>) => void;
	onEnter?: () => void;
}

export default Input;
