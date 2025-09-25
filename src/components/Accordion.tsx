import { useState } from "react";
import { ArrowCaretDownIcon } from "./icon";

const Accordion = ({ list = [] }: AccordionProps) => {
	const [openItem, setOpenItem] = useState<number | null>(null);

	return (
		<div className="card">
			{list?.map(({ question, answer }, index) => (
				<AccordionItem
					key={index}
					question={question}
					answer={answer}
					isOpen={openItem === index}
					onClick={() => {
						if (openItem === index) setOpenItem(null);
						else setOpenItem(index);
					}}
				/>
			))}
		</div>
	);
};

const AccordionItem = ({ question, answer, isOpen = false, onClick = () => {} }: AccordionItemProps) => {
	return (
		<div className="bg-white hover:bg-neutral-50 border-b border-neutral-300">
			<div className="flex items-center justify-between cursor-pointer p-4" onClick={onClick}>
				<h6 className="text-xs font-bold text-neutral-600">{question}</h6>
				<ArrowCaretDownIcon size={16} className={`duration-300 ${isOpen ? "rotate-180" : ""}`} />
			</div>

			{isOpen && <div className="text-xs text-justify text-neutral-500 px-4 pb-4">{answer}</div>}
		</div>
	);
};

interface AccordionProps {
	list: { question: string; answer: string }[];
}

interface AccordionItemProps {
	question: string;
	answer: string;
	isOpen: boolean;
	onClick: () => void;
}

export default Accordion;
