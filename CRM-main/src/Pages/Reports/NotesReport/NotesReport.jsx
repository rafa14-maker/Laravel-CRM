import React from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import "react-phone-number-input/style.css";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import "./NotesReport.css";

const data = [{
  id: "56GH78TY2",
  fname: "Alice",
  lname: "Smith",
  date: "28-03-2024",
  number: 987654321,
  email: "alicesmith@gmail.com",
  source: "Instagram",
  notes: "qazwsx, edcrfv",
  status: "New",
  assignedTo: "Jessica Brown",
  rank: "Mr.",
  pax: "2",
  destination:"Paris"
},
{
  id: "78JK90VB3",
  fname: "Emily",
  lname: "Johnson",
  date: "30-03-2024",
  number: 456123789,
  email: "emilyjohnson@gmail.com",
  source: "Twitter",
  notes: "lorem ipsum, dolor sit amet",
  status: "Confirmed",
  assignedTo: "Michael Williams",
  rank: "Ms.",
  pax: "3",
  destination:"London"
},
{
  id: "90BN12XC4",
  fname: "David",
  lname: "Brown",
  date: "02-04-2024",
  number: 789456123,
  email: "davidbrown@gmail.com",
  source: "Google",
  notes: "consectetur adipiscing elit",
  status: "Confirmed",
  assignedTo: "Sarah Taylor",
  rank: "Mr.",
  pax: "1",
  destination:"New York"
},
{
  id: "23ER45TY5",
  fname: "Sophia",
  lname: "Garcia",
  date: "05-04-2024",
  number: 321654987,
  email: "sophiagarcia@gmail.com",
  source: "Referral",
  notes: "sed do eiusmod tempor incididunt",
  status: "New",
  assignedTo: "John Doe",
  rank: "Ms.",
  pax: "2",
  destination:"Tokyo"
},
{
  id: "45DF67GH6",
  fname: "Daniel",
  lname: "Martinez",
  date: "08-04-2024",
  number: 654987321,
  email: "danielmartinez@gmail.com",
  source: "Email",
  notes: "ut labore et dolore magna aliqua",
  status: "New",
  assignedTo: "Emily Smith",
  rank: "Mr.",
  pax: "1",
  destination:"Sydney"
},
{
  id: "45DF67GH6",
  fname: "Daniel",
  lname: "Martinez",
  date: "08-04-2024",
  number: 654987321,
  email: "danielmartinez@gmail.com",
  source: "Email",
  notes: "ut labore et dolore magna aliqua",
  status: "New",
  assignedTo: "Emily Smith",
  rank: "Mr.",
  pax: "1",
  destination:"Sydney"
},
{
  id: "45DF67GH6",
  fname: "Daniel",
  lname: "Martinez",
  date: "08-04-2024",
  number: 654987321,
  email: "danielmartinez@gmail.com",
  source: "Email",
  notes: "ut labore et dolore magna aliqua",
  status: "New",
  assignedTo: "Emily Smith",
  rank: "Mr.",
  pax: "1",
  destination:"Sydney"
},
{
  id: "45DF67GH6",
  fname: "Daniel",
  lname: "Martinez",
  date: "08-04-2024",
  number: 654987321,
  email: "danielmartinez@gmail.com",
  source: "Email",
  notes: "ut labore et dolore magna aliqua",
  status: "New",
  assignedTo: "Emily Smith",
  rank: "Mr.",
  pax: "1",
  destination:"Sydney"
},
{
  id: "45DF67GH6",
  fname: "Daniel",
  lname: "Martinez",
  date: "08-04-2024",
  number: 654987321,
  email: "danielmartinez@gmail.com",
  source: "Email",
  notes: "ut labore et dolore magna aliqua",
  status: "New",
  assignedTo: "Emily Smith",
  rank: "Mr.",
  pax: "1",
  destination:"Sydney"
},
{
  id: "45DF67GH6",
  fname: "Daniel",
  lname: "Martinez",
  date: "08-04-2024",
  number: 654987321,
  email: "danielmartinez@gmail.com",
  source: "Email",
  notes: "ut labore et dolore magna aliqua",
  status: "New",
  assignedTo: "Emily Smith",
  rank: "Mr.",
  pax: "1",
  destination:"Sydney"
},
{
  id: "45DF67GH6",
  fname: "Daniel",
  lname: "Martinez",
  date: "08-04-2024",
  number: 654987321,
  email: "danielmartinez@gmail.com",
  source: "Email",
  notes: "ut labore et dolore magna aliqua",
  status: "New",
  assignedTo: "Emily Smith",
  rank: "Mr.",
  pax: "1",
  destination:"Sydney"
},
{
  id: "45DF67GH6",
  fname: "Daniel",
  lname: "Martinez",
  date: "08-04-2024",
  number: 654987321,
  email: "danielmartinez@gmail.com",
  source: "Email",
  notes: "ut labore et dolore magna aliqua",
  status: "New",
  assignedTo: "Emily Smith",
  rank: "Mr.",
  pax: "1",
  destination:"Sydney"
},
{
  id: "45DF67GH6",
  fname: "Daniel",
  lname: "Martinez",
  date: "08-04-2024",
  number: 654987321,
  email: "danielmartinez@gmail.com",
  source: "Email",
  notes: "ut labore et dolore magna aliqua",
  status: "New",
  assignedTo: "Emily Smith",
  rank: "Mr.",
  pax: "1",
  destination:"Sydney"
},
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

function NotesReport() {
  const [search, setSearch] = useState("");
  const [row, setRow] = useState(data);
  const [gridApi, setGridApi] = useState(null);

  const [startDate, setStartDate] = useState("");

  const [column, setColumn] = useState([
    {
      headerName: "ID",
      width: 120,
      cellStyle: { display: "flex", alignItems: "center" },
      filter: "agDateColumnFilter",
      filterParams: dateFilterParams,
      field: "date",
      cellRenderer: (params) => {
        return (
          <Link>
            <div className="cursor-pointer flex flex-col justify-center mt-2">
              <div className="text-sm text-black font-medium">{params.data.id}</div>
              <div className="text-xs text-slate-800">{params.data.date}</div>
            </div>
          </Link>
        );
      },
    },
    {
      headerName: "Client",
      cellStyle: { display: "flex", alignItems: "center" },
      width: 350,
      cellRenderer: (params) => {
        return (
          <div className="flex flex-col">
            <div className="text-black font-bold">
              {params.data.rank} {params.data.fname} {params.data.lname}
            </div>
            <div className="flex items-center gap-1  text-xs mt-[-10px]">
              <PhoneAndroidIcon style={{ fontSize: 12 }} /> {params.data.number}{" "}
            </div>
            <div className="flex items-center gap-1 text-xs mt-[-2px]">
              <MailOutlineIcon style={{ fontSize: 12 }} /> {params.data.email}{" "}
            </div>
          </div>
        );
      },
    },
    {
      headerName: "Source",
      cellStyle: { display: "flex", alignItems: "center" },
      field: "source",
      width: 170 ,
    },
    {
      headerName: "Notes",
      cellStyle: { display: "flex", alignItems: "center" },
      field: "notes",
      width: 260,
    },
    {
      headerName: "Destination",
      field: "destination",
      cellStyle: { display: "flex", alignItems: "center" },
      width: 170,
      cellRenderer: (params) => {
        return (
          <div className="flex justify-center items-center h-full w-full">
            <div className=" text-white bg-slate-500 rounded h-5 flex justify-center items-center w-15 p-2">
              {params.value}
            </div>
          </div>
        );
      },
    },
    {
      headerName: "Pax",
      field: "pax",
      width: 120,
    },
    {
      headerName: "Status",
      field: "status",
      cellStyle: { display: "flex", alignItems: "center" },
      width: 170,
      cellRenderer: (params) => {
        return (
          <div className="flex justify-center items-center h-full w-full">
            {params.value == "New"?
            <div className=" text-white bg-purple-500 rounded h-5 flex justify-center items-center w-15 p-2">
              {params.value}
            </div>
            :
            <div className=" text-white bg-green-500 rounded h-5 flex justify-center items-center w-15 p-2">
              {params.value}
            </div>
            }
          </div>
        );
      },
    },
    {
      headerName: "Assigned To",
      field: "assignedTo",
      width: 170,
    }
  ]);

  const onGridReady = (params) => {
    setGridApi(params.api);
    setRow(data);
  };

  const FromRangeDateFilter = (startDate) => {
    console.log(`startDate : ${startDate}`);
    if (gridApi) {
      gridApi
        .setColumnFilterModel("date", {
          type: "greaterThan",
          dateFrom: startDate,
          dateTo: null,
        })
        .then(() => {
          gridApi.onFilterChanged();
        });
    }
  };

  const quickFilter = () => {
    gridApi.setQuickFilter(search);
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
      <div className="flex-shrink-0 flex justify-between items-center h-16 sm:h-14 sm:flex-row flex-col px-2 border-t border-slate-300 border-b bg-[#eff3f7]">
        <div className="font-bold"> Notes Report </div>
        <div className="flex justify-center  w-[100%] sm:w-[40%] items-center gap-3 h-full">
          <div className="custom-date-picker">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <MobileDatePicker
                label="From Date"
                defaultValue={dayjs("2022-04-17")}
                onAccept={(date) => {
                  setStartDate(
                    dayjs(date).subtract(1, "day").format("YYYY-MM-DD")
                  );
                  FromRangeDateFilter(
                    dayjs(date).subtract(1, "day").format("YYYY-MM-DD")
                  );
                }}
              />
            </LocalizationProvider>
          </div>
          <input
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              quickFilter();
            }}
            className="border border-slate-300 h-[80%] px-2 rounded-md text-sm w-[50%] focus:outline-none focus:border focus:border-black"
            placeholder="Search by anything...."
          />
        </div>
      </div>

      <div className="flex-grow">
        <div className="ag-theme-quartz" style={{ height: "100%", width: "100%" }}>
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

export default NotesReport;
