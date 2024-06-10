import React from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import "react-phone-number-input/style.css";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import "./CollectionReport.css";

const data = [
  {
    id: "7896543",
    fname: "Jane",
    paymentID: "2658492",
    status: "Paid",
    transectionID: "QR02KWQEKJDLSN",
    type: "Credit Card",
    amount: "₹78500",
    paymentDate: "28-03-2024 10:30 AM",
  },
  {
    id: "1239876",
    fname: "Michael",
    paymentID: "3759261",
    status: "Pending",
    transectionID: "02KWQEKJDLSN",
    type: "Bank Transfer",
    amount: "₹96000",
    paymentDate: "30-03-2024 03:45 PM",
  },
  {
    id: "4561237",
    fname: "Sarah",
    paymentID: "4829613",
    status: "Paid",
    transectionID: "PL06SMDLCOPWZQ",
    type: "Transfer",
    amount: "₹63000",
    paymentDate: "02-04-2024 09:15 AM",
  },
  {
    id: "7894562",
    fname: "David",
    paymentID: "5938612",
    status: "Pending",
    transectionID: "SR02KWQEKJDLSN",
    type: "Cash",
    amount: "₹45000",
    paymentDate: "05-04-2024 04:00 PM",
  },
  {
    id: "1237895",
    fname: "Emma",
    paymentID: "6872134",
    status: "Paid",
    transectionID: "WZ03NCLPQSKJDM",
    type: "Debit Card",
    amount: "₹72000",
    paymentDate: "08-04-2024 11:45 AM",
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

function CollectionReport() {
  const [search, setSearch] = useState("");
  const [row, setRow] = useState(data);
  const [gridApi, setGridApi] = useState(null);

  const [startDate, setStartDate] = useState("");

  const [column, setColumn] = useState([
    {
      headerName: "Query ID",
      width: 170,
      cellStyle: { display: "flex", alignItems: "center" },
      filter: "agDateColumnFilter",
      filterParams: dateFilterParams,
      field: "id",
      cellRenderer: (params) => {
        return (
          <Link>
            <div className="cursor-pointer flex flex-col justify-center mt-2">
              <div className="text-sm text-black font-medium">{params.data.id}</div>
            </div>
          </Link>
        );
      },
    },
    {
      headerName: "Payment ID",
      cellStyle: { display: "flex", alignItems: "center" },
      width: 170,
      cellRenderer: (params) => {
        return (
          <div className="flex flex-col">
            <div className="text-black">{params.data.paymentID}</div>
          </div>
        );
      },
    },
    {
      headerName: "Transection ID",
      cellStyle: { display: "flex", alignItems: "center" },
      field: "transectionID",
      width: 220,
    },
    {
      headerName: "Client",
      cellStyle: { display: "flex", alignItems: "center" },
      field: "fname",
      width: 300,
    },
    {
      headerName: "Type",
      field: "type",
      cellStyle: { display: "flex", alignItems: "center" },
      width: 160,
      cellRenderer: (params) => {
        return (
          <div className="flex justify-center items-center h-full w-full">
            <div className=" text-white text-[11px] bg-slate-900 rounded h-6 flex justify-center items-center w-24">
              {params.value}
            </div>
          </div>
        );
      },
    },
    {
      headerName: "Amount",
      field: "amount",
      width: 140,
    },
    {
      headerName: "Payment Date",
      field: "paymentDate",
      width: 230,
    },
    {
      headerName: "status",
      field: "status",
      width: 140,
      cellRenderer: (params) => {
        return (
          <div className="flex justify-center items-center h-full w-full">
            {params.value === "Overdue" ? (
              <div className=" text-white bg-red-500 rounded h-6 flex justify-center items-center w-16">
                {params.value}
              </div>
            ) : (
              <div className=" text-white bg-green-500 rounded h-6 flex justify-center items-center w-16">
                {params.value}
              </div>
            )}
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
      <div className="flex justify-between items-center h-16 sm:h-14 sm:flex-row py-2 flex-col px-2 border-t border-slate-300 border-b bg-[#eff3f7]">
        <div className="font-bold"> Collection Report </div>
        <div className="flex justify-center w-full sm:w-1/2 items-center gap-3 h-full">
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
            className="border border-slate-300 h-[40px] px-2 rounded-md text-sm w-[50%] focus:outline-none focus:border focus:border-black"
            placeholder="Search by anything...."
          />
        </div>
      </div>

      <div className="flex sm:flex-row flex-col justify-evenly px-2 py-2 items-center h-fit sm:h-[4.5rem]">
        <div className="sm:mt-0 mt-3 w-[95%] sm:w-[32%] h-[52px] flex flex-col justify-center items-center bg-[#655be6] rounded-md">
          <div className="text-white font-bold text-2xl">₹1,637,211</div>
          <div className="text-white font-bold text-[0.6rem]">TOTAL AMOUNT</div>
        </div>
        <div className="sm:mt-0 mt-3 w-[95%] sm:w-[32%] h-[52px] flex flex-col justify-center items-center bg-[#0cb5b5] rounded-md">
          <div className="text-white font-bold text-2xl">₹1,637,211</div>
          <div className="text-white font-bold text-[0.6rem]">RECEIVED</div>
        </div>
        <div className="sm:mt-0 mt-3 w-[95%] sm:w-[32%] h-[52px] flex flex-col justify-center items-center bg-[#e45555] rounded-md">
          <div className="text-white font-bold text-2xl">₹1,637,211</div>
          <div className="text-white font-bold text-[0.6rem]">PENDING</div>
        </div>
      </div>

      <div className="flex-grow h-full w-full">
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

export default CollectionReport;
