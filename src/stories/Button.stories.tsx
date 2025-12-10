import type { Meta, StoryObj } from "@storybook/react-vite";
import { ArrowRightIcon, Button } from "../components";
import { FaSave } from "react-icons/fa";

const meta = {
	title: "Component/Button",
	component: Button,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	args: {
		text: "Click here",
	},
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const PrimaryColors = {
	render: () => {
		return (
			<div className="flex items-center flex-wrap gap-4">
				<Button text="Click here" color="black" />
				<Button text="Click here" color="white" />
				<Button text="Click here" color="simple" />
				<Button text="Click here" color="red" />
				<Button text="Click here" color="green" />
				<Button text="Click here" color="purple" />
				<Button text="Click here" color="blue" />
			</div>
		);
	},
};

export const OutlineColors = {
	render: () => {
		return (
			<div className="flex items-center flex-wrap gap-4">
				<Button text="Click here" color="black-outline" />
				<Button text="Click here" color="red-outline" />
				<Button text="Click here" color="green-outline" />
				<Button text="Click here" color="purple-outline" />
				<Button text="Click here" color="blue-outline" />
			</div>
		);
	},
};

export const SimpleColors = {
	render: () => {
		return (
			<div className="flex items-center flex-wrap gap-4">
				<Button text="Click here" color="black-simple" />
				<Button text="Click here" color="red-simple" />
				<Button text="Click here" color="green-simple" />
				<Button text="Click here" color="purple-simple" />
				<Button text="Click here" color="blue-simple" />
			</div>
		);
	},
};

export const Sizes = {
	render: () => {
		return (
			<div className="flex items-center flex-wrap gap-4">
				<Button text="Click here" size="small" />
				<Button text="Click here" size="medium" />
				<Button text="Click here" size="large" />
				<Button icon={<ArrowRightIcon size={18} />} size="icon" />
			</div>
		);
	},
};

export const LoadingAndDisabled = {
	render: () => {
		return (
			<div className="flex items-center flex-wrap gap-4">
				<Button text="Loading..." loading />
				<Button text="Disabled" disabled />
			</div>
		);
	},
};

export const FullWidth: Story = {
	parameters: {
		layout: "padded",
	},
	args: {
		fullWidth: true,
	},
};

export const WithHint: Story = {
	args: {
		hint: "This is a hint",
		text: 'Hover on me'
	},
};

export const WithIcon = {
	render: () => {
		return (
			<div className="flex items-center flex-wrap gap-4">
				<Button text="Save" icon={<FaSave size={18} />} />
				<Button size="icon" icon={<FaSave size={18} />} />
			</div>
		);
	},
};
