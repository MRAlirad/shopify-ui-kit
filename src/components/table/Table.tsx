import { useSearchParams } from "react-router";
import { FormProvider, useForm } from "react-hook-form";
import { TableBodySkeleton } from "../Skeletons";
import FilterSearch from "./FilterSearch";
import Column from "./Column";
import Row from "./Row";
import Pagination from "../Pagination";
import EmptySearchBox from "./EmptySearchBox";
import type { TableProps } from "./Props";

function Table<T>({
	columns = [],
	dataSource = [],
	pagination,
	loading = false,
	actions = [],
	filterOptions = [],
	searchPanel = false,
	selectable = false,
	moreInfo = false,
}: TableProps<T>) {
	const [searchParams, setSearchParams] = useSearchParams();

	const formMethods = useForm({
		defaultValues: (() => {
			const output: Record<string, boolean | string | T[] | null> = {};
			for (const row of dataSource) {
				output[`select-${(row as { id: string | number }).id}`] = false;
			}
			output["search"] = searchParams.get("search") ?? "";
			output["selectedRows"] = [];
			output["moreInfo"] = null;
			return output;
		})(),
	});

	return (
		<FormProvider {...formMethods}>
			<div className="grid gap-6">
				<div className="table-container card">
					<FilterSearch {...{ filterOptions, searchPanel, columns, selectable }} />

					<div className="table-wrapper overflow-x-auto">
						<table className="w-full">
							<thead>
								<tr className="text-neutral-600 text-xs border-b border-neutral-200">
									<Column name="row" label="ردیف" className="w-[1%] !p-3 sticky start-0" />
									{columns.map((column) => (
										<Column key={column.name} {...column} />
									))}
									{actions.length > 0 && <Column name="actions" label="" className="w-[1%] !p-3 sticky end-0" />}
								</tr>
							</thead>
							{loading ? (
								<TableBodySkeleton count={columns.filter((column) => column.visibility !== false).length + 1} />
							) : dataSource.length === 0 ? (
								<EmptySearchBox />
							) : (
								<tbody>
									{dataSource.map((row, index) => (
										<Row<T> key={(row as { id: string | number }).id} rowData={row} index={index} columns={columns} actions={actions} selectable={selectable} moreInfo={moreInfo} />
									))}
								</tbody>
							)}
						</table>
					</div>
				</div>

				<Pagination
					currentPage={pagination?.currentPage ?? 1}
					pageCount={pagination?.pageCount ?? 1}
					onChangePage={(page) => {
						const params: Record<string, string> = {};

						for (const [key, value] of searchParams.entries()) {
							params[key] = value;
						}
						setSearchParams({ ...params, page: page.toString() });
					}}
				/>
			</div>
		</FormProvider>
	);
}

export default Table;
