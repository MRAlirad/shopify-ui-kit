import { useRef, useState } from "react";
import { useController, useFormContext } from "react-hook-form";
import classNames from "classnames";
import ReactDatePicker, { DateObject, type DatePickerRef, type Value } from "react-multi-date-picker";
import TimePicker from "react-multi-date-picker/plugins/time_picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import Button from "./Button";
import { ErrorMessage } from "./Error";
import { CloseIcon } from "./icon";
import { persianDate } from "../helpers/Date";
import { persianToEnglishDigits } from "../helpers/Number";

const DatePicker = ({ label = "", name = "", disabled = false, className = "", timePicker = false, size = "medium", onChange = () => {} }: DatePickerProps) => {
	const format = timePicker ? "YYYY-MM-DD HH:mm:ss" : "YYYY-MM-DD";
	const datepickerRef = useRef<DatePickerRef>(null);

	const { control, watch, getValues, setValue, clearErrors } = useFormContext();
	const { field, fieldState } = useController({ control, name, disabled });

	const [date, setDate] = useState<Value>(getValues(name) ? persianDate(getValues(name), format) : "");

	return (
		<div
			className={classNames({
				"form-input": true,
				disabled: disabled,
				[`${size}`]: size,
				error: fieldState?.error,
				[className]: className,
			})}
		>
			{label && <label>{label}</label>}

			<div className="relative">
				<ReactDatePicker
					{...field}
					ref={datepickerRef}
					value={date}
					calendar={persian}
					locale={persian_fa}
					format={format}
					highlightToday={false}
					onOpenPickNewDate={false}
					portal={true}
					plugins={(() => {
						const plugins = [];
						if (timePicker) plugins.push(<TimePicker key="time-picker" position="bottom" />);
						return plugins;
					})()}
					disabled={disabled}
					showOtherDays
					monthYearSeparator=" "
					placeholder="تاریخ را وارد کنید"
					calendarPosition="bottom-center"
					inputClass={classNames({
						"focus:outline-blue-500": !fieldState?.error,
						"focus:outline-red-500": fieldState?.error,
					})}
					onChange={(value: DateObject | null) => {
						if (!value) return;
						setDate(value);
						onChange(value);
						setValue(name, persianToEnglishDigits(value.format()));
						clearErrors(name);
					}}
				/>

				{watch(name) && (
					<Button
						color="simple"
						icon={<CloseIcon size={size === "small" ? 14 : 18} />}
						size="small"
						className="absolute end-0 bottom-1.5"
						onClick={() => {
							setValue(name, "");
							setDate("");
							onChange("");
						}}
					/>
				)}
			</div>

			{fieldState?.error?.message && <ErrorMessage error={fieldState?.error?.message} />}
		</div>
	);
};

interface DatePickerProps {
	name: string;
	label?: string;
	disabled?: boolean;
	className?: string;
	timePicker?: boolean;
	size?: "small" | "medium";
	onChange?: (value: Value) => void;
}

export default DatePicker;
