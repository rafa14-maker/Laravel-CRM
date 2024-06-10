import React, { useState , useEffect } from 'react'
import { GoMail } from "react-icons/go";
import { FaArrowAltCircleLeft, FaInfoCircle, FaUser } from "react-icons/fa";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { IoClose } from 'react-icons/io5';
import { MdOutlineReply } from 'react-icons/md';
import logo from '../../../assets/images/logo.png'
import { Height } from '@mui/icons-material';
import Editor from '../../../Components/Editor';
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


const Mail = () => {
  const [open, setOpen] = React.useState(false);
  const [modalContent, setModalContent] = useState("");

  const handleOpen = (content) => {
    setModalContent(content);
    setOpen(true);
  };

  const handleClose = () => setOpen(false);


  const composeTable = ReactDOMServer.renderToString(<div className='overflow-y-scroll h-[79vh]'>



  <div className='p-2 flex justify-between items-center' >
    <div>
      <p className='text-xl font-semibold'>niraj</p>
      <p className='text-sm font-semibold text-[#707070]'>northeasttravels1975@gmail.com</p>
    </div>
    <MdOutlineReply className="text-[#007bff] hover:text-[#0056b3] cursor-pointer" onClick={() => handleOpen(composeModal)}/>
  </div>


  <hr />


  <h4 className='text-2xl ml-2 font-semibold mt-1'>Request Received - Ref. No. 002499</h4>


{/* table div */}

    <div className='m-2 bg-[#f4fdff] pb-8'>
      <div className='flex justify-center'>
        <img src={logo} className='mt-8 mb-5' alt="" />
      </div>

        <div className='border-[1px] bg-white mx-[80px] p-4 pb-8 border-t-[4px] border-t-[#419bf3]'>
          <h4 className='text-2xl font-semibold mt-1'>Your Query Detail</h4>
          <p className='text-sm font-semibold text-[#707070] mt-1'>While replying to this query, please dont change the subject line.</p>

          <div className='bg-[#f7f7f7] p-3 mt-5'>
            <h3 className=' font-semibold bg-[#efefef] p-2'>Contact Detail</h3>

            <table className='text-xs w-full mt-1'>
              <tr className='font-semibold w-full'>
                <td>Name</td>
                <td>Phone/Mobile</td>
              </tr>
              <tr>
                <td className='py-2'>surender gupta</td>
                <td className='py-2'>98104 9059</td>
              </tr>
            </table>


             <h3 className=' font-semibold bg-[#efefef] p-2 mt-5'>Query Detail</h3>

            <table className='text-xs w-full mt-1'>
              <tr className='font-semibold w-full'>
                <td>From Date</td>
                <td>To Date</td>
                <td>Destination</td>
                <td>Duration</td>
              </tr>
              <tr>
                <td className='py-2'>02-04-2024</td>
                <td className='py-2'>05-04-2024</td>
                <td className='py-2'>Goa, ,</td>
                <td className='py-2'>3 Nights / 4 Days</td>
              </tr>
              <tr className='font-semibold w-full'>
                <td className='pt-5'>Created Date</td>
                <td className='pt-5'>Adult</td>
                <td className='pt-5'>Child</td>
                <td className='pt-5'>Infant</td>
              </tr>
              <tr>
                <td className='py-2'>30-03-2024 09:55 PM</td>
                <td className='py-2'>2</td>
                <td className='py-2'>0</td>
                <td className='py-2'>0</td>
              </tr>
            </table>
         
            
      

          </div>

            
        </div>
        
    </div>

    <div className='p-2 text-sm font-semibold'>
      <p className='font-normal'>3Night 4days</p>
      <p className='mt-5'>Thanks & Regards,</p>
      <p className='mt-5 mb-5'>Team Xogul <br />
        + 91 9797871223</p>
      <hr />
      <button className='mt-8 text-sm bg-[#12344d] text-white p-2 flex items-center gap-1 rounded-md font-semibold px-3 hover:bg-[#1699dd]'><MdOutlineReply />Reply</button>
    </div>
  </div>)
  

  const composeModal = <div>
    <div className='flex justify-between text-xl font-semibold bg-[#fcfdfd] p-2 items-center'>
  <h3>Reply Mail</h3>
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

      <div className='flex justify-end'>
         <button onClick={handleClose} className='mt-5 text-sm bg-[#12344d] text-white p-2 flex items-center gap-1 rounded-md font-semibold px-3 hover:bg-[#1699dd]'>Send Mail</button>
      </div>

    </div>
</div>


</div>


const composeModalMail = <div>
<div className='flex justify-between text-xl font-semibold bg-[#fcfdfd] p-2 items-center'>
<h3>Compose Mail</h3>
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

  <div className='flex justify-end'>
     <button onClick={handleClose} className='mt-5 text-sm bg-[#12344d] text-white p-2 flex items-center gap-1 rounded-md font-semibold px-3 hover:bg-[#1699dd]'>Send Mail</button>
  </div>

</div>
</div>


</div>



  const mailModal = <div>

     <div className='flex justify-between text-xl font-semibold bg-[#fcfdfd] p-2 items-center'>
    <h3>Mail</h3>
    <IoClose className='cursor-pointer font-bold ' onClick={handleClose}/>
  </div>

  <hr />

<div className='overflow-y-scroll h-[79vh]'>



  <div className='p-2 flex justify-between items-center' >
    <div>
      <p className='text-xl font-semibold'>niraj</p>
      <p className='text-sm font-semibold text-[#707070]'>northeasttravels1975@gmail.com</p>
    </div>
    <MdOutlineReply className="text-[#007bff] hover:text-[#0056b3] cursor-pointer" onClick={() => handleOpen(composeModal)}/>
  </div>


  <hr />


  <h4 className='text-2xl ml-2 font-semibold mt-1'>Request Received - Ref. No. 002499</h4>


{/* table div */}

    <div className='m-2 bg-[#f4fdff] pb-8'>
      <div className='flex justify-center'>
        <img src={logo} className='mt-8 mb-5' alt="" />
      </div>

        <div className='border-[1px] bg-white mx-[80px] p-4 pb-8 border-t-[4px] border-t-[#419bf3]'>
          <h4 className='text-2xl font-semibold mt-1'>Your Query Detail</h4>
          <p className='text-sm font-semibold text-[#707070] mt-1'>While replying to this query, please dont change the subject line.</p>

          <div className='bg-[#f7f7f7] p-3 mt-5'>
            <h3 className=' font-semibold bg-[#efefef] p-2'>Contact Detail</h3>

            <table className='text-xs w-full mt-1'>
              <tr className='font-semibold w-full'>
                <td>Name</td>
                <td>Phone/Mobile</td>
              </tr>
              <tr>
                <td className='py-2'>surender gupta</td>
                <td className='py-2'>98104 9059</td>
              </tr>
            </table>


             <h3 className=' font-semibold bg-[#efefef] p-2 mt-5'>Query Detail</h3>

            <table className='text-xs w-full mt-1'>
              <tr className='font-semibold w-full'>
                <td>From Date</td>
                <td>To Date</td>
                <td>Destination</td>
                <td>Duration</td>
              </tr>
              <tr>
                <td className='py-2'>02-04-2024</td>
                <td className='py-2'>05-04-2024</td>
                <td className='py-2'>Goa, ,</td>
                <td className='py-2'>3 Nights / 4 Days</td>
              </tr>
              <tr className='font-semibold w-full'>
                <td className='pt-5'>Created Date</td>
                <td className='pt-5'>Adult</td>
                <td className='pt-5'>Child</td>
                <td className='pt-5'>Infant</td>
              </tr>
              <tr>
                <td className='py-2'>30-03-2024 09:55 PM</td>
                <td className='py-2'>2</td>
                <td className='py-2'>0</td>
                <td className='py-2'>0</td>
              </tr>
            </table>
         
            
      

          </div>

            
        </div>
        
    </div>

    <div className='p-2 text-sm font-semibold'>
      <p className='font-normal'>3Night 4days</p>
      <p className='mt-5'>Thanks & Regards,</p>
      <p className='mt-5 mb-5'>Team Xogul <br />
        + 91 9797871223</p>
      <hr />
      <button onClick={() => handleOpen(composeModal)} className='mt-8 text-sm bg-[#12344d] text-white p-2 flex items-center gap-1 rounded-md font-semibold px-3 hover:bg-[#1699dd]'><MdOutlineReply />Reply</button>
    </div>
  </div>
  </div>

  return (
    <>
    <div className='p-3'>

      <div className='bg-[#f3f5f7] p-4 flex gap-4'>
        <button className='text-sm bg-[#12344d] text-white p-2 flex items-center gap-1 rounded-md font-semibold px-5 hover:bg-[#1699dd]' onClick={() => handleOpen(composeModalMail)}><GoMail />Compose</button>
        <button className='text-sm text-[#12344d] bg-white border-[1.5px] border-[#b1b0b0] p-2 px-5 rounded-md font-semibold flex items-center gap-1' onClick={() => handleOpen(composeModalMail)}><FaInfoCircle />northeasttravels1975@gmail.com</button>
      </div>

      <div className='flex items-center p-3 gap-5 hover:bg-[#f3f5f7] cursor-pointer' onClick={() => handleOpen(mailModal)}>
         <FaArrowAltCircleLeft className='text-[#f47836]' />
         <p className='text-sm '>northeasttravels1975@gmail.com</p>
         <p className='text-sm ml-36'>Request Received - Ref. No. 002499</p>
         <p className='text-sm ml-36'>30 March 2024</p>
      </div>
      <hr/>
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

export default Mail