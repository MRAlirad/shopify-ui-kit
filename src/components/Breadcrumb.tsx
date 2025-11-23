import { Fragment } from 'react';
import classNames from 'classnames';
import { Link } from 'react-router';
import { HomeIcon, ArrowCaretBackwardIcon, SettingIcon } from './icon';

const Breadcrumb = ({ type = 'home', breadcrumb = [] }: BreadcrumbProps) => {
	const types = {
		home: { label: 'خانه', icon: <HomeIcon size={16} />, link: '/' },
		setting: { label: 'تنظیمات', icon: <SettingIcon />, link: '/settings' },
	};

	return (
		<div className="flex items-center flex-wrap gap-1.5 text-neutral-600">
			<Link to={types[type].link} className="flex items-center gap-1 text-sm font-medium hover:text-neutral-800">
				{types[type].icon}
				<span>{types[type].label}</span>
			</Link>

			<ArrowCaretBackwardIcon size={14} />

			{breadcrumb.map(({ label, icon, link }, index) => (
				<Fragment key={index}>
					<Link
						to={link ?? ''}
						className={classNames({
							'flex items-center gap-1 text-sm font-medium hover:text-neutral-800': true,
							'text-neutral-900': breadcrumb.length - 1 === index,
						})}
					>
						{icon && icon}
						<span>{label}</span>
					</Link>

					{breadcrumb.length - 1 !== index && <ArrowCaretBackwardIcon size={14} />}
				</Fragment>
			))}
		</div>
	);
};

interface BreadcrumbProps {
	type?: 'home' | 'setting';
	breadcrumb: {
		label: string;
		icon?: React.ReactNode;
		link?: string;
	}[];
}

export default Breadcrumb;