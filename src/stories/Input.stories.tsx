import { fn } from "storybook/test";
import type { Meta } from "@storybook/react-vite";
import { Input } from "../components";
import { FormProvider, useForm } from "react-hook-form";

const meta = {
	title: "Component/Input",
	component: Input,
	parameters: {
		layout: "padded",
	},
	tags: ["autodocs"],
} satisfies Meta<typeof Input>;

export default meta;

export const Default = () => {
	const form = useForm();

	return (
		<FormProvider {...form}>
			<Input label="First Name" name="firstName" onChange={fn()} />
		</FormProvider>
	);
};

export const WithDescription = () => {
	const form = useForm();

	return (
		<FormProvider {...form}>
			<Input label="First Name" name="firstName" description="This is a description for the checkbox" onChange={fn()} />
		</FormProvider>
	);
};

export const Disabled = () => {
	const form = useForm();

	return (
		<FormProvider {...form}>
			<Input label="First Name" name="firstName" disabled={true} onChange={fn()} />
		</FormProvider>
	);
};

export const DefaultTrueValue = () => {
	const form = useForm({
		defaultValues: {
			firstName: 'Mohammadreza',
		},
	});

	return (
		<FormProvider {...form}>
			<Input label="First Name" name="firstName" onChange={fn()} />
		</FormProvider>
	);
};

export const DifferentTypes = () => {
    const form = useForm();

    return (
        <FormProvider {...form}>
            <form className="grid grid-cols-2 gap-4">
                <Input label="Text" name="firstName" onChange={fn()} />
                <Input label="Password" name="password" type="password" onChange={fn()} />
                <Input label="Email" name="email" type="email" onChange={fn()} />
                <Input label="Currency" name="currency" type="currency" onChange={fn()} />
                <Input label="Count" name="count" type="count" onChange={fn()} />
            </form>
        </FormProvider>
    )
}
