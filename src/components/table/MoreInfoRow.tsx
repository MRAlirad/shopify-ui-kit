import { Fragment, useContext } from "react";
import TableContext from "../../contexts/TableContext";
import type { ColumnProps } from "./Props";
import { useFormContext } from "react-hook-form";

const MoreInfoRow = <T,>({ rowData }: { rowData: T }) => {
	const { columns } = useContext(TableContext);

    const {watch} = useFormContext();

    if(watch("moreInfo") !== (rowData as { id: string | number }).id) return;

	return (
		<tr className="border-b last:border-0 border-neutral-200 relative">
            <td className="p-3 bg-white sticky start-0"></td>
			<td className="px-6" colSpan={columns.filter((column: ColumnProps<T>) => column.visibility !== false).length  + 1}>
				<div className="grid grid-cols-[max-content_1fr] items-center gap-1 text-xs pt-0.5 pb-2">
					{columns.map((column: ColumnProps<T>) => (
						<Fragment key={column.name}>
							<span className="text-neutral-700  font-bold">{column.label}:</span>
							<span>
								{column.cellTemplate ? (
									column.cellTemplate(rowData)
								) : (
									<div>
										{rowData && typeof rowData === "object" && rowData !== null && column.name in rowData
											? (rowData as Record<string, string | number | undefined>)[column.name]
											: ""}
									</div>
								)}
							</span>
						</Fragment>
					))}
				</div>
			</td>
		</tr>
	);
};

export default MoreInfoRow;
