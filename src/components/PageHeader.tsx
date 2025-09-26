import Button, { type ButtonProps } from './Button';
import Badge from './Badge';
import { ArrowRightIcon } from './icon';

const PageHeader = ({ title, backLink, badge, text, action }: PageHeaderProps) => {
	return (
		<div className="grid gap-2">
			<div className="flex items-center gap-2">
				{backLink && <Button color="simple" size="small" icon={<ArrowRightIcon size={18} />} className="text-neutral-700" />}

				<div className="flex items-center gap-2">
					<h1 className="text-lg lg:text-2xl text-neutral-700 line-clamp-1 font-bold"> {title} </h1>
					{badge && <Badge size='small' text={badge} color="blue" />}
				</div>

				{action && <Button size="small" className="ms-auto" {...action} />}
			</div>

			{text && <p className="text-xs text-neutral-500"> {text} </p>}
		</div>
	);
};

interface PageHeaderProps {
	title: string,
	backLink?: string,
	badge?: string,
	text?: string,
	action?: ButtonProps,
};

export default PageHeader;