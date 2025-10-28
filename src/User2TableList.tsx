import DataGrid from "./components/datagrid/DataGrid";
import { employees, type Employee } from "./values/TableData";

const User2TableList = () => {
	return <DataGrid<Employee> id="user-table" dataSource={employees} columns={[
		{ dataField: "BirthDate", caption: "تاریخ تولد", dataType: "date" },
		{ dataField: "HireDate", caption: "تاریخ استخدام", dataType: "date" },
		{ dataField: "FullName", caption: "نام و نام خانوادگی", dataType: "string" },
		{ dataField: "Position", caption: "موقعیت", dataType: "string" },
		{ dataField: "TitleOfCourtesy", caption: "عنوان", dataType: "string" },
		{ dataField: "Address", caption: "آدرس", dataType: "string" },
		{ dataField: "City", caption: "شهر", dataType: "string" },
		{ dataField: "Region", caption: "منطقه", dataType: "string" },
		{ dataField: "PostalCode", caption: "کد پستی", dataType: "string" },
		{ dataField: "Country", caption: "کشور", dataType: "string" },
		{ dataField: "HomePhone", caption: "تلفن", dataType: "string" },
		{ dataField: "Extension", caption: "تمدید", dataType: "string" },
		{ dataField: "Photo", caption: "تصویر", dataType: "string" },
		{ dataField: "Notes", caption: "یادداشت", dataType: "string" },
		{ dataField: "ReportsTo", caption: "گزینه های گزینه", dataType: "string" },
	]} />;
};

export default User2TableList;
