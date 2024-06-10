import { useEffect, useState } from "react";
import DashboardHeader from "../../../Components/DashboardHeader";
import "./organisationSetting.css";
import CenterModal from "../../Queries/ViewProposal/CenterModal";
import { IoClose } from "react-icons/io5";

export default function OrganisationSetting() {
  
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







  const editOrganisation = <div>
    <div className='flex justify-between text-2xl font-semibold bg-[#fcfdfd] p-2 items-center w-[600px]'>
      <h3>Edit organisation settings</h3>
      <IoClose className='cursor-pointer font-bold ' onClick={handleCloseModal}/>
    </div>
    <hr />

    <div className="mt-3 p-3">
      <div className="flex gap-4">
        <div className=' w-full'>
             <p htmlFor="Supplier" className='text-xs mb-2'>Organisation name</p>
            <input defaultValue={"Travbizz Travel IT Solutions"} className="outline-none border-[1px] px-2 w-full p-1 focus:border-black transition-all rounded-md" type="text" />
         </div>
         <div className=' w-full'>
             <p htmlFor="Supplier" className='text-xs mb-2'>Email</p>
            <input defaultValue={"info@travbizz.com"} className="outline-none border-[1px] px-2 w-full p-1 focus:border-black transition-all rounded-md" type="email" />
         </div>
      </div>
      <div className="flex gap-4 mt-4">
        <div className=' w-full'>
             <p htmlFor="Supplier" className='text-xs mb-2'>Phone</p>
            <input defaultValue={"9873027426"} className="outline-none border-[1px] px-2 w-full p-1 focus:border-black transition-all rounded-md" type="text" />
         </div>
         <div className=' w-full'>
             <p htmlFor="Supplier" className='text-xs mb-2'>Address</p>
            <input defaultValue={"Noida, India"} className="outline-none border-[1px] px-2 w-full p-1 focus:border-black transition-all rounded-md" type="text" />
         </div>
      </div>
      <div className=' w-full mt-4'>
             <p htmlFor="Supplier" className='text-xs mb-2'>GSTN</p>
            <input defaultValue={"000000000000000"} className="outline-none border-[1px] px-2 w-full p-1 focus:border-black transition-all rounded-md" type="text" />
      </div>
      <div className=' w-full mt-4'>
             <p htmlFor="Supplier" className='text-xs mb-2'>State</p>
            <input defaultValue={"UP"} className="outline-none border-[1px] px-2 w-full p-1 focus:border-black transition-all rounded-md" type="text" />
      </div>
      <div className=' w-full mt-4'>
             <p htmlFor="Supplier" className='text-xs mb-2'>State Code</p>
            <input defaultValue={"India "} className="outline-none border-[1px] px-2 w-full p-1 focus:border-black transition-all rounded-md" type="text" />
      </div>
      <div className=' w-full mt-4'>
             <p htmlFor="Supplier" className='text-xs mb-2'>Voucher PIN</p>
            <input defaultValue={"0 "} className="outline-none border-[1px] px-2 w-full p-1 focus:border-black transition-all rounded-md" type="text" />
      </div>

      <hr className="mt-4"/>

      <div className="flex justify-end">
      <button onClick={handleCloseModal} className='mt-3 text-sm bg-[#12344d] text-white p-2 flex items-center gap-1 rounded-md font-semibold px-3 hover:bg-[#1699dd]'>Save</button>
      </div>
    </div>
  </div> 

  

  
  return (
    <main className="p-5 w-full h-full">
      <DashboardHeader title="Organisation Settings" />

      <button onClick={()=> handleOpenModal(editOrganisation)} className="edit-button">Edit settings</button>

      <article className="settings-table">
        <p>Organisation name</p>
        <p>TravBizzz</p>
        <p>Email (Invoicing use)</p>
        <p>crm@travbizz.com</p>
        <p>Phone (Invoicing use)</p>
        <p>1234567890</p>
        <p>Address</p>
        <p>4rth floor, C-54, Sector 2 Noida 201301.</p>
        <p>GSTN</p>
        <p>ASKDJ3437</p>
        <p>State</p>
        <p>Uttar Pradesh</p>
        <p>State code</p>
        <p>India</p>
      </article>


      <CenterModal open={modalOpen} onClose={handleCloseModal} data={modalContent}/>
    </main>
    
  );
}
