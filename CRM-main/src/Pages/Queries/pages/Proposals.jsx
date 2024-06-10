import React, { useEffect, useState } from "react";
import image from "../../../assets/images/lanscape.png";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaPlus, FaWhatsapp } from "react-icons/fa";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
//3 dots MUI
// import * as React from 'react';
import Popper from "@mui/material/Popper";
import { FaDownload } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../../assets/images/logo.png"
import { IoLogoWhatsapp } from "react-icons/io";
import { Menu, MenuItem } from "@mui/material";





const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  height: "auto",
  transform: 'translate(-50%, -50%)',
  width: "auto",
  bgcolor: 'background.paper',
  outline: "none",
  boxShadow: 24,
  borderRadius: "8px",
  p: 1 ,

};




function Proposals() {
  // 3dots MUI
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };
  

  const [open, setOpen] = React.useState(false);
  const [modalContent, setModalContent] = useState("");



  const openNew = Boolean(anchorEl);


  const navigate = useNavigate()

  const handleOpen = (content) => {
    setModalContent(content);
    setOpen(true);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setOpen(false);
  };




  const dropdownArr = ["2N-3D Package" , "Adventure" , "Beach" , "Economy Umrah" , "Flight Booking"]

  const createItineraryModal = <div>
    <div className='flex justify-between text-xl font-semibold bg-[#fcfdfd] p-2 items-center'>
    <h3>Itinerary setup</h3>
    <IoClose className='cursor-pointer font-bold ' onClick={handleClose}/>
    </div>
    <hr />

<div className=" h-auto">


    <div className="p-3 mt-5">
      <div className='w-full'>
        <p htmlFor="First Name" className='text-xs mb-1'>Itinerary Name</p>
        <input className='outline-none border-l-4 border-l-[#ff6a6a] focus:border-l-[#a01616] border-[1px] px-2 w-full p-1 focus:border-black transition-all rounded-md' type="text" />
      </div>

      <div className="flex gap-3 mt-4">
          <div className='w-full'>
            <p htmlFor="First Name" className='text-xs mb-1'>Start Date</p>
            <input className='outline-none border-l-4 border-l-[#ff6a6a] focus:border-l-[#a01616] border-[1px] px-2 w-full p-1 focus:border-black transition-all rounded-md' type="date" />
          </div>
          <div className='w-full'>
           <p htmlFor="First Name" className='text-xs mb-1'>End Date</p>
           <input className='outline-none border-l-4 border-l-[#ff6a6a] focus:border-l-[#a01616] border-[1px] px-2 w-full p-1 focus:border-black transition-all rounded-md' type="date" />
           </div>
      </div>

      <div className="flex mt-4 gap-3">
          <div className='w-[150px]'>
            <p htmlFor="First Name" className='text-xs mb-1'>Adult</p>
            <input min={0} defaultValue={0} className='outline-none border-l-4 border-l-[#ff6a6a] focus:border-l-[#a01616] border-[1px] px-2 w-full p-1 focus:border-black transition-all rounded-md' type="number" />
          </div>
          <div className='w-[150px]'>
              <p htmlFor="First Name" className='text-xs mb-1'>Child</p>
             <input min={0} defaultValue={0} className='outline-none border-l-4 border-l-[#ff6a6a] focus:border-l-[#a01616] border-[1px] px-2 w-full p-1 focus:border-black transition-all rounded-md' type="number" />
          </div>
         <div className='w-full'>
           <p htmlFor="First Name" className='text-xs mb-1'>Destinations</p>
            <input placeholder="Enter Destinations" className='outline-none border-l-4 border-l-[#ff6a6a] focus:border-l-[#a01616] border-[1px] px-2 w-full p-1 focus:border-black transition-all rounded-md' type="text" />
          </div>
      </div>

      <div className='w-full mt-4'>
           <p htmlFor="First Name" className='text-xs mb-1'>Notes</p>
           <textarea className="outline-none border-[1px] px-2 w-full p-1 focus:border-black transition-all rounded-md" name="" id="" placeholder="Notes"></textarea>
      </div>
    </div>

    {/* <h3 className="text-xl font-semibold ml-2">Website Setting</h3> */}

    <div className="p-3">
      {/* <div className='w-full'>
        <p htmlFor="First Name" className='text-xs mb-1'>Theme</p>
         <select className='outline-none  border-[1px] px-2 w-full p-1 focus:border-black transition-all rounded-md'>
            {dropdownArr.map((item)=>{
              return <option value="">{item}</option>
            })}
         </select>
       </div>

       <div className='w-full mt-4'>
        <p htmlFor="First Name" className='text-xs mb-1'>Show on Website</p>
         <select className='outline-none  border-[1px] px-2 w-full p-1 focus:border-black transition-all rounded-md'>
           <option value="">No</option>
           <option value="">Yes</option>
         </select>
       </div>

       <div className='w-full mt-4'>
        <p htmlFor="First Name" className='text-xs mb-1'>Per Person Price</p>
        <input className='outline-none border-l-4 border-l-[#ff6a6a] focus:border-l-[#a01616] border-[1px] px-2 w-full p-1 focus:border-black transition-all rounded-md' type="text" />
      </div> */}

      {/* <div className='w-full'>
        <p htmlFor="First Name" className='text-xs mb-1'>Validity</p>
        <input className='outline-none border-l-4 border-l-[#ff6a6a] focus:border-l-[#a01616] border-[1px] px-2 w-full p-1 focus:border-black transition-all rounded-md' type="date" />
      </div>

      <div className='w-full mt-4'>
        <p htmlFor="First Name" className='text-xs mb-1'>Popular</p>
         <select className='outline-none  border-[1px] px-2 w-full p-1 focus:border-black transition-all rounded-md'>
           <option value="">No</option>
           <option value="">Yes</option>
         </select>
       </div>

       <div className='w-full mt-4'>
        <p htmlFor="First Name" className='text-xs mb-1'>Special</p>
         <select className='outline-none  border-[1px] px-2 w-full p-1 focus:border-black transition-all rounded-md'>
           <option value="">No</option>
           <option value="">Yes</option>
         </select>
       </div>

       <div className='w-full mt-4'>
           <p htmlFor="First Name" className='text-xs mb-1'>About Package</p>
           <textarea className="outline-none border-[1px] px-2 w-full p-1 focus:border-black transition-all rounded-md" name="" id="" ></textarea>
      </div> */}

      <hr className="mt-6"/>

      <div className="flex justify-end gap-3">
          <button onClick={handleClose} className='mt-5 text-sm bg-white text-black border-[1px] p-2 flex items-center gap-1 rounded-md font-semibold px-3 hover:bg-[#ebf6fc]'>Cancel</button>
          <button onClick={handleClose} className='mt-5 text-sm bg-[#12344d] text-white p-2 flex items-center gap-1 rounded-md font-semibold px-3 hover:bg-[#1699dd]'>Save</button>
      </div>

    </div>
        
    </div>
  </div>

  const makeConfirm = <div>
     <div className='flex justify-between text-xl font-semibold bg-[#fcfdfd] p-2 items-center w-[600px]'>
    <h3>Alert</h3>
    <IoClose className='cursor-pointer font-bold ' onClick={handleClose}/>
    </div>
    <hr />

    <div className="p-3">
      <p className="text-2xl font-semibold text-center mt-4">You are about to confirm an itinerary</p>
      <p className="text-sm text-center mt-1 mb-3">This action cannot be undone.</p>


      <div className="bg-[#e6fffd]">
        <hr />

        <p className="text-center font-semibold mt-4">Select Hotel Option</p>
      <div className="flex justify-center">
        <select className="border-[1px] border-black rounded-md w-[280px] mt-2 mb-3 p-1"> 
          <option value="Select">Select</option>
          <option value="Select">Option 1 : ₹81,900</option>
        </select>
      </div>
      <hr />
      </div>

      <hr className="mt-7"/>

      <div className="flex justify-end mt-5">
          <button onClick={()=> navigate('/queries/proposalSent/viewProposal/pricing')} className="bg-[#46cd93] text-white p-2 px-3 rounded-md mb-3 hover:bg-[#39ad7b] transition-all">Confirm Itinerary</button>
      </div>
    </div>
  </div>

const quotationModal = <div>
<div className='flex justify-between text-2xl font-semibold bg-[#fcfdfd] p-2 items-center w-[900px]'>
  <h3>View Quotation</h3>
  <IoClose className='cursor-pointer font-bold ' onClick={handleClose}/>
</div>
<hr />
<div className='p-3 h-[500px] overflow-y-scroll'>
  <div className='flex justify-center mb-3'>
    <img src={logo} alt="" />
  </div>
  <hr />
  <div className='mt-3'>
      <h3 className='text-sm font-semibold'>Dear Nikhil samar,</h3>
      <p className='text-sm mt-2'>This is TravBizz and I will be working with you to plan your trip to Dubai</p>
      <p className='text-sm mt-2 '>Please find below details for your trip and feel free to call me at +911234567890 or click here to view more details about this trip.</p>
  </div>

  <table className='w-full mt-6'>
    <tr >
      <td className='border-[1px] w-full text-sm p-2 font-semibold bg-black text-white' colSpan={4}>Query Details</td>
    </tr>
    <tr className='w-full'>
      <td className='border-[1px] text-sm p-2 font-semibold'>QueryId:</td>
      <td className='border-[1px]  text-sm p-2'>#141391</td>
      <td className='border-[1px] w-[50px] text-sm p-2 font-semibold'>Adult(s):</td>
      <td className='border-[1px] w-[70px] text-sm p-2'>2</td>
    </tr>
    <tr className='w-full'>
      <td className='border-[1px]  text-sm p-2 font-semibold'>Nights:</td>
      <td className='border-[1px]  text-sm p-2'>2 Nights & 3 Days</td>
      <td className='border-[1px]  text-sm p-2 font-semibold'>Child(s):</td>
      <td className='border-[1px] text-sm p-2'>0</td>
    </tr>
    <tr>
      <td className='border-[1px]  text-sm p-2 font-semibold'>Destination Covered:</td>
      <td className='border-[1px]  text-sm p-2'>Dubai</td>
      <td className='border-[1px] w-[50px] text-sm p-2 font-semibold'>Start Date:</td>
      <td className='border-[1px] text-sm p-2'>Mon, 13 May, 2024</td>
    </tr>
    <tr>
      <td className='border-[1px] text-sm p-2 font-semibold'>Query Date:</td>
      <td className='border-[1px] text-sm p-2'>11-May-2024</td>
      <td className='border-[1px] text-sm p-2 font-semibold'>End Date:</td>
      <td className='border-[1px] text-sm p-2'>Wed, 15 May, 2024</td>
    </tr>
  </table>

  <h3 className='mt-6 font-semibold'>Nikhil Ji Dubai Trip</h3>

  <table className='w-full mt-3'>
    <tr >
      <td className='border-[1px] w-full text-sm p-2 border-gray-300 font-semibold bg-[#4fbdff] text-white' colSpan={7}>Option 1</td>
    </tr>
    <tr className='w-full'>
      <td className='bg-[#e4e4e4] border-gray-300 border-[1px] text-sm p-2 font-semibold'>City</td>
      <td className='bg-[#e4e4e4] border-gray-300 border-[1px]  text-sm p-2 font-semibold'>Hotel Name</td>
      <td className='bg-[#e4e4e4] border-gray-300 border-[1px] w-[50px] text-sm p-2 font-semibold'>Check In</td>
      <td className='bg-[#e4e4e4] border-gray-300 border-[1px] w-[70px] text-sm p-2 font-semibold'>Check Out</td>
      <td className='bg-[#e4e4e4] border-gray-300 border-[1px] w-[70px] text-sm p-2 font-semibold'>Nights</td>
      <td className='bg-[#e4e4e4] border-gray-300 border-[1px] w-[70px] text-sm p-2 font-semibold'>Room Type</td>
      <td className='bg-[#e4e4e4] border-gray-300 border-[1px] w-[70px] text-sm p-2 font-semibold'>Meal Plan</td>
    </tr>
    <tr className='w-full'>
      <td className='border-[1px] border-gray-300  text-sm p-2 font-semibold'>Dubai</td>
      <td className='border-[1px] border-gray-300  text-sm p-2'>Bur Dubai (5 Star) <br /> <span className='font-semibold'>Double Room: 1</span></td>
      <td className='border-[1px] border-gray-300  text-sm p-2 w-20'>13-May-2024</td>
      <td className='border-[1px] border-gray-300 text-sm p-2'>13-May-2024</td>
      <td className='border-[1px] border-gray-300 text-sm p-2'>0</td>
      <td className='border-[1px] border-gray-300 text-sm p-2'>Front Villa</td>
      <td className='border-[1px] border-gray-300 text-sm p-2'></td>
    </tr>
  </table>

  <h2 className='text-xl text-center font-bold mt-4'>Option 1 - Total Package Price: <span className='text-[#cc0000]'>26,775 INR</span></h2>

  <table className='w-full mt-4'>
    <tr >
      <td className='border-[1px] w-full text-sm p-2 border-gray-300 font-semibold bg-[#04bf58] text-white' colSpan={7}>Option 1</td>
    </tr>
    <tr className='w-full'>
      <td className='bg-[#e4e4e4] border-gray-300 border-[1px] text-sm p-2 font-semibold'>City</td>
      <td className='bg-[#e4e4e4] border-gray-300 border-[1px]  text-sm p-2 font-semibold'>Hotel Name</td>
      <td className='bg-[#e4e4e4] border-gray-300 border-[1px] w-[50px] text-sm p-2 font-semibold'>Check In</td>
      <td className='bg-[#e4e4e4] border-gray-300 border-[1px] w-[70px] text-sm p-2 font-semibold'>Check Out</td>
      <td className='bg-[#e4e4e4] border-gray-300 border-[1px] w-[70px] text-sm p-2 font-semibold'>Nights</td>
      <td className='bg-[#e4e4e4] border-gray-300 border-[1px] w-[70px] text-sm p-2 font-semibold'>Room Type</td>
      <td className='bg-[#e4e4e4] border-gray-300 border-[1px] w-[70px] text-sm p-2 font-semibold'>Meal Plan</td>
    </tr>
    <tr className='w-full'>
      <td className='border-[1px] border-gray-300  text-sm p-2 font-semibold'>Dubai</td>
      <td className='border-[1px] border-gray-300  text-sm p-2'>Bur Dubai (5 Star) <br /> <span className='font-semibold'>Double Room: 1</span></td>
      <td className='border-[1px] border-gray-300  text-sm p-2 w-20'>13-May-2024</td>
      <td className='border-[1px] border-gray-300 text-sm p-2'>13-May-2024</td>
      <td className='border-[1px] border-gray-300 text-sm p-2'>0</td>
      <td className='border-[1px] border-gray-300 text-sm p-2'>Front Villa</td>
      <td className='border-[1px] border-gray-300 text-sm p-2'></td>
    </tr>
  </table>

   <h2 className='text-xl text-center font-bold mt-4'>Option 2 - Total Package Price: <span className='text-[#cc0000]'>24,150 INR</span></h2>

  <table className='w-full mt-4'>
    <tr >
      <td className=' w-full text-sm p-2  font-semibold bg-black text-white' colSpan={2}>Itinerary Details</td>
    </tr>
    <tr className='w-full'>
      <td className='bg-[#e4e4e4] text-sm p-2 font-semibold'>13 May 2024</td>
      <td className='bg-[#e4e4e4 w-[80%] text-sm p-2 bg-[#f4f4f4]'><span className='font-semibold'>Day 1:</span> Arrival in dubai</td>
    </tr>
  </table>

  <p className='text-sm my-4'>Arrival in dubai and transfer to hotel via private car</p>
  <hr />

  <p className='my-4 text-sm'><span className='font-semibold'>Transport Included:</span> Dubai : Airport to Hotel - (<span className='font-semibold text-[#cc0000] cursor-pointer '>click here</span> to view package details)</p>

  <table className='w-full mt-7'>
    <tr className='w-full'>
      <td className='bg-[#e4e4e4] text-sm p-2 font-semibold'>14 May 2024</td>
      <td className='bg-[#e4e4e4 w-[80%] text-sm p-2 bg-[#f4f4f4]'><span className='font-semibold'>Day 2:</span></td>
    </tr>
  </table>
  <p className='my-3 text-sm'><span className='font-semibold'>Activity Included:</span> Burj Khalifa - (<span className='font-semibold text-[#cc0000] cursor-pointer '>click here</span> to view package details)</p>

  <table className='w-full mt-7'>
    <tr className='w-full'>
      <td className='bg-[#e4e4e4] text-sm p-2 font-semibold'>14 May 2024</td>
      <td className='bg-[#e4e4e4 w-[80%] text-sm p-2 bg-[#f4f4f4]'><span className='font-semibold'>Day 2:</span></td>
    </tr>
  </table>
  <p className='my-3 text-sm'><span className='font-semibold'>Activity Included:</span> Dubai Desert Safari - (<span className='font-semibold text-[#cc0000] cursor-pointer '>click here</span> to view package details)</p>


  <div className='flex flex-col justify-center items-center gap-2 mt-16'>
    <button className='bg-[#12344d] hover:bg-[#2a4355] py-2 rounded-md w-[120px] text-white font-semibold text-sm'>Print Quotation</button>
    <button onClick={()=> handleOpen(shareModal)} className='bg-black hover:bg-[#302f2f] py-2 rounded-md w-[120px] text-white font-semibold text-sm'>Send To Email</button>
  </div>
</div>
</div>

const shareModal = <div>
<div className='flex justify-between text-2xl font-semibold bg-[#fcfdfd] p-2 items-center w-[700px]'>
 <h3>Share</h3>
 <IoClose className='cursor-pointer font-bold ' onClick={handleClose}/>
</div>
<hr />

<div className='overflow-y-scroll h-[80vh]'>


<div className='mt-3 p-3 flex gap-5'>
 <button className='w-full border-[1px] rounded-md p-2 font-semibold text-[#6c757d] hover:bg-[#6c757d] hover:text-white focus:text-white focus:bg-[#6c757d] transition-all'>SHARE PRIVATELY</button>
 <button onClick={() => handleOpen(sharePublicly)} className='w-full border-[1px] rounded-md p-2 font-semibold text-[#6c757d] hover:bg-[#6c757d] hover:text-white focus:text-white focus:bg-[#6c757d] transition-all'>SHARE PUBLICLY</button>
</div>

<div className='p-3'>
 <p className='text-sm'>Share your itinerary privately via email to specific recipients. Recipients will be prompted to create a login in order to view this itinerary.</p>
 <h3 className='text-2xl font-semibold mt-3'>Clients</h3>
 <p className='text-sm'>Select client you would like to email this itinerary to.</p>

 <table className='mt-8'>
   <tr className='w-full hover:bg-[#f5f8fa] transition-all'>
     <td className='border-[1px] p-1 px-3'><input type="checkbox" /></td>
     <td className='border-[1px] p-1 px-3 w-full'>Nikhil samar</td>
     <td className='border-[1px] p-1 px-3 w-full'>nikhilsamar1992@gmail.com</td>
     <td className='border-[1px] p-1 px-3 w-full'>9619756981</td>
   </tr>
 </table>

 <input type="text" placeholder='CC Mail' className='w-full p-1 border-[1px] outline-none mt-5 px-2 rounded-md focus:border-black transition-all ' />

 <p className='text-xl font-semibold mt-6'>Add a message</p>
 <textarea rows={3} className='w-full p-1 border-[1px] outline-none mt-2 px-2 rounded-md focus:border-black transition-all ' name="" id="" placeholder='Enter messsage here'></textarea>

 <hr className='mt-5'/>

<div className='flex justify-end mt-5'>
 <button onClick={()=>navigate('/queries/proposalSent/viewProposal/final')} className='bg-[#46cd93] hover:bg-[#41b884] text-white font-semibold p-2 px-3 rounded-md'>Send</button>
</div>

</div>

</div>
</div>

const sharePublicly = <div>
     <div className='flex justify-between text-2xl font-semibold bg-[#fcfdfd] p-2 items-center w-[700px]'>
      <h3>Share</h3>
      <IoClose className='cursor-pointer font-bold ' onClick={handleClose}/>
    </div>
    <hr />

    <div className='mt-3 p-3 flex gap-5'>
      <button onClick={() => handleOpen(shareModal)} className='w-full border-[1px] rounded-md p-2 font-semibold text-[#6c757d] hover:bg-[#6c757d] hover:text-white focus:text-white focus:bg-[#6c757d] transition-all'>SHARE PRIVATELY</button>
      <button onClick={() => handleOpen(sharePublicly)} className='w-full border-[1px] rounded-md p-2 font-semibold text-[#6c757d] hover:bg-[#6c757d] hover:text-white focus:text-white focus:bg-[#6c757d] transition-all'>SHARE PUBLICLY</button>
    </div>

  <div className='p-3 mb-5'>
    <p className='text-sm'>Activate link to enable the ability to share this itinerary with anyone (no sign-in required).</p>
    <p className='mt-4 text-sm'>
      <input type="checkbox" /> Turn on link sharing
    </p>

    <div className='flex justify-between mt-5 items-end'>
      <p className='text-sm'>With Price (Copy this link)</p>
      <button className='flex items-center gap-1 bg-[#46cd93] hover:bg-[#39b881] text-sm text-white p-1 px-3 rounded-md'><IoLogoWhatsapp />WhatsApp</button>
    </div>

    <input defaultValue="https://travbizz.website/crm/sharepackage/104226/nikhil-ji-dubai-trip.html" type="text" className='w-full p-1 outline-none border-[1px] mt-2 focus:border-black transition-all rounded-md bg-[#e9ecef] border-gray-300' />

    <div className='flex justify-between mt-5 items-end'>
      <p className='text-sm text-[#FF0000]'>With Price (Copy this link)</p>
      <button className='flex items-center gap-1 bg-[#46cd93] hover:bg-[#39b881] text-sm text-white p-1 px-3 rounded-md'><IoLogoWhatsapp />WhatsApp</button>
    </div>

    <input defaultValue="https://travbizz.website/crm/share/104226/nikhil-ji-dubai-trip.html" type="text" className='w-full p-1 outline-none border-[1px] mt-2 focus:border-black transition-all rounded-md bg-[#e9ecef] border-gray-300' />
  </div>
</div>




  const open1 = Boolean(anchorEl);
  const id = open1 ? "simple-popper" : undefined;
  return (
    <div className="m-3 flex flex-wrap flex-col">
      <div className="flex justify-between items-center">
        <h1 className="font-bold text-xl">Proposals</h1>
        <div className="flex gap-5 m-2">
          <button className="bg-black rounded-md text-white py-1 px-5 text-sm">
            All proposals
          </button>
          <button className="bg-gray-400 rounded-md text-black py-1 px-5 text-sm">
            Archived Proposals
          </button>
        </div>
      </div>
      <div className="flex">
      <div className="border-2 rounded-md w-80 ">
        <div className="w-80 relative">
          <a href="">
            <img src={image} alt="image" className="w-80 h-52" />
          </a>

          <div className="absolute top-0 right-0">
            <button aria-describedby={id} type="button" onClick={handleClick}>
              <BsThreeDotsVertical />
            </button>
            <Popper id={id} open1={open1} anchorEl={anchorEl}>
              <Box sx={{ border: 1, p: 1, bgcolor: "background.paper" }}>
                <a href="block" className="">
                  Actions
                </a>{" "}
                <br />
                <a href="">Whatsapp</a> <br />
                <a href="">Edit Itinerary</a> <br />
                <a href="">Duplicate</a> <br />
                <a href="">Archive</a> <br />
              </Box>
            </Popper>
          </div>
        </div>
        <div className="pl-4 text-sm">
          <table className="w-80">
            <thead className="p-5">
              <tr className="p-5">
                <td className="pr-20  pb-5">
                  ID: <br />
                  104216
                </td>
                <td>
                  Pax: <br />2 Adult(s)-0 Child(s)
                </td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="pb-5">
                  From <br />
                  18 Jul 2024
                </td>
                <td>
                  To: <br />
                  22 Jul 2024
                </td>
              </tr>
              <tr>
                <td>By: Time to..</td>
                <td>Created:09/05/2024</td>
              </tr>
         
              <tr >
                <td  className="pt-5">Package duration</td>
                <td  className="pt-5">04 days & 03 Nights</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className=" w-[80%] border-2 flex justify-center items-center m-auto my-5"></div>
        <div className="flex flex-col items-center justify-center text-xl font-bold mb-5">
          <h1>Option 1: ₹47,020</h1>
          <h1>Option 2: ₹31,347</h1>
        </div>
        <div className="flex flex-col gap-4 w-full justify-center items-center mb-7">
          <button onClick={()=> handleOpen(makeConfirm)} className="border-2 border-[#b7b7b7] w-[80%] rounded-md font-bold py-2 px-5 bg-gray-200">
            Make Confirm
          </button>
          <button onClick={()=> handleOpen(quotationModal)} className="border-2 border-[#b7b7b7] w-[80%] rounded-md font-bold py-2 px-5 bg-[#58b4ff]">
            View Quotation
          </button>
        </div>
      </div>
      <div className=" bg-gray-200 rounded-md h-[550px] ml-3 flex gap-5 w-80 justify-center items-center flex-col">
        {/*create */}
        <div>
        <button onClick={() => handleOpen(createItineraryModal)} className="flex justify-center items-center text-white py-2 px-5 gap-2 w-64 bg-[#2a8bda]">
        <FaPlus />
        Create itinerary
        </button>

        </div>
        {/* insert */}
        <div>
          <button className="flex justify-center items-center text-white py-2 px-5 gap-2 w-64 bg-[#2575b7]">
            <FaDownload />
            Insert itninerary
          </button>
        </div>
      </div>
      </div>

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={openNew}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <Link to={"/queries/proposalSent/viewProposal"}><MenuItem onClick={handleClose} sx={{color: "black" , fontWeight: "600" , fontSize: "14px"}}>Actions</MenuItem></Link>
        <Link to={"https://api.whatsapp.com/send?text=https://travbizz.website/crm/sharepackage/104241/dubai-trip-mr-shikher-.html&phone=+919619756981"} target="target"><MenuItem onClick={handleClose} sx={{color: "gray" , fontWeight: "600" , fontSize: "14px"}}><FaWhatsapp className="mr-1"/> WhatsApp</MenuItem></Link>
        <MenuItem onClick={() => {handleOpen(createItineraryModal)} } sx={{color: "gray" , fontWeight: "600" , fontSize: "14px"}}>Edit Itinerary</MenuItem>
        <MenuItem onClick={handleClose} sx={{color: "gray" , fontWeight: "600" , fontSize: "14px"}}>Duplicate</MenuItem>
        <MenuItem onClick={handleClose} sx={{color: "gray" , fontWeight: "600" , fontSize: "14px"}}>Archive</MenuItem>
      </Menu>

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
  );
}

export default Proposals;
