import type { Meta } from "@storybook/react-vite";
import { Modal, Select, Input, Checkbox, Button } from "../components";
import { FormProvider, useForm } from "react-hook-form";
import { useState } from "react";

const meta = {
	title: "Component/Modal",
	component: Modal,
	parameters: {
		layout: "centered",
        direction: 'rtl'
	},
	tags: ["autodocs"],
	args: {
		title: "وضعیت انتشار",
		className: "mx-36",
	},
} satisfies Meta<typeof Modal>;

export default meta;

export const Default = () => {
	const [modalDisplay, setModalDisplay] = useState(false);
	const form = useForm();
	return (
		<FormProvider {...form}>
			<Button text="ورود به حساب کاربری" onClick={() => setModalDisplay(true)} />
			{modalDisplay && (
				<Modal title="ورود به حساب کاربری" onClose={() => setModalDisplay(false)} width="lg">
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
				</Modal>
			)}
		</FormProvider>
	);
};

export const WithActionBar = () => {
	const [modalDisplay, setModalDisplay] = useState(false);
    const form = useForm();
	return (
		<FormProvider {...form}>
			<Button text="ورود به حساب کاربری" onClick={() => setModalDisplay(true)} />
			{modalDisplay && (
				<Modal
					title="ورود به حساب کاربری"
					onClose={() => setModalDisplay(false)}
					className="md:max-w-lg"
					actions={[{ text: 'ورود به حساب کاربری' }, { text: 'انصراف', color: 'red-outline', onClick: () => setModalDisplay(false) }]}
				>
					<div className="grid grid-cols-2 gap-4">
						<Input name="firstName" label="نام" />
						<Input name="lastName" label="نام خانوادگی" />
						<Select
							name="gender"
							label="جنسیت"
							options={[
								{ value: 'male', label: 'مرد' },
								{ value: 'female', label: 'زن' },
							]}
						/>
						<Input name="age" label="سن" type="number" />
						<Checkbox name="saveInfo" label="آیا میخواهید اطلاعات شما ذخیره شود" className="col-span-2" />
					</div>
				</Modal>
			)}
		</FormProvider>
	);
};
