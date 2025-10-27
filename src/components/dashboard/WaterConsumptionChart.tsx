import LineChart from "../chart/LineChart";
import BarChart from "../chart/BarChart";
import Card from "../Card";
import { FormProvider, useForm } from "react-hook-form";
import Select from "../Select";
import Button from "../Button";
import { useCallback } from "react";

const WaterConsumptionChart = () => {
	const form = useForm<{
		comparision: "0" | "1";
		chart: "line" | "bar";
		time: "0" | "1" | "2";
	}>({
		defaultValues: {
			comparision: "0",
			chart: "line",
			time: "0",
		},
	});
	const { watch, setValue } = form;

	const getTimeLabels = useCallback(() => {
		const dailyTimeLabels = ["12 AM", "3 AM", "6 AM", "9 AM", "12 PM", "3 PM", "6 PM", "9 PM"];
		const weeklyTimeLabels = ["شنبه", "یکشنبه", "دوشنبه", "سه شنبه", "چهارشنبه", "پنجشنبه", "جمعه"];
		const monthlyTimeLabels = ["قروردین", "اردیبهشت", "خرداد", "تیر", "مرداد", "شهریور", "مهر", "آبان", "آذر", "دی", "بهمن", "اسفند"];

		if (watch("time") === "0") return dailyTimeLabels;
		if (watch("time") === "1") return weeklyTimeLabels;
		if (watch("time") === "2") return monthlyTimeLabels;
		return [];
	}, [watch]);

	const datasets: { label: string; data: number[]; backgroundColor?: string; borderColor?: string }[] = [
		{
			label: "مصرف آب",
			data: [13, 53, 34, 75, 98, 24, 65, 80, 43, 6, 4, 34],
		},
		{
			label: "مصرف آب",
			data: [43, 87, 76, 23, 67, 34, 43, 9, 23, 12, 43, 76],
			backgroundColor: "rgba(162, 162, 162,0.6)",
			borderColor: "rgba(162, 162, 162,0.6)",
		},
	];

	const timeButtons = [
		{
			text: "روزانه",
			value: "0",
		},
		{
			text: "هفتگی",
			value: "1",
		},
		{
			text: "ماهانه",
			value: "2",
		},
	];

	return (
		<Card title="مصرف آب" className="grid grid-cols-[1fr_max-content] gap-2">
			<FormProvider {...form}>
				<div className="flex items-center gap-2">
					<Select
						name="comparision"
						options={[
							{ value: "0", label: "مقایسه - خیر" },
							{ value: "1", label: "مقایسه - بله" },
						]}
					/>
					<Select
						name="chart"
						options={[
							{ value: "line", label: "خطی" },
							{ value: "bar", label: "میله ای" },
						]}
					/>
				</div>
				<div className="grid gap-2 col-span-2">
					<div className="flex items-center gap-1 justify-self-end">
						{timeButtons.map((btn) => (
							<Button
								key={btn.value}
								color="black-simple"
								size="small"
								text={btn.text}
								className={watch("time") === btn.value ? "bg-neutral-200" : ""}
								onClick={() => setValue("time", btn.value as "0" | "1" | "2")}
							/>
						))}
					</div>
					<div>
						{watch("chart") === "line" ? (
							<LineChart labels={getTimeLabels()} datasets={watch("comparision") === "0" ? [datasets[0]] : datasets} />
						) : (
							<BarChart labels={getTimeLabels()} datasets={watch("comparision") === "0" ? [datasets[0]] : datasets} />
						)}
					</div>
				</div>
			</FormProvider>
		</Card>
	);
};

export default WaterConsumptionChart;
