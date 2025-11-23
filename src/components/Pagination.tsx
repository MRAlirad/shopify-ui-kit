import type { ReactNode } from "react";
import classNames from "classnames";
import { ArrowCaretBackwardIcon, ArrowCaretForwardIcon, ThreeDotsHorizontalIcon } from "./icon";

const Pagination = ({ currentPage, pageCount, onChangePage = () => {} }: PaginationProps) => {
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

const Button = ({ text, isActive = false, disabled = false, className = "", onClick = () => {} }: ButtonProps) => {
	return (
		<button
			className={classNames({
				"flex items-center justify-center size-8 border rounded cursor-pointer": true,
				"text-white border-blue-300 bg-primary-dark hover:bg-blue-900": isActive && !disabled,
				"text-blue-500 bg-white border-blue-300 hover:bg-blue-100 hover:text-blue-700": !isActive && !disabled,
				[className]: className,
				"opacity-70 text-blue-500 border-blue-200": disabled,
			})}
			type="button"
			onClick={onClick}
			disabled={disabled}
		>
			{text}
		</button>
	);
};

export interface PaginationProps {
	pageCount: number;
	currentPage: number;
	onChangePage?: (page: number) => void;
}

interface ButtonProps {
	text: number | ReactNode;
	className?: string;
	isActive?: boolean;
	disabled?: boolean;
	onClick?: () => void;
}

export default Pagination;
