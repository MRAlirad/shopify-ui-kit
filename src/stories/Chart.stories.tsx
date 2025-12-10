import type { Meta, StoryObj } from "@storybook/react-vite";
import { Chart } from "../components";
import { ChartType } from "../utils/enums";

const meta = {
	title: "Component/Chart",
	component: Chart,
	parameters: {
		layout: "padded",
	},
	tags: ["autodocs"],
	args: {
        id: "CustomersChart",
        type: ChartType.Bar,
		labels: ["Saturday", "Sunday", "Monday", "Tuesday", "Wendnesday", "Thursday", "Friday"],
        datasets: [
            {
                label: 'Number of customers per day',
                data: [12, 19, 3, 5, 2, 3, 10]
            }
        ]
	},
} satisfies Meta<typeof Chart>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BarChart: Story = {
    args: {
        type: ChartType.Bar,
    }
};

export const LineChart: Story = {
    args: {
        type: ChartType.Line,
    }
};

export const WithOptions: Story = {
    args: {
        options: {
            title: 'Number of customers per day',
            hasTooltip: true,
            // hasLegend: true,
            subtitle: 'This is a subtitle',
            xAxisLabel: 'Day',
            yAxisLabel: 'Number of customers',
        }
    }
};

export const Loading: Story = {
    args: {
        loading: true,
    }
}

export const NoData: Story = {
    args: {
        datasets: [
            {
                label: 'Number of customers per day',
                data: [null, null, null, null, null, null, null],
            }
        ]
    }
}

export const BarMultipleDatasets: Story = {
    args: {
        datasets: [
            {
                label: 'Number of customers joined per day',
                data: [12, 19, 3, 5, 2, 3, 10],
            },
            {
                label: 'Number of total customers',
                data: [10, 15, 20, 25, 30, 25, 23],
                borderColor: 'skyblue',
                backgroundColor: 'skyblue',
            }
        ]
    }
}

export const LineMultipleDatasets: Story = {
    args: {
        type: ChartType.Line,
        datasets: [
            {
                label: 'Number of customers joined per day',
                data: [12, 19, 3, 5, 2, 3, 10],
            },
            {
                label: 'Number of total customers',
                data: [10, 6, 17, 25, 30, 25, 23],
                borderColor: 'skyblue',
                backgroundColor: 'skyblue',
            }
        ]
    }
}