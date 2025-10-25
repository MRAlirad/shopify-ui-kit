import type { ReactNode } from 'react';
import classNames from 'classnames';
import { ArrowCaretBackwardIcon, ArrowCaretForwardIcon, ThreeDotsHorizontalIcon } from './icon';

const Pagination = ({ currentPage, pageCount, onChangePage = ()=> {} }: PaginationProps) => {
	if(pageCount <= 1) return null;

	return (
		<div className="flex items-center justify-center gap-1.5 h-10 text-base select-none">
			<Button text={<ArrowCaretForwardIcon size={20} />} className="rounded-s-lg" disabled={currentPage === 1} onClick={() => onChangePage(currentPage - 1)} />
			{currentPage !== 1 && <Button onClick={() => onChangePage(1)} text={1} />}
			{currentPage > 3 && <Button disabled text={<ThreeDotsHorizontalIcon />} />}
			{currentPage >= 3 && <Button onClick={() => onChangePage(currentPage - 1)} text={currentPage - 1} />}
			<Button onClick={() => onChangePage(currentPage)} isActive={true} text={currentPage} />
			{currentPage + 2 <= pageCount && <Button onClick={() => onChangePage(currentPage + 1)} text={currentPage + 1} />}
			{currentPage + 3 <= pageCount && <Button disabled text={<ThreeDotsHorizontalIcon />} />}
			{currentPage !== pageCount && <Button onClick={() => onChangePage(pageCount)} text={pageCount} />}
			<Button text={<ArrowCaretBackwardIcon size={20} />} className="rounded-e-lg" disabled={currentPage === pageCount} onClick={() => onChangePage(currentPage + 1)} />
		</div>
	);
};

const Button = ({ text, isActive = false, disabled = false, className = '', onClick = () => {} }: ButtonProps) => {
	return (
		<button
			className={classNames({
				'flex items-center justify-center size-8 border rounded cursor-pointer': true,
				'text-white border-neutral-300 bg-neutral-800 hover:bg-neutral-900': isActive && !disabled,
				'text-neutral-500 bg-white border-neutral-300 hover:bg-neutral-100 hover:text-neutral-700': !isActive && !disabled,
				[className]: className,
				'opacity-70 text-neutral-500 border-neutral-200': disabled,
			})}
			onClick={onClick}
			disabled={disabled}
		>
			{text}
		</button>
	);
};

export interface PaginationProps {
	pageCount: number,
	currentPage: number,
	onChangePage?: (page: number) => void,
};

interface ButtonProps {
	text: number | ReactNode,
	className?: string,
	isActive?: boolean,
	disabled?: boolean,
	onClick?: ()=> void,
};

export default Pagination;