import { Chart, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import { Bar } from "react-chartjs-2";

Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);
Chart.defaults.font.family = "vazir FD";

const BarChart = ({ labels, datasets, options }: BarChartProps) => {
    const processedDatasets = datasets.map((ds) => ({
		...ds,
		backgroundColor: ds.backgroundColor ?? "rgba(54, 162, 235)",
		borderRadius: 4,
	}));

	const data = {
		labels,
		datasets: processedDatasets,
	};

	const processedOptions = {
		plugins: {
			title: {
				display: !!options?.title,
				text: options?.title,
			},
		},
	};

	return (
		<div className="w-full h-full">
			<Bar data={data} options={processedOptions} />
		</div>
	);
};

interface BarChartProps {
	labels: string[];
	datasets: {
		label: string;
		data: number[];
		backgroundColor?: string;
	}[];
	options?: {
		title?: string;
	};
}

export default BarChart;
