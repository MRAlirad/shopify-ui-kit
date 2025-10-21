const Column = ({ name, label, visibility = true, width }: ColumnProps) => {
    if(!visibility) return;

	return <div>Column</div>;
};

export interface ColumnProps {
	name: string;
    label: string;
	visibility?: boolean;
    width?: number;
}

export default Column;
