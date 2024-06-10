import React, { useEffect } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import { useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import Modal from "@mui/material/Modal";
import CloseIcon from "@mui/icons-material/Close";
import TextField from "@mui/material/TextField";
import "./HotelTarif.css";
import axios from "axios";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);
const BASE_URL = import.meta.env.VITE_BASE_URL;

let MealPlan = [];
let RoomCategory = [];

function HotelPrice({ name, MainSetOpen, hotelId }) {
  const [able, setAble] = useState(false);
  const [reload, setReload] = useState(false);
  const [row, setRow] = useState();
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setErrors({ name: null, helperTxt: null });
    setOpen(false);
  };

  const [tarifFirst, setTariffFirst] = useState(true);

  const [tariffId, setTariffId] = useState("");

  const [fields, setFields] = useState({
    accomodation_id: hotelId,
    room_type_id: "DEFAULT",
    meal_plan_id: "DEFAULT",
    single: "",
    double: "",
    triple: "",
    quad: "",
    cwb: "",
    cwb_above_5_yrs: "",
    cwb_below_5_yrs: "",
    inf_below_3_yrs: "",
  });

  const [gridApi, setGridApi] = useState(null);

  const [stat, setStat] = useState("");

  const [column, setColumn] = useState([
    {
      headerName: "Room Category",
      filter: false,
      valueGetter: (params) => {
        return params.data.room_type.name;
      },
    },
    {
      headerName: "Meal Plan",
      filter: false,
      flex: 2,
      valueGetter: (params) => {
        return params.data.meal_plan.name;
      },
    },
    {
      headerName: "Single",
      field: "single",
      filter: false,
      flex: 0.5,
    },
    {
      headerName: "Double",
      field: "double",
      filter: false,
      flex: 0.5,
    },
    {
      headerName: "Triple",
      field: "triple",
      filter: false,
      flex: 0.5,
    },
    {
      headerName: "Quad",
      field: "quad",
      filter: false,
      flex: 0.5,
    },
    {
      headerName: "CWB",
      field: "cwb",
      filter: false,
      flex: 0.5,
    },
    {
      headerName: "CNB (above 5 yrs)",
      filter: false,
      field: "cwb_above_5_yrs",
      flex: 0.95,
    },
    {
      headerName: "CNB (below 5 yrs)",
      filter: false,
      field: "cwb_below_5_yrs",
      flex: 0.95,
    },
    {
      headerName: "INF (below 3 yrs)",
      filter: false,
      field: "inf_below_3_yrs",
      flex: 0.92,
    },
    {
      sortable: false,
      filter: false,
      flex: 0.25,
      cellRenderer: (params) => {
        return (
          <div className="flex items-center justify-center w-full h-full">
            <EditIcon
              onClick={() => {
                setOpen(true);
                setStat("Edit");
                setTariffId(params.data.id);
                setTariffFirst(false);
                setFields({
                  accomodation_id: hotelId,
                  room_type_id: params.data.room_type_id,
                  meal_plan_id: params.data.meal_plan_id,
                  single: params.data.single,
                  double: params.data.double,
                  triple: params.data.triple,
                  quad: params.data.quad,
                  cwb: params.data.cwb,
                  cwb_above_5_yrs: params.data.cwb_above_5_yrs,
                  cwb_below_5_yrs: params.data.cwb_below_5_yrs,
                  inf_below_3_yrs: params.data.inf_below_3_yrs,
                });
              }}
              className="hover:bg-black hover:text-white rounded-full border p-1 border-black"
              style={{ fontSize: "25px" }}
            />
          </div>
        );
      },
    },
  ]);

  const [errors, setErrors] = useState({ name: null, helperTxt: null });

  const validateFields = () => {
    if (fields.room_type_id === "DEFAULT") {
      return setErrors({
        name: "room_type_id",
        helperTxt: "Please Select Room Category",
      });
    }
    if (fields.meal_plan_id === "DEFAULT") {
      return setErrors({
        name: "meal_plan_id",
        helperTxt: "Please Select Meal PLan",
      });
    }
    if (fields.single.trim() === "") {
      return setErrors({
        name: "single",
        helperTxt: "Price Cannot Be Empty",
      });
    }
    if (fields.double.trim() === "") {
      return setErrors({
        name: "double",
        helperTxt: "Price Cannot Be Empty",
      });
    }
    if (fields.triple.trim() === "") {
      return setErrors({
        name: "triple",
        helperTxt: "Price Cannot Be Empty",
      });
    }
    if (fields.quad.trim() === "") {
      return setErrors({
        name: "quad",
        helperTxt: "Price Cannot Be Empty",
      });
    }
    if (fields.cwb.trim() === "") {
      return setErrors({
        name: "cwb",
        helperTxt: "Price Cannot Be Empty",
      });
    }
    if (fields.cwb_above_5_yrs.trim() === "") {
      return setErrors({
        name: "cwb_above_5_yrs",
        helperTxt: "Price Cannot Be Empty",
      });
    }
    if (fields.cwb_below_5_yrs.trim() === "") {
      return setErrors({
        name: "cwb_below_5_yrs",
        helperTxt: "Price Cannot Be Empty",
      });
    }
    if (fields.inf_below_3_yrs.trim() === "") {
      return setErrors({
        name: "inf_below_3_yrs",
        helperTxt: "Price Cannot Be Empty",
      });
    }
    return true;
  };

  const handleSave = () => {
    setAble(true);
    const validate = validateFields();

    if (validate) {
      axios
        .post(`${BASE_URL}api/v1/accomodation-tariff`, fields)
        .then((res) => {
          setAble(false);
          toast.success("Tariff Added Successfully");
          setReload(!reload);
          handleClose();
        })
        .catch((err) => {
          setAble(false);
          console.log(err);
        });
    } else {
      setAble(false);
    }
  };

  const handleDelete = () => {
    MySwal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
      customClass: {
        container: "custom-swal-container",
      },
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`${BASE_URL}api/v1/accomodation-tariff/${tariffId}`)
          .then((response) => {
            Swal.fire({
              title: "Deleted!",
              text: "Your Item has been deleted.",
              icon: "success",
              customClass: {
                container: "custom-swal-container",
              },
            });
            setReload(!reload);
            setOpen(false);
          })
          .catch((err) => {
            console.log(err.response.data);
          });
      }
    });
  };

  const handleUpdate = () => {
    setAble(true);
    axios
      .put(`${BASE_URL}api/v1/accomodation-tariff/${tariffId}`, fields)
      .then((response) => {
        toast.success("Tariff Updated Successfully");
        setReload(!reload);
        setAble(false);
        handleClose();
      })
      .catch((err) => {
        console.log(err);
        setAble(false);
      });
  };

  const onGridReady = (params) => {
    setGridApi(params.api);
  };

  const handleChange = (event) => {
    setErrors({ name: null, helperTxt: null });
    setFields({ ...fields, [event.target.name]: event.target.value });
  };

  const defaultColDef = {
    sortable: true,
    filter: true,
    flex: 1,
    cellStyle: { borderRight: "1px solid #d9d9db" },
    tooltipField: "name",
  };

  useEffect(() => {
    const getData = () => {
      axios
        .get(`${BASE_URL}api/v1/accomodation/${hotelId}`)
        .then((response) => {
          setRow(response.data.tariff.reverse());
          response.data.tariff.length !== 0
            ? setTariffFirst(false)
            : setTariffFirst(true);
        });
    };

    const getMealPlans = () => {
      axios.get(`${BASE_URL}api/v1/mealplan`).then((response) => {
        MealPlan = response.data;
      });
    };

    const getRoomCategories = () => {
      axios.get(`${BASE_URL}api/v1/roomtype`).then((response) => {
        RoomCategory = response.data;
      });
    };

    getMealPlans();
    getRoomCategories();
    getData();

    if (gridApi) {
      gridApi.autoSizeColumns();
    }
  }, [reload]);

  return (
    <div className="h-full">
      <div className="flex justify-between items-center h-16 w-full sm:h-12 sm:flex-row flex-col px-1">
        <div className="font-bold w-[40%]"> {name} - Tariff </div>
        <div className="flex justify-end items-center w-[75%] gap-3 h-full">
          <button
            onClick={() => {
              setOpen(true);
              setStat("Add");
              setTariffFirst(true);
              setFields({
                accomodation_id: hotelId,
                room_type_id: "DEFAULT",
                meal_plan_id: "DEFAULT",
                single: "",
                double: "",
                triple: "",
                quad: "",
                cwb: "",
                cwb_above_5_yrs: "",
                cwb_below_5_yrs: "",
                inf_below_3_yrs: "",
              });
            }}
            className="border border-slate-300 h-[60%] bg-[#1d3f5a] text-white text-sm rounded-md px-2 "
          >
            <span className="sm:block px-2 hidden">Add Tariff</span>
            <span className="sm:hidden flex items-center justify-center">
              <AddRoundedIcon />
            </span>
          </button>
          <div
            className=" border broder-[#1d3f5a] px-1 rounded-md bg-[#1d3f5a] cursor-pointer"
            onClick={() => {
              MainSetOpen("tarif");
            }}
          >
            <CloseIcon style={{ color: "#fff" }} />
          </div>
        </div>
      </div>

      <div className="h-96 mt-2 border-r border-l w-full overflow-x-auto">
        <div className="ag-theme-quartz  xl:w-[100%] w-[1800px] h-full">
          <AgGridReact
            onGridReady={onGridReady}
            columnDefs={column}
            rowData={row}
            defaultColDef={defaultColDef}
            enableBrowserTooltips={true}
            autoSizeStrategy={"fitCellContents"}
          />

          <Modal
            keepMounted
            open={open}
            aria-labelledby="keep-mounted-modal-title"
            aria-describedby="keep-mounted-modal-description"
          >
            <div className="p-4 rounded-md absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-white w-[95%] md:w-[40%] h-fit">
              <div className="flex justify-between text-3xl items-center h-[10%] px-2">
                <div className="font-bold text-lg"> {stat} Tariff </div>
                <div className="cursor-pointer" onClick={handleClose}>
                  <CloseIcon />
                </div>
              </div>
              <div className="flex justify-between w-full h-[90%]">
                <div className="flex flex-col w-[48%]">
                  <div className="relative mt-2 w-full">
                    <select
                      className={`px-2 focus:outline-none w-full border h-10  focus:border  ${
                        errors.name === "room_type_id"
                          ? "border-red-600"
                          : "hover:border-black border-[#d8d8d8]"
                      }  rounded-md`}
                      value={fields.room_type_id}
                      variant="outlined"
                      name="room_type_id"
                      onChange={handleChange}
                      sx={{ width: "100%" }}
                    >
                      <option value="DEFAULT" disabled={true}>
                        Room Category
                      </option>
                      {RoomCategory.map((item, index) => {
                        return (
                          item.status == "1" && (
                            <option value={item.id} key={index}>
                              {item.name}
                            </option>
                          )
                        );
                      })}
                    </select>
                    <p className="text-[0.6rem] text-red-600 h-2 flex items-start">
                      {errors.name === "room_type_id" && errors.helperTxt}
                    </p>
                  </div>

                  <div className="relative mt-3 w-full">
                    <select
                      className={`px-2 focus:outline-none w-full border h-10  focus:border  ${
                        errors.name === "meal_plan_id"
                          ? "border-red-600"
                          : "hover:border-black border-[#d8d8d8]"
                      }  rounded-md`}
                      value={fields.meal_plan_id}
                      variant="outlined"
                      sx={{ width: "100%" }}
                      name="meal_plan_id"
                      onChange={handleChange}
                    >
                      <option value="DEFAULT" disabled={true}>
                        Meal Plan
                      </option>
                      {MealPlan.map((item, index) => {
                        return (
                          item.status == "1" && (
                            <option value={item.id} key={index}>
                              {item.name}
                            </option>
                          )
                        );
                      })}
                    </select>
                    <p className="text-[0.6rem] text-red-600 h-2 flex items-start">
                      {errors.name === "meal_plan_id" && errors.helperTxt}
                    </p>
                  </div>

                  <div className="mt-5 flex items-center justify-between w-full">
                    <div className=" w-[48%]">
                      <TextField
                        id="outlined-basic"
                        size="small"
                        error={errors.name === "single"}
                        label="Single"
                        variant="outlined"
                        sx={{ width: "100%" }}
                        type="number"
                        value={fields.single}
                        name="single"
                        onChange={handleChange}
                      />
                      <p className="text-[0.6rem] text-red-600 h-2 flex items-start">
                        {errors.name === "single" && errors.helperTxt}
                      </p>
                    </div>
                    <div className="w-[48%]">
                      <TextField
                        id="outlined-basic"
                        error={errors.name === "double"}
                        size="small"
                        label="Double"
                        variant="outlined"
                        sx={{ width: "100%" }}
                        type="number"
                        value={fields.double}
                        onChange={handleChange}
                        name="double"
                      />
                      <p className="text-[0.6rem] text-red-600 h-2 flex items-start">
                        {errors.name === "double" && errors.helperTxt}
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 flex items-center justify-between w-full">
                    <div className=" w-[48%]">
                      <TextField
                        id="outlined-basic"
                        size="small"
                        label="Triple"
                        error={errors.name === "triple"}
                        variant="outlined"
                        sx={{ width: "100%" }}
                        type="number"
                        name="triple"
                        onChange={handleChange}
                        value={fields.triple}
                      />
                      <p className="text-[0.6rem] text-red-600 h-2 flex items-start">
                        {errors.name === "triple" && errors.helperTxt}
                      </p>
                    </div>
                    <div className="w-[48%]">
                      <TextField
                        id="outlined-basic"
                        error={errors.name === "quad"}
                        size="small"
                        label="Quad"
                        variant="outlined"
                        sx={{ width: "100%" }}
                        type="number"
                        value={fields.quad}
                        name="quad"
                        onChange={handleChange}
                      />
                      <p className="text-[0.6rem] text-red-600 h-2 flex items-start">
                        {errors.name === "quad" && errors.helperTxt}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col w-[48%]">
                  <div className="mt-2 w-full">
                    <TextField
                      id="outlined-basic"
                      size="small"
                      error={errors.name === "cwb"}
                      label="CWB"
                      variant="outlined"
                      sx={{ width: "100%" }}
                      type="number"
                      value={fields.cwb}
                      onChange={handleChange}
                      name="cwb"
                    />
                  </div>
                  <p className="text-[0.6rem] text-red-600 h-2 flex items-start">
                    {errors.name === "cwb" && errors.helperTxt}
                  </p>
                  <div className="w-full mt-4">
                    <TextField
                      id="outlined-basic"
                      error={errors.name === "cwb_above_5_yrs"}
                      size="small"
                      label="CNB (above 5 yrs)"
                      variant="outlined"
                      sx={{ width: "100%" }}
                      value={fields.cwb_above_5_yrs}
                      name="cwb_above_5_yrs"
                      onChange={handleChange}
                      type="number"
                    />
                  </div>
                  <p className="text-[0.6rem] text-red-600 h-2 flex items-start">
                    {errors.name === "cwb_above_5_yrs" && errors.helperTxt}
                  </p>

                  <div className="mt-4 w-full">
                    <TextField
                      id="outlined-basic"
                      size="small"
                      error={errors.name === "cwb_below_5_yrs"}
                      label="CNB (below 5 yrs)"
                      variant="outlined"
                      sx={{ width: "100%" }}
                      type="number"
                      onChange={handleChange}
                      value={fields.cwb_below_5_yrs}
                      name="cwb_below_5_yrs"
                    />
                  </div>
                  <p className="text-[0.6rem] text-red-600 h-2 flex items-start">
                    {errors.name === "cwb_below_5_yrs" && errors.helperTxt}
                  </p>
                  <div className="mt-4 w-full">
                    <TextField
                      id="outlined-basic"
                      size="small"
                      error={errors.name === "inf_below_3_yrs"}
                      label="INF (below 3 yrs)"
                      variant="outlined"
                      sx={{ width: "100%" }}
                      type="number"
                      onChange={handleChange}
                      value={fields.inf_below_3_yrs}
                      name="inf_below_3_yrs"
                    />
                  </div>
                  <p className="text-[0.6rem] text-red-600 h-2 flex items-start">
                    {errors.name === "inf_below_3_yrs" && errors.helperTxt}
                  </p>
                </div>
              </div>

              <div className="mt-4 flex justify-between items-center">
                <div
                  onClick={tarifFirst ? handleClose : handleDelete}
                  className=" w-[48%] rounded-md h-10"
                >
                  <button
                    disabled={able}
                    className="hover:bg-[#c22626] w-full rounded-md  text-white bg-[#e51d27] h-full flex items-center justify-center"
                  >
                    {tarifFirst ? "Cancel" : "Delete"}
                  </button>
                </div>

                <div
                  onClick={tarifFirst ? handleSave : handleUpdate}
                  className=" w-[48%] rounded-md h-10  "
                >
                  <button
                    disabled={able}
                    className="w-full rounded-md h-full flex hover:bg-[#1a8d42] items-center justify-center text-white bg-[#04AA6D]"
                  >
                    {able ? "Processing..." : tarifFirst ? "Save" : "Update"}
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

export default HotelPrice;
