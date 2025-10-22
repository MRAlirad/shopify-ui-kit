import EmptyBox from "../EmptyBox";

const EmptySearchBox = () => {
	return (
		<tbody>
			<tr>
				<td colSpan={15}>
					<EmptyBox text="فیلترها یا عبارت جستجو را تغییر دهید" />
				</td>
			</tr>
		</tbody>
	);
};

export default EmptySearchBox;