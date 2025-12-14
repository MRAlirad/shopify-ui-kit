import { BrowserRouter } from "react-router";
import type { Meta } from "@storybook/react-vite";
import { Breadcrumb } from "../components";
import { BsCartFill } from "react-icons/bs";

const meta = {
	title: "Component/Breadcrumb",
	component: Breadcrumb,
	parameters: {
		layout: "padded",
	},
	tags: ["autodocs"],
} satisfies Meta<typeof Breadcrumb>;

export default meta;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default = () => {
	return (
		// wrap into BrowserRouter for Link component to work
		<BrowserRouter>
			<Breadcrumb breadcrumb={[{ icon: <BsCartFill />, label: 'محصولات', link: '/product' }, { label: 'سفارشات خرید', link: '/product/purchase-order' }, { label: 'افزودن سفارش خرید' }]} />
		</BrowserRouter>
	);
};