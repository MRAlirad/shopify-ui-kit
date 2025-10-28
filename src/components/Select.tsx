import { useController, useFormContext } from "react-hook-form";
import classNames from "classnames";
import Button from "./Button";
import { ErrorMessage } from "./Error";
import { CloseIcon } from "./icon";
import Loader from "./Loader";

const Select = ({
	name = "",
	label = "",
	className = "",
	disabled = false,
	readOnly = false,
	clearable = false,
	loading = false,
	error = "",
	size = "medium",
	options = [],
	onChange = () => {},
}: SelectProps) => {
	const { control, watch, setValue } = useFormContext();
	const { field, fieldState } = useController({ control, name, disabled });

	return (
		<div
			className={classNames({
				"form-input": true,
				error: fieldState?.error,
				[`${size}`]: size,
				disabled: disabled,
				[className]: className,
			})}
		>
			{label && <label>{label}</label>}

			<div className="relative">
				<select
					{...field}
					disabled={disabled || readOnly}
					className={classNames({
						"cursor-pointer": !disabled && !readOnly,
						"!text-neutral-400": (watch(name) === "" || loading) && !fieldState?.error,
						"!text-red-400": (watch(name) === "" || loading) && fieldState?.error,
					})}
					onChange={(e) => {
						onChange(e.target.value);
						if (field) return field.onChange(e);
					}}
				>
					{loading ? (
						<option disabled value={field.value}>
							-- در حال دریافت اطلاعات --
						</option>
					) : error ? (
						<option disabled value="">
							-- {error} --
						</option>
					) : options.length > 0 ? (
						<>
							{watch(name) === "" && (
								<option value="" disabled>
									-- یک گزینه را انتخاب کنید --
								</option>
							)}
							{options.map((option, index) => (
								<option key={index} value={option.value} className={`${option.disabled ? "text-neutral-400" : "text-neutral-900"}`} disabled={option.disabled}>
									{option.label}
								</option>
							))}
						</>
					) : (
						<option disabled value="">
							-- گزینه ای برای انتخاب وجود ندارد --
						</option>
					)}
				</select>

				{watch(name) !== "" && clearable && !loading && !readOnly && (
					<Button
						color="simple"
						icon={<CloseIcon size={size === "small" ? 14 : 18} />}
						size="small"
						className={classNames({
							'absolute end-4 bottom-2 bg-white !p-0': true,
							'bottom-2': size === "small",
							'bottom-2.5': size === "medium",
						})}
						disabled={disabled || readOnly}
						onClick={() => {
							setValue(name, "");
							onChange("");
						}}
					/>
				)}

				{loading && <Loader className="absolute end-6 top-0 w-max text-neutral-400" size="18" />}
			</div>

			{fieldState?.error?.message && <ErrorMessage error={fieldState?.error?.message} />}
		</div>
	);
};

interface SelectProps {
	name: string;
	label?: string;
	className?: string;
	size?: "small" | "medium";
	disabled?: boolean;
	readOnly?: boolean;
	clearable?: boolean;
	loading?: boolean;
	error?: string;
	options: { value: string | number; label: string; disabled?: boolean }[];
	onChange?: (value: string | number) => void;
}

export default Select;
