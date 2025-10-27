import classNames from "classnames";

const ProgressBar = ({ title, progress, className = "" }: ProgressBarProps) => {
	return (
		<div className={classNames("grid gap-1", className)}>
			<div className="flex items-center justify-between gap-1 text-sm text-neutral-700">
				<span>{title}</span>
				<span>{progress}%</span>
			</div>

			<div className="w-full h-2 bg-neutral-200 rounded-full">
				<div className="h-full bg-neutral-900 rounded-full transition-all duration-300" style={{ width: `${progress}%` }}></div>
			</div>
		</div>
	);
};

interface ProgressBarProps {
	title: string;
	progress: number;
	className?: string;
}

export default ProgressBar;
