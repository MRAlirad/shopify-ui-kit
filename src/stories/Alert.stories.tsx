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
		title: "A new software update",
		text: "A new software update is available. See what’s new in version 2.0.4.",
	},
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const PrimaryColors = {
	render: () => {
		return (
			<div className="flex flex-col gap-4">
				<Alert color="info" title="Info Alert" text="This is an informational alert message." />
				<Alert color="success" title="Success Alert" text="This is a success alert message." />
				<Alert color="warning" title="Warning Alert" text="This is a warning alert message." />
				<Alert color="error" title="Error Alert" text="This is an error alert message." />
			</div>
		);
	},
};

export const WithActions: Story = {
	args: {
		actions: [
			{
				text: "Update",
				onClick: fn(),
			},
			{
				text: "Dismiss",
				onClick: fn(),
			},
		],
	},
};

export const WithItems = {
	args: {
		text: "",
		items: [
			"A new software update is available. See what’s new in version 2.0.4. 1",
			"A new software update is available. See what’s new in version 2.0.4. 2",
			"A new software update is available. See what’s new in version 2.0.4. 3",
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
		title: "Error Alert",
		text: "This is an error alert message.",
		onDismiss: fn(),
	},
};

export const WithAllProps = {
	args: {
		color: "info",
		title: "A new software update",
		text: "A new software update is available. See what’s new in version 2.0.4.",
		items: [
			"A new software update is available. See what’s new in version 2.0.4. 1",
			"A new software update is available. See what’s new in version 2.0.4. 2",
			"A new software update is available. See what’s new in version 2.0.4. 3",
		],
		actions: [
			{
				text: "Update",
				onClick: fn(),
			},
			{
				text: "Dismiss",
				onClick: fn(),
			},
		],
		onDismiss: fn(),
		accentBorder: true,
	},
};
