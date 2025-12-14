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
		text: "کلیک کنید",
	},
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const PrimaryColors = {
	render: () => {
		return (
			<div className="flex items-center flex-wrap gap-4">
				<Button text="کلیک کنید" color="black" />
				<Button text="کلیک کنید" color="white" />
				<Button text="کلیک کنید" color="simple" />
				<Button text="کلیک کنید" color="red" />
				<Button text="کلیک کنید" color="green" />
				<Button text="کلیک کنید" color="purple" />
				<Button text="کلیک کنید" color="blue" />
			</div>
		);
	},
};

export const OutlineColors = {
	render: () => {
		return (
			<div className="flex items-center flex-wrap gap-4">
				<Button text="کلیک کنید" color="black-outline" />
				<Button text="کلیک کنید" color="red-outline" />
				<Button text="کلیک کنید" color="green-outline" />
				<Button text="کلیک کنید" color="purple-outline" />
				<Button text="کلیک کنید" color="blue-outline" />
			</div>
		);
	},
};

export const SimpleColors = {
	render: () => {
		return (
			<div className="flex items-center flex-wrap gap-4">
				<Button text="کلیک کنید" color="black-simple" />
				<Button text="کلیک کنید" color="red-simple" />
				<Button text="کلیک کنید" color="green-simple" />
				<Button text="کلیک کنید" color="purple-simple" />
				<Button text="کلیک کنید" color="blue-simple" />
			</div>
		);
	},
};

export const Sizes = {
	render: () => {
		return (
			<div className="flex items-center flex-wrap gap-4">
				<Button text="کلیک کنید" size="small" />
				<Button text="کلیک کنید" size="medium" />
				<Button text="کلیک کنید" size="large" />
				<Button icon={<ArrowRightIcon size={18} />} size="icon" />
			</div>
		);
	},
};

export const LoadingAndDisabled = {
	render: () => {
		return (
			<div className="flex items-center flex-wrap gap-4">
				<Button text="در حال بارگذاری..." loading />
				<Button text="غیر فعال" disabled />
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
		hint: "این یک مشاهده است",
		text: 'مشاهده کنید'
	},
};

export const WithIcon = {
	render: () => {
		return (
			<div className="flex items-center flex-wrap gap-4">
				<Button text="ذخیره" icon={<FaSave size={18} />} />
				<Button size="icon" icon={<FaSave size={18} />} />
			</div>
		);
	},
};
