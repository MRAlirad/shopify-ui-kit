import Badge from "../Badge";
import Card from "../Card";
import ProgressBar from "../ProgressBar";

const DeviceStatus = () => {
	const statuses: { label: string; value: string }[] = [
		{ label: "شناسه دستگاه", value: "FM-1234567890" },
		{ label: "آخرین قرائت", value: "امروز، ساعت 10:00" },
		{ label: "مدل", value: "جریان سنج هوشمند X3" },
		{ label: "تاریخ نصب", value: "25 دی 1402" },
	];

	return (
		<Card title="وضعیت دستگاه" className="grid grid-cols-2 gap-2">
			<Badge text="آنلاین" color="blue" className="justify-self-end" />

			{statuses.map((status) => (
				<div key={status.label}>
					<p className="text-sm text-neutral-500">{status.label}</p>
					<p className="text-sm text-neutral-800 font-bold">{status.value}</p>
				</div>
			))}

            <ProgressBar title="باطری" progress={65} className="col-span-2" />
            <ProgressBar title="سیگنال" progress={99} className="col-span-2" />
		</Card>
	);
};

export default DeviceStatus;
