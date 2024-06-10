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
import PhoneIcon from '@mui/icons-material/Phone';

const data = [
  {
    rank: "Captain",
    fname: "John",
    lname: "Doe",
    number: "1234567890",
    email: "john@example.com",
    queryId: "123",
    details: "CALL FOR PAYMENT",
    reminder: "15/11/2024-04:00 PM",
    status: "Done",
    pax: "2 Pax",
    assignedBy: "Time To Travel", 
    assignedDate: "05/12/2024" 
  },
  {
    rank: "Lieutenant",
    fname: "Jane",
    lname: "Smith",
    number: "9876543210",
    email: "jane@example.com",
    queryId: "  456",
    details: "CALL AFTER 2 HOURS.",
    reminder: "15/11/2024-05:00 PM",
    status: "Done",
    pax: "1 Pax",
    assignedBy: "Time To Travel", 
    assignedDate: "25/04/2024" 
  },
  {
    rank: "Captain",
    fname: "David",
    lname: "Wilson",
    number: "5559876543",
    email: "david@example.com",
    queryId: "234",
    details: "CHANGE REQUEST",
    reminder: "18/11/2024-09:00 AM",
    status: "Pending",
    pax: "3 Pax",
    assignedBy: "Time To Travel",
    assignedDate: "12/03/2024"
  },
  {
    rank: "Lieutenant",
    fname: "Sarah",
    lname: "Taylor",
    number: "3215556789",
    email: "sarah@example.com",
    queryId: "567",
    details: "SPECIAL ACCOMMODATION REQUEST",
    reminder: "18/11/2024-11:00 AM",
    status: "Pending",
    pax: "1 Pax",
    assignedBy: "Time To Travel",
    assignedDate: "28/02/2024"
  },
  {
    rank: "Sergeant",
    fname: "Ryan",
    lname: "Martinez",
    number: "7778889999",
    email: "ryan@example.com",
    queryId: "890",
    details: "CANCELLATION REQUEST",
    reminder: "19/11/2024-01:00 PM",
    status: "Pending",
    pax: "2 Pax",
    assignedBy: "Time To Travel",
    assignedDate: "15/01/2024"
  },
  {
    rank: "Private",
    fname: "Jessica",
    lname: "Clark",
    number: "9994443332",
    email: "jessica@example.com",
    queryId: "345",
    details: "ENQUIRY ABOUT TRAVEL INSURANCE",
    reminder: "19/11/2024-03:00 PM",
    status: "Pending",
    pax: "1 Pax",
    assignedBy: "Time To Travel",
    assignedDate: "20/11/2023"
  },
  {
    rank: "Captain",
    fname: "Matthew",
    lname: "Anderson",
    number: "1112223333",
    email: "matthew@example.com",
    queryId: "678",
    details: "HOTEL RESERVATION",
    reminder: "20/11/2024-05:00 PM",
    status: "Pending",
    pax: "4 Pax",
    assignedBy: "Time To Travel",
    assignedDate: "02/10/2023"
  },
  {
    rank: "Lieutenant",
    fname: "Amanda",
    lname: "White",
    number: "8885551112",
    email: "amanda@example.com",
    queryId: "901",
    details: "FLIGHT TICKET BOOKING",
    reminder: "20/11/2024-07:00 PM",
    status: "Pending",
    pax: "2 Pax",
    assignedBy: "Time To Travel",
    assignedDate: "15/09/2023"
  },
  {
    rank: "Sergeant",
    fname: "Christopher",
    lname: "Harris",
    number: "2223334444",
    email: "christopher@example.com",
    queryId: "234",
    details: "VISA APPLICATION ASSISTANCE",
    reminder: "21/11/2024-09:00 AM",
    status: "Pending",
    pax: "1 Pax",
    assignedBy: "Time To Travel",
    assignedDate: "10/08/2023"
  },
  {
    rank: "Private",
    fname: "Olivia",
    lname: "Martin",
    number: "4445556667",
    email: "olivia@example.com",
    queryId: "567",
    details: "GUIDED TOUR BOOKING",
    reminder: "21/11/2024-11:00 AM",
    status: "Pending",
    pax: "3 Pax",
    assignedBy: "Time To Travel",
    assignedDate: "05/07/2023" 
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

function TaskReport() {
  const [search, setSearch] = useState("");
  const [row, setRow] = useState(data);
  const [gridApi, setGridApi] = useState(null);

  const [startDate, setStartDate] = useState("");

  const [column, setColumn] = useState([
    {
      width: 80,
      cellStyle: { display: "flex", alignItems: "center" },
      filter: "agDateColumnFilter",
      filterParams: dateFilterParams,
      cellRenderer: (params) => {
        return (
          <Link>
            <div className="cursor-pointer">
              <div className="text-sm text-black text-center font-2xl"><PhoneIcon/></div>
            </div>
          </Link>
        );
      },
    },
    {
      headerName: "Client",
      cellStyle: { display: "flex", alignItems: "center" },
      width: 360,
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
      headerName: "Query ID",
      cellStyle: { display: "flex", alignItems: "center" },
      field: "queryId",
      width: 140,
    },
    {
      headerName: "Details",
      cellStyle: { display: "flex", alignItems: "center" },
      field: "details",
      width: 340,
    },
    {
      headerName: "Reminder",
      field: "reminder",
      cellStyle: { display: "flex", alignItems: "center" },
      width: 200,
      cellRenderer: (params) => {
        return (
          <div>
            <del className=" text-red-600">
              {params.data.pax}
            </del>
          </div>
        );
      },
    },
    {
      headerName: "Status",
      field: "status",
      cellStyle: { display: "flex", alignItems: "center" },
      width: 200,
      cellRenderer: (params) => {
        return (
          <div className="flex flex-col">
            <div className="bg-green-400 text-center w-12 text-white p-1 rounded text-xs mb-[-3px] mt-[-10px]">
              {params.data.status}
            </div>
            <div className="text-xs mt-[5px]">
              {params.data.pax}
            </div>
          </div>
        );
      },
    },
    {
      headerName: "Assigned",
      field: "assigned",
      width: 200,
      cellStyle: { display: "flex", alignItems: "center" },
      cellRenderer: (params) => {
        return (
          <div className="flex flex-col">
            <div className="text-sm font-bold mb-[-5px] mt-[-10px]">
              {params.data.assignedBy}
            </div>
            <div className="text-xs mt-[5px]">
              {params.data.assignedDate}
            </div>
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
    width: 191,
    tooltipField: "name",
  };
  return (
    <div className="h-full flex flex-col">
      <div className="flex justify-between items-center h-16 sm:h-14 sm:flex-row flex-col px-2 border-t border-slate-300 border-b bg-[#eff3f7]">
        <div className="font-bold"> Task's / Followup's Report   </div>
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

      <div className="flex sm:flex-row flex-col justify-evenly px-2 py-1 items-center h-fit sm:h-[4.5rem]">
        <div className="sm:mt-0 mt-3 w-[95%] sm:w-[32%] h-[80%] flex flex-col justify-center items-center bg-[#655be6] rounded-md">
          <div className="text-white font-bold text-2xl">0</div>
          <div className="text-white font-bold text-[0.6rem]">SCHEDULED</div>
        </div>
        <div className="sm:mt-0 mt-3  w-[95%] sm:w-[32%] h-[80%] flex flex-col justify-center items-center bg-[#0cb5b5] rounded-md">
          <div className="text-white font-bold text-2xl">11</div>
          <div className="text-white font-bold text-[0.6rem]">DONE</div>
        </div>
        <div className="sm:mt-0 mt-3  w-[95%] sm:w-[32%] h-[80%] flex flex-col justify-center items-center bg-[#e45555] rounded-md">
          <div className="text-white font-bold text-2xl">1</div>
          <div className="text-white font-bold text-[0.6rem]">PENDING</div>
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

export default TaskReport;
