import Table from "./components/table/Table";
import { EditIcon, TrashIcon } from "./components/icon";
import { users, statusOptions, type User } from "./values/TableData";
import Badge from "./components/Badge";

const UserTableList = () => {
	return (
		<Table<User>
			columns={[
				{ name: "id", label: "شناسه", sort: true, search: "text" },
				{ name: "name", label: "نام", sort: true },
				{ name: "email", label: "ایمیل", sort: true },
				{ name: "phone", label: "تلفن" },
				{ name: "address", label: "آدرس", sort: true },
				{ name: "city", label: "شهر" },
				{
					name: "status",
					label: "وضعیت",
					cellTemplate: ({ status }) => (
						<Badge
							color={(statusOptions.find((option) => option.value === status)?.color as "red" | "green" | "yellow" | "blue" | "neutral") || "neutral"}
							text={statusOptions.find((option) => option.value === status)?.label || ""}
							size="small"
						/>
					),
				},
				{ name: "country", label: "کشور" },
				{ name: "zip", label: "کد پستی" },
			]}
			dataSource={users}
			actions={[
				{
					text: "ویرایش",
					icon: <EditIcon size={16} />,
					size: "icon",
					onClick: (row) => console.log(row),
				},
				{
					text: "حذف",
					color: "red-simple",
					icon: <TrashIcon size={16} />,
					size: "icon",
					onClick: (row) => console.log(row),
				},
			]}
			searchPanel={true}
			selectable={true}
			moreInfo={true}
			allowedPageSizes={[5, 10, 20, 50, 100]}
		/>
	);
};

export default UserTableList;
