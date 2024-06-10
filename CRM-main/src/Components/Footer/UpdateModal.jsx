import React from "react";
import Menu from "@mui/material/Menu";
import Fade from "@mui/material/Fade";
import { Box } from "@mui/material";

const UpdateModal = (props) => {
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
        PaperProps={{
            style: {
              backgroundColor: '#dbe3f4', // Ensure the menu itself is transparent
            },
          }}
        TransitionComponent={Fade}
      >
        <Box className={` ${props.width}  ${props.height} px-2`} >

              {props.data}


        </Box>

      </Menu>
    </>
  );
};

export default UpdateModal;
