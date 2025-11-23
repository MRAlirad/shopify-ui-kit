import { Chart as ChartJS, PointElement, LineElement, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, SubTitle } from "chart.js";
import { Bar, Line } from "react-chartjs-2";
import { ErrorMessage } from "./Error";

ChartJS.defaults.font = { family: "vazir", size: 10 };
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, LineElement, Title, Tooltip, Legend, SubTitle);

const Chart = ({ id, type = "bar", labels, datasets = [], options }: ChartProps) => {
	const ChartComponent = type === "bar" ? Bar : Line;

	const processedDatasets = datasets.map((ds) => ({
		...ds,
		borderColor: ds.borderColor ?? "rgba(20, 71, 230)",
		backgroundColor: ds.backgroundColor ?? "rgba(20, 71, 230)",
		tension: 0.1,
		borderRadius: type === "bar" ? 4 : undefined,
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
			y: {
				beginAtZero: true,
			},
		},
	};

	if (!type) return <ErrorMessage error="نوع نمودار مشخص نشده است" />;

	return (
		<div className="relativew-full h-full">
			<ChartComponent id={id} data={data} options={processedOptions} />
		</div>
	);
};

interface ChartProps {
	id: string;
	type: "bar" | "line";
	labels: string[];
	datasets: {
		label?: string;
		data: number[];
		borderColor?: string;
		backgroundColor?: string;
		tension?: number; // 0 to 1, 0 is straight line, 1 is curved line
	}[];
	options?: {
		title?: string;
		hasTooltip?: boolean;
		hasLegend?: boolean;
		subtitle?: string;
	};
}

export default Chart;
