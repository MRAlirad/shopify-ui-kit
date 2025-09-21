import { LoaderIcon } from "./icon";

interface Props {
	size?: string;
	className?: string;
}

const Loader = ({ size = "10", className = "" }: Props) => {
	return (
		<div className={`flex items-center justify-center w-full h-full ${className}`}>
			<LoaderIcon size={size} className="animate-spin" />
		</div>
	);
};

export default Loader;
