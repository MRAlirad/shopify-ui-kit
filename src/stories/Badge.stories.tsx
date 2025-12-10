import type { Meta, StoryObj } from "@storybook/react-vite";
import { Badge } from "../components";

const meta = {
	title: "Component/Badge",
	component: Badge,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	args: {
		text: 'Badge'
	},
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const PrimaryVariants = {
    render: ()=> {
        return (
            <div className="flex items-center flex-wrap gap-4">
                <Badge text="Badge" variant="primary" color="green" />
                <Badge text="Badge" variant="primary" color="blue" />
                <Badge text="Badge" variant="primary" color="neutral" />
                <Badge text="Badge" variant="primary" color="red" />
                <Badge text="Badge" variant="primary" color="yellow" />
                <Badge text="Badge" variant="primary" color="purple" />
            </div>
        )
    }
}

export const SecondaryVariants = {
    render: ()=> {
        return (
            <div className="flex items-center flex-wrap gap-4">
                <Badge text="Badge" variant="secondary" color="green" />
                <Badge text="Badge" variant="secondary" color="blue" />
                <Badge text="Badge" variant="secondary" color="neutral" />
                <Badge text="Badge" variant="secondary" color="red" />
                <Badge text="Badge" variant="secondary" color="yellow" />
                <Badge text="Badge" variant="secondary" color="purple" />
            </div>
        )
    }
}

export const OutlineVariants = {
    render: ()=> {
        return (
            <div className="flex items-center flex-wrap gap-4">
                <Badge text="Badge" variant="outline" color="green" />
                <Badge text="Badge" variant="outline" color="blue" />
                <Badge text="Badge" variant="outline" color="neutral" />
                <Badge text="Badge" variant="outline" color="red" />
                <Badge text="Badge" variant="outline" color="yellow" />
                <Badge text="Badge" variant="outline" color="purple" />
            </div>
        )
    }
}

export const Sizes = {
    render: ()=> {
        return (
            <div className="flex items-center flex-wrap gap-4">
                <Badge text="Badge" size="small" />
                <Badge text="Badge" size="medium" />
                <Badge text="Badge" size="large" />
            </div>
        )
    }
}

export const Pills = {
    render: ()=> {
        return (
            <div className="flex items-center flex-wrap gap-4">
                <Badge text="Badge" pill={false} />
                <Badge text="Badge" pill={true} />
            </div>
        )
    }
}