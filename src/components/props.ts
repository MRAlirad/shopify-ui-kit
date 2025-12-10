export interface AccordionProps {
	list: { question: string; answer: string }[];
    title?: string;
    openFirstItem?: boolean;
}

export interface AccordionItemProps {
	question: string;
	answer: string;
	isActive: boolean;
    activeItem: number | null;
	onClick: () => void;
}
