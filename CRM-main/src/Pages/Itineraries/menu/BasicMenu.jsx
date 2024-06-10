import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { HiDotsVertical } from "react-icons/hi";
import TextField from "@mui/material/TextField";
import Box from '@mui/material/Box';
import CloseIcon from "@mui/icons-material/Close";
import Modal from '@mui/material/Modal';
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import { useState } from 'react';



export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [showDOBDate, setShowDOBDate] = useState(dayjs());
  const [showMADate, setShowMADate] = useState(dayjs());
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
  
  const [able, setAble] = useState(false);
  const [stat, setStat] = useState("");
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const [openmodal, setOpenmodal] = React.useState(false);
  const handleOpen = () => setOpenmodal(true);
  const handleClosemodal = () => setOpenmodal(false);


  return (
    <div className='ml-[-20px]'>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
      <HiDotsVertical />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem ><Button onClick={handleOpen}>Edit Iltenaries</Button></MenuItem>
        <MenuItem >Duplicate</MenuItem>
      
      </Menu>
      <Modal
      open={openmodal}
      onClose={handleClosemodal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box >
      <div className="p-4 rounded-md absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-white w-[48%] h-fit">
      <div className="flex justify-between items-center h-[10%] px-2">
        <div className="font-bold text-lg">{stat} Client</div>
        <div className="cursor-pointer" onClick={handleClosemodal}>
          <CloseIcon />
        </div>
      </div>

      <div className="flex mt-4 justify-between h-[90%]">
        <div className="w-[48%] ">
        <TextField
                fullWidth
                id="outlined-basic"
                size="small"
                label="Itinerary Name"
                variant="outlined"
                name="itinerary_name"
            
              />
              
              <div className="mt-4 custom-date-picker">
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
          <div className=" mt-4 custom-date-picker">
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
        <div className="w-[48%]">
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

      <div className="mt-4 flex justify-between items-center">
        <div
          // onClick={stat === "Edit" ? handleDelete : handleClose}
          className=" w-[49%] rounded-md h-10"
        >
          <button
            className=' bg-red-600 hover:bg-red-900 w-full rounded-md  text-white h-full flex items-center justify-center' onClick={() => setOpenmodal(false)}
          >
            Cancel
            {/* {stat === "Edit" ? "Delete" : "Cancel"} */}
          </button>
        </div>

        <div className=" w-[48%] rounded-md h-10  ">
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
      </Box>
    </Modal>
    </div>
  );
}
