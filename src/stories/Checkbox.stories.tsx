import { fn } from "storybook/test";
import type { Meta } from "@storybook/react-vite";
import { Checkbox } from "../components";
import { FormProvider, useForm } from "react-hook-form";

const meta = {
	title: "Component/Checkbox",
	component: Checkbox,
	parameters: {
		layout: "padded",
	},
	tags: ["autodocs"],
} satisfies Meta<typeof Checkbox>;

export default meta;

export const Default = () => {
	const form = useForm();

	return (
		<FormProvider {...form}>
			<Checkbox label="Do you want to receive a message?" name="name" onChange={fn()} />
		</FormProvider>
	);
};

export const WithDescription = () => {
	const form = useForm();

	return (
		<FormProvider {...form}>
			<Checkbox label="Do you want to receive a message?" name="name" description="This is a description for the checkbox" onChange={fn()} />
		</FormProvider>
	);
};

export const Disabled = () => {
	const form = useForm();

	return (
		<FormProvider {...form}>
			<Checkbox label="Do you want to receive a message?" name="name" disabled={true} onChange={fn()} />
		</FormProvider>
	);
};

export const DefaultTrueValue = () => {
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
};
