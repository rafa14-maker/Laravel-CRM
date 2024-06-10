import React, { useState , useEffect } from 'react'
import ViewProposal from './ViewProposal'
import { FaBed, FaPencilAlt } from "react-icons/fa";
import { HiPhoto } from "react-icons/hi2";
import butterfly from "../../../assets/images/b.png"
import { Bs1CircleFill } from "react-icons/bs";
import { FaChevronRight } from "react-icons/fa";
import { GrDocumentText } from "react-icons/gr";
import { FaLongArrowAltRight } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import viewImage from "../../../assets/images/birthdayIcon.png"
import view4 from "../../../assets/images/view4.jpeg"
import view2 from "../../../assets/images/view2.jpg"
import view3 from "../../../assets/images/view3.png"
import { FaPlus } from "react-icons/fa";
import BuildCard from './BuildCard';
import { Box, Menu, Modal } from '@mui/material';
import { IoClose } from 'react-icons/io5';
import { MdOutlineStarPurple500 } from "react-icons/md";
import { BiCalendar } from 'react-icons/bi';
import { LiaStarSolid } from 'react-icons/lia';
import { FaHome } from "react-icons/fa";
import Editor from '../../../Components/Editor';
import ReactDOMServer from 'react-dom/server';
import { RiDeleteBin6Fill } from 'react-icons/ri';
import CenterModal from './CenterModal';




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





const Build = () => {

  const [open, setOpen] = React.useState(false);
  const [modalContent, setModalContent] = useState("");
  const [anchorEl, setAnchorEl] = React.useState(null);

  const openNew = Boolean(anchorEl);

  const [modalOpen, setModalOpen] = useState(false);
  // const [modalContent, setModalContent] = useState("");

  const handleOpenModal = (content) => {
    setModalContent(content);
    setModalOpen(true);
    if (content === exportModal) {
      return console.log("Export");
    }
  };



  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };


  const handleOpen = (content) => {
    setModalContent(content);
    setOpen(true);
  };

  const handleClose = (MODE) => {
    setOpen(false)
    setAnchorEl(null);

    if (MODE === "PROPOSAL") {
      return setProposalModal(!proposalModal);
    } else if (MODE === "QUERY") {
      return setQueryModal(!queryModal);
    }
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const DeleteBtn = () => {
    alert('Are you sure your want to delete?')
  }

  // Time Function

  const generateTimeOptions = () => {
    const options = [];
    for (let hour = 0; hour < 24; hour++) {
      for (let minute = 0; minute < 60; minute += 15) {
        const formattedHour = hour < 10 ? `0${hour}` : hour;
        const formattedMinute = minute === 0 ? '00' : minute;
        const ampm = hour < 12 ? 'AM' : 'PM';
        const displayHour = hour === 0 ? 12 : hour <= 12 ? hour : hour - 12;
        const time = `${displayHour}:${formattedMinute} ${ampm}`;
        options.push(<option key={`${hour}-${minute}`} value={time}>{time}</option>);
      }
    }
    return options;
  };

  // Time Function end


  

  const timeArr = ["12:00 AM" ,"12:15 AM" ,"12:30 AM" ,"12:45 AM" ,"01:00 AM" ,"01:15 AM" ,"01:30 AM"  ]
  const themeArr = ["2N-3D Package" , "Adventure" , "Beach" , "Economy Umrah" , "Flight Booking" , "Fun day/Memoriable Day"]
  

const iconModal = <div>
<div className='flex justify-between text-xl font-semibold bg-[#fcfdfd] p-2 items-center'>
<h3>Day 1 Details</h3>
<IoClose className='cursor-pointer font-bold ' onClick={handleClose}/>
</div>
<hr />

<div className='p-3'>
  <p htmlFor="Subject" className='text-xs mb-1'>Subject</p>
  <input className='outline-none border-[1px] px-2 w-full p-1 focus:border-black transition-all rounded-md' type="text" />

  <p htmlFor="Details" className='text-sm mb-1 font-semibold mt-4' >Details</p>
  <textarea rows={10}  className='outline-none border-[1px] px-2 w-full p-1 focus:border-black transition-all rounded-md' type="text" />

  <div className='flex justify-end'>
     <button onClick={handleClose} className='mt-4 text-sm bg-[#12344d] text-white p-2 flex items-center gap-1 rounded-md font-semibold px-3 hover:bg-[#1699dd]'>Send Mail</button>
  </div>
</div>
</div>

const iconModal3 = (

  <div>
        <div className="flex justify-between text-xl font-semibold bg-[#eef0f0] p-2 items-center">
          <h3>Flight From 01-05-2024</h3>
          <IoClose className="cursor-pointer font-bold " onClick={handleClose} />
        </div>
        <hr />
  
        
  <div className="mx-3">
  <div  className="flex justify-between gap-4 mx-3 mt-4">
      <div>
            <p className="text-sm">Name</p>
            <input type="text" className="border-[1px] mt-2 border-[#cccccc]  rounded p-2 w-[380px]" />
            </div>
              <div>
              <p className="text-sm">Flight No</p>
              <input type="text" className="border-[1px] mt-2 border-[#cccccc] rounded p-2 w-full" />
              </div>
  </div>
  
  <div className="flex mx-3 justify-between mt-4 gap-4">
        <div className='w-full'>
            <p className="text-sm">From Destination</p>
            <input type="text" className="border-[1px] mt-2 border-[#cccccc]  rounded p-2 w-full" />
        </div>
  
        <div className='w-full'>
            <p className="text-sm">To Destination</p>
            <input type="text" className="border-[1px] mt-2 border-[#cccccc]  rounded p-2 w-full" />
        </div>
  
        <div className='w-full'>
            <p className="text-sm">Flight Duration</p>
            <input type="text" className="border-[1px] mt-2 border-[#cccccc]  rounded p-2 w-full" />
        </div>
  </div>
  
  
  <div className="border-[1px] border-[#ffc107] w-[96%] mt-5 rounded bg-[#fefaeb] p-5 mx-3">
  <div className="flex justify-between gap-5 w-full">
        <div className="w-full">
            <p className="text-sm">Date*</p>
            <input type="date" className="border-[1px] mt-2 w-full border-[#cccccc]  rounded p-2" />
        </div>
  
        <div className="w-full">
        <p className="text-sm">Start time</p>
  
        <select className="w-full p-2 mt-2 rounded border-[1px] border-[#cccccc">
        {generateTimeOptions()}
      </select>
           
        </div>
  
  
        <div className="w-full">
            <p className="text-sm">End time</p>
            <select className="w-full p-2 mt-2 rounded border-[1px] border-[#cccccc">
        {generateTimeOptions()}
      </select>      </div>
  
  </div>
  </div>
  
  <div className="mx-3 mt-3" >
    <p className="text-sm mt-2" >Description</p>
    <textarea className="w-full  border-[1px] border-[#cccccc] mt-2"></textarea>
  </div>
  
  
  
  <div className="flex justify-between mx-3 mt-5 mb-5">
    <button className="bg-[#eb1515] text-[#ffff] flex items-center p-1 px-2 rounded" onClick={DeleteBtn}><RiDeleteBin6Fill />Delete</button>
    <button className="bg-[#12344d] text-[#ffff] flex items-center p-1 px-3 rounded" onClick={handleClose}>Save</button>
  </div>
  </div>
  </div>
  
  
    )


const composeTable = ReactDOMServer.renderToString(<div className='overflow-y-scroll h-[79vh]'>



<div className='p-2 text-sm font-bold'>
  {/* <p className='font-normal'>3Night 4days</p> */}
  <p className='mt-5'>470 m drive to main city centre</p><br />

</div>
</div>)


const iconModal2 = <div>
<div className='flex justify-between text-xl font-semibold bg-[#fcfdfd] p-2 items-center'>
<h3>Accommodation From 01-05-2024</h3>
<IoClose className='cursor-pointer font-bold ' onClick={handleClose}/>
</div>
<hr />

<div className='p-3 overflow-y-scroll h-[85vh]'>

 <div className='flex gap-4 mt-3'>
    <div className='w-full'>
      <p htmlFor="Subject" className='text-xs mb-2'>Subject</p>
      <input defaultValue={"Dubai"} className='outline-none border-[1px] px-2 w-full p-1 focus:border-black transition-all rounded-md' type="text" />
    </div>
    <div className='w-full'>
      <p htmlFor="Subject" className='text-xs mb-2'>Type</p>
      <select className='outline-none border-[1px] px-2 w-full p-1 focus:border-black transition-all rounded-md'>
          <option value="">Manual</option>
          <option value="">From Master</option>
      </select>
  </div>
 </div>

 <div className='flex gap-4 mt-4'>
    <div className='w-full'>
      <p htmlFor="Subject" className='text-xs mb-2'>Hotel Name</p>
      <input defaultValue={"Bur Dubai"} className='outline-none border-[1px] px-2 w-full p-1 focus:border-black transition-all rounded-md' type="text" />
    </div>
    <div className='w-full'>
      <p htmlFor="Subject" className='text-xs mb-2'>Category</p>
      <select className='outline-none border-[1px] px-2 w-full p-1 focus:border-black transition-all rounded-md'>
          <option value="">1 Star</option>
          <option value="">2 Star</option>
          <option value="">3 Star</option>
          <option value="">4 Star</option>
          <option value="">5 Star</option>
      </select>
  </div>
 </div>

 <div className='flex gap-4 mt-4'>
    <div className='w-full'>
      <p htmlFor="Subject" className='text-xs mb-2'>Room Name</p>
      <input defaultValue={"Deluxe Room"} className='outline-none border-[1px] px-2 w-full p-1 focus:border-black transition-all rounded-md' type="text" />
    </div>
    <div className='w-full'>
      <p htmlFor="Subject" className='text-xs mb-2'>Meal Plan</p>
      <input defaultValue={"MAP"} className='outline-none border-[1px] px-2 w-full p-1 focus:border-black transition-all rounded-md' type="text" />
    </div>
    <div className='w-full'>
      <p htmlFor="Subject" className='text-xs mb-2'>Hotel Option</p>
      <select className='outline-none border-[1px] px-2 w-full p-1 focus:border-black transition-all rounded-md'>
          <option value="">Option 1</option>
          <option value="">Option 2</option>
          <option value="">Option 3</option>
      </select>
  </div>
 </div>


 <div className='p-4 mt-5 bg-[#f7f7f7] border-[1px] rounded-md'>
    <p className='text-sm font-semibold'>Enter Number of Rooms</p>

    <div className='flex gap-4 mt-4'>
        <div className='w-full'>
          <p htmlFor="Subject" className='text-sm font-semibold mb-2'>Single</p>
          <input defaultValue={"1"} className='outline-none border-[1px] px-2 w-full p-1 focus:border-black transition-all rounded-md' type="number" />
        </div>
        <div className='w-full'>
          <p htmlFor="Subject" className='text-sm font-semibold mb-2'>Double</p>
          <input defaultValue={"2"} className='outline-none border-[1px] px-2 w-full p-1 focus:border-black transition-all rounded-md' type="number" />
        </div>
        <div className='w-full'>
          <p htmlFor="Subject" className='text-sm font-semibold mb-2'>Triple</p>
          <input defaultValue={"0"} className='outline-none border-[1px] px-2 w-full p-1 focus:border-black transition-all rounded-md' type="number" />
        </div>
        <div className='w-full'>
          <p htmlFor="Subject" className='text-sm font-semibold mb-2'>Quad</p>
          <input defaultValue={"0"} className='outline-none border-[1px] px-2 w-full p-1 focus:border-black transition-all rounded-md' type="number" />
        </div>
        <div className='w-full'>
          <p htmlFor="Subject" className='text-sm font-semibold mb-2'>CWB</p>
          <input defaultValue={"0"} className='outline-none border-[1px] px-2 w-full p-1 focus:border-black transition-all rounded-md' type="number" />
        </div>
        <div className='w-full'>
          <p htmlFor="Subject" className='text-sm font-semibold mb-2'>CNB</p>
          <input defaultValue={"0"} className='outline-none border-[1px] px-2 w-full p-1 focus:border-black transition-all rounded-md' type="number" />
        </div>
    </div>
 </div>

 <div className='p-4 mt-5 bg-[#f7f7f7] border-[1px] rounded-md border-[#f7d038]' >
    

    <div className='flex gap-4'>
        <div className='w-full'>
          <p htmlFor="Subject" className='text-sm font-semibold mb-2'>Check-in date*</p>
         <p className='text-sm font-semibold mb-2'>01-05-2024</p>
         <div className='flex gap-3'>
            <input type="checkbox" className='scale-150'/>
            <p>	 Show Time</p>
         </div>
        </div>

        <div className='w-full'>
          <p htmlFor="Subject" className='text-sm font-semibold mb-2'>Check-in time</p>
          <select className='outline-none border-[1px] px-2 w-full p-1 focus:border-black transition-all rounded-md'>
            {timeArr.map((item)=>{
              return <option>{item}</option>
            })}

          </select>
        </div>

        <div className='w-full'>
          <p htmlFor="Subject" className='text-sm font-semibold mb-2'>Check-out date*</p>
          <input  defaultValue="2024-05-05" className='outline-none border-[1px] px-2 w-full p-1 focus:border-black transition-all rounded-md' type="date" />
        </div>

        <div className='w-full'>
          <p htmlFor="Subject" className='text-sm font-semibold mb-2'>Check-out time</p>
          <select className='outline-none border-[1px] px-2 w-full p-1 focus:border-black transition-all rounded-md'>
            {timeArr.map((item)=>{
              return <option>{item}</option>
            })}

          </select>
        </div>
    </div>
 </div>

   <div>
      <p htmlFor="Subject" className='text-sm font-semibold mb-2 mt-4'>Description</p>

      <Editor data={composeTable}/>
  </div>

 

  <div className='flex justify-between'>
     <button onClick={handleClose} className='mt-4 text-sm bg-[#f9392f] text-white p-2 flex items-center gap-1 rounded-md font-semibold px-3 hover:bg-[#eb3930]'>Delete</button>
     <button onClick={handleClose} className='mt-4 text-sm bg-[#12344d] text-white p-2 flex items-center gap-1 rounded-md font-semibold px-3 hover:bg-[#1699dd]'>Save</button>
  </div>
</div>
</div>






const obj = [
  {
    title: "Dubai Arrival",
    para: "Arrival in Dubai .. Pickup from Airport ...",
    image: view4,
    icon:   <FaPlus/>
  },
  {
    title: "Dubai Departure",
    para: "Departure From Dubai Happy to serve you ...",
    image: view2,
    icon:   <FaPlus/>
  },
  {
    title: "Ferrari World Full Day ",
    para: "Ferrari World Full Day with private tour... ",
    image: view3,
    icon:   <FaPlus/>
  },
  {
    title: "Full Day City Tour    ",
    para: "Full Day City tour with private basis...    ",
    image: view3,
    icon:   <FaPlus/>
  },
  {
    title: "Ferrari World Full Day ",
    para: "Ferrari World Full Day with private tour... ",
    image: view3,
    icon:   <FaPlus/>
  },
  {
    title: "Full Day City Tour    ",
    para: "Full Day City tour with private basis...    ",
    image: view3,
    icon:   <FaPlus/>
  }
]

const imageObj = [
  {
    image: "https://travbizz.website/crm/package_image/landcruiser1715157404.jpeg" ,
    head: "Landcruiser"
  },
  {
    image: "https://travbizz.website/crm/package_image/Butterfly1714465676.PNG" ,
    head: "Butterfly"
  },
  {
    image: "https://travbizz.website/crm/package_image/WhatsApp_Image_2023-10-11_at_11713953512.jpeg" ,
    head: "WhatsApp Image -- at"
  },
  {
    image: "https://travbizz.website/crm/package_image/25_Thailand1713339511.jpeg" ,
    head: "Thailand"
  },
  {
    image: "https://travbizz.website/crm/package_image/IMG_47711712599527.jpg" ,
    head: "IMG"
  },
  {
    image: "https://travbizz.website/crm/package_image/PDF-Image31712591174.jpg" ,
    head: "PDF-Image"
  },
]


const changePhotoModal = <div>
      <div className='flex justify-between text-xl font-semibold bg-[#fcfdfd] p-2 items-center'>
      <h3>Media library</h3>
      <IoClose className='cursor-pointer font-bold ' onClick={handleClose}/>
    </div>
    <hr />

<div className='p-3'>

    <div className='flex '>
        <h3 className='text-md p-2 cursor-pointer hover:text-black rounded-t-md px-3 text-white bg-[#2da36b] hover:bg-[#bdffe0] transition-all font-semibold flex items-center gap-1'><HiPhoto className=''/>My Uploads</h3>
    </div>
    <hr />

    <div className='mt-5 flex items-center justify-center gap-3'>
  <input type="text" placeholder='Search' className='outline-none border-[1px] border-[#494949] w-[420px] p-1 px-2 rounded-md' />
  

  <input type='file' id='file-input' className='hidden' />
  
  <label for='file-input' className='cursor-pointer text-sm bg-[#12344d] text-white p-1 flex items-center gap-1 rounded-md font-semibold px-3 hover:bg-[#1699dd]'>
    Upload Photo
  </label>
  
 
</div>

  <div className='flex flex-wrap justify-center gap-2'>
  {imageObj.map((item)=>{
      return <div className='mt-5 flex flex-col justify-center items-center'>
        <div className='overflow-hidden h-[90px]  p-1 transition-all'>
          <img src={item.image} className='w-[170px]' alt="" />
        </div>
      <p className='text-sm mt-2'>{item.head}</p>
    </div>
    })}
  </div>

<div className='flex justify-center mt-5 mb-3'>
  <button className=' text-sm bg-[#12344d] text-white p-1 flex items-center gap-1 rounded-md font-semibold px-3 hover:bg-[#1699dd]'>Load more</button>
</div>


</div>


</div>

  return (
    <>
        <ViewProposal/>
        <div className='bg-[#f5f7f9] h-[90%] w-full p-2'>

          <div className='parent w-full bg-[#fff] border-2 p-2 justify-between flexborder-[#eeefef] rounded-md flex'>
                <div className='child-1 w-full bg-slate-100'>
                
                <div className='box w-full h-[160px] flex flex-col justify-end relative'>
    <div className='bg-gradient-to-t from-[#000] to-[#fff] h-full w-full absolute z-10 opacity-80'></div>
    <img className='absolute top-0 z-0 inset-0 w-full h-full object-cover' src={butterfly} alt='' />

    <div className='absolute top-0 right-0 p-2 flex items-center gap-2 bg-[#00000070] bg-opacity-5 rounded-md mt-2 mr-2 z-30 cursor-pointer' onClick={() => handleOpen(changePhotoModal)}>
        <HiPhoto className='text-white'/>
        <button className='bg-transparent text-white'>Change Cover Photo</button>
    </div>
    <div className='top-0 mx-4 p-2 z-30'>
        <div className='flex gap-3 text-white items-center'>
            <p className='font-semibold text-2xl'>Magical Dubai</p>
            <FaPencilAlt className='cursor-pointer' onClick={handleClick}/>
        </div>
        <p className='text-white mt-auto'>Dubai, Abu Dhabi</p>
    </div>
</div>

            <div className='grand-parent flex w-full bg-[#ffffff]'>
         <div className='grand-child-1 '>
         <div className='w-[190px] p-2 hover:bg-[#2fd1dd]'>
           <div className='w-[190px] p-2  flex items-center justify-evenly gap-2'>
           <div className='flex items-center gap-2'>
           <Bs1CircleFill className='text-2xl  border-[1px] border-[#ffff] rounded-full ' /> <p className='text-sm font-semibold'>03-June-Mon</p>
           </div>
          <div>
          <FaChevronRight className='hover:text-[#1dffe1cc]'/>
          </div>
           </div>

            <select className='w-full mt-2 text-sm'>
              <option value="abu-dhabi " className=''>Abu-Dhabi</option>
              <option value="Dubai">Dubai</option>
            </select>

            </div>


            <div className='w-[190px] p-2 hover:bg-[#2fd1dd]'>
           <div className='w-[190px] p-2  flex items-center justify-evenly gap-2'>
           <div className='flex items-center gap-2'>
           <Bs1CircleFill className='text-2xl  border-[1px] border-[#ffff] rounded-full ' /> <p className='text-sm font-semibold'>03-June-Mon</p>
           </div>
          <div>
          <FaChevronRight className='hover:text-[#1dffe1cc]'/>
          </div>
           </div>

            <select className='w-full mt-2 text-sm'>
              <option value="abu-dhabi " className=''>Abu-Dhabi</option>
              <option value="Dubai">Dubai</option>
            </select>

            </div>



            <div className='w-[190px] p-2 hover:bg-[#2fd1dd]'>
           <div className='w-[190px] p-2  flex items-center justify-evenly gap-2'>
           <div className='flex items-center gap-2'>
           <Bs1CircleFill className='text-2xl  border-[1px] border-[#ffff] rounded-full ' /> <p className='text-sm font-semibold'>03-June-Mon</p>
           </div>
          <div>
          <FaChevronRight className='hover:text-[#1dffe1cc]'/>
          </div>
           </div>

            <select className='w-full mt-2 text-sm'>
              <option value="abu-dhabi " className=''>Abu-Dhabi</option>
              <option value="Dubai">Dubai</option>
            </select>

            </div>



            <div className='w-[190px] p-2 hover:bg-[#2fd1dd]'>
           <div className='w-[190px] p-2  flex items-center justify-evenly gap-2'>
           <div className='flex items-center gap-2'>
           <Bs1CircleFill className='text-2xl  border-[1px] border-[#ffff] rounded-full ' /> <p className='text-sm font-semibold'>03-June-Mon</p>
           </div>
          <div>
          <FaChevronRight className='hover:text-[#1dffe1cc]'/>
          </div>
           </div>

            <select className='w-full mt-2 text-sm'>
              <option value="abu-dhabi " className=''>Abu-Dhabi</option>
              <option value="Dubai">Dubai</option>
            </select>

            </div>


            

              <div className=' w-[190px] p-3 bg-[#ffff] flex items-center hover:bg-[#cffcff] justify-evenly gap-2 '>
             <GrDocumentText /><p className='text-sm font-semibold'>Package Terms</p><div>
             <FaChevronRight className='text-white hover:text-[#5beafd]' />
             </div>
            </div>
         </div>
         


            <div className='grand-child-2  w-full'>


              {/* table start */}

      <div className='flex justify-between mt-2'>
      <table>
            <tr>
              <td className='border-[1px] border-[#f1f1f1] p-2  text-[#000]  font-semibold'>Day 2</td>
              <td className='border-[1px] border-[#f1f1f1] p-2  text-[#000]  font-semibold'>03 Jun - Mon    Abu Dhabi</td>
            </tr>
          </table>

        <div className='flex '>
        <button className='text-sm font-semibold text-[#fff] bg-[#2e8be2] px-3 mx-2 '>+New Event</button>
        </div>

      </div>

      {/* beginner card */}

      <div className='w--full bg-[#ffff] border-2 border-[#f1f1f1] shadow-md mx-2 p-3 mt-4 flex justify-between'>
              <p className='italic text-[#adabab] font-normal'>Enter Day Wise Details</p>

              <div onClick={()=> handleOpen(iconModal)} className='w-7 h-7 border-[1px] border-[#2e8be2] rounded-full flex items-center justify-center hover:bg-[#2e8be2] group'>
                    <MdEdit className='text-[#2e8be2] group-hover:text-[#fff]' />
              </div>

            </div>


{/* card 1 */}

        <div className='flex bg-[#ffff] border-2 mx-2 items-start border-[#eeeff0] justify-between  rounded-md shadow-md mt-3 p-2'>
      
      
            <div className='flex items-center'>
                <div className=' rounded'>
                <img src={view2} className='w-20 h-20 rounded-lg' alt="" />
                </div>

                <div className='flex flex-col mx-2'>
                <p className='font-semibold text-sm '>Arrival in dubai</p>
                <p className='text-[12px]'>Arrival in dubai and transfer to hotel via private car</p>
                </div>
            </div>


      <div>
              <div onClick={()=> handleOpen(iconModal)} className='w-7 h-7 border-[1px] border-[#2e8be2] rounded-full flex items-center justify-center hover:bg-[#2e8be2] group'>
                    <MdEdit className='text-[#2e8be2] group-hover:text-[#fff]' />
              </div>
      </div>


        </div> 

{/* card 2 */}

        <div className='flex bg-[#ffff] border-2 mx-2 items-start border-[#eeeff0] justify-between  rounded-md shadow-md mt-3 p-2'>
      
      
      <div className='flex items-start'>
          <div className=' rounded'>
          <img src={view2} className='w-20 h-20 rounded-lg' alt="" />
          </div>

          <div className='flex flex-col mx-2'>
          <p className='font-semibold text-sm '>Dubai : Airport to Hotel</p>
          <p className='text-[12px]'>Pick up from airport and transfer to hotel</p>
          </div>
      </div>


      <div>
              <div onClick={()=> handleOpen(iconModal3)} className='w-7 h-7 border-[1px] border-[#2e8be2] rounded-full flex items-center justify-center hover:bg-[#2e8be2] group'>
              <MdEdit className='text-[#2e8be2] group-hover:text-[#fff]' />
              </div>
      </div>


        </div> 

{/* card 3 */}
<div className='flex bg-[#ffff] border-2 mx-2  border-[#eeeff0] justify-between  rounded-md shadow-md mt-3 p-2'>
      
      
     <div  className='flex w-full items-start'>
     <img src={view2} className='w-20 h-20 rounded-lg' alt="" />

      
     <div className='p-3 '>

      

<div className="flex gap-4">
          <p className="font-semibold text-base flex items-center gap-3">  Bur Dubai </p>

          <p className="flex items-center text-base text-[#ff9900]">  <LiaStarSolid />
             <LiaStarSolid />
             <LiaStarSolid />
             <LiaStarSolid />
             <LiaStarSolid /></p>
          </div>


        

             <hr className="border-[1px] mt-2  border-[#c7c0c0]" />



          <div className="card-details flex  mt-2">
            <div className=''>
              <p className='text-[14px]'>Check in</p>
              <p className="flex items-center text-[14px]"><BiCalendar /> <span className="font-semibold text-[14px]">13 May 2024</span></p>
            </div>
            <div className='mx-5'>
              <p className='text-[14px]'>Check out</p>
              <p className="flex items-center text-[14px]"><BiCalendar /> <span className="font-semibold text-[14px]">13 May 2024</span></p>
            </div>


            <div className='mx-5'>
              <p className='text-[14px]'>Room Type:</p>
              <p className="flex items-center text-[14px]"><FaHome /> <span className="font-semibold text-[14px]">Front Villa</span></p>
            </div>

          </div>

          <hr className="border-[1px] mt-3 border-[#c7c0c0] w-full" />

      <div className="flex items-center mt-3">
            <p className="text-sm"><span className="font-semibold text-sm">Room:</span>  </p> 
            <p className="text-sm font-semibold flex items-center"> <span className="text-base"> </span> Meal: </p>
            <p className="text-sm flex items-center">|   <span className="text-sm flex items-center font-semibold"> <span className="text-sm font-semibold flex gap-5">  </span> </span> </p>
      </div>

      
</div>

     </div>


      <div>
              <div onClick={()=> handleOpen(iconModal2)} className='w-7 h-7 border-[1px] border-[#2e8be2] rounded-full flex items-center justify-center hover:bg-[#2e8be2] group'>
              <MdEdit className='text-[#2e8be2] group-hover:text-[#fff]' />
              </div>
      </div>


        </div> 



      </div>
            </div>
                  </div>
   <div>
    
   <div className='child-2 bg-[#ffff] flex gap-2 items-start mx-2'>
  <div className='flex items-start p-2 border-2 border-[#f1f1f1]'>
    <input type="text" placeholder='Search' className='outline-0 p-1 w-48' />
  </div>

      <div className='p-2 border-2 border-[#f1f1f1]'>
            <select className='outline-0 p-1 w-56'>
                  <option value="Data itinerary">Data itinerary</option>
                  <option value="Accommondation">Accommondation</option>
                  <option value="Activiy">Activiy</option>
                  <option value="Transportation">Transportation</option>
                  <option value="Insurance/Visa">Insurance/Visa</option>
                  <option value="Meal">Meal</option>
                  <option value="Flight">Flight</option>
                  <option value="Leisure">Leisure</option>
                  <option value="Cruise">Cruise</option>
            </select>
    </div>

</div>

<div className='bg-[#f5f7f9]'>

{obj.map((item, index) => (
        <BuildCard
          key={index} // Ensure each card has a unique key
          title={item.title}
          para={item.para}
          image={item.image}
          icon={item.icon}
        />
      ))}



  </div> 

  
</div>


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


      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={openNew}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
        className='ml-[36vw] max-[1600px]:ml-[30vw] max-[1400px]:ml-[36vw] max-[1300px]:ml-[15vw] max-[1200px]:ml-[10vw] transition-all'
        PaperProps={{
            style: {
              borderRadius: 10, // Adjust this value as per your preference
              // backgroundColor: "#2d2f31",
              width:"100vh",
              height: "200vh",
              
            },
          }}
          sx={{height:"115vh",marginTop:"18px" }}
      >
        <div className="flex justify-center">
          <div className=" rounded-md bg-white w-full">

          <div className='flex justify-between text-xl font-semibold bg-[#fcfdfd] p-2 px-5 items-center w-full'>
            <h3>Itinerary setup</h3>
            <IoClose className='cursor-pointer font-bold ' onClick={handleClose}/>
            </div>
            <hr />

            <div className='mt-4 p-5'>
              <div className='w-full flex gap-2 items-center justify-end'>
                <p htmlFor="First Name" className='text-sm mb-1'>Itinerary Name</p>
                <input defaultValue={"Dubai 3n4D trip"} className='outline-none border-l-4 border-l-[#ff6a6a] focus:border-l-[#a01616] border-[1px] px-2 w-[70%] p-1 focus:border-black transition-all rounded-md' type="text" />
              </div>
              <div className='w-full flex gap-2 items-center justify-end mt-4'>
                <p htmlFor="First Name" className='text-sm mb-1'>Start Date</p>
                <input defaultValue={"2024-05-01"} className='outline-none border-l-4 border-l-[#ff6a6a] focus:border-l-[#a01616] border-[1px] px-2 w-[70%] p-1 focus:border-black transition-all rounded-md' type="date" />
              </div>
              <div className='w-full flex gap-2 items-center justify-end mt-4'>
                <p htmlFor="First Name" className='text-sm mb-1'>End Date</p>
                <input defaultValue={"2024-05-04"} className='outline-none border-l-4 border-l-[#ff6a6a] focus:border-l-[#a01616] border-[1px] px-2 w-[70%] p-1 focus:border-black transition-all rounded-md' type="date" />
              </div>
              <div className='w-full flex gap-2 items-center justify-end mt-4'>
                <p htmlFor="First Name" className='text-sm mb-1'>Adult</p>
                <input defaultValue={"1"} className='outline-none border-l-4 border-l-[#ff6a6a] focus:border-l-[#a01616] border-[1px] px-2 w-[70%] p-1 focus:border-black transition-all rounded-md' type="number" />
              </div>
              <div className='w-full flex gap-2 items-center justify-end mt-4'>
                <p htmlFor="First Name" className='text-sm mb-1'>Child</p>
                <input defaultValue={"1"} className='outline-none border-[1px] px-2 w-[70%] p-1 focus:border-black transition-all rounded-md' type="number" />
              </div>
              <div className='w-full flex gap-2 items-center justify-end mt-4'>
                <p htmlFor="First Name" className='text-sm mb-1'>Destinations</p>
                <input  className='outline-none border-[1px] px-2 w-[70%] p-1 focus:border-black transition-all rounded-md' type="text" />
              </div>
              <div className='w-full flex gap-2 items-center justify-end mt-4'>
                <p htmlFor="First Name" className='text-sm mb-1'>Notes</p>
                <textarea placeholder='Notes'  className='outline-none border-[1px] px-2 w-[70%] p-1 focus:border-black transition-all rounded-md' type="text" />
              </div>

              <h3 className='text-xl mt-6 font-semibold'>Website Setting</h3>

              <div className='w-full flex gap-2 items-center justify-end mt-4'>
                <p htmlFor="First Name" className='text-sm mb-1'>Theme</p>
                <select className='outline-none border-[1px] px-2 w-[70%] p-1 focus:border-black transition-all rounded-md'>
                    {themeArr.map((item)=>{
                      return  <option value="">{item}</option>
                    })}
                </select>
              </div>

              <div className='w-full flex gap-2 items-center justify-end mt-4'>
                <p htmlFor="First Name" className='text-sm mb-1'>Theme</p>
                <select className='outline-none border-[1px] px-2 w-[70%] p-1 focus:border-black transition-all rounded-md'>
                    <option value="">Yes</option>
                    <option value="">No</option>
                </select>
              </div>

              <div className='w-full flex gap-2 items-center justify-end mt-4'>
                <p htmlFor="First Name" className='text-sm mb-1'>Per Person Price</p>
                <input defaultValue={"0"} className='outline-none border-l-4 border-l-[#ff6a6a] focus:border-l-[#a01616] border-[1px] px-2 w-[70%] p-1 focus:border-black transition-all rounded-md' type="number" />
              </div>

              <div className='w-full flex gap-2 items-center justify-end mt-4'>
                <p htmlFor="First Name" className='text-sm mb-1'>Validity</p>
                <input defaultValue={"2024-05-22"} className='outline-none border-l-4 border-l-[#ff6a6a] focus:border-l-[#a01616] border-[1px] px-2 w-[70%] p-1 focus:border-black transition-all rounded-md' type="date" />
              </div>

              <div className='w-full flex gap-2 items-center justify-end mt-4'>
                <p htmlFor="First Name" className='text-sm mb-1'>Popular</p>
                <select className='outline-none border-[1px] px-2 w-[70%] p-1 focus:border-black transition-all rounded-md'>
                    <option value="">Yes</option>
                    <option selected value="">No</option>
                </select>
              </div>


              <div className='w-full flex gap-2 items-center justify-end mt-4'>
                <p htmlFor="First Name" className='text-sm mb-1'>Special</p>
                <select className='outline-none border-[1px] px-2 w-[70%] p-1 focus:border-black transition-all rounded-md'>
                    <option value="">Yes</option>
                    <option selected value="">No</option>
                </select>
              </div>

              <div className='w-full flex gap-2 items-center justify-end mt-4'>
                <p htmlFor="First Name" className='text-sm mb-1'>About Package</p>
                <textarea placeholder='Notes' rows={3} className='outline-none border-[1px] px-2 w-[70%] p-1 focus:border-black transition-all rounded-md' type="text" />
              </div>


            <hr className='mt-8'/>
             <div className='flex justify-end gap-5 text-xl font-semibold bg-[#fcfdfd] mt-5 px-5 items-center w-full'>
                <button onClick={handleClose} className='border-[1px] rounded-md text-sm p-2 px-5'>Cancel</button>
                <button onClick={handleClose} className='bg-[#12344d] text-white rounded-md text-sm p-2 px-5'>Save</button>
            </div>



            </div>
            
            
         
           
          </div>
        </div>
        </Menu>


        <CenterModal open={modalOpen} onClose={handleCloseModal} data={modalOpen}/>

       
        
    </>
  )
}

export default Build






{/* <div className='items-center text-[#fff]  font-semibold'>
<p>Day</p>
<p className='flex items-center justify-center'>2</p>
</div>


<div className='dhabi text-[#fff] gap-4 justify-center mt-3 flex'>
<p className='font-semibold text-lg'>03 Jun - Mon</p>
<FaLongArrowAltRight  className='font-semibold text-lg'/>
<p className='font-semibold text-lg'>Abu Dhabi</p>
</div> */}