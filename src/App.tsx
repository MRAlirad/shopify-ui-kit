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
// import UserTableList from "./UserTableList";
// import User2TableList from "./User2TableList";

function App() {
	const form = useForm({
		defaultValues: {
			options: "option3",
			checkbox: true,
			date: "1404-08-12",
		},
	});
	return (
		<div className="min-h-screen">
			<Page type="shrink">
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
					<DatePicker name="date" label="تاریخ" />
					<Input name="time" label="زمان" type="time" />
					<Button text="Submit" onClick={form.handleSubmit((data) => alert(data))} />
				</FormProvider>
			</Page>
		</div>
	);
}

export default App;
