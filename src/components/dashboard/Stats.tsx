import Badge from "../Badge";
import Card from "../Card";

const Stats = () => {
	const stats: StatProps[] = [
		{ title: "مصرف فعلی", value: 320, unit: "لیتر/روز", dateTime: "در مقایسه با هفته قبل", percentage: 10, comparision: "up" },
		{ title: "میانگین ماهانه", value: 9450, unit: "لیتر", dateTime: "در مقایسه با ماه قبل", percentage: 10, comparision: "down" },
		{ title: "زمان اوج مصرف", value: `7-8`, unit: "صبح", dateTime: "در مقایسه با هفته قبل", percentage: 10, comparision: "down" },
		{ title: "صرفه جویی آب", value: 15, unit: "%", dateTime: "در مقایسه با میانگین شهر", percentage: 10, comparision: "up" },
	];

	return (
		<div className="grid grid-cols-4 gap-4 col-span-2">
			{stats.map((stat) => (
				<Stat key={stat.title} {...stat} />
			))}
		</div>
	);
};

const Stat = ({ title, value, unit, dateTime, percentage, comparision }: StatProps) => {
	return (
		<Card title={title} className="!py-2 !px-3 !gap-2">
			<div className="grid grid-cols-[1fr_max-content] items-center gap-1">
				<div className="grid gap-1">
					<p className="flex items-center gap-0.5">
						<span className="text-lg text-neutral-800">{value}</span>
						<span className="text-xs text-neutral-500">{unit}</span>
					</p>
					<p className="text-xs text-neutral-500">{dateTime}</p>
				</div>
				<Badge text={`${percentage} %`} color={comparision === "up" ? "green" : "red"} size="small" />
			</div>
		</Card>
	);
};

export interface StatProps {
	title: string;
	value: string | number;
	unit: string;
	dateTime: string;
	percentage: number;
	comparision: "up" | "down";
}

export default Stats;
