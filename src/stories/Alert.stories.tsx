import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import { Alert } from "../components";

const meta = {
	title: "Component/Alert",
	component: Alert,
	parameters: {
		layout: "padded",
	},
	tags: ["autodocs"],
	args: {
		color: "info",
		title: "یک بروزرسانی نرم افزاری",
		text: "یک بروزرسانی نرم افزاری موجود است. برای اطلاع از تغییرات نسخه 2.0.4 روی این لینک بروید.",
	},
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const PrimaryColors = {
	render: () => {
		return (
			<div className="flex flex-col gap-4">
				<Alert color="info" title="هشدار اطلاعاتی" text="این یک هشدار اطلاعاتی است." />
				<Alert color="success" title="هشدار موفقیت آمیز" text="این یک هشدار موفقیت آمیز است." />
				<Alert color="warning" title="هشدار هشدار" text="این یک هشدار هشدار است." />
				<Alert color="error" title="هشدار خطا" text="این یک هشدار خطا است." />
			</div>
		);
	},
};

export const WithActions: Story = {
	args: {
		actions: [
			{
				text: "بروزرسانی",
				onClick: fn(),
			},
			{
				text: "انصراف",
				onClick: fn(),
			},
		],
	},
};

export const WithItems = {
	args: {
		text: "",
		items: [
			"یک بروزرسانی نرم افزاری موجود است. برای اطلاع از تغییرات نسخه 2.0.4 روی این لینک بروید. 1",
			"یک بروزرسانی نرم افزاری موجود است. برای اطلاع از تغییرات نسخه 2.0.4 روی این لینک بروید. 2",
			"یک بروزرسانی نرم افزاری موجود است. برای اطلاع از تغییرات نسخه 2.0.4 روی این لینک بروید. 3",
		],
	},
};

export const WithAccentBorder = {
	args: {
		accentBorder: true,
	},
};

export const WithDismissButton = {
	args: {
		color: "error",
		title: "هشدار خطا",
		text: "این یک هشدار خطا است.",
		onDismiss: fn(),
	},
};

export const WithAllProps = {
	args: {
		color: "info",
		title: "یک بروزرسانی نرم افزاری",
		text: "یک بروزرسانی نرم افزاری موجود است. برای اطلاع از تغییرات نسخه 2.0.4 روی این لینک بروید.",
		items: [
			"یک بروزرسانی نرم افزاری موجود است. برای اطلاع از تغییرات نسخه 2.0.4 روی این لینک بروید. 1",
			"یک بروزرسانی نرم افزاری موجود است. برای اطلاع از تغییرات نسخه 2.0.4 روی این لینک بروید. 2",
			"یک بروزرسانی نرم افزاری موجود است. برای اطلاع از تغییرات نسخه 2.0.4 روی این لینک بروید. 3",
		],
		actions: [
			{
				text: "بروزرسانی",
				onClick: fn(),
			},
			{
				text: "انصراف",
				onClick: fn(),
			},
		],
		onDismiss: fn(),
		accentBorder: true,
	},
};
