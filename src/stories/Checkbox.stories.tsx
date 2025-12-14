import { fn } from "storybook/test";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Checkbox } from "../components";
import { FormProvider, useForm } from "react-hook-form";

const meta = {
	title: "Component/Checkbox",
	component: Checkbox,
	parameters: {
		layout: "padded",
	},
	tags: ["autodocs"],
	args: { label: "آیا میخواهید پیام را دریافت کنید", name: "name", onChange: fn() },
} satisfies Meta<typeof Checkbox>;

export default meta;

// type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default = {
	render: () => {
		const form = useForm();

		return (
			<FormProvider {...form}>
				<Checkbox label="Do you want to receive a message?" name="name" onChange={fn()} />
			</FormProvider>
		);
	},
};

export const WithDescription = {
	render: () => {
		const form = useForm();

		return (
			<FormProvider {...form}>
				<Checkbox label="Do you want to receive a message?" name="name" description="This is a description for the checkbox" onChange={fn()} />
			</FormProvider>
		);
	},
};

export const Disabled = {
	render: () => {
		const form = useForm();

		return (
			<FormProvider {...form}>
				<Checkbox label="Do you want to receive a message?" name="name" disabled={true} onChange={fn()} />
			</FormProvider>
		);
	},
};

export const DefaultTrueValue = {
	render: () => {
		const form = useForm({
            defaultValues: {
                name: true,
            },
        });

		return (
			<FormProvider {...form}>
				<Checkbox label="Do you want to receive a message?" name="name" onChange={fn()} />
			</FormProvider>
		);
	},
};
