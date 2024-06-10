import React, { useState } from "react";
import { AgGridReact } from "ag-grid-react";
import { Link } from "react-router-dom";

const data = [{
  sr: "2",
  name: "Bella",
  firstLoginTime:"-",
  session:"0",
  lastUpdate:"-",
  type:"Absent",
  workingHours:"00:00"
},
{
  sr: "3",
  name: "Charlie",
  firstLoginTime:"-",
  session:"0",
  lastUpdate:"-",
  type:"Absent",
  workingHours:"00:00"
},
{
  sr: "4",
  name: "David",
  firstLoginTime:"-",
  session:"0",
  lastUpdate:"-",
  type:"Absent",
  workingHours:"00:00"
},
{
  sr: "5",
  name: "Ella",
  firstLoginTime:"-",
  session:"0",
  lastUpdate:"-",
  type:"Absent",
  workingHours:"00:00"
}
];

const dateFilterParams = {
  comparator: (filterLocalDateAtMidnight, cellValue) => {
    var dateAsString = cellValue;
    if (dateAsString == null) return -1;
    var dateParts = dateAsString.split("-");
    var cellDate = new Date(
      Number(dateParts[2]),
      Number(dateParts[1]) - 1,
      Number(dateParts[0])
    );
    if (filterLocalDateAtMidnight.getTime() === cellDate.getTime()) {
      return 0;
    }
    if (cellDate < filterLocalDateAtMidnight) {
      return -1;
    }
    if (cellDate > filterLocalDateAtMidnight) {
      return 1;
    }
    return 0;
  },
};

function AttendanceReport() {
  const [search, setSearch] = useState("");
  const [row, setRow] = useState(data);
  const [gridApi, setGridApi] = useState(null);

  const [startDate, setStartDate] = useState("");

  const [column, setColumn] = useState([
    {
      headerName: "Sr.",
      width: 80,
      cellStyle: { display: "flex", alignItems: "center", height:"40px" },
      filter: "agDateColumnFilter",
      filterParams: dateFilterParams,
      field: "date",
      cellRenderer: (params) => {
        return (
          <Link>
            <div className="cursor-pointer flex flex-col justify-center">
              <div className="text-sm text-black">{params.rowIndex + 1}</div>
            </div>
          </Link>
        );
      },
    },
    {
      headerName: "Name",
      cellStyle: { display: "flex", alignItems: "start", height:"40px" },
      width: 260,
      cellRenderer: (params) => {
        return (
          <div className="flex flex-col w-full">
            <div className="text-black font-medium">
              {params.data.name}
            </div>
          </div>
        );
      },
    },
    {
      headerName: "First Login Time",
      cellStyle: { display: "flex", alignItems: "start", height:"40px" },
      field: "firstLoginTime",
      width: 250,
    },
    {
      headerName: "session",
      cellStyle: { display: "flex", alignItems: "start", height:"40px"},
      field: "session",
      width: 250,
    },
    {
      headerName: "Last Update",
      field: "lastUpdate", 
    },
    {
      headerName: "Type",
      field: "type",
      cellStyle: { display: "flex", alignItems: "start", height:"40px"},
      width: 250,
    },
    {
      headerName: "Working Hours",
      field: "workingHours",
      cellStyle: { display: "flex", alignItems: "start", height:"40px"},
      width: 250,
    },
  ]);

  const onGridReady = (params) => {
    setGridApi(params.api);
    setRow(data);
  };

  const defaultColDef = {
    sortable: true,
    filter: true,
    cellStyle: {
      borderRight: "1px solid #d9d9db",
      display: "flex",
      alignItems: "center",
    },
    width: 191,
    tooltipField: "name",
  };

  return (
    <div className="h-full flex flex-col">
      <div className="w-full flex justify-between items-center h-16 sm:h-14 sm:flex-row flex-col px-2 border-t border-slate-300 border-b bg-[#eff3f7]">
        <div className="font-bold"> Today's Attandance Report </div>
        <div className="flex justify-end  w-[100%] sm:w-[40%] items-center gap-3 h-full">
          <div className="custom-date-picker"></div>

          <select
            title="Today's Attendance"
            defaultValue={"Today's Attendance"}
            className="text-sm w-[40%] py-2 rounded-md focus:outline px-1"
          >
            <option value="">Today's Attendance</option>
            <option value="">dsfasdf</option>
            <option value="">dsfasdf</option>
            <option value="">dsfasdf</option>
            <option value="">dsfasdf</option>
            <option value="">dsfasdf</option>
          </select>

          <select
            title="All Users"
            defaultValue={"All Users"}
            className="text-sm w-[40%] py-2 rounded-md focus:outline px-1"
          >
            <option value="">All Users</option>
            <option value="">dsfasdf</option>
            <option value="">dsfasdf</option>
            <option value="">dsfasdf</option>
            <option value="">dsfasdf</option>
            <option value="">dsfasdf</option>
          </select>

          <button className="bg-[#12344d] text-white py-2 text-sm px-2 rounded-md flex flex-row items-center">
            {/* <SearchIcon /> */}
            <span>Search</span>
          </button>
          <button className="bg-[#12344d] text-white py-2 text-sm px-2 rounded-md">
            Reset
          </button>
        </div>
      </div>
      <div className="mx-3 px-4 h-12 flex flex-col justify-center bg-[#eff3f7] text-sm">
        <span>
      Sunday, 12 May 2024
        </span>
      </div>
      <div className="flex-grow">
        <div
          className="ag-theme-quartz"
          style={{ height: "100%", width: "100%" }}
        >
          <AgGridReact
            onGridReady={onGridReady}
            columnDefs={column}
            rowData={row}
            defaultColDef={defaultColDef}
            enableBrowserTooltips={true}
            pagination={true}
            rowHeight={70}
          />
        </div>
      </div>
    </div>
  );
}

export default AttendanceReport;
