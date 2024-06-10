import { Box, Modal } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { FaBriefcase } from "react-icons/fa";
import { IoClose, IoDocumentText } from 'react-icons/io5';
import logo from "../../../assets/images/logo.png"

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


const Billing = () => {

  const [open, setOpen] = React.useState(false);
  const [modalContent, setModalContent] = useState("");

  const handleOpen = (content) => {
    setModalContent(content);
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  


  const sendPayment = <div>

    <div className='flex justify-between text-xl font-semibold bg-[#fcfdfd] p-2 items-center w-[400px]'>
        <h3>Send Payment Plan To Mail</h3>
        <IoClose className='cursor-pointer font-bold ' onClick={handleClose}/>
      </div>
       <hr />  


      <div className='p-4'>
             <p className='text-xs mt-4'>Mail Send To*</p>
             <input className='mt-1 w-full p-1 px-2 border-[1px] outline-none border-gray-400 focus:border-black transition-all rounded-md' type="text" />

             <p className='text-xs mt-6'>CC Mails*</p>
             <input className='mt-1 w-full p-1 px-2 border-[1px] outline-none border-gray-400 focus:border-black transition-all rounded-md' type="text" />

             <hr className='mt-8'/>

            <div className='flex justify-end'>
              <button className='mt-4 text-sm bg-[#12344d] text-white p-1 flex items-center gap-1 rounded-md font-semibold px-3 hover:bg-[#1699dd]'>Save</button>
            </div>
      </div> 
  </div>


const viewInvoice = <div>
      <div className='flex justify-between text-xl font-semibold bg-[#fcfdfd] p-2 items-center w-[900px]'>
        <h3>View Invoice</h3>
        <IoClose className='cursor-pointer font-bold ' onClick={handleClose}/>
      </div>
       <hr />   




       <div className='p-4 px-9 overflow-y-scroll h-[85vh]'>
        <div className='border-[1px] border-black w-full text-sm '>
          <table className='w-full'>
            <tr>
              <td rowSpan={3} className='border-[1px] border-black p-2 '>
                <img className='h-10' src={logo} alt="" />
                <div className='mt-4'>
                  <p className='font-semibold'>Travbizz Travel IT Solutions</p>
                  <p>Address: Noida, India</p>
                  <p>GSTN: 000000000000000</p>
                  <p>State Name : UP India</p>
                  <p>E-Mail : info@travbizz.com</p>
                </div>
                </td>
              <td className='border-[1px] border-black p-2 align-text-top'>Invoice No. <br /><span className='font-semibold'>FF/24-25/1263</span></td>
              <td className='border-[1px] border-black p-2 align-text-top'>Dated <br /><span className='font-semibold'>11 May 2024</span></td>
            </tr>
            <tr>
              <td className='border-[1px] border-black p-2 align-text-top'>Delivery Note</td>
              <td className='border-[1px] border-black p-2 align-text-top'>Mode/Terms of Payment</td>
            </tr>
            <tr>
              <td className='border-[1px] border-black p-2 align-text-top'>Supplier’s Ref.</td>
              <td className='border-[1px] border-black p-2 align-text-top'>Other Reference(s)</td>
            </tr>


            <tr className='align-text-top'>
              <td rowSpan={4} className='border-[1px] border-black p-2  align-text-top w-[400px]'>
                <div className=''>
                  <p className='font-semibold'>Buyer</p>
                  <p>Mr. Nikhil samar</p>
                  <p className='font-semibold mt-5'>State Name:</p>
                </div>
                </td>
              <td className='border-[1px] border-black p-2 align-text-top'>Buyer’s Order No.</td>
              <td className='border-[1px] border-black p-2 align-text-top'>Dated</td>
            </tr>
            <tr>
              <td className='border-[1px] border-black p-2 align-text-top'>Despatch Document No.</td>
              <td className='border-[1px] border-black p-2 align-text-top'>	Delivery Note Date</td>
            </tr>
            <tr>
              <td className='border-[1px] border-black p-2 align-text-top'>Despatched through</td>
              <td className='border-[1px] border-black p-2 align-text-top'>Destination</td>
            </tr>
            <tr>
               <td colSpan={2} className='border-[1px] border-black p-2 align-text-top'>Terms of Delivery</td>
            </tr>
          </table>
          <table className='w-full'>
              <tr>
                  <td className='border-[1px] border-t-0 border-black font-semibold p-2 text-center w-10'>Sr.</td>
                  <td className='border-[1px] border-t-0 border-black font-semibold p-2 align-text-top'>Particulars</td>
                  <td className='border-[1px] border-t-0 border-black font-semibold p-2 align-text-top'>HSN/SAC</td>
                  <td className='border-[1px] border-t-0 border-black font-semibold p-2 align-text-top'>Quantity</td>
                  <td className='border-[1px] border-t-0 border-black font-semibold p-2 text-end'>Rate</td>
                  <td className='border-[1px] border-t-0 border-black font-semibold p-2 align-text-top text-center'>per</td>
                  <td className='border-[1px] border-t-0 border-black font-semibold p-2 text-end'>Amount</td>
                </tr>
                <tr>
                <td className='border-[1px] border-black p-2 text-center align-text-top'>1.</td>
                <td className='border-[1px] border-black p-2'>
                  <div className='flex flex-col gap-4'>
                    <p>Nikhil Ji Dubai Trip</p>
                    <p>CGST@2.5% OUTPUT</p>
                    <p>SGST@2.5% OUTPUT</p>
                    <p>	TCS@5% OUTPUT</p>
                  </div>
                </td>
                <td className='border-[1px] border-black p-2 align-text-top'>25500</td>
                <td className='border-[1px] border-black p-2 align-text-top'></td>
                <td className='border-[1px] border-black p-2 align-text-bottom text-end'>
                  <div className='flex flex-col gap-4 items-end justify-end '>
                    <p></p>
                     <p>2.5</p>
                     <p>2.5</p>
                     <p>5</p>
                  </div>
                </td>
                <td className='border-[1px] border-black p-2 align-text-bottom text-center'>
                  <div className='flex flex-col gap-4 items-center '>
                    <p></p>
                     <p>%</p>
                     <p>%</p>
                     <p>%</p>
                  </div>
                </td>
                <td className='border-[1px] border-black p-2 align-text-bottom text-center'>
                  <div className='flex flex-col gap-4 items-end '>
                    <p>₹25,500</p>
                     <p>₹250</p>
                     <p>₹250</p>
                     <p>₹775</p>
                  </div>
                </td>
                </tr>
                <tr>
                  <td className='border-[1px] border-t-0 border-black font-semibold p-2 align-text-top'></td>
                  <td className='border-[1px] border-t-0 border-black font-semibold p-2 align-text-top'></td>
                  <td className='border-[1px] border-t-0 border-black font-semibold p-2 align-text-top'></td>
                  <td className='border-[1px] border-t-0 border-black font-semibold p-2 align-text-top'></td>
                  <td className='border-[1px] border-t-0 border-black font-semibold p-2 align-text-top'></td>
                  <td className='border-[1px] border-t-0 border-black  p-2 align-text-top text-center'>Total</td>
                  <td className='border-[1px] border-t-0 border-black  p-2 align-text-top text-end'>₹26,775</td>
                </tr>
                <tr>
                  <td colSpan={6} className='border-[1px] border-t-0 border-black  p-2 align-text-top'>
                    <div>
                      <p>Amount Chargeable (in words)</p>
                      <p className='font-semibold'>Twenty Six Thousands Seven Hundred And Seventy Five Rupees Only</p>
                    </div>
                  </td>
                  <td className='border-[1px] border-t-0 border-black  p-2 align-text-top text-end'>E. & O.E</td>
                </tr>
          </table>
          <table className='w-full'>
            <tr>
               <td rowSpan={2} className='border-[1px] border-t-0 border-black font-semibold p-2 align-text-top'>HSN/SAC</td>
               <td rowSpan={2} className='border-[1px] border-t-0 border-black font-semibold p-2 align-text-top'>Taxable Value</td>
               <td colSpan={2} className='border-[1px] border-t-0 border-black font-semibold p-2 align-text-top text-center'>Central Tax</td>
               <td colSpan={2} className='border-[1px] border-t-0 border-black font-semibold p-2 align-text-top text-center'>State Tax</td>
               <td colSpan={2} className='border-[1px] border-t-0 border-black font-semibold p-2 align-text-top text-center'>TCS</td>
               <td rowSpan={2} className='border-[1px] border-t-0 border-black font-semibold p-2 align-text-top text-end'>Total Tax Amount</td>
            </tr>
            <tr>
               <td className='border-[1px] text-center  border-t-0 border-black font-semibold p-2 align-text-top'>Rate</td>
               <td className='border-[1px] text-center border-t-0 border-black font-semibold p-2 align-text-top'>Amount</td>
               <td className='border-[1px] text-center border-t-0 border-black font-semibold p-2 align-text-top'>Rate</td>
               <td className='border-[1px] text-center border-t-0 border-black font-semibold p-2 align-text-top'>Amount</td>
               <td className='border-[1px] text-center border-t-0 border-black font-semibold p-2 align-text-top'>Rate</td>
               <td className='border-[1px] text-center border-t-0 border-black font-semibold p-2 align-text-top'>Amount</td>
            </tr>
            <tr>
               <td className='border-[1px] border-t-0 border-black p-2 align-text-top'>25500</td>
               <td className='border-[1px] border-t-0 border-black p-2 align-text-top'>26775</td>
               <td className='border-[1px] border-t-0 border-black p-2 align-text-top text-center'>2.5%</td>
               <td className='border-[1px] border-t-0 border-black p-2 align-text-top text-center'>250</td>
               <td className='border-[1px] border-t-0 border-black p-2 align-text-top text-center'>2.5%</td>
               <td className='border-[1px] border-t-0 border-black p-2 align-text-top text-center'>250</td>
               <td className='border-[1px] border-t-0 border-black p-2 align-text-top text-center'>5%</td>
               <td className='border-[1px] border-t-0 border-black p-2 align-text-top text-center'>775</td>
               <td className='border-[1px] border-t-0 border-black p-2 align-text-top text-end'>₹1,275</td>
            </tr>
            <tr>
               <td className='border-[1px] border-t-0 border-black p-2 align-text-top font-semibold text-end'>Total</td>
               <td className='border-[1px] border-t-0 border-black p-2 align-text-top font-semibold'>₹26,775</td>
               <td className='border-[1px] border-t-0 border-black p-2 align-text-top font-semibold text-center'></td>
               <td className='border-[1px] border-t-0 border-black p-2 align-text-top font-semibold text-center'>₹250</td>
               <td className='border-[1px] border-t-0 border-black p-2 align-text-top font-semibold text-center'></td>
               <td className='border-[1px] border-t-0 border-black p-2 align-text-top font-semibold text-center'>₹250</td>
               <td className='border-[1px] border-t-0 border-black p-2 align-text-top font-semibold text-center'></td>
               <td className='border-[1px] border-t-0 border-black p-2 align-text-top font-semibold text-center'>₹775</td>
               <td className='border-[1px] border-t-0 border-black p-2 align-text-top font-semibold text-end'>₹1,275</td>
            </tr>
            <tr>
               <td colSpan={3} className='border-[1px] border-t-0 border-black p-2 align-text-top text-start'>Tax Amount (in words) :</td>
               <td colSpan={6} className='border-[1px] border-t-0 border-black font-semibold p-2 align-text-top text-start'>One Thousand Two Hundred And Seventy Five Rupees Only</td>
            </tr>
          </table>
          <table className='w-full'>
            <tr>
              <td className='border-[1px] border-t-0 border-black p-2 text-start'>
                <p className='text-3xl font-semibold mb-2 mt-3'>Terms & Conditions:</p>
                <p>1. All Cheques / Demand Drafts in payment of bills should be drawn in favor of WEBFREEZE SOLUTION PVT. LTD. and should be "A/c Payee Only".</p>
                <p>2. All prices mentioned in Indian Rupees.</p>
                <p className='mb-3'>3. Please send payment within 30 days of receiving this invoice. There will be a 1.5% interest charge per month on late invoices.</p>
              </td>
              <td className='w-80 border-[1px] border-t-0 border-black p-2 text-end'>
                
                  <p className='font-semibold mt-20'>for Travbizz Travel IT Solutions</p>
                  <p className='align-text-bottom mt-12'>Authorised Signatory</p>
              </td>
            </tr>
            <tr>
              <td colSpan={2} className='text-md border-[1px] border-t-0 border-black p-2 text-center'>THIS IS A COMPUTER GENERATED INVOICE</td>
            </tr>
          </table>
          </div>

          <div className='flex justify-end gap-3'>
            <button className='mt-4 text-sm bg-[#12344d] text-white p-1 flex items-center gap-1 rounded-md font-semibold px-3 hover:bg-[#1699dd]'>Print</button>
            <button onClick={handleClose} className='mt-4 text-sm bg-[#12344d] text-white p-1 flex items-center gap-1 rounded-md font-semibold px-3 hover:bg-[#1699dd]'>Send Mail</button>
          </div>
       </div>
</div>



const editModal = <div>
     <div className='flex justify-between text-xl font-semibold bg-[#fcfdfd] p-2 items-center w-[400px]'>
        <h3>Schedule Payment</h3>
        <IoClose className='cursor-pointer font-bold ' onClick={handleClose}/>
      </div>
       <hr />  

       <div className='p-4'>
             <p className='text-xs mt-4'>Amount*</p>
             <input className='mt-1 w-full p-1 px-2 border-[1px] outline-none border-gray-400 focus:border-black transition-all rounded-md' type="number" />

             <p className='text-xs mt-6'>Date*</p>
             <input className='mt-1 w-full p-1 px-2 border-[1px] outline-none border-gray-400 focus:border-black transition-all rounded-md' type="date" />

             <p className='text-xs mt-6'>Status*</p>
             <select className='mt-1 w-full p-1 px-2 border-[1px] outline-none border-gray-400 focus:border-black transition-all rounded-md'>
              <option value="Scheduled">Scheduled</option>
              <option value="Paid">Paid</option>
             </select>

             <p className='text-xs mt-6'>Remark</p>
             <textarea className='mt-1 w-full p-1 px-2 border-[1px] outline-none border-gray-400 focus:border-black transition-all rounded-md' name="" id=""></textarea>


             <hr className='mt-8'/>

            <div className='flex justify-end'>
              <button className='mt-4 text-sm bg-[#12344d] text-white p-1 flex items-center gap-1 rounded-md font-semibold px-3 hover:bg-[#1699dd]'>Save</button>
            </div>
      </div> 

</div>


  return (
    <>
      {/* <div className='flex flex-col justify-center items-center w-full h-[70%] text-[#999999]'>
          <FaBriefcase className='text-6xl mb-3' />
          <p>No itinerary confirmed or supplier's cancellation date not entered</p>
      </div> */}
      <div className='p-3'>
        <div className='flex justify-evenly gap-2'>
            <div className='bg-[#655be6] shadow-lg text-white p-1 flex flex-col justify-center items-center px-5 rounded-md'>
                <h3 className='font-semibold text-2xl'>₹46,351</h3>
                <p className='text-xs font-semibold mb-1'>TOTAL AMOUNT</p>
            </div>
            <div className='bg-[#0cb5b5] shadow-lg text-white p-1 flex flex-col justify-center items-center px-5 rounded-md'>
                <h3 className='font-semibold text-2xl'>₹15,000</h3>
                <p className='text-xs font-semibold mb-1'>RECEIVED</p>
            </div>
            <div className='bg-[#e45555] shadow-lg text-white p-1 flex flex-col justify-center items-center px-5 rounded-md'>
                <h3 className='font-semibold text-2xl'>₹31,351</h3>
                <p className='text-xs font-semibold mb-1'>PENDING</p>
            </div>
            <div className='bg-[#ffffff] shadow-lg text-black p-1 flex flex-col justify-center items-center px-5 rounded-md'>
                <h3 className='font-semibold text-2xl'>₹12,851</h3>
                <p className='text-xs font-semibold mb-1'>GROSS PROFIT</p>
            </div>
            <div className='bg-[#e69f5b] shadow-lg text-white p-1 flex flex-col justify-center items-center px-5 rounded-md'>
                <h3 className='font-semibold text-2xl'>₹33,500</h3>
                <p className='text-xs font-semibold mb-1'>SUPPLIER AMOUNT</p>
            </div>
            <div className='bg-[#71b183] shadow-lg text-white p-1 flex flex-col justify-center items-center px-5 rounded-md'>
                <h3 className='font-semibold text-2xl'>₹1,000</h3>
                <p className='text-xs font-semibold mb-1'>SUPPLIER RECEIVED</p>
            </div>
            <div className='bg-[#ae8393] shadow-lg text-white p-1 flex flex-col justify-center items-center px-5 rounded-md'>
                <h3 className='font-semibold text-2xl'>₹32,500</h3>
                <p className='text-xs font-semibold mb-1'>SUPPLIER PENDING</p>
            </div>
        </div>

        <div className="flex justify-between bg-[#f7f7f7] p-1 pl-3 rounded-md items-center mt-3">
          <p className="font-semibold text-sm">Payments (3)</p>
          <button onClick={() => handleOpen(sendPayment)} className="text-xs font-semibold bg-blue-700 text-white p-1 px-2 rounded-md">Send Payment Plan To Mail</button>
        </div>

        {/* table div */}


        <div className='border-[1px] mt-3 p-3 rounded-md'>
            <div className='w-full'>
                <table className='w-full'>
                  <tr className='w-full'>
                    <td className='border-[1px] text-xs font-semibold p-2'>Payment ID</td>
                    <td className='border-[1px] text-xs font-semibold p-2'>Trans. ID</td>
                    <td className='border-[1px] text-xs font-semibold p-2'>Type</td>
                    <td className='border-[1px] text-xs font-semibold p-2'>Amount</td>
                    <td className='border-[1px] text-xs font-semibold p-2'>Payment Date</td>
                    <td className='border-[1px] text-xs font-semibold p-2'>Status</td>
                    <td className='border-[1px] text-xs font-semibold p-2'></td>
                    <td className='border-[1px] text-xs font-semibold p-2'>Convenience Fee</td>
                    <td className='border-[1px] text-xs font-semibold p-2'>Receipt</td>
                    <td className='border-[1px] text-xs font-semibold p-2'>Action</td>
                  </tr>
                  <tr className='w-full'>
                    <td className='border-[1px] text-xs p-2'>-</td>
                    <td className='border-[1px] text-xs p-2'>-</td>
                    <td className='border-[1px] text-xs p-2'></td>
                    <td className='border-[1px] text-xs p-2'>₹50000</td>
                    <td className='border-[1px] text-xs p-2'>22/05/2024</td>
                    <td className='border-[1px] text-xs p-2'><span className='bg-[#fdba45] font-semibold p-1 px-2 rounded-md'>Scheduled</span></td>
                    <td className='border-[1px] text-xs p-2 text-center'><button onClick={()=>handleOpen(sendPayment)} className='bg-[#1699dd] hover:bg-[#1489c6] transition-all text-white font-semibold p-1 px-2 rounded-md'>Send Link</button></td>
                    <td className='border-[1px] text-xs p-2 text-center'><input defaultValue={0} className='text-center outline-none border-[1px] p-1' type="number" /></td>
                    <td className='border-[1px] text-xs p-2'></td>
                    <td className='border-[1px] text-xs p-2'><span><button className='bg-[#f9392f] hover:bg-[#f82116] p-1 px-2 text-white font-semibold rounded-md'>Delete</button> <button onClick={()=>handleOpen(editModal)} className='bg-[#1699dd] hover:bg-[#1489c6] p-1 px-2 text-white font-semibold rounded-md'>Edit</button></span></td>
                  </tr>
                  <tr className='w-full'>
                    <td className='border-[1px] text-xs p-2'>-</td>
                    <td className='border-[1px] text-xs p-2'>-</td>
                    <td className='border-[1px] text-xs p-2'></td>
                    <td className='border-[1px] text-xs p-2'>₹50000</td>
                    <td className='border-[1px] text-xs p-2'>25/05/2024</td>
                    <td className='border-[1px] text-xs p-2'><span className='bg-[#fdba45] font-semibold p-1 px-2 rounded-md'>Scheduled</span></td>
                    <td className='border-[1px] text-xs p-2 text-center'><button onClick={()=>handleOpen(sendPayment)} className='bg-[#1699dd] hover:bg-[#1489c6] transition-all text-white font-semibold p-1 px-2 rounded-md'>Send Link</button></td>
                    <td className='border-[1px] text-xs p-2 text-center'><input defaultValue={0} className='text-center outline-none border-[1px] p-1' type="number" /></td>
                    <td className='border-[1px] text-xs p-2'></td>
                    <td className='border-[1px] text-xs p-2'><span><button className='bg-[#f9392f] hover:bg-[#f82116] p-1 px-2 text-white font-semibold rounded-md'>Delete</button> <button onClick={()=>handleOpen(editModal)} className='bg-[#1699dd] hover:bg-[#1489c6] p-1 px-2 text-white font-semibold rounded-md'>Edit</button></span></td>
                  </tr>
                  <tr className='w-full'>
                    <td className='border-[1px] text-xs p-2'>-</td>
                    <td className='border-[1px] text-xs p-2'>-</td>
                    <td className='border-[1px] text-xs p-2'></td>
                    <td className='border-[1px] text-xs p-2'>₹135351</td>
                    <td className='border-[1px] text-xs p-2'>29/05/2024</td>
                    <td className='border-[1px] text-xs p-2'><span className='bg-[#fdba45] font-semibold p-1 px-2 rounded-md'>Scheduled</span></td>
                    <td className='border-[1px] text-xs p-2 text-center'><button onClick={()=>handleOpen(sendPayment)} className='bg-[#1699dd] hover:bg-[#1489c6] transition-all text-white font-semibold p-1 px-2 rounded-md'>Send Link</button></td>
                    <td className='border-[1px] text-xs p-2 text-center'><input defaultValue={0} className='text-center outline-none border-[1px] p-1' type="number" /></td>
                    <td className='border-[1px] text-xs p-2'></td>
                    <td className='border-[1px] text-xs p-2'><span><button className='bg-[#f9392f] hover:bg-[#f82116] p-1 px-2 text-white font-semibold rounded-md'>Delete</button> <button onClick={()=>handleOpen(editModal)} className='bg-[#1699dd] hover:bg-[#1489c6] p-1 px-2 text-white font-semibold rounded-md'>Edit</button></span></td>
                  </tr>
                  <tr>
                    <td colSpan={3} className='border-[1px] text-xs p-2 text-end font-semibold'>Not Scheduled Amount:</td>
                    <td className='border-[1px] text-xs p-2 font-semibold'>₹0</td>
                    <td colSpan={6} className='border-[1px] text-xs p-2 font-semibold'></td>
                  </tr>
                </table>
            </div>
        </div>

        {/* table end */}

        <div className="flex justify-between bg-[#f7f7f7] p-1 pl-3 rounded-md items-center mt-3">
          <p className="font-semibold text-sm">Invoice</p>
        </div>

        <div className='border-[1px] mt-3 p-3 rounded-md flex items-center justify-between mb-5'>
          <div className='flex gap-2 items-center'>
            <p><IoDocumentText className='text-5xl text-[#0066cc] '/></p>
            <div>
              <p className='text-[#666666] text-sm font-medium'>Invoice - 16 May 2024</p>
              <p className='text-xl'>GI/23-24/001</p>
            </div>
          </div>
          <button onClick={() => handleOpen(viewInvoice)} className='bg-[#264966] hover:bg-[#203d55] transition-all text-white p-1 px-3 text-sm rounded-md'>View Invoice</button>
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
    </>
  )
}

export default Billing