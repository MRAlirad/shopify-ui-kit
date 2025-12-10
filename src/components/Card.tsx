import classNames from "classnames";
import { Button, Badge, Icon, Loader } from ".";
import type { CardProps } from "./props";

const Card = ({ title, icon, text, className, children, action, badge, leftComponent, blueTitleBg = false, loading = false }: CardProps) => {
	return (
		<div
			className={classNames({
				"card grid h-max": true,
				"gap-4 px-6 py-4": !blueTitleBg,
				[className as string]: typeof className === "string", // If className is a string, add it to the className
				...(typeof className === "object" && className?.wrapper ? { [className.wrapper]: true } : {}), // If className is an object, add the wrapper class if it exists
			})}
		>
			{(title || action || text) && (
				<div
					className={classNames({
						"grid grid-cols-[1fr_max-content] items-center gap-1": true,
						"bg-blue-50 px-6 py-4": blueTitleBg,
						...(typeof className === "object" && className?.title ? { [className.title]: true } : {}), // If className is an object, add the title class if it exists
					})}
				>
					<div className="grid grid-cols-[max-content_1fr] items-center gap-x-2 gap-y-1">
						{icon && <Icon size="20">{icon}</Icon>}
						<h3 className="text-neutral-900 text-base font-bold">{title}</h3>
						{text && <p className="col-span-2 text-neutral-500 text-xs line-clamp-1">{text}</p>}
					</div>
					{action && <Button size="small" color="black-simple" {...action} />}
					{badge && <Badge {...badge} />}
					{leftComponent && leftComponent}
				</div>
			)}

			<div
				className={classNames({
					"px-6 py-4": blueTitleBg,
					...(typeof className === "object" && className?.content ? { [className.content]: true } : {}), // If className is an object, add the content class if it exists
				})}
			>
				{loading ? <Loader size="size-20" /> : children}
			</div>
		</div>
	);
};

export default Card;
