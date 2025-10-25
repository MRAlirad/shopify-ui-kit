import Page from "./components/Page";
import UserTableList from "./UserTableList";
// import User2TableList from "./User2TableList";

function App() {
	return (
		<Page type="shrink">
			<UserTableList />
			{/* <User2TableList /> */}
		</Page>
	);
}

export default App;
