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
			<Checkbox label="آیا می خواهید پیامی دریافت کنید؟" name="name" onChange={fn()} />
		</FormProvider>
	);
};

export const WithDescription = () => {
	const form = useForm();

	return (
		<FormProvider {...form}>
			<Checkbox label="آیا می خواهید پیامی دریافت کنید؟" name="name" description="این یک متن توضیحاتی است" onChange={fn()} />
		</FormProvider>
	);
};

export const Disabled = () => {
	const form = useForm();

	return (
		<FormProvider {...form}>
			<Checkbox label="آیا می خواهید پیامی دریافت کنید؟" name="name" disabled={true} onChange={fn()} />
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
			<Checkbox label="آیا می خواهید پیامی دریافت کنید؟" name="name" onChange={fn()} />
		</FormProvider>
	);
};
