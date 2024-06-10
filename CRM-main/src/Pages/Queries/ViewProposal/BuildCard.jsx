import { Box, Modal } from '@mui/material';
import React, { useState , useEffect } from 'react'
import { IoClose } from 'react-icons/io5';



const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  height: "auto",
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  outline: "none",
  boxShadow: 24,
  borderRadius: "8px",
  p: 1 ,

};


const BuildCard = (props) => {
  const [open, setOpen] = React.useState(false);
  const [modalContent, setModalContent] = useState("");

  const handleOpen = (content) => {
    setModalContent(content);
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  

  const iconModal = <div>
    <div className='flex justify-between text-xl font-semibold bg-[#fcfdfd] p-2 items-center'>
    <h3>Day 1 Details</h3>
    <IoClose className='cursor-pointer font-bold ' onClick={handleClose}/>
  </div>
  <hr />

  <div className='p-3'>
      <p htmlFor="Subject" className='text-xs mb-1'>Subject</p>
      <input defaultValue={props.title} className='outline-none border-[1px] px-2 w-full p-1 focus:border-black transition-all rounded-md' type="text" />

      <p htmlFor="Details" className='text-sm mb-1 font-semibold mt-4' >Details</p>
      <textarea rows={10} defaultValue={props.para} className='outline-none border-[1px] px-2 w-full p-1 focus:border-black transition-all rounded-md' type="text" />

      <div className='flex justify-end'>
         <button onClick={handleClose} className='mt-4 text-sm bg-[#12344d] text-white p-2 flex items-center gap-1 rounded-md font-semibold px-3 hover:bg-[#1699dd]'>Send Mail</button>
      </div>
  </div>

  </div>


  return (
    <div>
        <div className='flex bg-[#ffff] border-2 p-4 items-center border-[#f5f5f5] justify-between mx-2 mt-2'>
<div className='flex items-center'>
<div className='w-14 h-14 bg-black rounded'>
  <img src={props.image} className='h-14' alt="" />
</div>

  <div className='flex flex-col mx-2'>
        <p className='font-bold text-base'>{props.title}</p>
        <p className='text-sm'>{props.para}</p>
  </div>
</div>

  <div onClick={() => handleOpen(iconModal)} className='bg-[#6e6d6d] hover:bg-[#5bf048]  w-10 h-10 rounded-full flex items-center justify-center cursor-pointer'>

  <p className="text-[#FFFF]">{props.icon}</p>
  </div>

  </div> 


  <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
           {modalContent}
        </Box>
      </Modal>

    </div>
  )
}

export default BuildCard