import Page from "./components/Page";
import UserTableList from "./UserTableList";

// import DeviceStatus from "./components/dashboard/DeviceStatus";
// import Stats from "./components/dashboard/Stats";
// import WaterConsumptionChart from "./components/dashboard/WaterConsumptionChart";
// import BillingHistoryTable from "./components/dashboard/BillingHistoryTable";
// import Alerts from "./components/dashboard/Alerts";

function App() {
	return (
		<div className="min-h-screen">
			{/* <Page type="shrink" className="grid grid-cols-[3fr_2fr] gap-4">
				<Stats />
				<WaterConsumptionChart />
				<DeviceStatus />
				<BillingHistoryTable />
				<Alerts />
			</Page> */}
			<Page type="shrink">
				<UserTableList />
			</Page>
			{/* <Page>
			</Page> */}
		</div>
	);
}

export default App;
