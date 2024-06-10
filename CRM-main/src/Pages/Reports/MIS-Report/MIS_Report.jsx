import React from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import { useState } from "react";
import IosShareIcon from "@mui/icons-material/IosShare";
import "react-phone-number-input/style.css";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";

const data = [
  {
    serialNumber: 1,
    bookedBy: "John Doe",
    email: "john@example.com",
    mobile: "1234567890",
    id: "ABC123",
    bookingDate: "2024-05-15",
    client: "Client A",
    destination: "Paris",
    noOfPax: 2,
    sellingCost: 1500,
    flightCost: 800,
    hotelCost: 500,
    tourCost: 300,
    visaCost: 100,
    cruiseCost: 0,
    totalCost: 2200,
    grossProfit: 700,
    gst: 100,
  },
  {
    serialNumber: 2,
    bookedBy: "Jane Smith",
    email: "jane@example.com",
    mobile: "9876543210",
    id: "XYZ789",
    bookingDate: "2024-05-16",
    client: "Client B",
    destination: "New York",
    noOfPax: 4,
    sellingCost: 3000,
    flightCost: 1200,
    hotelCost: 800,
    tourCost: 500,
    visaCost: 200,
    cruiseCost: 0,
    totalCost: 3700,
    grossProfit: 1100,
    gst: 200,
  },
  {
    serialNumber: 3,
    bookedBy: "Alice Johnson",
    email: "alice@example.com",
    mobile: "5554443333",
    id: "DEF456",
    bookingDate: "2024-05-17",
    client: "Client C",
    destination: "London",
    noOfPax: 1,
    sellingCost: 2000,
    flightCost: 1000,
    hotelCost: 600,
    tourCost: 400,
    visaCost: 150,
    cruiseCost: 0,
    totalCost: 3150,
    grossProfit: 1000,
    gst: 150,
  },
  {
    serialNumber: 4,
    bookedBy: "David Lee",
    email: "david@example.com",
    mobile: "3332221111",
    id: "HIJ012",
    bookingDate: "2024-05-18",
    client: "Client D",
    destination: "Sydney",
    noOfPax: 3,
    sellingCost: 2500,
    flightCost: 1300,
    hotelCost: 700,
    tourCost: 500,
    visaCost: 150,
    cruiseCost: 0,
    totalCost: 4150,
    grossProfit: 1500,
    gst: 200,
  },
  {
    serialNumber: 5,
    bookedBy: "Emma Wilson",
    email: "emma@example.com",
    mobile: "7778889999",
    id: "KLM345",
    bookingDate: "2024-05-19",
    client: "Client E",
    destination: "Rome",
    noOfPax: 2,
    sellingCost: 1800,
    flightCost: 900,
    hotelCost: 600,
    tourCost: 300,
    visaCost: 100,
    cruiseCost: 0,
    totalCost: 3500,
    grossProfit: 1700,
    gst: 250,
  },
  {
    serialNumber: 6,
    bookedBy: "Oliver Taylor",
    email: "oliver@example.com",
    mobile: "4445556666",
    id: "NOP678",
    bookingDate: "2024-05-20",
    client: "Client F",
    destination: "Berlin",
    noOfPax: 1,
    sellingCost: 1200,
    flightCost: 700,
    hotelCost: 500,
    tourCost: 200,
    visaCost: 50,
    cruiseCost: 0,
    totalCost: 2650,
    grossProfit: 1450,
    gst: 200,
  },
  {
    serialNumber: 7,
    bookedBy: "Sophia Brown",
    email: "sophia@example.com",
    mobile: "2223334444",
    id: "QRS901",
    bookingDate: "2024-05-21",
    client: "Client G",
    destination: "Barcelona",
    noOfPax: 2,
    sellingCost: 2200,
    flightCost: 1100,
    hotelCost: 700,
    tourCost: 400,
    visaCost: 100,
    cruiseCost: 0,
    totalCost: 3700,
    grossProfit: 1500,
    gst: 250,
  },
  {
    serialNumber: 8,
    bookedBy: "James Miller",
    email: "james@example.com",
    mobile: "6667778888",
    id: "TUV234",
    bookingDate: "2024-05-22",
    client: "Client H",
    destination: "Dubai",
    noOfPax: 3,
    sellingCost: 2800,
    flightCost: 1400,
    hotelCost: 800,
    tourCost: 600,
    visaCost: 200,
    cruiseCost: 0,
    totalCost: 4300,
    grossProfit: 1500,
    gst: 300,
  },
  {
    serialNumber: 9,
    bookedBy: "Liam Davis",
    email: "liam@example.com",
    mobile: "9990001111",
    id: "WXY567",
    bookingDate: "2024-05-23",
    client: "Client I",
    destination: "Hong Kong",
    noOfPax: 2,
    sellingCost: 2000,
    flightCost: 1000,
    hotelCost: 700,
    tourCost: 500,
    visaCost: 150,
    cruiseCost: 0,
    totalCost: 3400,
    grossProfit: 1400,
    gst: 200,
  },
  {
    serialNumber: 10,
    bookedBy: "Ava Garcia",
    email: "ava@example.com",
    mobile: "3334445555",
    id: "ZAB678",
    bookingDate: "2024-05-24",
    client: "Client J",
    destination: "Singapore",
    noOfPax: 1,
    sellingCost: 1500,
    flightCost: 800,
    hotelCost: 600,
    tourCost: 300,
    visaCost: 100,
    cruiseCost: 0,
    totalCost: 2750,
    grossProfit: 1200,
    gst: 150,
  },
  {
    serialNumber: 11,
    bookedBy: "Mia Rodriguez",
    email: "mia@example.com",
    mobile: "8889990000",
    id: "CDE890",
    bookingDate: "2024-05-25",
    client: "Client K",
    destination: "Istanbul",
    noOfPax: 2,
    sellingCost: 2200,
    flightCost: 1100,
    hotelCost: 700,
    tourCost: 400,
    visaCost: 100,
    cruiseCost: 0,
    totalCost: 3700,
    grossProfit: 1500,
    gst: 250,
  },
  {
    serialNumber: 12,
    bookedBy: "Noah Martinez",
    email: "noah@example.com",
    mobile: "2223334444",
    id: "FGH123",
    bookingDate: "2024-05-26",
    client: "Client L",
    destination: "Bangkok",
    noOfPax: 3,
    sellingCost: 2700,
    flightCost: 1300,
    hotelCost: 800,
    tourCost: 600,
    visaCost: 200,
    cruiseCost: 0,
    totalCost: 4200,
    grossProfit: 1500,
    gst: 300,
  },
  {
    serialNumber: 13,
    bookedBy: "Isabella Hernandez",
    email: "isabella@example.com",
    mobile: "5556667777",
    id: "IJK456",
    bookingDate: "2024-05-27",
    client: "Client M",
    destination: "Amsterdam",
    noOfPax: 2,
    sellingCost: 2400,
    flightCost: 1200,
    hotelCost: 700,
    tourCost: 400,
    visaCost: 150,
    cruiseCost: 0,
    totalCost: 3950,
    grossProfit: 1550,
    gst: 250,
  },
  {
    serialNumber: 14,
    bookedBy: "Charlotte Martinez",
    email: "charlotte@example.com",
    mobile: "9990001111",
    id: "LMN789",
    bookingDate: "2024-05-28",
    client: "Client N",
    destination: "Vienna",
    noOfPax: 1,
    sellingCost: 1800,
    flightCost: 1000,
    hotelCost: 600,
    tourCost: 400,
    visaCost: 100,
    cruiseCost: 0,
    totalCost: 3250,
    grossProfit: 1450,
    gst: 200,
  },
  {
    serialNumber: 15,
    bookedBy: "Lucas Smith",
    email: "lucas@example.com",
    mobile: "3334445555",
    id: "OPQ901",
    bookingDate: "2024-05-29",
    client: "Client O",
    destination: "Madrid",
    noOfPax: 2,
    sellingCost: 2200,
    flightCost: 1200,
    hotelCost: 700,
    tourCost: 400,
    visaCost: 150,
    cruiseCost: 0,
    totalCost: 3700,
    grossProfit: 1500,
    gst: 250,
  },
  {
    serialNumber: 16,
    bookedBy: "Benjamin Wilson",
    email: "benjamin@example.com",
    mobile: "6667778888",
    id: "RST234",
    bookingDate: "2024-05-30",
    client: "Client P",
    destination: "Seoul",
    noOfPax: 3,
    sellingCost: 2800,
    flightCost: 1400,
    hotelCost: 800,
    tourCost: 600,
    visaCost: 200,
    cruiseCost: 0,
    totalCost: 4300,
    grossProfit: 1500,
    gst: 300,
  },
  {
    serialNumber: 17,
    bookedBy: "Evelyn Taylor",
    email: "evelyn@example.com",
    mobile: "1112223333",
    id: "UVW567",
    bookingDate: "2024-05-31",
    client: "Client Q",
    destination: "Hong Kong",
    noOfPax: 2,
    sellingCost: 2400,
    flightCost: 1200,
    hotelCost: 700,
    tourCost: 400,
    visaCost: 150,
    cruiseCost: 0,
    totalCost: 3950,
    grossProfit: 1550,
    gst: 250,
  },
  {
    serialNumber: 18,
    bookedBy: "Harper Brown",
    email: "harper@example.com",
    mobile: "4445556666",
    id: "XYZ890",
    bookingDate: "2024-06-01",
    client: "Client R",
    destination: "Berlin",
    noOfPax: 1,
    sellingCost: 1800,
    flightCost: 1000,
    hotelCost: 600,
    tourCost: 400,
    visaCost: 100,
    cruiseCost: 0,
    totalCost: 3250,
    grossProfit: 1450,
    gst: 200,
  },
  {
    serialNumber: 19,
    bookedBy: "Mila Davis",
    email: "mila@example.com",
    mobile: "7778889999",
    id: "ABC345",
    bookingDate: "2024-06-02",
    client: "Client S",
    destination: "Paris",
    noOfPax: 2,
    sellingCost: 2200,
    flightCost: 1100,
    hotelCost: 700,
    tourCost: 400,
    visaCost: 100,
    cruiseCost: 0,
    totalCost: 3700,
    grossProfit: 1500,
    gst: 250,
  },
  {
    serialNumber: 20,
    bookedBy: "Michael Brown",
    email: "michael@example.com",
    mobile: "1112223333",
    id: "GHI789",
    bookingDate: "2024-06-03",
    client: "Client T",
    destination: "Tokyo",
    noOfPax: 3,
    sellingCost: 2500,
    flightCost: 1500,
    hotelCost: 700,
    tourCost: 600,
    visaCost: 200,
    cruiseCost: 0,
    totalCost: 4500,
    grossProfit: 2000,
    gst: 300,
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

function MIS_Report() {
  const currentDate = dayjs().format("YYYY-MM-DD");

  const [row, setRow] = useState();
  const [gridApi, setGridApi] = useState(null);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState(currentDate);

  const [column, setColumn] = useState([
    {
      headerName: "Sr.",
      field: "serialNumber",
      width: 50,
      sortable: false,
      filter: false,
      cellRenderer: (params) => {
        return params.rowIndex + 1;
      },
    },
    {
      headerName: "Booked By",
      field: "bookedBy",
    },
    {
      headerName: "Email",
      field: "email",
      width:220
    },
    {
      headerName: "Mobile",
      field: "mobile",
      filter: "agDateColumnFilter",
      filterParams: dateFilterParams,
      width:110
    },
    {
      headerName: "Email",
      field: "email",
      filter: "agDateColumnFilter",
      filterParams: dateFilterParams,
      width:220
    },
    {
      headerName: "ID",
      field: "id",
      width:100
    },
    {
      headerName: "Booking Date	",
      field: "bookingDate",
      width:150
    },
    {
      headerName: "Client",
      field: "client",
      width:400
    },
    {
      headerName: "Destination",
      field: "destination",
    },
    {
      headerName: "No. of Pax",
      field: "noOfPax",
    },
    {
      headerName: "Selling Cost",
      field: "sellingCost",
    },
    {
      headerName: "Flight Cost",
      field: "flightCost",
    },
    {
      headerName: "Hotel Cost",
      field: "hotelCost",
    },
    {
      headerName: "Tour Cost",
      field: "tourCost",
    },
    {
      headerName: "Visa Cost",
      field: "viseCost",
    },
    {
      headerName: "Cruise Cost",
      field: "cruiseCost",
    },
    {
      headerName: "Total Cost",
      field: "totalCost",
    },
    {
      headerName: "Gross Profit",
      field: "grossProfit",
    },
    {
      headerName: "GST",
      field: "gst"
    }
  ]);

  const onGridReady = (params) => {
    setGridApi(params.api);
    setRow(data);
  };

  const FromRangeDateFilter = (startDate, endDate) => {
    console.log(`startDate : ${startDate}, endDate : ${endDate}`);
    if (gridApi) {
      gridApi
        .setColumnFilterModel("FromDate", {
          type: "inRange",
          dateFrom: startDate,
          dateTo: endDate,
        })
        .then(() => {
          gridApi.onFilterChanged();
        });
    }
  };

  const ToRangeDateFilter = (startDate, endDate) => {
    console.log(`startDate : ${startDate}, endDate : ${endDate}`);
    if (gridApi) {
      gridApi
        .setColumnFilterModel("ToDate", {
          type: "inRange",
          dateFrom: startDate,
          dateTo: endDate,
        })
        .then(() => {
          gridApi.onFilterChanged();
        });
    }
  };

  const ExportData = () => {
    if (gridApi) {
      gridApi.exportDataAsCsv();
    }
  };

  const defaultColDef = {
    sortable: true,
    filter: true,
    cellStyle: { borderRight: "1px solid #d9d9db" },
    width: 150,
    tooltipField: "name",
  };
  return (
    <div className="h-full flex flex-col">
      <div className="flex justify-between items-center h-20 gap-2 sm:h-14 sm:flex-row flex-col px-2 border-t border-slate-300 border-b bg-[#eff3f7]">
        <div className="font-bold"> MIS Report </div>
        <div className="flex justify-center items-center gap-3 h-full">
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
                    dayjs(date).subtract(1, "day").format("YYYY-MM-DD"),
                    endDate
                  );
                }}
              />
            </LocalizationProvider>
          </div>

          <div className="custom-date-picker">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <MobileDatePicker
                label="To Date"
                defaultValue={dayjs()}
                onAccept={(date) => {
                  setEndDate(dayjs(date).add(1, "day").format("YYYY-MM-DD"));
                  ToRangeDateFilter(
                    startDate,
                    dayjs(date).add(1, "day").format("YYYY-MM-DD")
                  );
                }}
              />
            </LocalizationProvider>
          </div>
          <button
            onClick={() => {
              ExportData();
            }}
            className="px-2 bg-[#1d3f5a] text-white rounded-md flex items-center h-[70%]"
          >
            <IosShareIcon style={{ fontSize: "20" }} />
          </button>
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
          />
        </div>
      </div>
    </div>
  );
}

export default MIS_Report;
