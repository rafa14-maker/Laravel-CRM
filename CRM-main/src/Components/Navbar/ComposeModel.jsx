import React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';

const style = {
  position: 'absolute',
  top: '90%',
  right: '-15%',
  transform: 'translate(-50%, -50%)',
  width: "40vw",
  height: 875,
  bgcolor: 'background.paper',
  boxShadow: 24,
  borderRadius: "8px",
  p: 1,
  '@media (max-width: 1000px)': { // Apply when screen width is less than 600px
    // right: '-55%',
    width: "60vw",
  },
  '@media (max-width: 800px)': { // Apply when screen width is less than 600px
    right: '-30%',
    width: "80vw",
  },
  '@media (max-width: 599px)': { // Apply when screen width is less than 600px
    // right: '-55%',
    // width: "100%",
  },
 
};

const CenterModal = ({ open, onClose, data }) => {

  return (
    <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={onClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
                {data}
          </Box>
        </Fade>
      </Modal>
  )
}

export default CenterModal;
