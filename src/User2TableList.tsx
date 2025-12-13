import Table from "./components/table/Table";
import { employees, type Employee } from "./values/TableData";

const User2TableList = () => {
	return (
		<Table<Employee>
			id="user-table"
			keyExpr="id"
			dataSource={employees}
			columns={[
				{ name: "BirthDate", label: "تاریخ تولد"  },
				{ name: "HireDate", label: "تاریخ استخدام" },
				{ name: "FullName", label: "نام و نام خانوادگی" },
				{ name: "Position", label: "موقعیت" },
				{ name: "TitleOfCourtesy", label: "عنوان" },
				{ name: "Address", label: "آدرس" },
				{ name: "City", label: "شهر" },
				{ name: "Region", label: "منطقه" },
				{ name: "PostalCode", label: "کد پستی" },
				{ name: "Country", label: "کشور" },
				{ name: "HomePhone", label: "تلفن" },
				{ name: "Extension", label: "تمدید" },
				{ name: "Photo", label: "تصویر" },
				{ name: "Notes", label: "یادداشت" },
				{ name: "ReportsTo", label: "گزینه های گزینه" },
			]}
		/>
	);
};

export default User2TableList;
