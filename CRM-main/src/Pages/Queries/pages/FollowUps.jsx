import * as React from 'react';
import { FaRegCalendarCheck } from "react-icons/fa6";
import { FaCheckSquare } from "react-icons/fa";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import CenterModal from '../ViewProposal/CenterModal';
import { useState } from 'react';
import { IoClose } from 'react-icons/io5';
import { MdAdd } from 'react-icons/md';



const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  borderRadius: "8px"
};



const FollowUps = () => {


  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);



  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState("");

  const handleOpenModal = (content) => {
    setModalContent(content);
    setModalOpen(true);
  };


  const handleCloseModal = () => {
    setModalOpen(false);
  };


  const optionArr = ["TravBizz IT Solution" , "User Panel" , "Assign to" , "Aszim Khaki" , "Ab R Khan - Testing" , "Afjal Khan" , "AFTHAB VP"]
  const optionTime = ["12:00 AM" , "12:15 AM" , "12:30 AM" , "12:45 AM" , "01:00 AM" , "01:15 AM" , "01:30 AM"]


  const quotationModal = <div>

  <div className='flex justify-between text-2xl font-semibold bg-[#fcfdfd] p-2 items-center'>
    <h3>Add Followup / Task</h3>
    <IoClose className='cursor-pointer font-bold ' onClick={handleCloseModal}/>
  </div>
  <hr className='mt-2'/>
  <div className='p-2'>
    <div className='flex flex-col'>
      <label className='text-sm' htmlFor="Type">Type</label>
       <select className='border-[1px] outline-none p-2 mt-1 rounded-md focus:border-black border-gray-400 transition-all'>
          <option value="Task">Task</option>
          <option value="Call">Call</option>
          <option value="Meeting">Meeting</option>
       </select>
    </div>

    <div className='flex flex-col mt-3'>
      <label className='text-sm' htmlFor="Type">Description</label>
       <textarea name="" id="" className='outline-none border-[1px] p-2 mt-1 rounded-md focus:border-black border-gray-400 transition-all' rows={4}></textarea>
    </div>

    <div className='flex gap-5'>
      <div className='flex flex-col mt-3'>
        <label className='text-sm' htmlFor="Type">Reminder Date</label>
         <input type="date" className='border-[1px] bg-[#e9ecef] outline-none p-2 mt-1 rounded-md focus:border-black border-gray-400 transition-all' />
      </div>

      <div className='flex flex-col mt-3'>
      <label className='text-sm' htmlFor="Type">Time</label>
       <select className='border-[1px] outline-none p-2 mt-1 rounded-md focus:border-black border-gray-400 transition-all'>
         {optionTime.map((item)=>{
          return  <option value="time">{item}</option>
         })}
       </select>
    </div>

    <div className='flex flex-col mt-3'>
      <label className='text-sm' htmlFor="Type">Set Reminder</label>
       <select className='border-[1px] outline-none p-2 mt-1 rounded-md focus:border-black border-gray-400 transition-all'>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
       </select>
    </div>
    </div>

       <select className='border-[1px] mt-4 w-full outline-none p-2 rounded-md focus:border-black border-gray-400 transition-all'>

        {optionArr.map((item)=>{
         return <option value="Task">{item}</option>
           
        })}
       </select>

       <div className='mt-4 flex justify-end'>
        <button className='bg-[#12344d] flex text-white items-center p-1 text-sm px-3 gap-1 rounded-md hover:bg-[#0f2d42] mb-3'><MdAdd className="font-extrabold text-xl"/>Save</button>
       </div>

  </div>
</div>
const shareModal = <div>share data</div>

  return (
  <>
    <div className="flex justify-between bg-[#f7f7f7] p-1 px-3 m-2 rounded-md items-center">
      <p className="font-semibold text-sm">Followup's / Task</p>
      <button className="text-sm font-semibold bg-blue-700 text-white p-1 px-2 rounded-md"  onClick={() => handleOpenModal(quotationModal)}>+ Add Task</button>
    </div>

    <div className="flex align-top">

  <div className="bg-[#f7f7f7] border-2 border-[#ebf2ef] mx-2 rounded-full flex items-center          justify-center w-12 h-12">
    <FaRegCalendarCheck className="text-[#414141] " />
  </div>

  <div className="bg-[#ebfff7] border-2 border-[#ebf2ef] flex justify-between w-full p-3 m-2 items-center rounded-lg">
    <div className="flex flex-col items-start"> 
      <p className="text-[12px] font-semibold">TravBizz IT SolutionsDue on: 16/05/2024 - 01:00 PM</p>
      <p className="text-[14px] p-1 font-semibold">hello</p>
    </div>
    <FaCheckSquare  className="text-2xl text-[#5da334]" />
  </div>
</div>

    <CenterModal  open={modalOpen} onClose={handleCloseModal} data={modalContent} />



  </>
  )
}

export default FollowUps