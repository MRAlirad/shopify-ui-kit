import React, { useRef, useCallback } from "react";
import DxDataGrid, {
	Column,
	ColumnChooser,
	type DataGridRef,
	Export,
	FilterRow,
	Grouping,
	GroupPanel,
	HeaderFilter,
	LoadPanel,
	Pager,
	Paging,
	RemoteOperations,
	Scrolling,
	SearchPanel,
	Selection,
	Sorting,
} from "devextreme-react/data-grid";
import "devextreme/dist/css/dx.light.css";
import type { ExportingEvent } from "devextreme/ui/data_grid";
import Card from "../Card";
import ActionCell, { type ActionProps } from "./ActionCell";
import { type ButtonProps } from "../Button";

const DataGrid = <T,>(
	{
		actions = [],
		allowColumnReordering = true,
		allowColumnResizing = true,
		cardAction,
		columnAutoWidth = true,
		columnChooser,
		columnHidingEnabled = false,
		columnResizingMode = "widget",
		columns = [],
		dataSource = [],
		exportData,
		filterRow,
		groupPanel,
		grouping,
		headerFilter,
		height,
		id,
		keyExpr,
		loadPanel,
		onExporting,
		pager,
		paging,
		remoteOperations,
		rowAlternationEnabled = true,
		scrolling,
		searchPanel,
		selection,
		sorting,
		title,
		wordWrapEnabled = false,
	}: DataGridProps<T>,
	ref: React.ForwardedRef<DataGridRef<T, string> | null>
) => {
	// Internal ref to access the DataGrid instance inside the component
	const datagridRef = useRef<DataGridRef<T, string>>(null);

	// Callback ref to sync both internal ref and forwarded ref
	const setRef = useCallback(
		(instance: DataGridRef<T, string> | null) => {
			datagridRef.current = instance;
			if (typeof ref === "function") {
				ref(instance);
			} else if (ref && "current" in ref) {
				// Type-safe assignment for mutable ref objects
				type MutableRef = { current: DataGridRef<T, string> | null };
				(ref as MutableRef).current = instance;
			}
		},
		[ref]
	);

	return (
		<Card title={title} action={cardAction}>
			<div className="overflow-x-auto">
				<DxDataGrid
					{...{
						allowColumnReordering,
						allowColumnResizing,
						columnAutoWidth,
						columnHidingEnabled,
						columnResizingMode,
						dataSource,
						height,
						id,
						keyExpr,
						noDataText: "داده ای یافت نشد",
						onExporting,
						ref: setRef,
						rowAlternationEnabled,
						rtlEnabled: true,
						showBorders: true,
						width: "100%",
						wordWrapEnabled,
					}}
				>
					<Column
						dataField="Row"
						caption="ردیف"
						width={50}
						alignment="center"
						allowSorting={false}
						allowFiltering={false}
						allowReordering={false}
						fixed
						fixedPosition="right"
						cellRender={(cellInfo) => cellInfo.rowIndex + 1}
					/>
					{columns.map((column) => (
						<Column key={column.dataField} alignment="center" {...column}>
							{column.subColumns?.map((subColumn) => <Column key={subColumn.dataField} alignment="center" dataType="string" {...subColumn} />)}
						</Column>
					))}
					<ActionCell keyExpr={keyExpr} actions={actions} />

					<ColumnChooser mode="select" title="انتخاب ستون‌ها" {...columnChooser} />
					<Export enabled {...exportData} />
					<FilterRow {...filterRow} />
					<GroupPanel emptyPanelText="برای گروه‌بندی بر اساس آن ستون، عنوان ستون را به اینجا بکشید" {...groupPanel} />
					<Grouping {...grouping} />
					<HeaderFilter visible allowSearch {...headerFilter} />
					<LoadPanel enabled text="در حال بارگذاری..." indicatorSrc="/pics/Loader.gif" {...loadPanel} />
					<Pager visible showPageSizeSelector showNavigationButtons allowedPageSizes={[10, 15, 20, 30, 50]} {...pager} />
					<Paging enabled defaultPageSize={10} {...paging} />
					<RemoteOperations filtering sorting grouping paging {...remoteOperations} />
					<Scrolling {...scrolling} />
					<SearchPanel visible placeholder="جست و جو" {...searchPanel} />
					<Selection showCheckBoxesMode="always" {...selection} />
					<Sorting mode="multiple" {...sorting} />
				</DxDataGrid>
			</div>
		</Card>
	);
};

interface DataGridProps<T> {
	actions?: ActionProps<T>[];
	allowColumnReordering?: boolean;
	allowColumnResizing?: boolean;
	cardAction?: ButtonProps;
	columnAutoWidth?: boolean;
	columnChooser?: ColumnChooserProps;
	columnHidingEnabled?: boolean;
	columnResizingMode?: "widget" | "nextColumn";
	columns: ColumnProps[];
	dataSource: T[];
	exportData?: ExportProps;
	filterRow?: FilterRowProps;
	groupPanel?: GroupPanelProps;
	grouping?: GroupingProps;
	headerFilter?: HeaderFilterProps;
	height?: number;
	id: string;
	keyExpr: string;
	loadPanel?: LoadPanelProps;
	onExporting?: (e: ExportingEvent) => void;
	pager?: PagerProps;
	paging?: PagingProps;
	remoteOperations?: RemoteOperationsProps;
	rowAlternationEnabled?: boolean;
	scrolling?: ScrollingProps;
	searchPanel?: SearchPanelProps;
	selection?: SelectionProps;
	sorting?: SortingProps;
	title?: string;
	wordWrapEnabled?: boolean;
}

type BaseColumnProps = React.ComponentProps<typeof Column>;
type ColumnChooserProps = React.ComponentProps<typeof ColumnChooser>;
type ColumnProps = BaseColumnProps & { subColumns?: ColumnProps[] };
type ExportProps = React.ComponentProps<typeof Export>;
type FilterRowProps = React.ComponentProps<typeof FilterRow>;
type GroupingProps = React.ComponentProps<typeof Grouping>;
type GroupPanelProps = React.ComponentProps<typeof GroupPanel>;
type HeaderFilterProps = React.ComponentProps<typeof HeaderFilter>;
type LoadPanelProps = React.ComponentProps<typeof LoadPanel>;
type PagerProps = React.ComponentProps<typeof Pager>;
type PagingProps = React.ComponentProps<typeof Paging>;
type RemoteOperationsProps = React.ComponentProps<typeof RemoteOperations>;
type ScrollingProps = React.ComponentProps<typeof Scrolling>;
type SearchPanelProps = React.ComponentProps<typeof SearchPanel>;
type SelectionProps = React.ComponentProps<typeof Selection>;
type SortingProps = React.ComponentProps<typeof Sorting>;

// Export the component with forwardRef
export default React.forwardRef(DataGrid) as <T>(props: DataGridProps<T> & { ref?: React.ForwardedRef<DataGridRef<T, string> | null> }) => React.ReactElement;
