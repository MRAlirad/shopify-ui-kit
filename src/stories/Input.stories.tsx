import { fn } from "storybook/test";
import type { Meta } from "@storybook/react-vite";
import { Input } from "../components";
import { FormProvider, useForm } from "react-hook-form";

const meta = {
	title: "Component/Input",
	component: Input,
	parameters: {
		layout: "padded",
        direction: 'rtl',
	},
	tags: ["autodocs"],
} satisfies Meta<typeof Input>;

export default meta;

export const Default = () => {
	const form = useForm();

	return (
		<FormProvider {...form}>
			<Input label="نام" name="firstName" onChange={fn()} />
		</FormProvider>
	);
};

export const WithDescription = () => {
	const form = useForm();

	return (
		<FormProvider {...form}>
			<Input label="نام" name="firstName" description="این یک متن توضیحاتی است" onChange={fn()} />
		</FormProvider>
	);
};

export const Disabled = () => {
	const form = useForm();

	return (
		<FormProvider {...form}>
			<Input label="نام" name="firstName" disabled={true} onChange={fn()} />
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
			<Input label="نام" name="firstName" onChange={fn()} />
		</FormProvider>
	);
};

export const DifferentTypes = () => {
    const form = useForm();

    return (
        <FormProvider {...form}>
            <form className="grid grid-cols-2 gap-4">
                <Input label="متن" name="firstName" onChange={fn()} />
                <Input label="رمز عبور" name="password" type="password" onChange={fn()} />
                <Input label="ایمیل" name="email" type="email" onChange={fn()} />
                <Input label="وارد کردن ارز" name="currency" type="currency" onChange={fn()} />
                <Input label="وارد کردن تعداد" name="count" type="count" onChange={fn()} />
            </form>
        </FormProvider>
    )
}
