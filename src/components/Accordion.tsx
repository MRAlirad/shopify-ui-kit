import { useState } from "react";
import { ArrowCaretDownIcon } from ".";
import type { AccordionProps, AccordionItemProps } from "./props";

const Accordion = ({ title, list = [], openFirstItem = false }: AccordionProps) => {
	const [activeItem, setActiveItem] = useState<number | null>(openFirstItem ? 0 : null);

	return (
		<div className="grid gap-2">
			{title && <h3 className="text-lg font-bold text-neutral-600 dark:text-neutral-100">{title}</h3>}
			<div className="card">
				{list?.map(({ question, answer }, index) => (
					<AccordionItem
						key={index}
						question={question}
						answer={answer}
						activeItem={activeItem}
						isActive={activeItem === index}
						onClick={() => {
							if (activeItem === index) setActiveItem(null);
							else setActiveItem(index);
						}}
					/>
				))}
			</div>
		</div>
	);
};

const AccordionItem = ({ question, answer, isActive = false, activeItem, onClick = () => {} }: AccordionItemProps) => {
	return (
		<div className={`border-b border-blue-200 dark:border-white/20 last:border-b-0 ${isActive ? "bg-blue-50/50 dark:bg-white/5" : "bg-white dark:bg-gray-900"}`}>
			<div className="flex items-center justify-between cursor-pointer p-4" onClick={onClick}>
				<h6 className="text-sm font-bold text-gray-900 dark:text-white">{question}</h6>
				<ArrowCaretDownIcon size={16} className={`duration-300 ${isActive ? "rotate-180" : ""}`} />
			</div>

			{isActive && <p key={activeItem} className="text-sm text-justify text-gray-600 dark:text-gray-400 px-4 pb-4 animate-fadeInUp">{answer}</p>}
		</div>
	);
};

export default Accordion;
