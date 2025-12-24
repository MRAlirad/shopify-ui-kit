import Page from "./components/Page";
import { Accordion, Alert, Badge, Breadcrumb, Button, Card } from "./components";
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
				{/* <FormProvider {...form}>
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
				<Accordion
					title="سوالات متداول"
					openFirstItem
					list={[
						{
							question: "چگونه می‌توانم به حساب کاربری خود دسترسی پیدا کنم؟",
							answer: "برای دسترسی به حساب کاربری خود، می‌توانید از طریق صفحه ورود با استفاده از نام کاربری و رمز عبور خود وارد شوید. در صورت فراموشی رمز عبور، می‌توانید از گزینه بازیابی رمز عبور استفاده کنید و لینک بازیابی را از طریق ایمیل دریافت نمایید.",
						},
						{
							question: "آیا می‌توانم اطلاعات حساب کاربری خود را تغییر دهم؟",
							answer: "بله، شما می‌توانید در هر زمان از طریق بخش تنظیمات حساب کاربری، اطلاعات شخصی خود از جمله نام، ایمیل، شماره تلفن و سایر اطلاعات را ویرایش کنید. تغییرات بلافاصله اعمال می‌شوند و می‌توانید آنها را مشاهده کنید.",
						},
						{
							question: "در صورت بروز مشکل چگونه می‌توانم با پشتیبانی تماس بگیرم؟",
							answer: "شما می‌توانید از طریق بخش تماس با ما در وب‌سایت، فرم تماس را پر کنید و یا با شماره تلفن پشتیبانی که در صفحه تماس با ما درج شده است، تماس حاصل فرمایید. تیم پشتیبانی ما در ساعات کاری آماده پاسخگویی به سوالات و حل مشکلات شما می‌باشد.",
						},
					]}
				/> */}
				{/* <Alert
					color="info"
					title="اطلاعیه مهم: به‌روزرسانی و تعمیرات برنامه‌ریزی شده سیستم"
					// text="لطفاً توجه داشته باشید که سیستم در حال به‌روزرسانی است و ممکن است برخی از عملکردها به طور موقت در دسترس نباشند. ما در حال انجام تعمیرات برنامه‌ریزی شده هستیم و انتظار می‌رود که تمام سرویس‌ها تا پایان روز به حالت عادی بازگردند."
					accentBorder
					actions={[
						{ text: "بستن", onClick: () => {} },
						{ text: "بستن", onClick: () => {} },
					]}
					onDismiss={() => {}}

					items={[
						"سیستم پرداخت آنلاین از ساعت ۲ بامداد تا ۶ صبح در دسترس نخواهد بود و تراکنش‌های مالی در این بازه زمانی انجام نخواهد شد.",
						"گزارش‌های روزانه و آمارهای تحلیلی با تأخیر حداکثر ۳۰ دقیقه‌ای در دسترس قرار خواهند گرفت و نیازی به نگرانی نیست.",
						"در صورت بروز هرگونه مشکل یا سوال، می‌توانید با تیم پشتیبانی از طریق ایمیل یا تلفن تماس بگیرید. تیم ما ۲۴ ساعته آماده پاسخگویی به شما است.",
					]}
				/> */}
				{/* <Card>
					<Breadcrumb
						breadcrumb={[
							{ label: "خانه", link: "/" },
							{ label: "به‌روزرسانی", link: "/update" },
							{ label: "به‌روزرسانی", link: "/update" },
						]}
					/>
					<Badge variant="primary" color="blue" text="به‌روزرسانی" />
					<Badge variant="primary" color="green" text="به‌روزرسانی" />
					<Badge variant="primary" color="neutral" text="به‌روزرسانی" />
					<Badge variant="primary" color="red" text="به‌روزرسانی" />
					<Badge variant="primary" color="yellow" text="به‌روزرسانی" />
					<Badge variant="primary" color="purple" text="به‌روزرسانی" />
					<Badge variant="secondary" color="blue" text="به‌روزرسانی" />
					<Badge variant="secondary" color="green" text="به‌روزرسانی" />
					<Badge variant="secondary" color="neutral" text="به‌روزرسانی" />
					<Badge variant="secondary" color="red" text="به‌روزرسانی" />
					<Badge variant="secondary" color="yellow" text="به‌روزرسانی" />
					<Badge variant="secondary" color="purple" text="به‌روزرسانی" />
					<Badge variant="outline" color="blue" text="به‌روزرسانی" />
					<Badge variant="outline" color="green" text="به‌روزرسانی" />
					<Badge variant="outline" color="neutral" text="به‌روزرسانی" />
					<Badge variant="outline" color="red" text="به‌روزرسانی" />
					<Badge variant="outline" color="yellow" text="به‌روزرسانی" />
					<Badge variant="outline" color="purple" text="به‌روزرسانی" />
				</Card> */}
				<Card>
					<Button text="ورود" color="black" />
					<Button text="ورود" color="white" />
					<Button text="ورود" color="simple" />
					<Button text="ورود" color="red" />
					<Button text="ورود" color="green" />
					<Button text="ورود" color="purple" />
					<Button text="ورود" color="blue" />
					<Button text="ورود" color="black-outline" />
					<Button text="ورود" color="red-outline" />
					<Button text="ورود" color="green-outline" />
					<Button text="ورود" color="purple-outline" />
					<Button text="ورود" color="blue-outline" />
					<Button text="ورود" color="black-simple" />
					<Button text="ورود" color="red-simple" />
					<Button text="ورود" color="green-simple" />
					<Button text="ورود" color="purple-simple" />
					<Button text="ورود" color="blue-simple" />
				</Card>
			</Page>
		</div>
	);
}

export default App;
