// import { Modal } from '@mui/material';
import React, { useState } from 'react'
import { MdEdit } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import CloseIcon from "@mui/icons-material/Close";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Style } from '@mui/icons-material';
import { IoClose } from "react-icons/io5";
import Editor from '../../../../Components/Editor';





const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  bgcolor: 'white',
  border: "none",
  borderRadius: "10px",
  boxShadow: 24,
  p: 1
};


const ManageProfile = () => {
  const navigate = useNavigate()

  function goToEditProfile() {
    navigate('/manageProfile/editProfile')
  }



  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);



  return (
    <>
      <div className='h-[140vh] w-full bg-[#f8fafa] flex justify-center items-start'>
        <div className=' w-full mt-3 mx-3 bg-white border-[1.5px] border-[eff3f7] rounded-lg p-5'>

          <div className='flex items-start justify-between mt-3 mb-6'>
          <div className=' flex items-center gap-3'>
            <p className='p-3 bg-[#c6e5f5] h-[70px] w-[70px] text-4xl font-semibold text-center rounded-full flex items-center justify-center'>T</p>
            <div>
            <h2 className="font-semibold text-black text-lg">TravBizz IT Solutions</h2>
              <p className="text-black text-sm">Email: <span className="font-semibold">info@travbizz.com</span></p>
              <p className="text-black text-sm">Last Login: <span className="font-semibold">13/05/2024 - 04:03 PM</span></p>
            </div>
          </div >


        <div onClick={goToEditProfile} className='bg-[#c6e5f5] p-2 rounded-full hover:drop-shadow-xl transition-all hover:scale-125 active:scale-100 hover:bg-[#acafb191] cursor-pointer'>
          <MdEdit className='text-lg text-[#545e72]'/>
        </div>
          </div>
          <hr />

          <div className='py-5'>
            <h3 className=' font-semibold'>User Information</h3>

            <div className='flex gap-20 text-sm mt-3 ml-2' >
              <div className='flex flex-col gap-3'> 
                <p>Profile</p>
                <p>Mobile</p>
                <p>Website</p>
              </div>

              <div className='flex flex-col gap-3'>
                <p>Administrator</p>
                <p>1234567890</p>
                <p>www.travbizz.com</p>
              </div>
            </div>
          </div>


          <div className='py-5 mt-3'>
            <h3 className=' font-semibold'>Locale Information</h3>

            <div className='flex gap-6 text-sm mt-3 ml-2' >
              <div className='flex flex-col gap-3'> 
                <p>Language</p>
                <p>Country Location</p>
                <p>Time Format</p>
                <p>Time Zone</p>
              </div>

              <div className='flex flex-col gap-3'>
                <p>English (United States)</p>
                <p>India</p>
                <p>12 Hours</p>
                <p>(GMT 5:30) India Standard Time (Asia/Kolkata)</p>
              </div>
            </div>
          </div>



          <div className='py-5 mt-3'>
            <h3 className=' font-semibold'>Signature</h3>


            <div>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
         <div className='flex justify-between items-center bg-[#fcfdfd]'>
            <h3 className='p-3 font-semibold text-xl'>Update Signature</h3>
            <IoClose className='text-2xl font-bold cursor-pointer' onClick={handleClose}/>
         </div>
         <hr />

         <div className='flex justify-center'>
         <section className='mt-6 bg-white w-[90%]'>
          <Editor/>
         </section>

         </div>

         <div className='flex justify-center mb-6'>
            <div className='mt-5 flex justify-end w-[90%]'>
               <button className='bg-[#12344d] text-white py-1 px-4 rounded-lg' onClick={handleClose}>Save</button>
            </div>
         </div>
        </Box>
      </Modal>
    </div>
            <div onClick={handleOpen} className='bg-[#f8fafa] border-[2px] border-[eff3f7] transition-all mt-2 p-8 text-sm font-semibold rounded-lg hover:bg-white cursor-pointer'>
              <p>Thanks & Regards,</p>
              <p className='mt-5'>Team Travbizz.com <br />
                + 91 9797871223</p>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default ManageProfile