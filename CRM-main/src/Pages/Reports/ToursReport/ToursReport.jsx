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
import "./ToursReport.css";
import { FaSearch } from "react-icons/fa";
import { FaCalendarDays } from "react-icons/fa6";
const data = [
  {
    id: "1357924",
    fname: "Emily",
    lname: "Smith",
    date: "15-04-2024",
    number: 987654321,
    email: "emilysmith@gmail.com",
    status: "Upcoming",
    by: "Time To Travel",
    rank: "Mr.",
    packageName: "PARIS EXPLORER",
    packageID: "ID: 209837 - FRANCE",
    packageDate: "FROM: 20 MAY 2024 - TO: 25 MAY 2024"
  },
  {
    id: "2468135",
    fname: "Sarah",
    lname: "Johnson",
    date: "18-05-2024",
    number: 654321987,
    email: "sarahjohnson@gmail.com",
    status: "Upcoming",
    by: "Time To Travel",
    rank: "Ms.",
    packageName: "JAPAN DISCOVERY",
    packageID: "ID: 309582 - JAPAN",
    packageDate: "FROM: 10 AUG 2024 - TO: 20 AUG 2024"
  },
  {
    id: "3579246",
    fname: "Michael",
    lname: "Williams",
    date: "20-06-2024",
    number: 123987654,
    email: "michaelwilliams@gmail.com",
    status: "Upcoming",
    by: "Time To Travel",
    rank: "Mr.",
    packageName: "EGYPTIAN ADVENTURE",
    packageID: "ID: 409275 - EGYPT",
    packageDate: "FROM: 15 SEP 2024 - TO: 25 SEP 2024"
  },
  {
    id: "4681357",
    fname: "Jessica",
    lname: "Brown",
    date: "22-07-2024",
    number: 789456123,
    email: "jessicabrown@gmail.com",
    status: "Upcoming",
    by: "Time To Travel",
    rank: "Ms.",
    packageName: "AUSTRALIAN OUTBACK",
    packageID: "ID: 509384 - AUSTRALIA",
    packageDate: "FROM: 5 OCT 2024 - TO: 15 OCT 2024"
  },
  {
    id: "5792468",
    fname: "Matthew",
    lname: "Davis",
    date: "24-08-2024",
    number: 456789123,
    email: "matthewdavis@gmail.com",
    status: "Upcoming",
    by: "Time To Travel",
    rank: "Mr.",
    packageName: "NEW YORK ESCAPE",
    packageID: "ID: 609273 - USA",
    packageDate: "FROM: 20 NOV 2024 - TO: 25 NOV 2024"
  },
  {
    id: "6813579",
    fname: "Sophia",
    lname: "Garcia",
    date: "26-09-2024",
    number: 987123456,
    email: "sophiagarcia@gmail.com",
    status: "Upcoming",
    by: "Time To Travel",
    rank: "Ms.",
    packageName: "SPANISH DELIGHT",
    packageID: "ID: 709384 - SPAIN",
    packageDate: "FROM: 10 DEC 2024 - TO: 20 DEC 2024"
  },
  {
    id: "7924681",
    fname: "Daniel",
    lname: "Martinez",
    date: "28-10-2024",
    number: 654789123,
    email: "danielmartinez@gmail.com",
    status: "Upcoming",
    by: "Time To Travel",
    rank: "Mr.",
    packageName: "THAI PARADISE",
    packageID: "ID: 809275 - THAILAND",
    packageDate: "FROM: 5 JAN 2025 - TO: 15 JAN 2025"
  },
  {
    id: "8135792",
    fname: "Olivia",
    lname: "Lopez",
    date: "30-11-2024",
    number: 147258369,
    email: "olivialopez@gmail.com",
    status: "Upcoming",
    by: "Time To Travel",
    rank: "Ms.",
    packageName: "GREEK ODYSSEY",
    packageID: "ID: 909384 - GREECE",
    packageDate: "FROM: 20 FEB 2025 - TO: 1 MAR 2025"
  },
  {
    id: "9246813",
    fname: "Ryan",
    lname: "Gonzalez",
    date: "02-01-2025",
    number: 369147258,
    email: "ryangonzalez@gmail.com",
    status: "Upcoming",
    by: "Time To Travel",
    rank: "Mr.",
    packageName: "BALI BLISS",
    packageID: "ID: 100927 - INDONESIA",
    ackageDate: "FROM: 15 MAR 2025 - TO: 25 MAR 2025"
  },
]
;

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

function ToursReport() {
  const [search, setSearch] = useState("");
  const [row, setRow] = useState(data);
  const [gridApi, setGridApi] = useState(null);

  const [startDate, setStartDate] = useState("");

  const [column, setColumn] = useState([
    {
      headerName: "Query ID",
      width: 150,
      cellStyle: { display: "flex", alignItems: "center" },
      filter: "agDateColumnFilter",
      filterParams: dateFilterParams,
      field: "date",
      cellRenderer: (params) => {
        return (
          <Link>
            <div className="cursor-pointer flex flex-col justify-center mt-2">
              <div className="text-sm text-black">{params.data.id}</div>
            </div>
          </Link>
        );
      },
    },
    {
      headerName: "Package",
      cellStyle: { display: "flex", alignItems: "center" },
      width: 500,
      cellRenderer: (params) => {
        return (
          <div className="flex flex-col">
            <div className="text-black ">
              {params.data.packageName}
            </div>
            <div className="flex items-center gap-1  text-xs mt-[-10px]">
               {params.data.packageID}{" "}
            </div>
            <div className="flex items-center gap-1 text-xs font-bold">
              {params.data.packageDate}{" "}
            </div>
          </div>
        );
      },
    },
    {
      headerName: "Client",
      cellStyle: { display: "flex", alignItems: "center" },
      width: 500,
      cellRenderer: (params) => {
        return (
          <div className="flex flex-col">
            <div className="text-black font-medium">
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
      headerName: "Status",
      field: "status",
      cellStyle: { display: "flex", alignItems: "center" },
      width: 190,
      cellRenderer: (params) => {
        return (
          <div className="flex justify-center items-center h-full w-full">
            <div className=" text-white bg-red-500 rounded-md h-6 flex justify-center items-center w-20">
              {params.value}
            </div>
          </div>
        );
      },
    },
    {
      headerName: "Assigned",
      field: "city",
      cellStyle: { display: "flex", alignItems: "center" },
      width: 190,
      cellRenderer: (params) => {
        return (
          <div className="cursor-pointer flex flex-col justify-center mt-2">
              <div className="text-sm text-black font-bold">{params.data.by}</div>
              <div className="text-xs text-slate-800">{params.data.date}</div>
            </div>
        );
      },
    },
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
    gridApi.setGridOption("quickFilterText", search);
  };

  const defaultColDef = {
    sortable: true,
    filter: true,
    cellStyle: {
      borderRight: "1px solid #d9d9db",
      display: "flex",
      alignItems: "center",
    },
    width: 190,
    tooltipField: "name",
  };
  return (
    <div className="h-full flex flex-col">
      <div className="flex justify-between text-sm items-center h-16 sm:h-14 sm:flex-row flex-col px-2 border-t border-slate-300 border-b bg-[#eff3f7]">
        <div className="font-bold"> Tours Report </div>
        <div className="flex justify-center   items-center gap-3 h-full">
          <div className="custom-date-picker">
            <LocalizationProvider dateAdapter={AdapterDayjs} >
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
                sx={{
                  '& .MuiInputBase-root': {
                    // height: 48,  // Adjust height
                    padding: '0 0px',  // Adjust padding
                    width:'110px !important',
                  }
                }}
              />
            </LocalizationProvider>
          </div>
          <div className="custom-date-picker">
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <MobileDatePicker
              label="To Date"
              defaultValue={dayjs("2024-04-17")}
              onAccept={(date) => {
                setStartDate(
                  dayjs(date).subtract(1, "day").format("YYYY-MM-DD")
                );
                FromRangeDateFilter(
                  dayjs(date).subtract(1, "day").format("YYYY-MM-DD")
                );
                
              }}
              sx={{
                '& .MuiInputBase-root': {
                  // height: 48,  // Adjust height
                  padding: '0 0px',  // Adjust padding
                  width:'110px !important',
                }
              }}
            />
          </LocalizationProvider>
        </div>
        <div>
        <select name="" id="" className="py-2 px-5 text-center rounded-md border-2 border-gray-300">
        <option value="">All Destinators</option>
        <option value="">Bali</option>
        <option value="">India</option>
        <option value=""></option>
        <option value=""></option>
        </select>
        </div>
        <div>
        <select name="" id="" className="py-2 px-5 text-center rounded-md border-2 border-gray-300">
        <option value="">All Users</option>
        <option value="">Bali</option>
        <option value="">India</option>
        <option value=""></option>
        <option value=""></option>
        </select>
        </div>
          <input
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              quickFilter();
            }}
            className="border border-slate-300 h-[80%] px-2 rounded-md text-sm focus:outline-none focus:border focus:border-black"
            placeholder="Search by anything...."
          />
          <button className="flex justify-center items-center gap-2 bg-[#1E415D] text-white px-4 py-2 rounded-md "><FaSearch /> Search</button>
          <button className="flex justify-center items-center gap-2 bg-[#1E415D] text-white px-3 py-2 w- rounded-md "><FaCalendarDays /> Calendar View</button>
        </div>
      </div>

      <div className="flex sm:flex-row flex-col justify-evenly px-2 py-1 items-center h-fit sm:h-[4.5rem]">
        <div className="sm:mt-0 mt-3 w-[95%] sm:w-[32%] h-[80%] flex flex-col justify-center items-center bg-[#655be6] rounded-md">
          <div className="text-white font-bold text-2xl">11</div>
          <div className="text-white font-bold text-[0.6rem]">TOTAL TOURS</div>
        </div>
        <div className="sm:mt-0 mt-3  w-[95%] sm:w-[32%] h-[80%] flex flex-col justify-center items-center bg-[#0cb5b5] rounded-md">
          <div className="text-white font-bold text-2xl">211</div>
          <div className="text-white font-bold text-[0.6rem]">TOTAL COMPLEATED</div>
        </div>
        <div className="sm:mt-0 mt-3  w-[95%] sm:w-[32%] h-[80%] flex flex-col justify-center items-center bg-[#e45555] rounded-md">
          <div className="text-white font-bold text-2xl">37</div>
          <div className="text-white font-bold text-[0.6rem]">UPCOMING TOURS</div>
        </div>
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

export default ToursReport;
