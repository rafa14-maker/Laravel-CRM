import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import IosShareIcon from "@mui/icons-material/IosShare";
import "react-phone-number-input/style.css";
import React, { useState } from "react";
import Modal from "@mui/material/Modal";
import CloseIcon from "@mui/icons-material/Close";
import EditNoteIcon from "@mui/icons-material/EditNote";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import TextField from "@mui/material/TextField";
import LandScape from "../../assets/images/lanscape.png";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import { HiDotsVertical } from "react-icons/hi";
import BasicMenu from "./menu/BasicMenu";
import { Link } from "react-router-dom";



const data = [
  {
    id: "12EF34RC1",
    by: "JaffarSaleem.com",
    date: "15-03-2024",
    name: "Premium Delux",
    status: "active",
  },
  {
    id: "98AB76YZ3",
    by: "JaffarSaleem.com",
    date: "16-03-2024",
    name: "Luxury Suite",
    status: "inactive",
  },
  {
    id: "45CD67FG8",
    by: "JaffarSaleem.com",
    date: "17-03-2024",
    name: "Executive Room",
    status: "active",
  },
  {
    id: "23GH89IJ5",
    by: "JaffarSaleem.com",
    date: "18-03-2024",
    name: "Standard Twin",
    status: "inactive",
  },
  {
    id: "67KL12MN0",
    by: "JaffarSaleem.com",
    date: "19-03-2024",
    name: "Family Villa",
    status: "active",
  },
  {
    id: "34OP56QR7",
    by: "JaffarSaleem.com",
    date: "20-03-2024",
    name: "Ocean View Suite",
    status: "inactive",
  },
  {
    id: "89ST23UV4",
    by: "JaffarSaleem.com",
    date: "21-03-2024",
    name: "Penthouse Loft",
    status: "active",
  },
  {
    id: "12WX34YZ5",
    by: "JaffarSaleem.com",
    date: "22-03-2024",
    name: "Honeymoon Retreat",
    status: "inactive",
  },
  {
    id: "56CD78EF9",
    by: "JaffarSaleem.com",
    date: "23-03-2024",
    name: "Mountain Chalet",
    status: "active",
  },
  {
    id: "78GH90IJ1",
    by: "JaffarSaleem.com",
    date: "24-03-2024",
    name: "Beach Bungalow",
    status: "inactive",
  },
];

function Itineraries() {
  const [able, setAble] = useState(false);
  const [search, setSearch] = useState("");
  const [row, setRow] = useState(data);
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const [gridApi, setGridApi] = useState(null);
  const [selectFile, setSelectFile] = useState("Select an image file");
  const [showDOBDate, setShowDOBDate] = useState(dayjs());
  const [showMADate, setShowMADate] = useState(dayjs());

  const [value, setValue] = useState();

  const [stat, setStat] = useState("");

  const [fields, setField] = useState({
    title: "DEFAULT",
    first_name: "",
    last_name: "",
    email: "",
    mob: "",
    sec_email: "",
    sec_mob: "",
    city: "",
    address: "",
    date_of_birth: showDOBDate,
    marriage_anniversary: showMADate,
  });

  const [column, setColumn] = useState([
    {
      headerName: "Title",
      field: "title",
      cellStyle: { display: "flex", alignItems: "center" },
      flex: 2,
      cellRenderer: (params) => {
        return (
          <div className="flex items-center gap-2">
            <div className="w-14 h-14">
              {" "}
              <img
                className="w-full h-full object-contain"
                src={LandScape}
              />{" "}
            </div>
           <Link to="/queries/proposalSent/viewProposal/final">
           <div >Jaffar.com</div>
           </Link>
          </div>
        );
      },
    },
    {
      headerName: "Duration",
      field: "duration",
      flex: 0.5,
      cellStyle: { display: "flex", alignItems: "center" },
      cellRenderer: (params) => {
        return (
          <div className="flex items-center justify-center w-full h-10">
            <div>24 Days</div>
          </div>
        );
      },
    },
    {
      headerName: "Price",
      field: "price",
      flex: 0.5,
      cellStyle: { display: "flex",justifyContent:"center" ,alignItems: "center" ,backgroundColor:"#fff4ce" },
      cellRenderer: (params) => {
        return (
          <div >
            <div>₹136,800</div>
          </div>
        );
      },
    },
    {
      headerName: "Update In",
      field: "websitecost",
      flex: 0.5,
      cellStyle: { display: "flex", alignItems: "center" },
      cellRenderer: (params) => {
        return (
          <div className="flex items-center justify-center w-full h-10">
            <div>₹108,000</div>
          </div>
        );
      },
    },
    // {
    //   headerName: "Website",
    //   field: "website",
    //   flex: 0.5,
    //   cellStyle: { display: "flex", alignItems: "center" },
    //   cellRenderer: (params) => {
    //     return (
    //       <div className="flex items-center justify-center w-full h-10">
    //         <div
    //           className={`flex items-center justify-center w-14 ${
    //             params.value === "Active".toLocaleLowerCase()
    //               ? "bg-green-700"
    //               : "bg-[#f9392f]"
    //           }  text-white rounded-md h-[70%]`}
    //         >
    //           Yes
    //         </div>
    //       </div>
    //     );
    //   },
    // },
    // {
    //   headerName: "Market Place",
    //   field: "Marketplace",
    //   flex: 0.5,
    //   cellStyle: { display: "flex", alignItems: "center" },
    //   cellRenderer: (params) => {
    //     return (
    //       <div className="flex items-center justify-center w-full h-10">
    //         <div
    //           className={`flex items-center justify-center w-14 ${
    //             params.value === "Active".toLocaleLowerCase()
    //               ? "bg-green-700"
    //               : "bg-[#f9392f]"
    //           }  text-white rounded-md h-[70%]`}
    //         >
    //           Shared
    //         </div>
    //       </div>
    //     );
    //   },
    // },
    {
      headerName: "Updated It",
      field: "updated",
      flex: 0.5,
      cellStyle: { display: "flex", alignItems: "center" },
      cellRenderer: (params) => {
        return (
          <div className="flex items-center justify-center w-full h-10">
            <div>03-05-2024</div>
          </div>
        );
      },
    },
    {
      sortable: false,
      filter: false,
      flex: 0.2,
      cellRenderer: (params) => {
        return (
          <>
          {/*eidt icon */}
            
              <BasicMenu/>
            
          </>
        );
      },
    },
  ]);


  const onGridReady = (params) => {
    setGridApi(params.api);
    setRow(data);
  };

  const ExportData = () => {
    if (gridApi) {
      gridApi.exportDataAsCsv();
    }
  };

  const quickFilter = (search) => {
    gridApi.setGridOption("quickFilterText", search);
  };

  const defaultColDef = {
    sortable: true,
    filter: true,
    cellStyle: { borderRight: "1px solid #d9d9db" },
    flx: 1,
    tooltipField: "name",
  };

  return (
    <div className="h-full">
      <div className="flex justify-between items-center h-16 sm:h-12 sm:flex-row flex-col px-2 border-t border-slate-300 border-b bg-[#eff3f7]">
        <div className="font-bold"> Itineraries </div>
        <div className="flex justify-center items-center gap-3 h-full">
         {/* <button
            onClick={() => {
              ExportData();
            }}
            className="px-2 bg-[#1d3f5a] text-white rounded-md flex items-center h-[80%]"
          >
            <IosShareIcon style={{ fontSize: "20" }} />
          </button> */}
          <input
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              quickFilter(e.target.value);
            }}
            className="border border-slate-300 h-[80%] px-2 rounded-md text-sm w-[50%] focus:outline-none focus:border focus:border-black"
            placeholder="Search by anything...."
          />
          <div className="h-[80%]">
            <button
              onClick={() => {
                setOpen(true);
                setStat("Add");
              }}
              className="border border-slate-300 h-full bg-[#1d3f5a] text-white text-xs rounded-md px-2 "
            >
              <span className="sm:block hidden lg:text-[15px] lg:w-40">Create Itninary</span>
              <span className="sm:hidden block">
                <AddRoundedIcon />
              </span>
            </button>
          </div>
        </div>
      </div>

      <div className="h-full w-full overflow-x-auto">
        <div className="ag-theme-quartz h-full w-[1200px] lg:w-full">
          <AgGridReact
            onGridReady={onGridReady}
            columnDefs={column}
            rowData={row}
            defaultColDef={defaultColDef}
            enableBrowserTooltips={true}
            pagination={true}
            rowHeight={60}
          />

          <Modal
            keepMounted
            open={open}
            onClose={handleClose}
            aria-labelledby="keep-mounted-modal-title"
            aria-describedby="keep-mounted-modal-description"
          >
            <div className="p-4 rounded-md absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-white w-[48%] max-[800px]:w-[90%] transition-all h-fit">
              <div className="flex justify-between items-center h-[10%] px-2">
                <div className="font-bold text-lg">{stat} Itinerary setup</div>
                <div className="cursor-pointer" onClick={handleClose}>
                  <CloseIcon />
                </div>
              </div>

              <div className="flex mt-4 justify-between h-[90%] max-[500px]:flex-wrap max-[500px]:gap-3">
                <div className="w-[48%] max-[500px]:w-full ">
                <TextField
                        fullWidth
                        id="outlined-basic"
                        size="small"
                        label="Itinerary Name"
                        variant="outlined"
                        name="itinerary_name"
                    
                      />
                      
                      <div className="mt-4 custom-date-picker max-[500px]:w-full">
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <MobileDatePicker
                        label="start Date"
                        format="DD-MM-YYYY"
                        name="start_date"
                        value={showDOBDate}
                        onAccept={(e) => {
                          const DOB = dayjs(e).format("YYYY-MM-DD");
                          setShowDOBDate(e);
                          setField({
                            ...fields,
                            date_of_birth: DOB,
                          });
                        }}
                      />
                    </LocalizationProvider>
                  </div>
                  <div className=" mt-4 custom-date-picker max-[500px]:w-full">
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <MobileDatePicker
                        format="DD-MM-YYYY"
                        label="End Date"
                        value={showMADate}
                        name="end_date"
                        onAccept={(e) => {
                          const MA = dayjs(e).format("YYYY-MM-DD");
                          setShowMADate(e);
                          setField({
                            ...fields,
                            marriage_anniversary: MA,
                          });
                        }}
                      />
                    </LocalizationProvider>
                  </div>

                  <div className="mt-4 w-full">
                    <TextField
                      fullWidth
                      id="outlined-basic" 
                      size="small"
                      label="Adult"
                      variant="outlined"
                      name="adult"
                      
                    />
                  </div>
                </div>
                <div className="w-[48%] max-[500px]:w-full">
                  <div>
                  <TextField
                      fullWidth
                      id="outlined-basic" 
                      size="small"
                      label="Child"
                      variant="outlined"
                      name="child"
                    />
                  </div>

                  <div className="mt-4 w-full">
                    <TextField
                      fullWidth
                      id="outlined-basic"
                      size="small"
                      label="Destination"
                      variant="outlined"
                      name="destination"
                    />
                  </div>

                  <div className="mt-4 w-full">
                    <TextField
                      fullWidth
                      multiline  
                      rows={3}
                      id="outlined-basic"
                      size="small"
                      label="Notes"
                      variant="outlined"
                      name="notes"
                    />
                  </div>
                </div>
              </div>

              <div className="mt-4 flex max-[500px]:flex-wrap max-[500px]:gap-3 justify-between items-center">
                <div
                  // onClick={stat === "Edit" ? handleDelete : handleClose}
                  className=" w-[49%] rounded-md h-10 max-[500px]:w-full"
                >
                  <button
                    className=' bg-red-600 hover:bg-red-900 w-full rounded-md  text-white h-full flex items-center justify-center' onClick={() => setOpen(false)}
                  >
                    Cancel
                    {/* {stat === "Edit" ? "Delete" : "Cancel"} */}
                  </button>
                </div>

                <div className=" w-[48%] rounded-md h-10  max-[500px]:w-full">
                  <button
                    disabled={able}
                    // onClick={stat === "Edit" ? handleUpdate : handleSave}
                    className={`w-full rounded-md h-full flex items-center
                         hover:bg-green-900 bg-green-600
                    justify-center text-white`}
                  >
                    {stat === "Edit" ? "Update" : "Save"}
                  </button>
                </div>
              </div>
            </div>
          </Modal>
        </div>
      </div>
    </div>
  );
}

export default Itineraries;
