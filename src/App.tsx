import Page from "./components/Page";
import { Card } from "./components";
import { PiUserCircleDuotone } from "react-icons/pi";

function App() {
	return (
		<div className="grid grid-rows-[max-content_1fr] min-h-screen bg-gray-50 dark:bg-gray-950">
			<div></div>
			<Page type="shrink">
				<Card title="ورود به حساب کاربری" icon={<PiUserCircleDuotone />} text="ورود به حساب کاربری">
					<div className="text-neutral-900 dark:text-white">asfdsfdsf</div>
					<div className="text-neutral-900 dark:text-white">dsafasdfdsf</div>
					<div className="text-neutral-900 dark:text-white">dsafasdfdsf</div>
				</Card>
			</Page>
		</div>
	);
}

export default App;
