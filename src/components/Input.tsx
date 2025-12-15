import { useState } from "react";
import { useController, useFormContext } from "react-hook-form";
import classNames from "classnames";
import { ErrorMessage } from "./Error";
import { Button, EyeIcon, EyeSlashIcon } from ".";
import { type InputProps } from "./props";
import { numberToCurrency } from "../helpers/Number";

const Input = ({
	name = "",
	label = "",
	defaultValue = "",
	className = "",
	type = "text",
	readOnly = false,
	disabled = false,
	placeholder = "",
	description = "",
	size = "medium",
	onChange = () => {},
	onEnter = () => {},
}: InputProps) => {
	const [passwordDisplay, setPasswordDisplay] = useState(false);

	const { control, watch } = useFormContext();
	const { field, fieldState } = useController({ control, name, disabled, defaultValue });

	return (
		<div
			className={classNames({
				"form-input": true,
				[size]: size,
				error: fieldState?.error,
				disabled: disabled,
				[className]: className,
			})}
		>
			{label && <label htmlFor={name}>{label}</label>}

			<div className="relative">
				<input
					type={(() => {
						if (type === "password") return passwordDisplay ? "text" : "password";
						else if (type === "currency" || type === "count") return "number";
						return type;
					})()}
					id={name}
					{...field}
					readOnly={readOnly}
					disabled={disabled}
					placeholder={placeholder}
					autoComplete="off"
					autoCorrect="off"
					onChange={(e) => {
						onChange(e.target.value);
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

			{type === "currency" && watch(name) && <span className="text-xs text-end pe-1">{numberToCurrency(watch(name) ? +watch(name) : 0)} ريال </span>}

			{description && <p className="description">{description}</p>}
		</div>
	);
};

export default Input;
