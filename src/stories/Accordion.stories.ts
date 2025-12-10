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
				question: "What is the capital of France?",
				answer: "Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more. Check out this guide to learn how to get started and start developing websites even faster with components on top of Tailwind CSS.",
			},
			{
				question: "What is the capital of Germany?",
				answer: "Flowbite is first conceptualized and designed using the Figma software so everything you see in the library has a design equivalent in our Figma file. Check out the Figma design system based on the utility classes from Tailwind CSS and components from Flowbite.",
			},
			{
				question: "What is the capital of Italy?",
				answer: "The main difference is that the core components from Flowbite are open source under the MIT license, whereas Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone components, whereas Tailwind UI offers sections of pages. However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no technical reason stopping you from using the best of two worlds.",
			},
			{
				question: "What is the capital of Spain?",
				answer: "The main difference is that the core components from Flowbite are open source under the MIT license, whereas Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone components, whereas Tailwind UI offers sections of pages. However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no technical reason stopping you from using the best of two worlds.",
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