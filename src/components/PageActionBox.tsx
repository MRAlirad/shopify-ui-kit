import classNames from "classnames";
import Button, { type ButtonProps } from "./Button";

const PageActionBox = ({ className = "", actions = [] }: PageActionBoxProps) => {
	return (
		<div
			className={classNames({
				"flex items-center gap-2 flex-row-reverse": true,
				[className]: className,
			})}
		>
            {actions.map((action, index) => (
                <Button key={index} {...action} />
            ))}
        </div>
	);
};

interface PageActionBoxProps {
	className?: string;
	actions?: ButtonProps[];
}

export default PageActionBox;
