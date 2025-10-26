import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const LineChart = ({ labels, datasets, options }: LineChartProps) => {
	const processedDatasets = datasets.map((ds) => ({
		...ds,
		borderColor: ds.borderColor ?? "rgb(54, 162, 235)",
		backgroundColor: ds.backgroundColor ?? "rgba(54, 162, 235,0.4)",
		tension: 0.1,
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
			<Line data={data} options={processedOptions} />
		</div>
	);
};

interface LineChartProps {
	labels: string[];
	datasets: {
		label: string;
		data: number[];
		borderColor?: string;
		backgroundColor?: string;
		tension?: number; // 0 to 1, 0 is straight line, 1 is curved line
	}[];
	options?: {
		title?: string;
	};
}

export default LineChart;
