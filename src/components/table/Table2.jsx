import PropTypes from 'prop-types';
import { useFormContext } from 'react-hook-form';
import { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import classNames from 'classnames';
import { FormProvider, useForm } from 'react-hook-form';
import { TableBodySkeleton } from './Skeletons';
import Pagination from './Pagination';
import Input from './Input';
import Button from './Button';
import Popup from './Popup';
import EmptyBox from './EmptyBox';
import RadioBtn from './RadioBtn';
import Error from './Error';
import { ThreeDotsHorizontalIcon, SearchIcon, UndoIcon, ArrowUpDownIcon, FilterIcon } from './icon';
import { GenerateRandomString } from '../helpers/String';

const Table = ({
	type = 'page',
	columns = [],
	rows = [],
	pagination = {},
	isLoading = false,
	hasRowColumn = true,
	filterName,
	filterOptions = [],
	sortOptions = [],
	hasSearchInput = false,
	name = '',
}) => {
	const [searchParams, setSearchParams] = useSearchParams();
	const formContext = useFormContext();

	return (
		<div className="grid gap-6">
			<div
				className={classNames({
					'table-container card': true,
					'bg-red-50 ring-1 ring-red-700 shadow-red-700 shadow-sm': formContext?.formState?.errors[name],
				})}
			>
				{(filterOptions.length > 0 || sortOptions.length > 0) && <FilterSort {...{ filterName, hasSearchInput, filterOptions, sortOptions }} />}

				<div className="table-wrapper overflow-x-auto">
					<table className="w-full">
						<thead>
							<tr className="text-neutral-600 text-xs border-b">
								{hasRowColumn && <th className="w-[1%] bg-neutral-100 p-3 text-start sticky start-0">ردیف</th>}
								{columns.map(({ name, label, className }) => (
									<th
										key={name}
										className={classNames({
											'bg-neutral-100 text-start px-6 py-3': true,
											'w-[1%] p-3 sticky end-0': name === 'action',
											[className]: className,
										})}
									>
										<div className="min-w-max">{label}</div>
									</th>
								))}
							</tr>
						</thead>

						{isLoading ? (
							<TableBodySkeleton count={columns.length + 1} />
						) : rows.length === 0 ? (
							<EmptySearchBox />
						) : (
							<tbody>
								{rows.map((row, index) => (
									<TableRow key={index} {...{ index, row, hasRowColumn }} />
								))}
							</tbody>
						)}
					</table>
				</div>
			</div>

			{formContext?.formState?.errors[name] && <Error type="message" errors={formContext?.formState?.errors[name]?.message} />}

			{pagination.pageCount > 1 && (
				<Pagination
					currentPage={pagination.currentPage}
					pageCount={pagination.pageCount}
					onChangePage={page => {
						if (type === 'modal') pagination.onChangePage(page);
						else {
							const params = {};

							for (let [key, value] of searchParams.entries()) {
								params[key] = value;
							}
							setSearchParams({ ...params, page });
						}
					}}
				/>
			)}
		</div>
	);
};

const TableRow = ({ row = [], index, hasRowColumn = true }) => {
	const uId = GenerateRandomString();

	return (
		<tr className="group relative text-xs font-bold hover:bg-neutral-50 border-b last:border-0 border-neutral-200 text-start">
			{hasRowColumn && <td className="p-3 bg-white sticky start-0 group-hover:bg-neutral-50">{index + 1}</td>}

			{row.map(({ name, value, component, link, className, actions, minWidthMax = true }) => (
				<td
					key={name}
					className={classNames({
						'px-6 py-3': true,
						'!p-2 bg-white sticky end-0 group-hover:bg-neutral-50 z-10': name === 'action',
						'absolute inset-0 !p-0': name === 'link',
						'absolute inset-0 !bg-neutral-100/60 z-20': name === 'overlay',
						[className]: className,
					})}
				>
					<div
						className={classNames({
							'min-w-max': minWidthMax,
							'h-full': name === 'link',
						})}
					>
						{link && <Link className="block w-full h-full" to={link}></Link>}

						{actions && (
							<div className="flex items-center justify-center">
								<Button color="simple" size="small" className={`action-${uId} size-7 hover:bg-neutral-200`} icon={<ThreeDotsHorizontalIcon size={18} className="text-neutral-500" />} />

								<Popup anchorSelect={`.action-${uId}`} place="right" className="grid p-2 min-w-40 w-max">
									{actions.map(({ text, icon, className, loading = false, to, onClick, disabled = false }, index) => (
										<Button
											key={index}
											text={text}
											fluid
											size="small"
											color="simple"
											loading={loading}
											disabled={disabled}
											icon={icon}
											className={`!py-1.5 justify-start hover:bg-neutral-100 text-neutral-600 ${className}`}
											to={to}
											onClick={onClick}
										/>
									))}
								</Popup>
							</div>
						)}

						{value || component}
					</div>
				</td>
			))}
		</tr>
	);
};

const EmptySearchBox = () => {
	return (
		<tbody>
			<tr>
				<td colSpan="15">
					<EmptyBox text="فیلترها یا عبارت جستجو را تغییر دهید" />
				</td>
			</tr>
		</tbody>
	);
};

const FilterSort = ({ filterName = 'statusId', filterOptions = [], sortOptions = [], hasSearchInput = false }) => {
	const [searchInputDisplay, setSearchInputDisplay] = useState(false);
	const [searchParams, setSearchParams] = useSearchParams();
	const formMethods = useForm();

	return (
		<FormProvider {...formMethods}>
			<div
				className={classNames({
					'px-3': true,
					'pb-2': searchInputDisplay,
				})}
			>
				<div className="flex items-center justify-between h-10">
					<div className="hidden sm:flex items-center gap-1.5">
						{filterOptions?.map(({ label, value }) => (
							<Button
								key={value}
								color={searchParams.get(filterName) == value ? 'white' : 'simple'}
								size="small"
								text={label}
								onClick={() => {
									const params = {};

									for (let [key, value] of searchParams.entries()) {
										if (key === 'page') continue;
										params[key] = value;
									}
									setSearchParams({ ...params, [filterName]: value });
								}}
							/>
						))}
					</div>
					<div className="flex sm:hidden">
						<Button className="filter-btn" color="simple" size="small" icon={<FilterIcon size={13} />} onClick={() => setSearchParams({})} />
						<Popup anchorSelect=".filter-btn" place="bottom-end" className="grid gap-2 py-2 px-5 min-w-40">
							<span>فیلتر:</span>
							{filterOptions?.map(({ label, value }) => (
								<Button
									key={value}
									color={searchParams.get(filterName) == value ? 'white' : 'simple'}
									size="small"
									fluid
									text={label}
									className="justify-start"
									onClick={() => {
										const params = {};

										for (let [key, value] of searchParams.entries()) {
											if (key === 'page') continue;
											params[key] = value;
										}
										setSearchParams({ ...params, [filterName]: value });
									}}
								/>
							))}
						</Popup>
					</div>
					<div className="flex items-center">
						<Button
							color="simple"
							size="small"
							icon={<UndoIcon size={13} />}
							onClick={() => {
								setSearchParams({});
								formMethods.setValue('search', '');
							}}
						/>
						{hasSearchInput && <Button color="simple" size="small" icon={<SearchIcon size={13} />} onClick={() => setSearchInputDisplay(prev => !prev)} />}
						{sortOptions.length > 0 && (
							<>
								<Button color="simple" size="small" icon={<ArrowUpDownIcon size={13} />} className="sort-btn" />
								<Popup anchorSelect=".sort-btn" place="bottom-end" className="grid gap-4 py-2 px-5 min-w-40">
									<span>مرتب سازی:</span>
									<RadioBtn
										name="sort"
										defaultValue={searchParams.get('sortBy')}
										className={`grid ${sortOptions.length > 6 ? 'grid-cols-2' : 'grid-cols-1'}`}
										options={sortOptions}
										onChange={value => {
											const params = {};

											for (let [key, value] of searchParams.entries()) {
												if (key === 'page') continue;
												params[key] = value;
											}

											setSearchParams({
												...params,
												sortBy: value,
											});
										}}
									/>
								</Popup>
							</>
						)}
					</div>
				</div>
				{searchInputDisplay && (
					<Input
						name="search"
						placeholder="عنوان خود را جست و جو کنید"
						type="search"
						onChange={value => {
							if (value) setSearchParams({ search: value });
							else setSearchParams({});
						}}
					/>
				)}
			</div>
		</FormProvider>
	);
};

Table.propTypes = {
	type: PropTypes.oneOf(['page', 'modal']),
	columns: PropTypes.arrayOf(
		PropTypes.shape({
			name: PropTypes.string.isRequired,
			label: PropTypes.string.isRequired,
			classNames: PropTypes.string,
		})
	),
	rows: PropTypes.arrayOf(
		PropTypes.arrayOf(
			PropTypes.shape({
				name: PropTypes.string.isRequired,
				value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
				component: PropTypes.node,
				link: PropTypes.string,
				className: PropTypes.string,
				actions: PropTypes.arrayOf(PropTypes.object), // array of Button properties
			})
		)
	),
	pagination: PropTypes.shape({
		currentPage: PropTypes.number,
		pageCount: PropTypes.number,
		onChangePage: PropTypes.func,
	}),
	isLoading: PropTypes.bool,
	hasRowColumn: PropTypes.bool,
	filterName: PropTypes.string,
	filterOptions: PropTypes.arrayOf(
		PropTypes.shape({
			value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
			label: PropTypes.string,
		})
	),
	sortOptions: PropTypes.arrayOf(
		PropTypes.shape({
			value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
			label: PropTypes.string,
		})
	),
	hasSearchInput: PropTypes.bool,
	name: PropTypes.string,
};

TableRow.propTypes = {
	row: PropTypes.arrayOf(
		PropTypes.shape({
			name: PropTypes.string.isRequired,
			value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
			component: PropTypes.node,
			link: PropTypes.string,
			className: PropTypes.string,
			actions: PropTypes.arrayOf(PropTypes.object), // array of Button properties
		})
	).isRequired,
	index: PropTypes.number.isRequired,
	hasRowColumn: PropTypes.bool,
};

FilterSort.propTypes = {
	filterName: PropTypes.string,
	filterOptions: PropTypes.arrayOf(
		PropTypes.shape({
			value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
			label: PropTypes.string,
		})
	),
	sortOptions: PropTypes.arrayOf(
		PropTypes.shape({
			value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
			label: PropTypes.string,
		})
	),
	hasSearchInput: PropTypes.bool,
};

export default Table;