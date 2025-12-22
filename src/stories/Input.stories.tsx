import { fn } from "storybook/test";
import type { Meta } from "@storybook/react-vite";
import { Button, Checkbox, Input } from "../components";
import { FormProvider, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

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
    const form = useForm({
		resolver: yupResolver(yup.object().shape({
			firstName: yup.string().required("لطفا نام خود را وارد کنید"),
			password: yup.string().required("رمز عبور الزامی است"),
			email: yup.string().email("ایمیل معتبر نیست").required("ایمیل الزامی است"),
			currency: yup.number().required("ارز الزامی است"),
			count: yup.number().required("تعداد الزامی است"),
			agree:yup.boolean().oneOf([true], "شروط الزامی است"),
		})),
		defaultValues: {
			firstName: '',
			agree: false,
		}
	});

    return (
        <FormProvider {...form}>
            <form className="grid grid-cols-2 gap-4" onSubmit={form.handleSubmit(console.log)}>
                <Input label="متن" name="firstName" />
                <Input label="رمز عبور" name="password" type="password" />
                <Input label="ایمیل" name="email" type="email" />
                <Input label="وارد کردن ارز" name="currency" type="currency" />
                <Input label="وارد کردن تعداد" name="count" type="count" />
				<Checkbox name="agree" label="آیا با شروط موافقید؟" onCheck={() => form.setValue('firstName', 'محمد')} className="col-span-2" />
				<Button type="submit" color="blue" size="medium" text="ثبت" />
            </form>
        </FormProvider>
    )
}
