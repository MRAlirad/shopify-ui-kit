import classNames from 'classnames';
import { InfoIcon } from './icon';

const Alert = ({ color = 'blue', text, className = '' }: AlertProps) => {
	return (
		<div
			className={classNames({
				'alert': true,
				[color]: true,
				[className]: className,
			})}
		>
			<InfoIcon size={20} />
			<p className="text-xs">{text}</p>
		</div>
	);
};

interface AlertProps {
	color?: 'blue'| 'yellow'| 'red'| 'green'| 'neutral';
	text: string;
	className?: string,
};

export default Alert;
