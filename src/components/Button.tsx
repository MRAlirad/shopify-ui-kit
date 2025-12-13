import classNames from "classnames";
import { Popup, LoaderIcon } from ".";
import { generateRandomString } from "../helpers/String";
import type { ButtonProps } from "./props";

const Button = ({
	color = "black",
	size = "medium",
	text = "",
	icon,
	type = "button",
	fullWidth = false,
	disabled = false,
	loading = false,
	className = "",
	onClick = () => {},
	hint = "",
}: ButtonProps) => {
	const uId = generateRandomString();

	return (
		<button
			className={classNames({
				[`btn-${uId}`]: hint,
				btn: true,
				[color]: true,
				[size]: true,
				disabled: disabled || loading,
				"w-full": fullWidth,
				[className]: className,
			})}
			disabled={disabled || loading}
			type={type}
			onClick={onClick}
		>
			<div className="flex items-center justify-center gap-2">
				{loading && <LoaderIcon size="20" className="animate-spin" />}
				{icon && !loading && icon}
				{text && <span>{text}</span>}
			</div>

			{hint && (
				<Popup anchorSelect={`.btn-${uId}`} place="top" className="p-1! w-max! rounded-md!" openOnClick={false} clickable={false}>
					<span className="text-xs text-neutral-700">{hint}</span>
				</Popup>
			)}
		</button>
	);
};

export default Button;
