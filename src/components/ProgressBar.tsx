import classNames from "classnames";
import { ErrorMessage } from "./Error";

const ProgressBar = ({ title, progress, className = "" }: ProgressBarProps) => {
	return (
		<div className={classNames("grid gap-1", className)}>
			<div className="flex items-center justify-between gap-1 text-sm text-neutral-700">
				<span>{title}</span>
				<span>{progress}%</span>
			</div>

			<div className="w-full h-2 bg-primary-light rounded-full overflow-hidden">
				<div className="h-full bg-primary rounded-full transition-all duration-300" style={{ width: `${progress}%` }}></div>
			</div>

			{progress > 100 && <ErrorMessage error="مقدار بیشتر از 100 است" />}
		</div>
	);
};

interface ProgressBarProps {
	title: string;
	progress: number;
	className?: string;
}

export default ProgressBar;
