import React from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import "react-phone-number-input/style.css";
import AirplanemodeActiveIcon from "@mui/icons-material/AirplanemodeActive";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Modal from "@mui/material/Modal";
import CreateIcon from "@mui/icons-material/Create";
import DriveEtaIcon from '@mui/icons-material/DriveEta';
import BlindIcon from '@mui/icons-material/Blind';


import CarIcon from "@mui/icons-material/DriveEta";
import HotelIcon from "@mui/icons-material/Hotel";
import ActivityIcon from "@mui/icons-material/Event";


import "./Pricing.css";
import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ViewProposal from "./ViewProposal";

const data = [
  {
    item: "Indigo",
    option: "-",
    type: "Flight",
    net: "₹ 200000",
    markup: "0%",
    itemDate: "21-05-2024",
    itemTime: "1:00-PM TO 2:00-PM",
  },
  {
    item: "Dubai:Airport to Hotel",
    option: "-",
    type: "Transportation - Private",
    net: "₹ 5000",
    markup: "0%",
    itemDate: "10-03-2024",
    itemTime: "12:00-PM TO 11:00-PM",
  },
  {
    item: "Bur Dubai",
    option: "-",
    type: "Accommodation",
    net: "₹ 2500",
    markup: "0%",
    itemDate: "20-01-2024",
    itemTime: "1:00-PM TO 2:00-PM",
  },
  {
    item: "Burj Khalifa",
    option: "-",
    type: "Activity",
    net: "₹ 6000",
    markup: "0%",
    itemDate: "01-02-2024",
    itemTime: "3:00-PM TO 12:00-PM",
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

const Dashboard = () => {
  const [row, setRow] = useState(data);
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [column, setColumn] = useState([
    {
      width: 80,
      cellStyle: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      },
      filter: "agDateColumnFilter",
      filterParams: dateFilterParams,
      cellRenderer: (params) => {

        let icon;
        switch (params.data.type) {
          case "Flight":
            icon = <BlindIcon />;
            break;
          case "Transportation - Private":
            icon = <CarIcon />;
            break;
          case "Accommodation":
            icon = <HotelIcon />;
            break;
          case "Activity":
            icon = <ActivityIcon />;
            break;
          default:
            icon = null;
            break;
        }
        return (
          <Link>
            <div className="cursor-pointer">
              <div className="flex justify-center items-center">
              {icon}
              </div>
            </div>
          </Link>
        );
      },
    },
    {
      headerName: "Item",
      cellStyle: { display: "flex", alignItems: "center" },
      width: 330,
      cellRenderer: (params) => {
        return (
          <div className="flex flex-col">
            <div className="text-black font-medium">{params.data.item}</div>
            <div className="text-slate-400 mt-[-15px]">
            {params.data.itemDate} {params.data.itemTime}
            </div>
          </div>
        );
      },
    },
    {
      headerName: "Option",
      cellStyle: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      },
      field: "option",
      width: 200,
    },
    {
      headerName: "Type",
      cellStyle: { display: "flex", alignItems: "center" },
      field: "type",
      width: 310,
    },
    {
      headerName: "Net",
      field: "net",
      cellStyle: { display: "flex", justifyContent: "right" },
      width: 100,
    },
    {
      headerName: "Markup",
      field: "markup",
      cellStyle: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      },
      width: 100,
    },
    {
      headerName: "Gross",
      field: "net",
      cellStyle: { display: "flex", justifyContent: "right" },
      width: 100,
    },
    {
      sortable: false,
      filter: false,
      flex: 0.2,
      cellRenderer: (params) => {
        return (
          <div
            onClick={() => {
              setOpen(true);
            }}
            className="flex items-center justify-center w-full h-full"
          >
            <MoreVertIcon
              className="hover:bg-black hover:text-white rounded-full border p-1 border-black"
              style={{ fontSize: "25px" }}
            />
          </div>
        );
      },
    },
  ]);

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

  const [services, setServices] = useState([
    {
      service: "Hotel Option 1",
      price: 1000,
      markup: 200,
      cgst: 30,
      sgst: 30,
      igst: "-",
      tcs: 50,
      discount: "-",
      total: "₹122638",
    },
  ]);

  const calculateTotal = (service) => {
    return (
      service.price +
      service.markup +
      service.cgst +
      service.sgst +
      service.igst +
      service.tcs -
      service.discount -
      service.total
    );
  };

  return (

    <div>
        <ViewProposal/>


      <div className="flex justify-between items-center m-3 p-3 bg-slate-100 rounded-lg">
        <div className="text-2xl font-medium">Dubai Trip Mr.Nikhil</div>
        <div className="text-sm">Dubai, - Adult: 2 | Child: 0</div>
      </div>

      {/* ----------------------------------------------------------- */}
      <div className="h-full w-full px-3">
        <div
          className="ag-theme-quartz"
          style={{ height: "100%", width: "100%" }}
        >
          <AgGridReact
            columnDefs={column}
            rowData={row}
            defaultColDef={defaultColDef}
            enableBrowserTooltips={true}
            rowHeight={60}
            domLayout="autoHeight"
          />
        </div>
      </div>
      {/* ----------------------------------------------------------- */}
      <div>
        <Modal
          keepMounted
          open={open}
          aria-labelledby="keep-mounted-modal-title"
          aria-describedby="keep-mounted-modal-description"
        >
          <div className="p-4 rounded-md absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-white w-[25%]">
            <div className="flex justify-between text-3xl items-center h-[10%] px-2 pb-3">
              <div className="font-bold text-lg text-slate-600">
                {" "}
                Edit Pricing{" "}
              </div>
              <div onClick={() => setOpen(false)} className="cursor-pointer">
                <CloseIcon />
              </div>
            </div>
            <hr />
            <div className="flex flex-row justify-between w-full mt-4 h-[90%]">
              <div className="w-full mx-2">
                <div className=" w-full">
                  <p className="text-xs mb-2">Per Adult Cost</p>
                  <TextField
                    id="outlined-basic"
                    size="small"
                    // error={errors.name === "first_name"}
                    // value={fields.first_name}
                    // onChange={handleChange}
                    name="first_name"
                    variant="outlined"
                    sx={{ width: "100%" }}
                  />
                </div>
                <p className="text-[0.6rem] text-red-600 h-2 flex items-start">
                  {/* {errors.name === "first_name" && errors.helperTxt} */}
                </p>

                <div className="mt-3 w-full">
                  <p className="text-xs mb-2">Per Child Cost</p>
                  <TextField
                    id="outlined-basic"
                    size="small"
                    // error={errors.name === "last_name"}
                    // onChange={handleChange}
                    // value={fields.last_name}
                    name="last_name"
                    variant="outlined"
                    sx={{ width: "100%" }}
                  />
                </div>
                <p className="text-[0.6rem] text-red-600 h-2 flex items-start">
                  {/* {errors.name === "last_name" && errors.helperTxt} */}
                </p>

                <div className="mt-3 w-full mb-8">
                  <p className="text-xs mb-2">Markup %</p>
                  <TextField
                    id="outlined-basic"
                    size="small"
                    // onChange={handleChange}
                    // error={errors.name === "email"}
                    // value={fields.email}
                    name="email"
                    variant="outlined"
                    sx={{ width: "100%" }}
                  />
                </div>
                <hr />
                <div className="text-right">
                  <button className="bg-sky-800 hover:bg-sky-200 font-medium hover:text-sky-900 p-1 px-3 my-5 rounded-lg text-white">
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Modal>
      </div>
      {/* ----------------------------------------------------------- */}
      <div className="flex justify-between mx-3 px-3 py-3 bg-slate-100">
      <div>
  <FormControl sx={{ ml: 3 }}>
    <Select
      defaultValue={10} // Default option ko set karein
      // onChange={handleChange}
      displayEmpty
      inputProps={{ "aria-label": "Without label" }}
    >
      <MenuItem value={10}>Total Price</MenuItem>
      <MenuItem value={20}>Price Per Traveller</MenuItem>
    </Select>
  </FormControl>
  <FormControl sx={{ ml: 3 }}>
    <Select
      defaultValue={10} // Default option ko set karein
      // onChange={handleChange}
      displayEmpty
      inputProps={{ "aria-label": "Without label" }}
    >
      <MenuItem value={10}>GST On Markup</MenuItem>
      <MenuItem value={20}>GST On Total</MenuItem>
    </Select>
  </FormControl>
</div>

        <div className="text-right">
          <p className="text-sm font-medium mb-1">Extra Markup - ₹10000</p>
          <button
            onClick={() => setOpen2(true)}
            className="bg-emerald-600 text-xs px-2 p-1 text-white"
          >
            {" "}
            <CreateIcon style={{ fontSize: "15px" }} />
            Update
          </button>
        </div>
      </div>
      {/* ----------------------------------------------------------- */}
      <div>
        <Modal
          keepMounted
          open={open2}
          aria-labelledby="keep-mounted-modal-title"
          aria-describedby="keep-mounted-modal-description"
        >
          <div className="p-4 rounded-md absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-white w-[25%]">
            <div className="flex justify-between text-3xl items-center h-[10%] px-2 pb-3">
              <div className="font-bold text-lg text-slate-600">
                {" "}
                Add Extra Markup{" "}
              </div>
              <div onClick={() => setOpen2(false)} className="cursor-pointer">
                <CloseIcon />
              </div>
            </div>
            <hr />
            <div className="flex flex-row justify-between w-full mt-4 h-[90%]">
              <div className="w-full mx-2">
                <div className=" w-full">
                  <p className="text-xs mb-2">Base Markup %</p>
                  <TextField
                    id="outlined-basic"
                    size="small"
                    // error={errors.name === "first_name"}
                    // value={fields.first_name}
                    // onChange={handleChange}
                    name="first_name"
                    variant="outlined"
                    sx={{ width: "100%" }}
                  />
                </div>
                <p className="text-[0.6rem] text-red-600 h-2 flex items-start">
                  {/* {errors.name === "first_name" && errors.helperTxt} */}
                </p>

                <div className="mt-3 w-full mb-8">
                  <p className="text-xs mb-2">Extra Markup</p>
                  <TextField
                    id="outlined-basic"
                    size="small"
                    // error={errors.name === "last_name"}
                    // onChange={handleChange}
                    // value={fields.last_name}
                    name="last_name"
                    variant="outlined"
                    sx={{ width: "100%" }}
                  />
                </div>
                <p className="text-[0.6rem] text-red-600 h-2 flex items-start">
                  {/* {errors.name === "last_name" && errors.helperTxt} */}
                </p>

                <hr />
                <div className="text-right">
                  <button className="bg-sky-800 hover:bg-sky-200 font-medium hover:text-sky-900 p-1 px-3 my-5 rounded-lg text-white">
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Modal>
      </div>
      {/* ---------------------------------------------------- */}
      <div className="dark-mode">
        <table>
          <thead>
            <tr>
              <th>Service</th>
              <th>Price (₹)</th>
              <th>Markup</th>
              <th>CGST (2.5%)</th>
              <th>SGST (2.5%)</th>
              <th>IGST (0%)</th>
              <th>TCS (5%)</th>
              <th>Discount</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {services.map((service, index) => (
              <tr key={index}>
                <td>{service.service}</td>
                <td>{service.price}</td>
                <td>{service.markup}</td>
                <td>{service.cgst}</td>
                <td>{service.sgst}</td>
                <td>{service.igst}</td>
                <td>{service.tcs}</td>
                <td>{service.discount}</td>
                <td>{service.total}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* ---------------------------------------------------- */}
      <div className="p-4 text-right flex justify-end">
        <table className="w-1 border-collapse table-bordered">
          <tbody>
            <tr>
              <td className="text-xl border p-3">CGST %</td>
              <td>
                <TextField sx={{ width: "10ch" }} label="" />
              </td>
            </tr>
            <tr>
              <td className="text-xl border p-3">SGST %</td>
              <td>
                <TextField sx={{ width: "10ch" }} label="" />
              </td>
            </tr>
            <tr>
              <td className="text-xl border p-3">IGST %</td>
              <td>
                <TextField sx={{ width: "10ch" }} label="" />
              </td>
            </tr>
            <tr>
              <td className="text-xl border p-3">TCS %</td>
              <td>
                <TextField sx={{ width: "10ch" }} label="" />
              </td>
            </tr>
            <tr>
              <td className="text-xl border p-3">Discount</td>
              <td>
                <TextField sx={{ width: "10ch" }} label="" />
              </td>
            </tr>
            <tr>
              <td className="text-xl border p-3">Price In:</td>
              <td>
                <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                  <Select
                    labelId="demo-select-small-label"
                    id="demo-select-small"
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={"USD"}>USD</MenuItem>
                    <MenuItem value={"MYR"}>MYR</MenuItem>
                    <MenuItem value={"CAD"}>CAD</MenuItem>
                    <MenuItem value={"INR"}>INR</MenuItem>
                    <MenuItem value={"INR"}>INR</MenuItem>
                    <MenuItem value={"AED"}>AED</MenuItem>
                    <MenuItem value={"SAR"}>SAR</MenuItem>
                  </Select>
                </FormControl>
              </td>
            </tr>
            <tr className="early-bird-row">
              <td colSpan={2}>
                <TextField
                  sx={{ width: "100%" }}
                  placeholder="Early Bird Offer"
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="text-right">
        <button className="bg-sky-800 hover:bg-sky-200  hover:text-sky-900 p-1 px-3 m-5 rounded text-white">
          Update Billing
        </button>
      </div>
    </div>
    
  );
};

export default Dashboard;