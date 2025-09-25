import classNames from 'classnames';
import type { ReactNode } from 'react';

const Page = ({ type = 'expand', children, className = '' }: PageProps) => {
	return (
		<main
			className={classNames({
				'grid gap-4 px-4 md:px-[2%] pt-4 pb-8 h-max animate-fadeInUp': true,
				'xl:px-[14.5%]': type === 'shrink',
				[className]: className,
			})}
		>
			{children}
		</main>
	);
};

interface PageProps {
	type?: 'shrink'| 'expand',
	children: ReactNode,
	className?: string,
};

export default Page;