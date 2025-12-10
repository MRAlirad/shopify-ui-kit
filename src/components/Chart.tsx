import { Chart as ChartJS, PointElement, LineElement, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, SubTitle } from "chart.js";
import { Bar, Line } from "react-chartjs-2";
import { Loader } from ".";
import { type ChartProps } from "./props";
import { ChartType } from "../utils/enums";

ChartJS.defaults.font = { family: "vazir", size: 10 };
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, LineElement, Title, Tooltip, Legend, SubTitle);

const Chart = ({ id, type = ChartType.Bar, labels, datasets = [], options, loading = false }: ChartProps) => {
	const ChartComponent = type === ChartType.Bar ? Bar : Line;

	const processedDatasets = datasets.map((ds) => ({
		...ds,
		borderColor: ds.borderColor ?? "rgba(20, 71, 230)",
		backgroundColor: ds.backgroundColor ?? "rgba(20, 71, 230)",
		tension: 0.1,
		borderRadius: type === ChartType.Bar ? 4 : undefined,
	}));

	const data = {
		labels,
		datasets: processedDatasets,
	};

	const processedOptions = {
		responsive: true,
		plugins: {
			title: {
				display: !!options?.title,
				text: options?.title,
			},
			legend: {
				display: options?.hasLegend ?? true,
				position: "bottom" as const,
			},
			tooltip: {
				enabled: options?.hasTooltip ?? true,
			},
			subtitle: {
				display: !!options?.subtitle,
				text: options?.subtitle,
				position: "bottom" as const,
				font: {
					weight: 700,
				},
			},
		},
		scales: {
			x: {
				title: {
					display: !!options?.xAxisLabel,
					text: options?.xAxisLabel,
				},
			},
			y: {
				beginAtZero: true,
				title: {
					display: !!options?.yAxisLabel,
					text: options?.yAxisLabel,
				},
			},
		},
	};

	const hasData = processedDatasets.some((ds) => ds.data.some((d) => d !== null));

	return (
		<div className="relative w-full h-full">
			<ChartComponent id={id} data={data} options={processedOptions} />
			{loading && <Loader size="size-20" className="absolute inset-0 bg-white/40" />}
			{!hasData && !loading && <div className="absolute inset-0 flex items-center justify-center text-red-900 bg-white/40 text-lg font-medium">هیچ داده ای موجود نیست</div>}
		</div>
	);
};

export default Chart;
