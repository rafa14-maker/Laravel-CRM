import { Box, Modal } from "@mui/material";
import React, { useEffect, useState } from "react";
import { FaBed } from "react-icons/fa";
import { IoIosStar } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { RiPencilFill } from "react-icons/ri";
import logo from "../assets/images/logo.png"




const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  height: "auto",
  transform: 'translate(-50%, -50%)',
  width: 700,
  bgcolor: 'background.paper',
  outline: "none",
  boxShadow: 24,
  borderRadius: "8px",
  p: 1 ,

};


const PostSalesCard = (props) => {

  const [open, setOpen] = React.useState(false);
  const [modalContent, setModalContent] = useState("");
  const [type, setType] = useState(false);



  const handleOpen = (content) => {
    setModalContent(content);
    setOpen(true);


  };

  const handleClose = () => setOpen(false);



  

  const optionArr = ["Select" ,"TravBizz IT Solution" , "Abad Hotels" , "User Panel" , "Abad Hotels" , "Assign to" , "Aszim Khaki" , "Ab R Khan - Testing" , "Afjal Khan" , "AFTHAB VP" , "travel boutique"]
  const bookingArr = [ "Mail Sent" , "Pending Confirmation" , "Confirmed" ,  "Not Confirmed" , "Rates Negotiation"]





  const updatePaymentModal  = <div>
    <div className='flex justify-between text-xl font-semibold bg-[#fcfdfd] p-2 items-center'>
        <h3>Reply Mail</h3>
       <IoClose className='cursor-pointer font-bold ' onClick={handleClose}/>
    </div>
    <hr />


<div className="p-3">


    <div className='mt-6 flex gap-3 items-end'>
    <div className=' w-full'>
      <p htmlFor="Supplier" className='text-xs mb-1'>Supplier*</p>
      <select className='outline-none border-[1px] px-2 w-full p-1 focus:border-black transition-all rounded-md' defaultValue={props.tValue1.props.children}>
          {optionArr.map((item)=>{
            return <option value={item}>{item}</option>
          })}
         
      </select>
      
    </div>
    <div className=' w-full'>
      <p htmlFor="Supplier" className='text-xs mb-1'>Booking Status*</p>
      <select className='bg-[#01c875] text-white outline-none border-[1px] px-2 w-full p-1 focus:border-black transition-all rounded-md' defaultValue={props.tValue2.props.children}>
          {bookingArr.map((item)=>{
            return <option value={item}  >{item}</option>
          })}
         
      </select>
    </div>
    <div className=' w-full'>
      <p htmlFor="Supplier" className='text-xs mb-1'>Conf No.</p>
      <input defaultValue="ratan test2342" className='outline-none border-[1px] px-2 w-full p-1 focus:border-black transition-all rounded-md' type="text" />
    </div>
    <div className=' w-full'>
      <p htmlFor="Supplier" className='text-xs mb-1'>Booking Status*</p>
      <select className='bg-[#01c875] text-white outline-none border-[1px] px-2 w-full p-1 focus:border-black transition-all rounded-md' defaultValue={props.tValue2.props.children}>
          <option value=""><img src={logo} alt="" />Amount Paid </option>
          <option value="">Payment Pending</option>
      </select>
    </div>
  </div>

  <div className="mt-6 flex gap-3 items-end">
  <div className=' w-full'>
      <p htmlFor="Supplier" className='text-xs mb-1'>Due Date</p>
     <input className="outline-none border-[1px] px-2 w-full p-1 focus:border-black transition-all rounded-md" type="date" />
  </div>

  <div className=' w-full'>
      <p htmlFor="Supplier" className='text-xs mb-1'>Cancellation Date</p>
     <input className="outline-none border-[1px] px-2 w-full p-1 focus:border-black transition-all rounded-md" type="date" />
  </div>

  <div className=' w-full'>
      <p htmlFor="Supplier" className='text-xs mb-1'>Supplier Amount*</p>
     <input className="outline-none border-[1px] px-2 w-full p-1 focus:border-black transition-all rounded-md" type="number" />
  </div>

  <div className=' w-full'>
      <p htmlFor="Supplier" className='text-xs mb-1'>Paid Amt.</p>
     <input className="outline-none border-[1px] px-2 w-full p-1 focus:border-black transition-all rounded-md" type="number" />
  </div>
  </div>

  <div className="mt-6 flex gap-3 items-end justify-end">
    <div className=' w-[23%]'>
        <p htmlFor="Supplier" className='text-xs mb-1'>Pending Amt.</p>
      <input className="outline-none border-[1px] px-2 w-full p-1 focus:border-black transition-all rounded-md" type="number" />
    </div>
  </div>

  <hr  className="mt-10"/>

  <div className="flex justify-end">
    <button className="mt-5 text-sm font-semibold rounded-md bg-[#153751] text-white p-1 px-3">Save</button>
  </div>

</div>

  </div>

  const remarkModal = <div>
    <div className='flex justify-between text-xl font-semibold bg-[#fcfdfd] p-2 items-center'>
        <h3>Remark</h3>
       <IoClose className='cursor-pointer font-bold ' onClick={handleClose}/>
    </div>
    <hr />

 <div className="p-4 mt-5">
    <div className="flex gap-3 items-start mb-3">
        <textarea placeholder="Enter Remark..." className="border-[1px] w-full p-2 border-gray-400 outline-none focus:border-black transition-all rounded-md" name="" id=""></textarea>
        <button className="bg-[#12344d] text-white rounded-md w-32 text-sm h-16 font-semibold hover:bg-[#243a49]">Submit</button>
      </div>

      <h2 className="text-[#999999] text-center text-sm mb-2">
         No Remark
      </h2>
 </div>
  </div> 

  return (
    <>
      
        <div className="p-3 border-[1px] rounded-md bg-white pb-6">
          <div className="py-1 w-full rounded-md bg-[#f7f7f7]">
            {props.head}
          </div>

          {/* table div */}

          <div className="border-[1px] p-3 mt-3 rounded-md">
            <div className="flex justify-between items-center">
                 <div>
                    {props.smallHead}
                 </div>
                 <div className="text-xs flex gap-2">
                    <button className="bg-[#39b7c1] p-1 px-3 rounded-md text-white font-medium"  onClick={()=> handleOpen(remarkModal)}>Remark (0)</button>
                    <button onClick={()=> handleOpen(updatePaymentModal)} className="flex items-center gap-1 bg-[#005ee2] p-1 px-3 rounded-md text-white font-medium"><RiPencilFill />Update Payment</button>
                 </div>
            </div>

            {/* main table */}


            <div className="mt-2">
                <table className="text-xs w-full">
                    <tr className="font-semibold w-full">
                        <td className="border-[1px] border-[#999999] p-1">Supplier</td>
                        <td className="border-[1px] border-[#999999] p-1">Status</td>
                        <td className="border-[1px] border-[#999999] p-1">Payment</td>
                        <td className="border-[1px] border-[#999999] p-1 text-center">Amount</td>
                        <td className="border-[1px] border-[#999999] p-1 text-center">Cancellation</td>
                        <td className="border-[1px] border-[#999999] p-1 text-center">Due Date</td>
                        <td className="border-[1px] border-[#999999] p-1 text-center">Paid Amount</td>
                        <td className="border-[1px] border-[#999999] p-1 text-center">Pending</td>
                    </tr>
                    <tr>
                        <td className="border-[1px] border-[#999999] p-1">{props.tValue1}{props.tValueCn}</td>
                        <td className="border-[1px] border-[#999999] p-1">{props.tValue2}</td>
                        <td className="border-[1px] border-[#999999] p-1">{props.tValue3}</td>
                        <td className="border-[1px] border-[#999999] p-1 text-center">{props.tValue4}</td>
                        <td className="border-[1px] border-[#999999] p-1 text-center text-[#FF0000]">{props.tValue5}</td>
                        <td className="border-[1px] border-[#999999] p-1 text-center text-[#FF0000]">{props.tValue6}</td>
                        <td className="border-[1px] border-[#999999] p-1 text-center">{props.tValue7}</td>
                        <td className="border-[1px] border-[#999999] p-1 text-center">{props.tValue8}</td>
                    </tr>
                </table>
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
   
    </>
  );
};

export default PostSalesCard;
