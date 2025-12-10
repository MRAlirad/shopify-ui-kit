import classNames from "classnames";
import { Button, Icon } from ".";
import { CloseIcon } from "./icon";
import type { AlertProps } from "./props";
import { GoAlertFill } from "react-icons/go";
import { IoCloseCircle } from "react-icons/io5";
import { FaCircleCheck } from "react-icons/fa6";
import { IoInformationCircle } from "react-icons/io5";
import type { ButtonProps } from "./Button";

const Alert = ({ color = "info", title, text, items, accentBorder = false, className = "", actions, onDismiss }: AlertProps) => {
	const icons: Record<AlertProps["color"], { icon: React.ReactNode; btnColor: ButtonProps["color"]; className: string }> = {
		info: { icon: <IoInformationCircle />, btnColor: "blue-simple", className: "bg-blue-50 text-blue-600 border-blue-500" },
		success: { icon: <FaCircleCheck />, btnColor: "green-simple", className: "text-green-800 bg-green-50 border-green-500" },
		warning: { icon: <GoAlertFill />, btnColor: "simple", className: "text-yellow-700 bg-yellow-50 border-yellow-500" },
		error: { icon: <IoCloseCircle />, btnColor: "red-simple", className: "text-red-800 bg-red-50 border-red-500" },
	};

	return (
		<div
			className={classNames({
				"grid grid-cols-[max-content_1fr_max-content] gap-4 p-4": true,
				"border-s-4 border-solid rounded-none": accentBorder,
				rounded: !accentBorder,
				[icons[color].className]: true,
				[color]: true,
				[className]: className,
			})}
		>
			<Icon>{icons[color].icon}</Icon>
			<div className="grid gap-1 text-sm">
				{title && <h3 className="font-bold">{title}</h3>}
				{text && <p className="">{text}</p>}
				{items && (
					<ul className="list-disc list-inside">
						{items.map((item) => (
							<li key={item}>{item}</li>
						))}
					</ul>
				)}
				{actions && (
					<div className="flex gap-2 mt-2">
						{actions.map((action) => (
							<Button key={action.text} color={icons[color].btnColor} {...action} />
						))}
					</div>
				)}
			</div>
			{onDismiss && <Button color={icons[color].btnColor} size="icon" icon={<CloseIcon size={20} />} onClick={onDismiss} />}
		</div>
	);
};

export default Alert;
