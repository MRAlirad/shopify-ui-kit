import { FormProvider, useForm } from "react-hook-form";
import Badge from "../Badge";
import Card from "../Card";
import Toggle from "../Toggle";

const Alerts = () => {
	const form = useForm<{
		limit: boolean;
		leak: boolean;
		consumptionPattern: boolean;
		monthlyBudget: boolean;
		highFlowRate: boolean;
		weeklyConsumptionReport: boolean;
	}>({
		defaultValues: {
			limit: false,
			leak: true,
			consumptionPattern: false,
			monthlyBudget: true,
			highFlowRate: true,
			weeklyConsumptionReport: false,
		},
	});

	const alerts = [
		{
			name: "limit",
			title: "محدودیت مصرف روزانه",
			description: "هشدار زمانی که مصرف روزانه به حداکثر محدودیت مصرف روزانه می رسد",
		},
		{
			name: "leak",
			title: "تشخیص نشتی",
			description: "هشدار برای جریان مداوم آب بیش از 24 ساعت",
		},
		{
			name: "consumptionPattern",
			title: "الگوی مصرف آب غیر عادی",
			description: "هشدار زمانی که الگوی مصرف آب غیر عادی مشاهده شود",
		},
		{
			name: "monthlyBudget",
			title: "مصرف ماهانه",
			description: "هشدار زمانی که مصرف ماهانه به حداکثر محدودیت مصرف ماهانه شما می رسد",
		},
		{
			name: "highFlowRate",
			title: "جریان آب بالا",
			description: "هشدار زمانی که جریان آب بالا مشاهده شود",
		},
		{
			name: "weeklyConsumptionReport",
			title: "گزارش مصرف هفتگی",
			description: "گزارش مصرف هفتگی برای آب مصرفی شما",
		},
	];

	return (
		<FormProvider {...form}>
			<Card title="هشدار ها و اعلانات" className="grid-cols-2">
				<Badge text="هشدار" color="blue" className="justify-self-end" size="small" />
				{alerts.map(({ name, title, description }) => (
					<div key={name} className="grid grid-cols-[1fr_max-content] items-center gap-2 col-span-2">
						<div>
							<p className="text-sm text-neutral-900">{title}</p>
							<p className="text-neutral-400 text-xs">{description}</p>
						</div>
						<Toggle name={name} />
					</div>
				))}
			</Card>
		</FormProvider>
	);
};

export default Alerts;
