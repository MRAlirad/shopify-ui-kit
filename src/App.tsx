import { FormProvider, useForm } from "react-hook-form";
// import PieChart from "./components/chart/PieChart";
import Page from "./components/Page";
// import ScrollToTop from "./components/ScrollToTop";
import RadioBtn from "./components/RadioBtn";
import Button from "./components/Button";
import Checkbox from "./components/Checkbox";
// import PageActionBox from "./components/PageActionBox";
import DatePicker from "./components/DatePicker";
import Input from "./components/Input";
import Toggle from "./components/Toggle";
import UserTableList from "./UserTableList";
import Badge from "./components/Badge";
// import User2TableList from "./User2TableList";

function App() {
	const form = useForm({
		defaultValues: {
			options: "",
			checkbox: true,
			date: "1400-02-12 08:34:23",
			Toggle: true,
		},
	});
	return (
		<div className="min-h-screen">
			<Page type="shrink">
				<UserTableList />
				<FormProvider {...form}>
					<RadioBtn
						name="options"
						options={[
							{ label: "Option 1", value: "option1" },
							{ label: "Option 2", value: "option2" },
							{ label: "Option 3", value: "option3" },
							{ label: "Option 4", value: "option4" },
							{ label: "Option 5", value: "option5" },
						]}
						direction="vertical"
					/>
					<Checkbox name="checkbox" label="Checkbox" onChange={(value) => console.log(value)} />
					<DatePicker name="date" label="تاریخ" timePicker />
					<Input name="time" label="زمان" type="time" />
					<Toggle name="Toggle" label="Toggle" onChange={(value) => console.log(value)} onCheck={() => console.log("checked")} onUncheck={() => console.log("unchecked")} />
					<Badge text="Purple" size="small" color="purple" />
					<Button text="Submit" color="purple-simple" onClick={form.handleSubmit((data) => console.log(data))} disabled={form.watch("Toggle")} />
				</FormProvider>
			</Page>
		</div>
	);
}

export default App;
