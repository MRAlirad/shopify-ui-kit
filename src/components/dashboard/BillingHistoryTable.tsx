import Card from "../Card";
import Table from "../table/Table";
import { numberToCurrency } from "../../helpers/Number";
import Badge from "../Badge";
import { EyeIcon, TrashIcon } from "../icon";

interface BillingHistory {
    id: string;
    date: string;
    price: number;
    consumption: number;
    status: string;
}

const BillingHistoryTable = () => {

	const dataSource: BillingHistory[] = [
		{
			id: "INV-1234567890",
			date: "25 دی 1402",
			price: 321424,
			consumption: 54523,
			status: "paid",
		},
		{
			id: "INV-1234567891",
			date: "25 دی 1402",
			price: 321424,
			consumption: 54523,
			status: "unpaid",
		},
		{
			id: "INV-1234567892",
			date: "25 دی 1402",
			price: 321424,
			consumption: 54523,
			status: "paid",
		},
		{
			id: "INV-1234567893",
			date: "25 دی 1402",
			price: 567657,
			consumption: 144,
			status: "unpaid",
		},
		{
			id: "INV-1234567894",
			date: "25 دی 1402",
			price: 2345,
			consumption: 343,
			status: "paid",
		},
		{
			id: "INV-1234567895",
			date: "25 دی 1402",
			price: 4532345,
			consumption: 54,
			status: "unpaid",
		},
	];

	return (
		<Card title="تاریخچه قیمت ها" action={{ text: "نمایش همه", color: "white" }}>
			<Table<BillingHistory>
				columns={[
					{
						name: "id",
						label: "شناسه",
					},
					{
						name: "date",
						label: "تاریخ",
					},
					{
						name: "price",
						label: "قیمت",
						cellTemplate: (row) => `${numberToCurrency(row.price)} ریال`,
					},
					{
						name: "consumption",
						label: "مصرف",
						cellTemplate: (row) => `${numberToCurrency(row.consumption)} لیتر`,
					},
					{
						name: "status",
						label: "وضعیت",
						cellTemplate: (row) => <Badge text={row.status === "paid" ? "پرداخت شده" : "پرداخت نشده"} color={row.status === "paid" ? "green" : "red"} size="small" />,
					},
				]}
				dataSource={dataSource}
                actions={[
                    {
                        text: "نمایش جزئیات",
                        icon: <EyeIcon size={16} />,
                        onClick: (row) => {
                            console.log(row);
                        },
                    },
                    {
                        text: "حذف",
                        icon: <TrashIcon size={16} />,
                        color: "red-simple",
                        onClick: (row) => {
                            console.log(row);
                        },
                    }
                ]}
			/>
		</Card>
	);
};

export default BillingHistoryTable;
