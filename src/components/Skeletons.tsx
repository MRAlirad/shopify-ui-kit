import Card from "./Card";
import { numListArray } from "../helpers/Array";

export const InputSkeleton = ({ type = 'input', className = '' }: {type?: 'input' | 'textarea', className?: string}) => {
	return (
		<div className={`grid gap-2 ${className}`}>
			<div className="skeleton h-3 w-16"></div>
			<div className={type === 'input' ? 'skeleton h-8' : 'skeleton h-48'}></div>
		</div>
	);
};

export const CardInputSkeleton = () => {
	return (
		<Card>
			<InputSkeleton />
		</Card>
	);
};

export const CardInputsSkeleton = ({ className = '' }) => {
	return (
		<Card className={className}>
			<div className="skeleton h-5 w-40"></div>

			<div className="grid sm:grid-cols-2 gap-2">
				<InputSkeleton className="sm:col-span-2" />
				<InputSkeleton />
				<InputSkeleton />
				<InputSkeleton className="sm:col-span-2" />
			</div>
		</Card>
	);
};

export const ManagementSkeleton = () => {
	return (
		<div className="grid gap-4 px-4 md:px-[2%] h-max py-3">
			<BreadcrumbSkeleton />

			<div className="skeleton h-5 w-32"></div>

			<TableSkeleton />
		</div>
	);
};

export const FormSkeleton = ({ columns = 2 }) => {
	return (
		<div className="grid gap-4 px-4 md:px-[2%] xl:px-[14.5%] pt-4 pb-8 h-max">
			<BreadcrumbSkeleton />

			<div className="flex items-center gap-2">
				<div className="skeleton size-5"></div>
				<div className="skeleton h-5 w-32"></div>
			</div>

			<div className={`grid ${columns === 2 && 'md:grid-cols-[2fr_1fr]'} gap-y-6 gap-x-4`}>
				<div className="grid gap-y-4 h-max">
					<Card>
						<InputSkeleton />
						<InputSkeleton type="textarea" />
					</Card>

					<Card>
						<InputSkeleton />
						<InputSkeleton />
					</Card>
				</div>

				<div className="grid gap-y-4 h-max">
					<Card>
						<InputSkeleton />
						<InputSkeleton />
					</Card>

					<Card>
						<InputSkeleton />
						<InputSkeleton />
					</Card>
				</div>
			</div>

			<div className="flex items-center gap-2 flex-row-reverse">
				<div className="skeleton h-10 w-24"></div>
				<div className="skeleton h-10 w-24"></div>
			</div>
		</div>
	);
};

export const TableSkeleton = ({ count = 7 }) => {
	return (
		<div className="grid gap-6">
			<div className="card">
				<div className="action-box flex items-center justify-between h-10 px-4">
					<div className="flex items-center gap-1.5">
						<div className="skeleton w-10 h-5"></div>
						<div className="skeleton w-10 h-5"></div>
					</div>

					<div className="flex items-center gap-1.5">
						<div className="skeleton w-10 h-5"></div>
						<div className="skeleton w-10 h-5"></div>
					</div>
				</div>

				<div className="table-wrapper overflow-x-auto">
					<table className="w-full">
						<thead>
							<tr className="border-b bg-neutral-100">
								{numListArray(count).map(c => (
									<th key={c} className="p-3">
										<div className="skeleton h-3"></div>
									</th>
								))}
							</tr>
						</thead>

						<TableBodySkeleton count={count} />
					</table>
				</div>
			</div>

			<PaginationSkeleton />
		</div>
	);
};

export const TableBodySkeleton = ({ count = 7 }) => {
	return (
		<tbody>
			{numListArray(count > 5 ? 5 : count).map(r => (
				<tr key={r} className="border-b last:border-0 border-neutral-200">
					{numListArray(count).map(r => (
						<td key={r} className="p-3">
							<div className="skeleton h-3"></div>
						</td>
					))}
				</tr>
			))}
		</tbody>
	);
};

export const TableRowSkeleton = ({ count = 7 }) => {
	return (
		<tr className="h-10 border-b border-solid last:border-0">
			{numListArray(count).map(r => (
				<td key={r} className="px-[3%]">
					<div className="skeleton h-2"></div>
				</td>
			))}
		</tr>
	);
};

export const CheckboxSkeleton = () => {
	return (
		<div className="flex items-center gap-2">
			<div className="skeleton size-5"></div>
			<div className="skeleton h-2 w-3/5"></div>
		</div>
	);
};

export const AccordionSkeleton = () => {
	return (
		<div className="space-y-6 px-4 md:px-[2%] py-8">
			<h3 className="skeleton h-8 w-40"></h3>

			<div className="card">
				{[1, 2, 3, 4, 5, 6].map(num => (
					<div key={num} className="flex items-center justify-between p-4 border-b">
						<div className="skeleton h-3 w-1/2"></div>
						<div className="skeleton size-5"></div>
					</div>
				))}
			</div>
		</div>
	);
};

export const BreadcrumbSkeleton = () => {
	return (
		<div className="flex items-center gap-1.5">
			<div className="skeleton w-16 h-4"></div>
			<div className="skeleton size-4"></div>
			<div className="skeleton w-16 h-4"></div>
			<div className="skeleton size-4"></div>
			<div className="skeleton w-16 h-4"></div>
		</div>
	);
};

export const PaginationSkeleton = () => {
	return (
		<div className="flex items-ceter gap-1 justify-self-center">
			{numListArray(6).map(n => (
				<div key={n} className="skeleton size-6"></div>
			))}
		</div>
	);
};