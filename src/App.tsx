import Page from "./components/Page";
import { Button, Card } from "./components";
import { PiUserCircleDuotone } from "react-icons/pi";
import { FormProvider, useForm } from "react-hook-form";
import { Input, Select, Textarea } from "./components";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

function App() {
	const form = useForm({
		resolver: yupResolver(
			yup.object().shape({
				username: yup.string().required("نام کاربری الزامی است"),
				password: yup.string().required("رمز عبور الزامی است"),
				login: yup.string().required("رمز عبور الزامی است"),
				asdfdsf: yup.string().required("ورود الزامی است"),
				email: yup.string().email("ایمیل معتبر نیست").required("ایمیل الزامی است"),
			})
		),
	});

	return (
		<div className="grid grid-rows-[max-content_1fr] min-h-screen bg-gray-50 dark:bg-gray-950">
			<div></div>
			<Page>
				<FormProvider {...form}>
					<Card title="ورود به حساب کاربری" icon={<PiUserCircleDuotone />} text="ورود به حساب کاربری">
						<form onSubmit={form.handleSubmit(console.log)} className="grid gap-4 grid-cols-2">
							<Input label="نام کاربری" name="username" description="این نام کاربری است" />
							<Select
								label="رمز عبور"
								name="password"
								options={[
									{ label: "رمز عبور", value: "password", disabled: true },
									{ label: "رمز عبور 2", value: "password2" },
									{ label: "رمز عبور 3", value: "password3" },
								]}
								clearable
								// error='afadsfd f'
								description="این نام کاربری است"
							/>
							<Input label="ورود" name="asdfdsf" type="password" placeholder="asf dsf" />
							<Input label="ورود" name="email" type="email" />
							<Textarea label="ورود" name="login" description="این نام کاربری است" />
							<Button text="ورود" type="submit" className="col-span-2" fullWidth />
						</form>
					</Card>
				</FormProvider>
			</Page>
		</div>
	);
}

export default App;
