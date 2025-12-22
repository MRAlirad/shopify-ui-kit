import classNames from "classnames";
import { Button, Icon, CloseIcon, GoAlertFill, IoCloseCircle, FaCircleCheck, IoInformationCircle } from ".";
import type { AlertProps, ButtonProps } from "./props";

const Alert = ({ color = "info", title, text, items, accentBorder = false, className = "", actions, onDismiss }: AlertProps) => {
	const icons: Record<AlertProps["color"], { icon: React.ReactNode; btnColor: ButtonProps["color"]; className: string }> = {
		info: { icon: <IoInformationCircle />, btnColor: "blue-simple", className: "bg-blue-50 dark:bg-blue-500/20 text-blue-700 dark:text-blue-200 border-blue-500 dark:border-blue-500/20" },
		success: { icon: <FaCircleCheck />, btnColor: "green-simple", className: "bg-green-50 dark:bg-green-500/20 text-green-700 dark:text-green-200 border-green-500 dark:border-green-500/20" },
		warning: { icon: <GoAlertFill />, btnColor: "simple", className: "bg-yellow-50 dark:bg-yellow-500/20 text-yellow-700 dark:text-yellow-200 border-yellow-500 dark:border-yellow-500/20" },
		error: { icon: <IoCloseCircle />, btnColor: "red-simple", className: "bg-red-50 dark:bg-red-500/20 text-red-700 dark:text-red-200 border-red-500 dark:border-red-500/20" },
	};

	return (
		<div
			className={classNames({
				"grid grid-cols-[max-content_1fr_max-content] gap-4 p-4": true,
				"border-s-4 border-solid rounded-none": accentBorder,
				'rounded dark:border-1': !accentBorder,
				[icons[color].className]: true,
				[color]: true,
				[className]: className,
			})}
		>
			<Icon>{icons[color].icon}</Icon>
			<div className="grid gap-1 text-sm">
				{title && <h3 className="font-bold">{title}</h3>}
				{text && <p>{text}</p>}
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
