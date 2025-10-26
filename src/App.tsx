import LineChart from "./components/chart/LineChart";
import Page from "./components/Page";
// import UserTableList from "./UserTableList";
// import User2TableList from "./User2TableList";

function App() {
	return (
		<Page type="shrink">
			<LineChart
				labels={["January", "February", "March", "April", "May", "June", "July"]}
				datasets={[
					{ label: "My First dataset", data: [65, 100, 80, 81, 56, 55, 40] },
					{ label: "My second dataset", data: [4, 59, 5, 4, 34, 34, 5] },
				]}
				options={{ title: "My Chart" }}
			/>
		</Page>
	);
}

export default App;
