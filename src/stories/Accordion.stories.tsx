import type { Meta, StoryObj } from "@storybook/react-vite";
import { Accordion } from "../components";

const meta = {
	title: "Component/Accordion",
	component: Accordion,
	parameters: {
		layout: "padded",
	},
	tags: ["autodocs"],
	args: {
		list: [
			{
				question: "پایتخت ایران چیه؟",
				answer: "تهران",
			},
			{
				question: "پایتخت آلمان چیه؟",
				answer: "برلین",
			},
			{
				question: "پایتخت ایتالیا چیه؟",
				answer: "روم",
			},
			{
				question: "پایتخت اسپانیا چیه؟",
				answer: "مدرید",
			},
		],
	},
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {};
export const OpenFirstITem: Story = {
	args: {
		openFirstItem: true,
	},
};
export const WithTitle: Story = {
	args: {
		title: "Your Question and answers",
	},
};