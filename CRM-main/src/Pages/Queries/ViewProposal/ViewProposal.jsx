import React, { useEffect, useState } from 'react'
import { FaArrowLeft, FaDownload } from "react-icons/fa";
import { IoDocumentText, IoLogoWhatsapp } from "react-icons/io5";
import { FaPaperPlane } from "react-icons/fa";
import { Link } from 'react-router-dom';
import CenterModal from './CenterModal';
import { IoClose } from "react-icons/io5";
import { HiPhoto } from 'react-icons/hi2';
import logo from "../../../assets/images/logo.png"




const ViewProposal = () => {

  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState("");

  const handleOpenModal = (content) => {
    setModalContent(content);
    setModalOpen(true);
    if (content === exportModal) {
      return console.log("Export");
    }
  };



  

  const handleCloseModal = () => {
    setModalOpen(false);
  };
  

  const quotationModal = <div>
    <div className='flex justify-between text-2xl font-semibold bg-[#fcfdfd] p-2 items-center w-[900px]'>
      <h3>View Quotation</h3>
      <IoClose className='cursor-pointer font-bold ' onClick={handleCloseModal}/>
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
        <button onClick={()=> handleOpenModal(shareModal)} className='bg-black hover:bg-[#302f2f] py-2 rounded-md w-[120px] text-white font-semibold text-sm'>Send To Email</button>
      </div>
    </div>
  </div>



  const exportModal = <div>

    <div className='flex justify-between text-2xl font-semibold bg-[#fcfdfd] p-2  items-center w-[500px]'>
      <h3>Export Itinerary</h3>
      <IoClose className='cursor-pointer font-bold ' onClick={handleCloseModal}/>
    </div>
    <hr className=''/>
    <div className='p-2 my-6 flex flex-col gap-3 items-center justify-center'>
        <button className='flex items-center gap-3 border-[2px] border-[#9fffe5] border-dashed rounded-md justify-center w-[400px] bg-[#eafffd] p-5 text-2xl font-semibold'><HiPhoto/>Export With Images</button>
        <button className='flex items-center gap-3 border-[2px] border-[#9fffe5] border-dashed rounded-md justify-center w-[400px] bg-[#eafffd] p-5 text-2xl font-semibold'><HiPhoto/>Export With Images Option 2</button>
        <button className='flex items-center gap-3 border-[2px] border-[#ff8c8c] border-dashed rounded-md justify-center w-[400px] bg-[#eafffd] p-5 text-2xl font-semibold'><FaDownload />Export Without Images</button>
        <button className='flex items-center gap-3 border-[2px] border-[#ff8c8c] border-dashed rounded-md justify-center w-[400px] bg-[#eafffd] p-5 text-2xl font-semibold'><FaDownload />Hotel Voucher</button>
    </div>
  </div>


  const shareModal = <div>
     <div className='flex justify-between text-2xl font-semibold bg-[#fcfdfd] p-2 items-center w-[700px]'>
      <h3>Share</h3>
      <IoClose className='cursor-pointer font-bold ' onClick={handleCloseModal}/>
    </div>
    <hr />

  <div className='overflow-y-auto'>


    <div className='mt-3 p-3 flex gap-5'>
      <button className='w-full border-[1px] rounded-md p-2 font-semibold text-[#6c757d] hover:bg-[#6c757d] hover:text-white focus:text-white focus:bg-[#6c757d] transition-all'>SHARE PRIVATELY</button>
      <button onClick={() => handleOpenModal(sharePublicly)} className='w-full border-[1px] rounded-md p-2 font-semibold text-[#6c757d] hover:bg-[#6c757d] hover:text-white focus:text-white focus:bg-[#6c757d] transition-all'>SHARE PUBLICLY</button>
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
      <button className='bg-[#46cd93] hover:bg-[#41b884] text-white font-semibold p-2 px-3 rounded-md'>Send</button>
    </div>

    </div>

    </div>
  </div>


const sharePublicly = <div>
     <div className='flex justify-between text-2xl font-semibold bg-[#fcfdfd] p-2 items-center w-[700px]'>
      <h3>Share</h3>
      <IoClose className='cursor-pointer font-bold ' onClick={handleCloseModal}/>
    </div>
    <hr />

    <div className='mt-3 p-3 flex gap-5'>
      <button onClick={() => handleOpenModal(shareModal)} className='w-full border-[1px] rounded-md p-2 font-semibold text-[#6c757d] hover:bg-[#6c757d] hover:text-white focus:text-white focus:bg-[#6c757d] transition-all'>SHARE PRIVATELY</button>
      <button onClick={() => handleOpenModal(sharePublicly)} className='w-full border-[1px] rounded-md p-2 font-semibold text-[#6c757d] hover:bg-[#6c757d] hover:text-white focus:text-white focus:bg-[#6c757d] transition-all'>SHARE PUBLICLY</button>
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


  return (
    <>
        <nav className='bg-[#06304c] text-white flex justify-between text-lg font-semibold p-1'>
            <div className='flex justify-evenly gap-9'>
                <button className='flex items-center gap-1 p-2 px-4 hover:bg-[#1c4c6d] rounded-lg '><Link className='flex items-center gap-1' to={"/queries/queriesDetail"}><FaArrowLeft />QUERY</Link></button>
                <button className='flex items-center gap-1 p-2 px-4 hover:bg-[#1c4c6d] rounded-lg '><Link className='flex items-center gap-1' to={"/queries/proposalSent/viewProposal/"}>BUILD</Link></button>
                <button className='flex items-center gap-1 p-2 px-4 hover:bg-[#1c4c6d] rounded-lg '><Link className='flex items-center gap-1' to={"/queries/proposalSent/viewProposal/pricing"}>PRICING</Link></button>
                <button className='flex items-center gap-1 p-2 px-4 hover:bg-[#1c4c6d] rounded-lg '><Link className='flex items-center gap-1' to={"/queries/proposalSent/viewProposal/final"}>Final</Link></button>
            </div>

            <div className='flex justify-evenly gap-9'>
                <button className='flex items-center gap-1 p-2 px-4 hover:bg-[#1c4c6d] rounded-lg' type='quotation'  onClick={() => handleOpenModal(quotationModal)}> <IoDocumentText /> QUOTATION </button>
                <button className='flex items-center gap-1 p-2 px-4 hover:bg-[#1c4c6d] rounded-lg' type='export' onClick={() => handleOpenModal(exportModal)}><IoDocumentText />EXPORT</button>
                <button className='flex items-center gap-1 p-2 px-4 hover:bg-[#1c4c6d] rounded-lg' type='share' onClick={() => handleOpenModal(shareModal)}><FaPaperPlane />SHARE</button>
            </div>
        </nav>


          <CenterModal open={modalOpen} onClose={handleCloseModal} data={modalContent}/>
                
    </>
  )
}

export default ViewProposal