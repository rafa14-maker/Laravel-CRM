import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import "react-phone-number-input/style.css";
import React, { useEffect, useState } from "react";
import Modal from "@mui/material/Modal";
import CloseIcon from "@mui/icons-material/Close";
import EditIcon from "@mui/icons-material/Edit";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import TextField from "@mui/material/TextField";
import axios from "axios";
import { toast } from "react-toastify";

let permissions = [];
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const TeamManagement = () => {
  const [able, setAble] = useState(false);
  const [search, setSearch] = useState("");
  const [row, setRow] = useState();
  const [open, setOpen] = useState(false);
  const [errors, setErrors] = useState({ name: null, helperTxt: null });
  const handleClose = () => {
    setErrors({ name: null, helperTxt: null });
    setOpen(false);
  };
  const [gridApi, setGridApi] = useState(null);
  const [stat, setStat] = useState("");

  const [reload, setReload] = useState(false);

  const [id, setId] = useState("");

  const validateFields = () => {
    if (fields.first_name.trim() === "") {
      return setErrors({
        name: "first_name",
        helperTxt: "First Name Cannot Be Empty",
      });
    }
    if (fields.last_name.trim() === "") {
      return setErrors({
        name: "last_name",
        helperTxt: "Last Name Cannot Be Empty",
      });
    }
    if (emailRegex.test(fields.email)) {
      return setErrors({
        name: "email",
        helperTxt: "Please Enter Valid Email",
      });
    }
    if (fields.pin.length !== 4) {
      return setErrors({
        name: "pin",
        helperTxt: "Pin Must Contain 4 Digits",
      });
    }
    {/* password  */}
    if (fields.pass.length !== 8) {
      return setErrors({
        name: "pass",
        helperTxt: "Pin Must Contain 8 Digits",
      });
    }
  };

  const [fields, setFields] = useState({
    first_name: "",
    last_name: "",
    email: "",
    pin: "",
    pass:"",
    status: "1",
  });

  const handleChange = (event) => {
    return setFields({ ...fields, [event.target.name]: event.target.value });
  };

  const handleSave = () => {
    setAble(true);
    if (
      fields.status === "" ||
      fields.first_name === "" ||
      fields.last_name === "" ||
      fields.email === "" ||
      fields.pin === ""||
      fields.pass === ""
    ) {
      toast.error("Please Fill All the Fields Correctly");
      setAble(false);
    } else {
      if (stat == "Invite") {
        axios
          .post("https://jajasend.site/api/v1/team", fields)
          .then((response) => {
            setReload(!reload);
            toast.success("Team Member Added Successfully");
            setOpen(false);
            setAble(false);
          })
          .catch((error) => {
            console.log(error);
            setAble(false);
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
                .delete(`https://jajasend.site/api/v1/team/${id}`)
                .then((response) => {
                  toast.dismiss(confirmationToastId);
                  toast.success("Team Member Deleted Successfully");
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
      .put(`https://jajasend.site/api/v1/team/${id}`, fields)
      .then((response) => {
        toast.success("Team Member Updated Successfully");
        setReload(!reload);
        setAble(false);
        setOpen(false);
      })
      .catch((err) => {
        console.log(err.response.data);
        setAble(false);
      });
  };

  useEffect(() => {
    const getData = () => {
      axios.get("https://jajasend.site/api/v1/team").then((response) => {
        setRow(response.data.reverse());
      });
    };

    const getPermissions = () => {
      axios.get("https://jajasend.site/api/v1/permission").then((response) => {
        permissions = response.data;
      });
    };

    getPermissions();
    getData();
  }, [reload]);

  console.log(permissions);

  const [column, setColumn] = useState([
    {
      cellRenderer: (params) => {
        return (
          <div className="h-full w-full flex justify-center items-center">
            <div className="p-1 rounded-full border bg-[#3b5de7] text-white h-8 w-8 font-bold text-lg flex items-center justify-center">
              {params.data.first_name[0].toUpperCase()}
            </div>
          </div>
        );
      },
      flex: 0.3,
    },
    {
      headerName: "Name",
      field: "first_name",
      flex: 0.6,
      valueGetter: (params) => {
        return ` ${params.data.first_name} ${params.data.last_name}`;
      },
    },
    {
      headerName: "Email",
      field: "email",
      flex: 1.5,
      cellRenderer: (params) => {
        return (
          <div className="flex items-center justify-start gap-2 w-full h-full">
            <div className="p-1 rounded-full border border-black h-6 w-6 flex items-center justify-center">
              {params.data.email[0].toUpperCase()}
            </div>
            <div className="w-0">{params.data.email}</div>
          </div>
        );
      },
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
                params.value === "1" ? "bg-green-600" : "bg-red-600"
              }  text-white rounded-md h-[70%]`}
            >
              {params.value == "1" ? "Active" : "Inactive"}
            </div>
          </div>
        );
      },
    },
    {
      headerName: "Set Target",
      flex: 0.5,
      cellRenderer: (params) => {
        return (
          <div className="flex items-center justify-center w-full h-full">
            <div
              className={`flex cursor-pointer items-center justify-center w-16 px-10 bg-[#3b5de7]  text-white rounded-md h-[70%]`}
            >
              Set Target
            </div>
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
          <div
            onClick={() => {
              setOpen(true);
              setStat("Edit");
              setFields({
                name: params.data.name,
                status: params.data.status,
                first_name: params.data.first_name,
                last_name: params.data.last_name,
                email: params.data.email,
                pin: params.data.pin,
                pass:params.data.pass,
              });
              setId(params.data.id);
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
    <div className="h-[90vh]">
      <div className="flex justify-between items-center text-slate-500 text-sm h-16 sm:h-12 sm:flex-row flex-col px-2 border-t border-slate-300 border-b bg-[#eff3f7]">
        <div>Team - People within your organisation </div>
        <div className="flex justify-center  sm:w-[65%] md:w-[55%] lg:w-[43%]  w-[90%] items-center gap-3 h-full">
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
                setStat("Invite");
                setId("");
                setFields({
                  first_name: "",
                  last_name: "",
                  email: "",
                  pin: "",
                  pass:"",
                  status: "1",
                });
              }}
              className="border w-[100%] border-slate-300 h-full bg-[#1d3f5a] text-white text-xs rounded-md px-2 "
            >
              <span className="sm:block hidden">Invite Team Member</span>
              <span className="sm:hidden block">
                <AddRoundedIcon />
              </span>
            </button>
          </div>
        </div>
      </div>

      <div className="h-[85%] w-full overflow-x-auto ">
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
            aria-labelledby="keep-mounted-modal-title"
            aria-describedby="keep-mounted-modal-description"
          >
            <div className="p-4 rounded-md absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-white w-[80%] md:w-[50%] h-fit">
              <div className="flex justify-between text-3xl items-center h-[10%] px-2">
                <div className="font-bold text-lg"> {stat} Team Member </div>
                <div className="cursor-pointer" onClick={handleClose}>
                  <CloseIcon />
                </div>
              </div>
              <div className="flex flex-row justify-between w-full mt-4 h-[90%]">
                <div className="w-[30%]">
                  <div className=" w-full">
                    <TextField
                      id="outlined-basic"
                      size="small"
                      error={errors.name === "first_name"}
                      label="Name"
                      value={fields.first_name}
                      onChange={handleChange}
                      name="first_name"
                      variant="outlined"
                      sx={{ width: "100%" }}
                    />
                  </div>
                  <p className="text-[0.6rem] text-red-600 h-2 flex items-start">
                      {errors.name === "first_name" && errors.helperTxt}
                    </p>

                  
                  <p className="text-[0.6rem] text-red-600 h-2 flex items-start">
                      {errors.name === "last_name" && errors.helperTxt}
                    </p>

                  <div className="mt-3 w-full">
                    <TextField
                      id="outlined-basic"
                      size="small"
                      onChange={handleChange}
                      error={errors.name === "email"}
                      value={fields.email}
                      label="Email"
                      name="email"
                      variant="outlined"
                      sx={{ width: "100%" }}
                    />
                  </div>
                  <p className="text-[0.6rem] text-red-600 h-2 flex items-start">
                      {errors.name === "email" && errors.helperTxt}
                    </p>

                  <div className="mt-3 w-full">
                    <TextField
                      id="outlined-basic"
                      size="small"
                      label="Pin"
                      onChange={handleChange}
                      error={errors.name === "pin"}
                      onKeyDown={(e) => {
                        if (
                          fields.pin &&
                          fields.pin.length >= 4 &&
                          e.key !== "Backspace"
                        ) {
                          e.preventDefault();
                        }
                      }}
                      value={fields.pin}
                      name="pin"
                      variant="outlined"
                      sx={{ width: "100%" }}
                      type="number"
                    />
                  </div>
                  <p className="text-[0.6rem] text-red-600 h-2 flex items-start">
                      {errors.name === "pin" && errors.helperTxt}
                    </p>

                    {/* password */}
                    <div className="mt-3 w-full">
                    <TextField
                      id="outlined-basic"
                      size="small"
                      label="pass"
                      onChange={handleChange}
                      error={errors.name === "pass"}
                      onKeyDown={(e) => {
                        if (
                          fields.pass &&
                          fields.pass.length >= 8 &&
                          e.key !== "Backspace"
                        ) {
                          e.preventDefault();
                        }
                      }}
                      value={fields.pass}
                      name="pass"
                      variant="outlined"
                      sx={{ width: "100%" }}
                      type="text"
                    />
                  </div>
                  <p className="text-[0.6rem] text-red-600 h-2 flex items-start">
                      {errors.name === "pass" && errors.helperTxt}
                    </p>

                  <select
                    onChange={handleChange}
                    name="status"
                    value={fields.status}
                    className="w-full hover:border-slate-600 focus:outline-none border-slate-300 border mt-3 h-10 rounded-[0.3rem]"
                  >
                    <option value="1">Active</option>
                    <option value="0">Inactive</option>
                  </select>
                </div>

                <div className="w-[68%] ">
                  <div className="border flex flex-row h-fit">
                    <div className="flex-1 border">
                      <div className="bg-[#dee6f8] p-1">Module Permission</div>
                    </div>
                    <div className="flex-[0.4] border">
                      <div className="bg-[#dee6f8] p-1">View</div>
                    </div>
                    <div className="flex-[0.4] border">
                      <div className="bg-[#dee6f8] p-1">Add/Edit</div>
                    </div>
                  </div>

                  <div className="border h-[242px] overflow-x-auto">
                    {permissions.map((item, index) => {
                      return (
                        <div key={index} className="flex flex-row">
                          <div className="flex-1 border">
                            <div className="p-1">{item.name}</div>
                          </div>

                          <label
                            htmlFor={`A${index}`}
                            className="flex-[0.4] border"
                          >
                            <div className="p-1">
                              <input id={`A${index}`} type="checkbox" />
                            </div>
                          </label>

                          <label
                            htmlFor={`B${index}`}
                            className="flex-[0.4] border"
                          >
                            <div className="p-1">
                              <input id={`B${index}`} type="checkbox" />
                            </div>
                          </label>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
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
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default TeamManagement;
