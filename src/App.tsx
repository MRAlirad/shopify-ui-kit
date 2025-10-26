import PieChart from "./components/chart/PieChart";
import Page from "./components/Page";
import ScrollToTop from "./components/ScrollToTop";
// import UserTableList from "./UserTableList";
// import User2TableList from "./User2TableList";

function App() {
	return (
		<div className="min-h-screen">
			<Page type="shrink">
				<PieChart
					labels={["January", "February", "March", "April", "May", "June", "July"]}
					datasets={[
						{
							label: "دیتا شماره یک",
							data: [65, 98, 80, 81, 56, 55, 40],
							backgroundColor: [
								"rgb(54, 162, 2)",
								"rgb(255, 99, 132)",
								"rgb(255, 206, 86)",
								"rgb(75, 192, 192)",
								"rgb(153, 102, 255)",
								"rgb(255, 159, 64)",
								"rgb(255, 99, 132)",
							],
						},
					]}
					options={{ title: "شتوپسکی دیتا" }}
				/>
			</Page>
			<ScrollToTop />
		</div>
	);
}

export default App;
