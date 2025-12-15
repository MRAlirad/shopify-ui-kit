import { WarningCircleIcon } from "./icon";

export const ErrorMessage = ({ error = '' }: { error: string | string[] }) => {
	if (typeof error === "string") return <ErrorText error={error} />;

	return error?.map((err, index) => <ErrorText key={index} error={err} />);
};

const ErrorText = ({ error = "" }: { error: string }) => {
	return (
		<div className="flex items-center gap-1.5 text-red-600 dark:text-red-400 text-xs ms-2">
			<WarningCircleIcon size={15} />
			<span>{error}</span>
		</div>
	);
};
