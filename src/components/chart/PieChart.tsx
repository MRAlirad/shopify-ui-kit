import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = ({ labels, datasets = [], options }: PieChartProps) => {
    const processedDatasets = datasets.map((ds) => ({
		...ds,
		backgroundColor: ds.backgroundColor ?? "rgba(54, 162, 235)",
		borderWidth: 1,
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
		},
	};

	return (
		<div className="h-full w-full">
			<Pie data={data} options={processedOptions} />
		</div>
	);
};

interface PieChartProps {
	labels: string[];
	datasets: {
		label: string;
		data: number[];
		backgroundColor?: string[];
	}[];
	options?: {
		title?: string;
	};
}

export default PieChart;
