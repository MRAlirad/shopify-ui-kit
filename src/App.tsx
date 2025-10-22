import { useState } from "react";
import Page from "./components/Page";
import Table from "./components/table/Table";
import { EditIcon, TrashIcon } from "./components/icon";
import Badge from "./components/Badge";
// import Badge from "./components/Badge";

function App() {
	const [page, setPage] = useState(1);
	const dataSet = [
		{
			id: 456789012345,
			name: "علی احمدی",
			email: "ali@ahmadi.ir",
			phone: "09123456789",
			address: "تهران، خیابان انقلاب، پلاک ۴۵۶",
			city: "تهران",
			country: "ایران",
			zip: "12345",
			status: 1,
		},
		{
			id: 567890123456,
			name: "مریم رضایی",
			email: "maryam@rezaei.com",
			phone: "02198765432",
			address: "اصفهان، میدان نقش جهان، کوچه ۷۸",
			city: "اصفهان",
			country: "ایران",
			zip: "54321",
			status: 2,
		},
		{
			id: 678901234567,
			name: "رضا محمدی",
			email: "reza@mohammadi.net",
			phone: "09187654321",
			address: "شیراز، بلوار چمران، پلاک ۹۸۷",
			city: "شیراز",
			country: "ایران",
			zip: "67890",
			status: 2,
		},
		{
			id: 789012345678,
			name: "فاطمه علوی",
			email: "fatemeh@alavi.org",
			phone: "03112345678",
			address: "مشهد، خیابان امام رضا، پلاک ۳۲۱",
			city: "مشهد",
			country: "ایران",
			zip: "09876",
			status: 0,
		},
	];

	const statusOptions = [
		{ value: 0, label: "غیرفعال", color: "red" },
		{ value: 1, label: "فعال", color: "green" },
		{ value: 2, label: "درحال انتظار", color: "yellow" },
	];

	return (
		<Page type="shrink">
			<Table
				columns={[
					{ name: "name", label: "نام" },
					{ name: "email", label: "ایمیل" },
					{ name: "phone", label: "تلفن" },
					{ name: "address", label: "آدرس" },
					{ name: "city", label: "شهر" },
					{
						name: "status",
						label: "وضعیت",
						cellTemplate: (row: { [key: string]: string | number }) => (
							<Badge
								color={
									(
										statusOptions.find(
											(option) => option.value === row.
										)?.color as "red" | "green" | "yellow" | "blue" | "neutral"
									) || "neutral"
								}
								text={
									statusOptions.find(
										(option) => option.value === row.status
									)?.label || ""
								}
								size="small"
							/>
						),
					},
					{ name: "country", label: "کشور" },
					{ name: "zip", label: "کد پستی" },
				]}
				dataSet={dataSet}
				actions={[
					{
						visibility: true,
						color: "green",
						icon: <EditIcon />,
						size: "icon",
						onClick: (row) => console.log(row.status),
					},
					{
						visibility: true,
						color: "red",
						icon: <TrashIcon />,
						size: "icon",
						onClick: (row) => console.log(row),
					},
				]}
				pagination={{ currentPage: page, pageCount: 10, onChangePage: setPage }}
			/>
		</Page>
	);
}

export default App;
