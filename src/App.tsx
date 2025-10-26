import BarChart from "./components/chart/BarChart";
import Page from "./components/Page";
// import UserTableList from "./UserTableList";
// import User2TableList from "./User2TableList";

function App() {
	return (
		<div className="min-h-screen">
			<Page type="shrink">
				<BarChart
					labels={["January", "February", "March", "April", "May", "June", "July"]}
					datasets={[
						{ label: "دیتا شماره یک", data: [65, 98, 80, 81, 56, 55, 40], backgroundColor: "rgb(54, 162, 2)" },
						{ label: "دیتا شماره دو", data: [4, 4, 5, 4, 3, 34, 5] },
						{ label: "دیتا شماره سه", data: [4, 3, 5, 4, 44, 34, 5] },
						{ label: "دیتا شماره چهار", data: [4, 59, 5, 4, 34, 2, 5] },
					]}
					options={{ title: "شتوپسکی دیتا" }}
				/>
			</Page>
		</div>
	);
}

export default App;
