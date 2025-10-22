import { useState } from "react";
import Page from "./components/Page";
import Table from "./components/table/Table";
import { EditIcon, TrashIcon } from "./components/icon";
import Badge from "./components/Badge";

interface User {
	id: number;
	name: string;
	email: string;
	phone: string;
	address: string;
	city: string;
	country: string;
	zip: string;
	status: 0 | 1 | 2;
}

function App() {
	const [page, setPage] = useState(1);

	const dataSet: User[] = [
		{
			id: 123456789012,
			name: "محمد حسینی",
			email: "mohammad@hoseini.ir",
			phone: "09121234567",
			address: "کرج، بلوار طالقانی، پلاک ۱۲۳",
			city: "کرج",
			country: "ایران",
			zip: "34567",
			status: 0,
		},
		{
			id: 234567890123,
			name: "سارا کریمی",
			email: "sara@karimi.com",
			phone: "02187654321",
			address: "تبریز، خیابان آزادی، کوچه ۴۵",
			city: "تبریز",
			country: "ایران",
			zip: "45678",
			status: 0,
		},
		{
			id: 345678901234,
			name: "امیر عباسی",
			email: "amir@abbasi.net",
			phone: "09134567890",
			address: "اهواز، کیانپارس، پلاک ۶۷۸",
			city: "اهواز",
			country: "ایران",
			zip: "56789",
			status: 1,
		},
		{
			id: 456789012345,
			name: "لیلا موسوی",
			email: "leila@musavi.org",
			phone: "06123456789",
			address: "بندرعباس، بلوار جمهوری، پلاک ۹۰۱",
			city: "بندرعباس",
			country: "ایران",
			zip: "67890",
			status: 2,
		},
		{
			id: 567890123456,
			name: "حسین نوری",
			email: "hossein@nouri.ir",
			phone: "09145678901",
			address: "رشت، میدان شهرداری، کوچه ۲۳",
			city: "رشت",
			country: "ایران",
			zip: "78901",
			status: 1,
		},
		{
			id: 678901234567,
			name: "زهرا جلالی",
			email: "zahra@jalali.com",
			phone: "01398765432",
			address: "ساری، خیابان فرهنگ، پلاک ۴۵۶",
			city: "ساری",
			country: "ایران",
			zip: "89012",
			status: 0,
		},
		{
			id: 789012345678,
			name: "پوریا صمدی",
			email: "pouria@samadi.net",
			phone: "09156789012",
			address: "ارومیه، بلوار ولیعصر، پلاک ۷۸۹",
			city: "ارومیه",
			country: "ایران",
			zip: "90123",
			status: 1,
		},
		{
			id: 890123456789,
			name: "مینا رحیمی",
			email: "mina@rahimi.org",
			phone: "04412345678",
			address: "زنجان، خیابان سعدی، کوچه ۹۰",
			city: "زنجان",
			country: "ایران",
			zip: "01234",
			status: 2,
		},
		{
			id: 901234567890,
			name: "کیوان طاهری",
			email: "keyvan@taheri.ir",
			phone: "09167890123",
			address: "قم، بلوار پیامبر اعظم، پلاک ۱۲۳۴",
			city: "قم",
			country: "ایران",
			zip: "12345",
			status: 1,
		},
		{
			id: 112345678901,
			name: "نازنین کاظمی",
			email: "naznin@kazemi.com",
			phone: "02598765432",
			address: "یزد، میدان امیرچخماق، پلاک ۵۶۷",
			city: "یزد",
			country: "ایران",
			zip: "23456",
			status: 2,
		},
	];

	const statusOptions = [
		{ value: 0, label: "غیرفعال", color: "red" },
		{ value: 1, label: "فعال", color: "green" },
		{ value: 2, label: "درحال انتظار", color: "yellow" },
	];

	return (
		<Page type="shrink">
			<Table<User>
				columns={[
					{ name: "name", label: "نام" },
					{ name: "email", label: "ایمیل" },
					{ name: "phone", label: "تلفن" },
					{
						name: "address",
						label: "آدرس",
						visibility: false,
					},
					{ name: "city", label: "شهر" },
					{
						name: "status",
						label: "وضعیت",
						cellTemplate: ({ status }) => {
							return (
								<Badge
									color={(statusOptions.find((option) => option.value === status)?.color as "red" | "green" | "yellow" | "blue" | "neutral") || "neutral"}
									text={statusOptions.find((option) => option.value === status)?.label || ""}
									size="small"
								/>
							);
						},
					},
					{ name: "country", label: "کشور" },
					{ name: "zip", label: "کد پستی" },
				]}
				dataSet={dataSet}
				actions={[
					{
						visibility: true,
						text: "ویرایش",
						icon: <EditIcon size={16} />,
						size: "icon",
						onClick: (row) => console.log(row),
					},
					{
						visibility: true,
						text: "حذف",
						color: "red-simple",
						icon: <TrashIcon size={16} />,
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
