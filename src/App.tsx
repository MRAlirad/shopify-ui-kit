import { FormProvider, useForm } from "react-hook-form";
import Input from "./components/Input";
import Button from "./components/Button";
import Select from "./components/Select";
import Textarea from "./components/Textarea";
import Card from "./components/Card";
import { useState } from "react";
import Page from "./components/Page";
import Drawer from "./components/Drawer";
import Accordion from "./components/Accordion";
import Checkbox from "./components/Checkbox";
import DeleteModal from "./components/DeleteConfirmModal";
import PageHeader from "./components/PageHeader";
import Pagination from "./components/Pagination";
import Tab from "./components/Tab";

function App() {
	const [page, setPage] = useState(1);
	const [modalDisplay, setModalDisplay] = useState(false);
	const [modalDisplay2, setModalDisplay2] = useState(false);
	const formMethods = useForm({
		defaultValues: {
			firstname: "محمدرضا",
			lastname: 2,
			age: 18,
			password: "",
			description: "adsfdsf",
			isRegistered: true,
		},
	});

	return (
		<Page type="shrink">
			<PageHeader title="'شتوگسکی" backLink="/2" text="شاپیفای یک پلتفرم تجاری همه کاره است که برای صاحبان مشاغل مستقل ساخته شده" badge="asdf" action={{ text: "adkfdsf" }} />
			<Card title="فرم ها">
				<Accordion
					list={[
						{
							question: "شاپیفای چیست و چگونه کار می کند؟",
							answer: "شاپیفای یک پلتفرم تجاری همه کاره است که برای صاحبان مشاغل مستقل ساخته شده است تا کسب و کار خود را به صورت آنلاین، درون فروشگاهی و در هر نقطه ای بین راه اندازی، اجرا و توسعه دهند. شاپیفای یک پلتفرم تجاری همه کاره است که برای صاحبان مشاغل مستقل ساخته شده است تا کسب و کار خود را به صورت آنلاین، درون فروشگاهی و در هر نقطه ای بین راه اندازی، اجرا و توسعه دهند. شاپیفای یک پلتفرم تجاری همه کاره است که برای صاحبان مشاغل مستقل ساخته شده است تا کسب و کار خود را به صورت آنلاین، درون فروشگاهی و در هر نقطه ای بین راه اندازی، اجرا و توسعه دهند. شاپیفای یک پلتفرم تجاری همه کاره است که برای صاحبان مشاغل مستقل ساخته شده است تا کسب و کار خود را به صورت آنلاین، درون فروشگاهی و در هر نقطه ای بین راه اندازی، اجرا و توسعه دهند. شاپیفای یک پلتفرم تجاری همه کاره است که برای صاحبان مشاغل مستقل ساخته شده است تا کسب و کار خود را به صورت آنلاین، درون فروشگاهی و در هر نقطه ای بین راه اندازی، اجرا و توسعه دهند. شاپیفای یک پلتفرم تجاری همه کاره است که برای صاحبان مشاغل مستقل ساخته شده است تا کسب و کار خود را به صورت آنلاین، درون فروشگاهی و در هر نقطه ای بین راه اندازی، اجرا و توسعه دهند.",
						},
						{
							question: "شاپیفای چیست و چگونه کار می کند؟",
							answer: "شاپیفای یک پلتفرم تجاری همه کاره است که برای صاحبان مشاغل مستقل ساخته شده است تا کسب و کار خود را به صورت آنلاین، درون فروشگاهی و در هر نقطه ای بین راه اندازی، اجرا و توسعه دهند. شاپیفای یک پلتفرم تجاری همه کاره است که برای صاحبان مشاغل مستقل ساخته شده است تا کسب و کار خود را به صورت آنلاین، درون فروشگاهی و در هر نقطه ای بین راه اندازی، اجرا و توسعه دهند. شاپیفای یک پلتفرم تجاری همه کاره است که برای صاحبان مشاغل مستقل ساخته شده است تا کسب و کار خود را به صورت آنلاین، درون فروشگاهی و در هر نقطه ای بین راه اندازی، اجرا و توسعه دهند. شاپیفای یک پلتفرم تجاری همه کاره است که برای صاحبان مشاغل مستقل ساخته شده است تا کسب و کار خود را به صورت آنلاین، درون فروشگاهی و در هر نقطه ای بین راه اندازی، اجرا و توسعه دهند. شاپیفای یک پلتفرم تجاری همه کاره است که برای صاحبان مشاغل مستقل ساخته شده است تا کسب و کار خود را به صورت آنلاین، درون فروشگاهی و در هر نقطه ای بین راه اندازی، اجرا و توسعه دهند. شاپیفای یک پلتفرم تجاری همه کاره است که برای صاحبان مشاغل مستقل ساخته شده است تا کسب و کار خود را به صورت آنلاین، درون فروشگاهی و در هر نقطه ای بین راه اندازی، اجرا و توسعه دهند.",
						},
						{
							question: "شاپیفای چیست و چگونه کار می کند؟",
							answer: "شاپیفای یک پلتفرم تجاری همه کاره است که برای صاحبان مشاغل مستقل ساخته شده است تا کسب و کار خود را به صورت آنلاین، درون فروشگاهی و در هر نقطه ای بین راه اندازی، اجرا و توسعه دهند. شاپیفای یک پلتفرم تجاری همه کاره است که برای صاحبان مشاغل مستقل ساخته شده است تا کسب و کار خود را به صورت آنلاین، درون فروشگاهی و در هر نقطه ای بین راه اندازی، اجرا و توسعه دهند. شاپیفای یک پلتفرم تجاری همه کاره است که برای صاحبان مشاغل مستقل ساخته شده است تا کسب و کار خود را به صورت آنلاین، درون فروشگاهی و در هر نقطه ای بین راه اندازی، اجرا و توسعه دهند. شاپیفای یک پلتفرم تجاری همه کاره است که برای صاحبان مشاغل مستقل ساخته شده است تا کسب و کار خود را به صورت آنلاین، درون فروشگاهی و در هر نقطه ای بین راه اندازی، اجرا و توسعه دهند. شاپیفای یک پلتفرم تجاری همه کاره است که برای صاحبان مشاغل مستقل ساخته شده است تا کسب و کار خود را به صورت آنلاین، درون فروشگاهی و در هر نقطه ای بین راه اندازی، اجرا و توسعه دهند. شاپیفای یک پلتفرم تجاری همه کاره است که برای صاحبان مشاغل مستقل ساخته شده است تا کسب و کار خود را به صورت آنلاین، درون فروشگاهی و در هر نقطه ای بین راه اندازی، اجرا و توسعه دهند.",
						},
					]}
				/>
				{modalDisplay && (
					<Drawer
						title="فرم ها"
						onClose={() => setModalDisplay(false)}
						actions={[
							{
								text: "ثبت فرم",
								color: "blue",
								onClick: formMethods.handleSubmit((data) => console.log(data)),
							},
							{
								text: "انصراف",
								color: "red-outline",
								className: "me-auto",
								onClick: () => setModalDisplay(false),
							},
						]}
					>
						<FormProvider {...formMethods}>
							<form className="grid gap-4" onSubmit={formMethods.handleSubmit((data) => console.log(data))}>
								<Input name="firstname" label="first name" />
								<Select
									name="lastname"
									label="last name"
									clearable
									options={[
										{ value: 1, label: "گزینه 1" },
										{ value: 2, label: "گزینه 2" },
										{ value: 3, label: "گزینه 3" },
									]}
								/>
								<Input name="age" label="age" type="count" />
								<Input name="password" label="Password" type="password" />
								<Textarea name="description" label="description" placeholder="" disabled />
								<Checkbox name="isRegistered" label="آیا کاربر ثبت نام شده است؟" />
								<Button text="تعویض نام" type="submit" />
							</form>
						</FormProvider>
					</Drawer>
				)}
				{modalDisplay2 && <DeleteModal title="محصول پاک شود؟" isDeleting={false} onClose={() => setModalDisplay2(false)} onDelete={() => {}} />}
				<Button text="بازکردن مودال" onClick={() => setModalDisplay(true)} />
				<Button text="بازکردن مودال 2" onClick={() => setModalDisplay2(true)} />
			</Card>
			<Pagination currentPage={page} pageCount={10} onChangePage={(page) => setPage(page)} />
			<Tab
				tabs={[
					{
						label: "HTML",
						value: "html",
						description: `It really matters and then like it really doesn't matter. What matters is the people who are sparked by it. And the people  who are like offended by it, it doesn't matter.`,
					},
					{
						label: "React",
						value: "react",
						description: `Because it's about motivating the doers. Because I'm here to follow my dreams and inspire other people to follow their dreams, too.`,
					},
					{
						label: "Vue",
						value: "vue",
						description: `We're not always in the position that we want to be at. We're constantly growing. We're constantly making mistakes. We're constantly trying to express ourselves and actualize our dreams.`,
					},
					{
						label: "Angular",
						value: "angular",
						description: `Because it's about motivating the doers. Because I'm here to follow my dreams and inspire other people to follow their dreams, too.`,
					},
					{
						label: "Svelte",
						value: "svelte",
						description: `We're not always in the position that we want to be at. We're constantly growing. We're constantly making mistakes. We're constantly trying to express ourselves and actualize our dreams.`,
					},
				]}
			/>
		</Page>
	);
}

export default App;
