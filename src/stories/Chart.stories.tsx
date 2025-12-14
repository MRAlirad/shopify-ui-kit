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
		labels: ["شنبه", "یکشنبه", "دوشنبه", "سه شنبه", "چهارشنبه", "پنجشنبه", "جمعه"],
        datasets: [
            {
                label: 'تعداد مشتریان برای هر روز',
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
            title: 'تعداد مشتریان برای هر روز',
            hasTooltip: true,
            // hasLegend: true,
            subtitle: 'این یک متن زیر عنوان است',
            xAxisLabel: 'روز',
            yAxisLabel: 'تعداد مشتریان',
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
                label: 'تعداد مشتریان برای هر روز',
                data: [null, null, null, null, null, null, null],
            }
        ]
    }
}

export const BarMultipleDatasets: Story = {
    args: {
        datasets: [
            {
                label: 'تعداد مشتریان به ثبت نام برای هر روز',
                data: [12, 19, 3, 5, 2, 3, 10],
            },
            {
                label: 'تعداد مشتریان کل',
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
                label: 'تعداد مشتریان به ثبت نام برای هر روز',
                data: [12, 19, 3, 5, 2, 3, 10],
            },
            {
                label: 'تعداد مشتریان کل',
                data: [10, 6, 17, 25, 30, 25, 23],
                borderColor: 'skyblue',
                backgroundColor: 'skyblue',
            }
        ]
    }
}