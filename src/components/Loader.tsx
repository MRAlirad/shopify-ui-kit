const Loader = ({ size = "size-5", className = "", color = "blue" }: Props) => {
	const thickness = Math.ceil(+size.split('-')[1] / 2);

	const colourMap = {
		blue: '#2b7fff',
		gray: '#6b7280',
		black: '#000000',
	};

	return (
		<div className={`flex items-center justify-center w-full h-full ${className}`}>
			<div
				className={`loader-spinner animate-spin rounded-full ${size}`}
				style={{
					background: `radial-gradient(farthest-side, ${colourMap[color]} 94%, #0000) top/${thickness}px ${thickness}px no-repeat, conic-gradient(#0000 30%, ${colourMap[color]})`,
					mask: `radial-gradient(farthest-side, #0000 calc(100% - ${thickness}px), #000 0)`,
				}}
			></div>
		</div>
	);
};

interface Props {
	size?: string;
	className?: string;
	color?: "blue" | "gray" | "black";
}

export default Loader;
