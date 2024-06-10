import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import IosShareIcon from "@mui/icons-material/IosShare";
import "react-phone-number-input/style.css";
import React, { useEffect, useState } from "react";
import Modal from "@mui/material/Modal";
import CloseIcon from "@mui/icons-material/Close";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import TextField from "@mui/material/TextField";
import axios from "axios";
import { toast } from "react-toastify";
import EditIcon from "@mui/icons-material/Edit";
import dayjs from "dayjs";

const BASE_URL = import.meta.env.VITE_BASE_URL;

function Destinations() {
  const [able, setAble] = useState(false);
  const [search, setSearch] = useState("");
  const [row, setRow] = useState();
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const [gridApi, setGridApi] = useState(null);
  const [stat, setStat] = useState("");

  const [reload, setReload] = useState(false);

  const [fields, setFields] = useState({
    id: "",
    name: "",
    status: "1",
  });

  const handleChange = (event) => {
    return setFields({ ...fields, [event.target.name]: event.target.value });
  };

  const handleSave = () => {
    setAble(true);
    if (fields.status === "" || fields.name === "") {
      setAble(false);
      toast.error("Please Fill All the Fields Correctly");
    } else {
      if (stat == "Add") {
        axios
          .post(`${BASE_URL}api/v1/destination`, fields)
          .then((response) => {
            setAble(false);
            setReload(!reload);
            toast.success("Destination Added Successfully");
            setOpen(false);
          })
          .catch((error) => {
            setAble(false);
            console.log(error);
          });
      }
    }
  };

  const handleDelete = () => {
    const confirmationToastId = toast.warning(
      <div className="flex flex-col">
        <p>You want to delete this item?</p>
        <div className="flex items-center justify-start gap-2">
          <button
            className="w-8 h-6  text-xs bg-red-500 rounded-md text-white"
            onClick={() => {
              axios
                .delete(
                  `${BASE_URL}api/v1/destination/${fields.id}`
                )
                .then((response) => {
                  toast.dismiss(confirmationToastId);
                  toast.success("Destination Deleted Successfully");
                  setReload(!reload);
                  setOpen(false);
                })
                .catch((err) => {
                  console.log(err.response.data);
                });
            }}
          >
            Yes
          </button>
          <button
            className="w-8 h-6 text-xs bg-green-500 rounded-md text-white "
            onClick={() => {
              toast.dismiss(confirmationToastId);
            }}
          >
            No
          </button>
        </div>
      </div>,
      { autoClose: false }
    );
  };

  const handleUpdate = () => {
    setAble(true);
    axios
      .put(`${BASE_URL}api/v1/destination/${fields.id}`, {
        name: fields.name,
        status: fields.status,
      })
      .then((response) => {
        toast.success("Destination Updated Successfully");
        setAble(false);
        setReload(!reload);
        setOpen(false);
      })
      .catch((err) => {
        setAble(false);
        console.log(err.response.data);
      });
  };

  useEffect(() => {
    const getData = () => {
      axios
        .get(`${BASE_URL}api/v1/destination`)
        .then((response) => {
          setRow(response.data.reverse());
        });
    };

    getData();
  }, [reload]);

  const [column, setColumn] = useState([
    {
      headerName: "Sr.",
      field: "serialNumber",
      flex: 0.28,
      sortable: false,
      filter: false,
      cellRenderer: (params) => {
        return <div className="">{params.rowIndex + 1}</div>;
      },
    },
    {
      headerName: "Name",
      field: "name",
      flex: 1.3,
    },
    {
      headerName: "Status",
      field: "status",
      flex: 0.5,
      cellRenderer: (params) => {
        return (
          <div className="flex items-center justify-center w-full h-full">
            <div
              className={`flex items-center justify-center w-14 ${
                params.value == "1" ? "bg-green-600" : "bg-red-600"
              }  text-white rounded-md h-[70%]`}
            >
              {params.value == "1" ? "Active" : "Inactive"}
            </div>
          </div>
        );
      },
    },
    {
      headerName: "Updated By",
      cellRenderer: (params) => {
        return (
          <div className="flex items-center justify-start gap-2 w-full h-full">
            <div className="p-1 rounded-full border border-black h-6 w-6 flex items-center justify-center">
              J
            </div>
            <div>JaffarSaleem.com</div>
          </div>
        );
      },
    },
    {
      headerName: "Updated On",
      field: "updated_at",
      flex: 0.7,
      cellRenderer: (params) => {
        const formattedDate = dayjs(params.value).format("DD-MM-YYYY");
        return <div> {formattedDate} </div>;
      },
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
              setStat("Edit");
              setFields({
                name: params.data.name,
                status: params.data.status,
                id: params.data.id,
              });
            }}
            className="flex items-center justify-center w-full h-full"
          >
            <EditIcon
              className="hover:bg-black hover:text-white rounded-full border p-1 border-black"
              style={{ fontSize: "25px" }}
            />
          </div>
        );
      },
    },
  ]);

  const onGridReady = (params) => {
    setGridApi(params.api);
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
    flex: 1,
    tooltipField: "name",
  };

  return (
    <div className="h-full">
      <div className="flex justify-between items-center h-16 sm:h-12 sm:flex-row flex-col px-2 border-t border-slate-300 border-b bg-[#eff3f7]">
        <div className="font-bold"> Destinations </div>
        <div className="flex justify-center  sm:w-[65%] md:w-[55%] lg:w-[43%]  w-[90%] items-center gap-3 h-full">
          <button
            onClick={() => {
              ExportData();
            }}
            className="px-2 bg-[#1d3f5a] text-white rounded-md flex items-center h-[80%]"
          >
            <IosShareIcon style={{ fontSize: "20" }} />
          </button>
          <input
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              quickFilter(e.target.value);
            }}
            className="border border-slate-300 h-[80%] px-2 rounded-md text-sm w-[60%] focus:outline-none focus:border focus:border-black"
            placeholder="Search by anything...."
          />
          <div className="w-[40%] h-[80%]">
            <button
              onClick={() => {
                setOpen(true);
                setStat("Add");
                setFields({ name: "", status: "1" });
              }}
              className="border w-[100%] border-slate-300 h-full bg-[#1d3f5a] text-white text-xs rounded-md px-2 "
            >
              <span className="sm:block hidden">Add Destination</span>
              <span className="sm:hidden block">
                <AddRoundedIcon />
              </span>
            </button>
          </div>
        </div>
      </div>

      <div className="h-[91.5%] w-full overflow-x-auto ">
        <div className="ag-theme-quartz h-full w-[800px] md:w-full">
          <AgGridReact
            onGridReady={onGridReady}
            columnDefs={column}
            rowData={row}
            defaultColDef={defaultColDef}
            enableBrowserTooltips={true}
            pagination={true}
            paginationPageSize={20}
          />

          <Modal
            keepMounted
            open={open}
            onClose={handleClose}
            aria-labelledby="keep-mounted-modal-title"
            aria-describedby="keep-mounted-modal-description"
          >
            <div className="p-4 rounded-md absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-white w-[80%] md:w-[25%] h-fit">
              <div className="flex justify-between text-3xl items-center h-[10%] px-2">
                <div className="font-bold text-lg"> {stat} Destination </div>
                <div className="cursor-pointer" onClick={handleClose}>
                  <CloseIcon />
                </div>
              </div>
              <div className="flex flex-col justify-between mt-4 h-[90%]">
                <div className=" mt-4 w-full">
                  <TextField
                    id="outlined-basic"
                    size="small"
                    label="Name"
                    name="name"
                    value={fields.name}
                    onChange={(e) => {
                      handleChange(e);
                    }}
                    variant="outlined"
                    sx={{ width: "100%" }}
                  />
                </div>

                <select
          
                  name="status"
                  value={fields.status}
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  className="px-2 focus:outline-none mt-4 w-full border h-10 hover:border-black focus:border border-[#d8d8d8] rounded-md"
                >
                  <option value="1">Active</option>
                  <option value="0">Inactive</option>
                </select>
                <div className="mt-4 flex justify-between items-center">
                  <div
                    onClick={stat === "Edit" ? handleDelete : handleClose}
                    className=" w-[48%] rounded-md h-10"
                  >
                    <button
                      className={` bg-red-600 hover:bg-red-900 w-full rounded-md  text-white h-full flex items-center justify-center`}
                    >
                      {stat === "Edit" ? "Delete" : "Cancel"}
                    </button>
                  </div>

                  <div className=" w-[48%] rounded-md h-10  ">
                    <button
                      disabled={able}
                      onClick={stat === "Edit" ? handleUpdate : handleSave}
                      className={`w-full rounded-md h-full flex items-center
                         hover:bg-green-900 bg-green-600
                    justify-center text-white`}
                    >
                      {stat === "Edit" ? "Update" : "Save"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Modal>
        </div>
      </div>
    </div>
  );
}

export default Destinations;
