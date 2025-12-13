// Image import - this will be handled by rollup plugin
// For library users, they may need to configure their bundler to handle this
import EmptyBoxImg from '../assets/pics/EmptyBox.png'

function EmptyBox({ title = "موردی یافت نشد", text = "" }: EmptyBoxProps) {
	return (
		<div className="flex flex-col justify-center items-center space-y-3 py-6">
			<div className="img-box size-40">
				<img src={EmptyBoxImg} alt="Empty Search" />
			</div>
			<h2 className="text-xl text-neutral-700 text-center">{title}</h2>
			{text && <p className="text-neutral-500 text-xs text-center">{text}</p>}
		</div>
	);
}

interface EmptyBoxProps {
	title?: string;
	text?: string;
}

export default EmptyBox;
