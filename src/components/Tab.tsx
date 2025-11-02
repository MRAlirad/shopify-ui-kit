import { useState } from "react";
import classNames from "classnames";

const Tab = ({ tabs = [] }: TabProps) => {
	const [activeTab, setActiveTab] = useState(tabs?.[0].value);

	return (
		<div className="grid">
			<div className="flex border-b border-neutral-300">
				{tabs.map(({ label, value }) => (
					<div
						key={value}
						className={classNames({
							"text-neutral-900 text-center py-1 px-2 w-full select-none cursor-pointer": true,
							"border-b-2 border-neutral-900": value === activeTab,
						})}
						onClick={() => setActiveTab(value)}
					>
						{label}
					</div>
				))}
			</div>
			<p key={activeTab} className="p-4 text-neutral-700 animate-fadeInUp">
				{tabs?.find((tab) => tab.value === activeTab)?.description}
			</p>
			{/* <div className="relative">
				{tabs.map(({ description, value }) => (
					<p
						key={value}
						className={classNames({
							"text-neutral-700 absolute top-0 start-0 duration-300 p-4": true,
							"opacity-100": value === activeTab,
							"opacity-0": value !== activeTab,
						})}
					>
						{description}
					</p>
				))}
			</div> */}
		</div>
	);
};

interface TabProps {
	tabs: { label: string; value: string; description: string }[];
}
export default Tab;
