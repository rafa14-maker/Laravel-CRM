import React, { useState } from "react";
import { Box, Modal } from "@mui/material";
import { IoClose } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import Editor from "../../../Components/Editor";
import ReactDOMServer from 'react-dom/server';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  height: "90vh",
  transform: 'translate(-50%, -50%)',
  width: 900,
  bgcolor: 'background.paper',
  outline: "none",
  boxShadow: 24,
  borderRadius: "8px",
  p: 1 ,

};

const FeedBack = () => {
  const [open, setOpen] = React.useState(false);
  const [modalContent, setModalContent] = useState("");

  const handleOpen = (content) => {
    setModalContent(content);
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  const composeTable = ReactDOMServer.renderToString(<div>
    <h3 className="font-extrabold">Hi Nikhil samar ,</h3>
    <p>Thanks for choosing Travbizz Travel IT Solutions . We really appreciate you choosing Travbizz Travel IT Solutions for your travel plans.</p><br />

    <p>To help us improve, we'd like to submit your rating and comment. It'll only take 1 minutes, and your feedback will help us make Travbizz Travel IT Solutions even better for you and other guests.</p>
  </div>)


  const composeModal = <div>
  <div className='flex justify-between text-xl font-semibold bg-[#fcfdfd] p-2 items-center'>
<h3>Send Feedback Form Link</h3>
<IoClose className='cursor-pointer font-bold ' onClick={handleClose}/>
</div>
<hr />

<div className='p-3 overflow-y-scroll h-[79vh]'>

  <p className='text-sm text-[#999999]'>From <span className='text-black'>crm@travbizz.com</span></p>

  <hr className='mt-4 border-[#838383]'/>
  
  <div className='flex items-center gap-3 bg-[#f5f5f5] p-2'>
  <FaUser className='text-white bg-[#2291e6] rounded-full p-1 text-4xl'/>

  <div className='flex flex-col gap-0 '>
     <p className='text-xl'>niraj</p>
     <span className='text-sm text-[#787878]'>northeasttravels1975@gmail.com</span>
  </div>
  </div>
  
  <hr className=' border-[#838383]'/>

  <div className='mt-5'>
    <p htmlFor="CC" className='text-xs mb-1'>CC</p>
    <input className='outline-none border-[1px] px-2 w-full p-1 focus:border-black transition-all rounded-md' type="text" />

    <p htmlFor="CC" className='text-xs mt-4 mb-1'>Subject</p>
    <input className='outline-none border-[1px] px-2 w-full p-1 focus:border-black transition-all rounded-md' type="text" />

    <p htmlFor="CC" className='text-xs mt-4 mb-1'>Mail Body</p>
    <section>
          <Editor data={composeTable}/>
    </section>

    <p htmlFor="CC" className='text-xs mt-4 mb-1'>Attachment</p>
    <input className='outline-none border-[1px] px-2 w-full p-1 focus:border-black transition-all rounded-md' type="file" />

    <hr className=' border-[#838383] mt-5'/>

    <div className='flex'>
       <button onClick={handleClose} className='mt-5 text-sm bg-[#12344d] text-white p-2 flex items-center gap-1 rounded-md font-semibold px-3 hover:bg-[#1699dd]'>Send Now</button>
    </div>

  </div>
</div>


</div>



  return (
    <>
      <div className="p-3">
        <div className="flex justify-between bg-[#f7f7f7] p-1 pl-3 rounded-md items-center">
          <p className="font-semibold text-sm">Feedback</p>
          <button className="text-xs font-semibold bg-blue-700 text-white p-1 px-3 rounded-md" onClick={() => handleOpen(composeModal)}>
            Send Feedback Form
          </button>
        </div>

        <div className="border-[1px] border-[#ececec] mt-3 p-3 flex flex-col justify-center items-center rounded-md h-[100px]">
            <p className="text-sm">Wating For Feedback</p>
            <p className="text-xs mt-2"><span className="font-semibold">Send Date:</span> 17-05-2024 10:13 AM</p>
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
    </>
  );
};

export default FeedBack;
