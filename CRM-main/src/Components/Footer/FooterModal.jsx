import React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";
import { IoClose } from "react-icons/io5";
import { Box } from "@mui/material";

const FooterModal = (props) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleIconClick = () => {
    if (props.onIconClick) {
      props.onIconClick();
    }
  };


  
  return (
    <>
      <button
        id="demo-positioned-button"
        aria-controls={open ? "demo-positioned-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        {props.btnName}
      </button>
      <Menu
        id="fade-menu"
        MenuListProps={{
          "aria-labelledby": "fade-bottom",
        }}
        anchorEl={anchorEl}
        open={open}
        className={`${props.marginLeft}`}
       
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <Box className={`p-1 px-5 ${props.width} pb-8  ${props.height}`} >

        <div
          id="heading"
          className="flex justify-between items-center gap-8 pb-2"
        >
          <h3 className="text-sm font-bold">{props.topHead}</h3>
          <div className="flex gap-3">
            <span className="cursor-pointer hover:text-red-700 transition-all" onClick={handleIconClick}>{props.icon}</span>
            <span>
              <IoClose
                className="cursor-pointer hover:text-red-700 transition-all"
                onClick={handleClose}
              />
            </span>
          </div>
        </div>
        <hr className=" border-gray-300" />
        {props.userTable}
        </Box>

      </Menu>
    </>
  );
};

export default FooterModal;
