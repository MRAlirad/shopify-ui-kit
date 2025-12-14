import type { Meta } from "@storybook/react-vite";
import { Card, Select, Input, Checkbox, Button, Textarea } from "../components";
import { FormProvider, useForm } from "react-hook-form";
import { MdOutlineManageAccounts } from "react-icons/md";

const meta = {
	title: "Component/Card",
	component: Card,
	parameters: {
		layout: "padded",
	},
	tags: ["autodocs"],
	args: {
		title: "وضعیت انتشار",
		className: "mx-36",
	},
} satisfies Meta<typeof Card>;

export default meta;

export const Default = {};

export const WithInnerComponent = () => {
	const form = useForm();

	return (
		<FormProvider {...form}>
			<Card title="ورود / ثبت نام" className="mx-36">
				<div className="grid grid-cols-2 gap-4">
					<Input name="firstName" label="نام" />
					<Input name="lastName" label="نام خانوادگی" />
					<Select
						name="gender"
						label="جنسیت"
						options={[
							{ value: "male", label: "مرد" },
							{ value: "female", label: "زن" },
						]}
					/>
					<Input name="age" label="سن" type="number" />
					<Checkbox name="saveInfo" label="آیا میخواهید اطلاعات شما ذخیره شود" className="col-span-2" />
					<Button className="col-span-2" text="ورود به حساب کاربری" fullWidth />
				</div>
			</Card>
		</FormProvider>
	);
};

export const WithAction = () => {
	const form = useForm();

	return (
		<FormProvider {...form}>
			<Card title="خلاصه هزینه" action={{ text: "مدیریت هزینه", icon: <MdOutlineManageAccounts />, size: "small" }} className="mx-36">
				<div className="flex items-center justify-between text-xs text-neutral-800">
					<span>مالیات</span>
					<span>75 هزار تومان</span>
				</div>
				<div className="flex items-center justify-between text-xs text-neutral-800">
					<span>تعداد کل محصولات</span>
					<span> 1 آیتم تومان</span>
				</div>
				<div className="flex items-center justify-between font-semibold text-neutral-800 mt-4">
					<span>مجموع</span>
					<span>456,345 هزار تومان</span>
				</div>
			</Card>
		</FormProvider>
	);
};

export const WithoutTitle = () => {
	const form = useForm();

	return (
		<FormProvider {...form}>
			<Card className="mx-36">
				<Input name="title" label="عنوان" className="mb-2" />
				<Textarea name="description" label="توضیحات" />
			</Card>
		</FormProvider>
	);
};

export const WithBadge = () => {
	const form = useForm();

	return (
		<FormProvider {...form}>
			<Card title="خلاصه هزینه" badge={{ text: "جدید", color: "blue" }} className={{ wrapper: "mx-36", content: "grid gap-2" }}>
				<div className="flex items-center justify-between text-xs text-neutral-800">
					<span>مالیات</span>
					<span>75 هزار تومان</span>
				</div>
				<div className="flex items-center justify-between text-xs text-neutral-800">
					<span>تعداد کل محصولات</span>
					<span> 1 آیتم تومان</span>
				</div>
				<div className="flex items-center justify-between font-semibold text-neutral-800 mt-4">
					<span>مجموع</span>
					<span>456,345 هزار تومان</span>
				</div>
			</Card>
		</FormProvider>
	);
};

export const WithText = () => {
	const form = useForm();

	return (
		<FormProvider {...form}>
			<Card title="خلاصه هزینه" text="این یک متن توضیحاتی است" className={{ wrapper: "mx-36", content: "grid gap-2" }}>
				<div className="flex items-center justify-between text-xs text-neutral-800">
					<span>مالیات</span>
					<span>75 هزار تومان</span>
				</div>
				<div className="flex items-center justify-between text-xs text-neutral-800">
					<span>تعداد کل محصولات</span>
					<span> 1 آیتم تومان</span>
				</div>
				<div className="flex items-center justify-between font-semibold text-neutral-800 mt-4">
					<span>مجموع</span>
					<span>456,345 هزار تومان</span>
				</div>
			</Card>
		</FormProvider>
	);
};

export const WithBlueTitleBg = () => {
	const form = useForm();

	return (
		<FormProvider {...form}>
			<Card title="خلاصه هزینه" text="این یک متن توضیحاتی است" blueTitleBg className={{ wrapper: "mx-36", content: "grid gap-2" }}>
				<div className="flex items-center justify-between text-xs text-neutral-800">
					<span>مالیات</span>
					<span>75 هزار تومان</span>
				</div>
				<div className="flex items-center justify-between text-xs text-neutral-800">
					<span>تعداد کل محصولات</span>
					<span> 1 آیتم تومان</span>
				</div>
				<div className="flex items-center justify-between font-semibold text-neutral-800 mt-4">
					<span>مجموع</span>
					<span>456,345 هزار تومان</span>
				</div>
			</Card>
		</FormProvider>
	);
};

export const WithBlueTitleBgAndBadge = () => {
	const form = useForm();

	return (
		<FormProvider {...form}>
			<Card title="خلاصه هزینه" text="این یک متن توضیحاتی است" blueTitleBg badge={{ text: "جدید", color: "blue" }} className={{ wrapper: "mx-36", content: "grid gap-2" }}>
				<div className="flex items-center justify-between text-xs text-neutral-800">
					<span>مالیات</span>
					<span>75 هزار تومان</span>
				</div>
				<div className="flex items-center justify-between text-xs text-neutral-800">
					<span>تعداد کل محصولات</span>
					<span> 1 آیتم تومان</span>
				</div>
				<div className="flex items-center justify-between font-semibold text-neutral-800 mt-4">
					<span>مجموع</span>
					<span>456,345 هزار تومان</span>
				</div>
			</Card>
		</FormProvider>
	);
};

export const WithIconTitle = () => {
	const form = useForm();

	return (
		<FormProvider {...form}>
			<Card
				title="خلاصه هزینه"
				text="این یک متن توضیحاتی است"
				icon={<MdOutlineManageAccounts />}
				blueTitleBg
				badge={{ text: "جدید", color: "blue" }}
				className={{ wrapper: "mx-36", content: "grid gap-2" }}
			>
				<div className="flex items-center justify-between text-xs text-neutral-800">
					<span>مالیات</span>
					<span>75 هزار تومان</span>
				</div>
				<div className="flex items-center justify-between text-xs text-neutral-800">
					<span>تعداد کل محصولات</span>
					<span> 1 آیتم تومان</span>
				</div>
				<div className="flex items-center justify-between font-semibold text-neutral-800 mt-4">
					<span>مجموع</span>
					<span>456,345 هزار تومان</span>
				</div>
			</Card>
		</FormProvider>
	);
};

export const LoadingState = () => {
	const form = useForm();

	return (
		<FormProvider {...form}>
			<Card
				title="خلاصه هزینه"
				text="این یک متن توضیحاتی است"
				blueTitleBg
				badge={{ text: "جدید", color: "blue" }}
				className={{ wrapper: "mx-36", content: "grid gap-2" }}
				loading
			>
				<div className="flex items-center justify-between text-xs text-neutral-800">
					<span>مالیات</span>
					<span>75 هزار تومان</span>
				</div>
				<div className="flex items-center justify-between text-xs text-neutral-800">
					<span>تعداد کل محصولات</span>
					<span> 1 آیتم تومان</span>
				</div>
				<div className="flex items-center justify-between font-semibold text-neutral-800 mt-4">
					<span>مجموع</span>
					<span>456,345 هزار تومان</span>
				</div>
			</Card>
		</FormProvider>
	);
};

export const WithLeftComponent = () => {
	const form = useForm();

	return (
		<FormProvider {...form}>
			<Card
				title="خلاصه هزینه"
				text="این یک متن توضیحاتی است"
				blueTitleBg
				className={{ wrapper: "mx-36", content: "grid gap-2" }}
				leftComponent={
					<Select
						name="select"
						size="small"
						options={[
							{ label: "مالیات", value: "tax" },
							{ label: "تعداد کل محصولات", value: "totalProducts" },
							{ label: "مجموع", value: "total" },
						]}
					/>
				}
			>
				<div className="flex items-center justify-between text-xs text-neutral-800">
					<span>مالیات</span>
					<span>75 هزار تومان</span>
				</div>
				<div className="flex items-center justify-between text-xs text-neutral-800">
					<span>تعداد کل محصولات</span>
					<span> 1 آیتم تومان</span>
				</div>
				<div className="flex items-center justify-between font-semibold text-neutral-800 mt-4">
					<span>مجموع</span>
					<span>456,345 هزار تومان</span>
				</div>
			</Card>
		</FormProvider>
	);
};
