import Page from "./components/Page";
import UserTableList from "./UserTableList";

function App() {
	return (
		<div className="min-h-screen">
			<Page type="shrink">
				<UserTableList />
			</Page>
		</div>
	);
}

export default App;
