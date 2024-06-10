import React, { useState } from 'react'
import { Box, Modal } from "@mui/material";

import { IoClose } from 'react-icons/io5';
import { useEffect } from 'react';



const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  height: "auto",
  transform: 'translate(-50%, -50%)',
  width: 720,
  bgcolor: 'background.paper',
  outline: "none",
  boxShadow: 24,
  borderRadius: "8px",
  p: 1 ,

};


const GuestDocuments = () => {
  const [open, setOpen] = React.useState(false);
  const [modalContent, setModalContent] = useState("");

  const handleOpen = (content) => {
    setModalContent(content);
    setOpen(true);
  };

  const handleClose = () => setOpen(false);




  const addGuest = <div>
    
    <div className='flex justify-between text-xl font-semibold bg-[#fcfdfd] p-2 items-center'>
    <h3>Add Guest</h3>
    <IoClose className='cursor-pointer font-bold ' onClick={handleClose}/>
  </div>
  <hr />

<div className='p-3'>

  <div className=' flex items-end gap-3'>

      <select className='outline-none border-[1px] px-2 w-[250px] p-1 focus:border-black transition-all rounded-md'>
          <option value="Gender">Mr.</option>
          <option value="Gender">Mrs.</option>
          <option value="Gender">Ms.</option>
          <option value="Gender">Dr.</option>
          <option value="Gender">Prof.</option>
      </select>

    <div className='w-full'>
      <p htmlFor="First Name" className='text-xs mb-1'>First Name*</p>
      <input className='outline-none border-[1px] px-2 w-full p-1 focus:border-black transition-all rounded-md' type="text" />
    </div>
    <div className=' w-full'>
      <p htmlFor="Last Name" className='text-xs mb-1'>Last Name*</p>
      <input className='outline-none border-[1px] px-2 w-full p-1 focus:border-black transition-all rounded-md' type="text" />
    </div>


  </div>

  
  <div className='mt-6 flex gap-3 items-end'>
    <div className=' w-full'>
      <p htmlFor="Gender" className='text-xs mb-1'>Gender*</p>
      <select className='outline-none border-[1px] px-2 w-full p-1 focus:border-black transition-all rounded-md'>
          <option value="Gender">Male</option>
          <option value="Gender">Female</option>
          <option value="Gender">Other</option>
      </select>
    </div>
    <div className=' w-full'>
      <p htmlFor="Date of Birth" className='text-xs mb-1'>Date of Birth*</p>
      <input className='outline-none border-[1px] px-2 w-full p-1 focus:border-black transition-all rounded-md' type="date" />
    </div>
  </div>


  <hr className='mt-8'/>

  <div className='flex justify-end'>
     <button onClick={handleClose} className='mt-4 text-sm bg-[#12344d] text-white p-2 flex items-center gap-1 rounded-md font-semibold px-3 hover:bg-[#1699dd]'>Save</button>
  </div>
  
</div>





  </div>



const editGuest = <div>
    
<div className='flex justify-between text-xl font-semibold bg-[#fcfdfd] p-2 items-center'>
<h3>Edit Guest</h3>
<IoClose className='cursor-pointer font-bold ' onClick={handleClose}/>
</div>
<hr />

<div className='p-3'>

<div className=' flex items-end gap-3'>

  <select className='outline-none border-[1px] px-2 w-[250px] p-1 focus:border-black transition-all rounded-md'>
      <option value="Gender">Mr.</option>
      <option value="Gender">Mrs.</option>
      <option value="Gender">Ms.</option>
      <option value="Gender">Dr.</option>
      <option value="Gender">Prof.</option>
  </select>

<div className='w-full'>
  <p htmlFor="First Name" className='text-xs mb-1'>First Name*</p>
  <input className='outline-none border-[1px] px-2 w-full p-1 focus:border-black transition-all rounded-md' type="text" />
</div>
<div className=' w-full'>
  <p htmlFor="Last Name" className='text-xs mb-1'>Last Name*</p>
  <input className='outline-none border-[1px] px-2 w-full p-1 focus:border-black transition-all rounded-md' type="text" />
</div>


</div>


<div className='mt-6 flex gap-3 items-end'>
<div className=' w-full'>
  <p htmlFor="Gender" className='text-xs mb-1'>Gender*</p>
  <select className='outline-none border-[1px] px-2 w-full p-1 focus:border-black transition-all rounded-md'>
      <option value="Gender">Male</option>
      <option value="Gender">Female</option>
      <option value="Gender">Other</option>
  </select>
</div>
<div className=' w-full'>
  <p htmlFor="Date of Birth" className='text-xs mb-1'>Date of Birth*</p>
  <input className='outline-none border-[1px] px-2 w-full p-1 focus:border-black transition-all rounded-md' type="date" />
</div>
</div>


<hr className='mt-8'/>

<div className='flex justify-end'>
 <button onClick={handleClose} className='mt-4 text-sm bg-[#12344d] text-white p-2 flex items-center gap-1 rounded-md font-semibold px-3 hover:bg-[#1699dd]'>Save</button>
</div>

</div>





</div>



const uploadDocs = <div>
<div className='flex justify-between text-xl font-semibold bg-[#fcfdfd] p-2 items-center'>
<h3>Upload Documents</h3>
<IoClose className='cursor-pointer font-bold ' onClick={handleClose}/>
</div>
<hr />

<div className='p-3'>
  <div className=' flex items-end gap-3'>

    <div className='w-full'>
      <p htmlFor="Pan Card" className='text-xs mb-1 mt-5'>Pan Card</p>
      <input className='outline-none border-[1px] px-2 p-1 focus:border-black transition-all rounded-md' type="file" />

      <p htmlFor="Passport Front" className='text-xs mb-1 mt-5'>Passport Front</p>
      <input className='outline-none border-[1px] px-2 p-1 focus:border-black transition-all rounded-md' type="file" />

      <p htmlFor="Passport Back" className='text-xs mb-1 mt-5'>Passport Back</p>
      <input className='outline-none border-[1px] px-2 p-1 focus:border-black transition-all rounded-md' type="file" />

      <p htmlFor="Flight" className='text-xs mb-1 mt-5'>Flight</p>
      <input className='outline-none border-[1px] px-2 p-1 focus:border-black transition-all rounded-md' type="file" />
    </div>
</div>

<hr className='mt-8'/>

<div className='flex justify-end'>
 <button onClick={handleClose} className='mt-4 text-sm bg-[#12344d] text-white p-2 flex items-center gap-1 rounded-md font-semibold px-3 hover:bg-[#1699dd]'>Upload Documents</button>
</div>

</div>





</div>





  return (
    <div>
     <div className="flex justify-between bg-[#f7f7f7] p-1 px-3 m-2 rounded-md items-center">
      <p className="font-semibold text-sm">Guests (1)</p>
      <button className="text-sm font-semibold bg-blue-700 text-white p-1 px-2 rounded-md" onClick={() => handleOpen(addGuest)}>+ Add Guest</button>
    </div>


    <div className=" border-2 m-2 p-2 mr-4 border-[#f1f1f2] rounded-lg shadow-sm">
    <table className="w-full">
          <tr className="w-full ">
            <td className="border-[1px] border-[#dbdbdb] w-[20%] font-semibold p-2" colSpan={5}>
            First Name	
            </td>
            <td className="border-[1px] border-[#dbdbdb] font-semibold w-[20%] p-2">Last Name	</td>
            <td className="border-[1px] border-[#dbdbdb] font-semibold p-2">Gender	</td>
            <td className="border-[1px] border-[#dbdbdb] font-semibold p-2">Date of Birth</td>
            <td className="border-[1px] border-[#dbdbdb] font-semibold p-2 w-[20%]"></td>
          </tr>

          <tr className="w-full ">
            <td className="border-[1px] border-[#dbdbdb] w-[20%] font-semibold  p-2" colSpan={5}>
            Mr. hello	
            </td>
            <td className="border-[1px] border-[#dbdbdb]  p-2 w-[20%]">world</td>
            <td className="border-[1px] border-[#dbdbdb] p-2">MALE</td>
            <td className="border-[1px] border-[#dbdbdb] p-2">05-05-2004	</td>
            <td className="border-[1px] border-[#dbdbdb] font-semibold p-2 w-[20%]">
        <div className="flex gap-3 justify-center">
           <button className="bg-[#1699dd] px-2 py-1 text-white text-sm" onClick={() => handleOpen(uploadDocs)}>Document</button>
            <button className="bg-[#1699dd] px-2 py-1 text-white text-sm"  onClick={() => handleOpen(editGuest)}>Edit</button>
        </div>
            </td>
          </tr>
        </table>


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

export default GuestDocuments