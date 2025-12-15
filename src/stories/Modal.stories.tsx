import type { Meta } from "@storybook/react-vite";
import { Modal, Select, Input, Checkbox, Button } from "../components";
import { FormProvider, useForm } from "react-hook-form";
import { useState } from "react";

const meta = {
	title: "Component/Modal",
	component: Modal,
	parameters: {
		layout: "centered",
		direction: "rtl",
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
					actions={[{ text: "ورود به حساب کاربری" }, { text: "انصراف", color: "red-outline", onClick: () => setModalDisplay(false) }]}
				>
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
					</div>
				</Modal>
			)}
		</FormProvider>
	);
};

export const WithBackButton = () => {
	const [modalDisplay, setModalDisplay] = useState(false);
	const form = useForm();
	return (
		<FormProvider {...form}>
			<Button text="ورود به حساب کاربری" onClick={() => setModalDisplay(true)} />
			{modalDisplay && (
				<Modal title="ورود به حساب کاربری" onClose={() => setModalDisplay(false)} backBtn width="lg">
					<div className="grid grid-cols-2 gap-4">
						<Input name="firstName" label="نام" />
					</div>
				</Modal>
			)}
		</FormProvider>
	);
};

export const MultipleWidths = () => {
	const [modalDisplaysm, setModalDisplaysm] = useState(false);
	const [modalDisplaymd, setModalDisplaymd] = useState(false);
	const [modalDisplay2xl, setModalDisplay2xl] = useState(false);
	const [modalDisplay3xl, setModalDisplay3xl] = useState(false);
	const [modalDisplayfull, setModalDisplayfull] = useState(false);
	const form = useForm();
	return (
		<FormProvider {...form}>
			<div className="flex items-center gap-2">
				<Button text="sm" onClick={() => setModalDisplaysm(true)} />
				<Button text="md" onClick={() => setModalDisplaymd(true)} />
				<Button text="2xl" onClick={() => setModalDisplay2xl(true)} />
				<Button text="3xl" onClick={() => setModalDisplay3xl(true)} />
				<Button text="full" onClick={() => setModalDisplayfull(true)} />
			</div>
			{modalDisplaysm && (
				<Modal
					title="ورود به حساب کاربری"
					actions={[{ text: "ورود به حساب کاربری" }, { text: "انصراف", color: "red-outline", onClick: () => setModalDisplaysm(false) }]}
					onClose={() => setModalDisplaysm(false)}
					width="sm"
				>
					<div className="grid gap-4">
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
						<Checkbox name="saveInfo" label="آیا میخواهید اطلاعات شما ذخیره شود" />
					</div>
				</Modal>
			)}
			{modalDisplaymd && (
				<Modal
					title="ورود به حساب کاربری"
					actions={[{ text: "ورود به حساب کاربری" }, { text: "انصراف", color: "red-outline", onClick: () => setModalDisplaymd(false) }]}
					onClose={() => setModalDisplaymd(false)}
					width="md"
				>
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
					</div>
				</Modal>
			)}
			{modalDisplay2xl && (
				<Modal
					title="ورود به حساب کاربری"
					actions={[{ text: "ورود به حساب کاربری" }, { text: "انصراف", color: "red-outline", onClick: () => setModalDisplay2xl(false) }]}
					onClose={() => setModalDisplay2xl(false)}
					width="2xl"
				>
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
					</div>
				</Modal>
			)}
			{modalDisplay3xl && (
				<Modal
					title="ورود به حساب کاربری"
					actions={[{ text: "ورود به حساب کاربری" }, { text: "انصراف", color: "red-outline", onClick: () => setModalDisplay3xl(false) }]}
					onClose={() => setModalDisplay3xl(false)}
					width="3xl"
				>
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
					</div>
				</Modal>
			)}
			{modalDisplayfull && (
				<Modal
					title="ورود به حساب کاربری"
					actions={[{ text: "ورود به حساب کاربری" }, { text: "انصراف", color: "red-outline", onClick: () => setModalDisplayfull(false) }]}
					onClose={() => setModalDisplayfull(false)}
					width="full"
				>
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
					</div>
				</Modal>
			)}
		</FormProvider>
	);
};
