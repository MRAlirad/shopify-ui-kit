import classNames from "classnames";
import Button from "../Button";
import type { RowProps } from "./Props";

const Row = ({ columns, actions = [], index, ...props }: RowProps) => {
	return (
		<tr className="group relative text-xs font-bold hover:bg-neutral-50 border-b last:border-0 border-neutral-200 text-start">
			<td className="p-3 bg-white sticky start-0 group-hover:bg-neutral-50">{index + 1}</td>
			{columns
				.filter((column) => column.visibility !== false)
				.map((column) => (
					<td
						key={column.name}
						className={classNames({
							"px-6 py-3": true,
						})}
					>
						<div className="min-w-max">{column.cellTemplate ? column.cellTemplate(props as { [key: string]: string | number }) : <div>{props[column.name]}</div>}</div>
					</td>
				))}
			{actions.filter((action) => action.visibility !== false).length > 0 && (
				<td className="p-3 bg-white sticky end-0 group-hover:bg-neutral-50">
					<div className="flex items-center justify-center gap-2">
						{actions
							.filter((action) => action.visibility !== false)
							.map((action) => (
								<Button key={action.text} {...action} onClick={() => action.onClick?.(props)} />
							))}
					</div>
				</td>
			)}
		</tr>
	);
};

export default Row;
