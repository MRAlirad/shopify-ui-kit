import { FormProvider, useForm } from "react-hook-form";
// import PieChart from "./components/chart/PieChart";
import Page from "./components/Page";
// import ScrollToTop from "./components/ScrollToTop";
import RadioBtn from "./components/RadioBtn";
// import UserTableList from "./UserTableList";
// import User2TableList from "./User2TableList";

function App() {
	const form = useForm({
		defaultValues: {
			options: "option3",
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
				</FormProvider>
			</Page>
		</div>
	);
}

export default App;
