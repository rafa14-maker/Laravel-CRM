import React from 'react';

function AgentDetails() {
  return (
    <>
       <div className='bg-[#f9fbfc] h-fit w-full flex'>


<div className='border-r w-[250px]'>
  <p className='text-xl font-semibold m-3 mt-4'>Agent Account</p>
  <div className='flex flex-col font-semibold text-sm items-start mt-5 text-[#212529]'>
      <button className='hover:bg-[#eff2f5] p-3 w-full text-left'>Agent Details</button>
      <button className='hover:bg-[#eff2f5] p-3 w-full text-left'>Followup's</button>
      <button className='hover:bg-[#eff2f5] p-3 w-full text-left'>Queries</button>
      <button className='hover:bg-[#eff2f5] p-3 w-full text-left'>Invoice</button>
      <button className='hover:bg-[#eff2f5] p-3 w-full text-left'>Payments History</button>
      <button className='hover:bg-[#eff2f5] p-3 w-full text-left'>Documents</button>
      <button className='hover:bg-[#eff2f5] p-3 w-full text-left'>Vendor Payment</button>
  </div>
</div>



<div className='pt-3 px-7 w-full h-fit'>

  <div className='bg-white w-full shadow rounded-md p-7'>
    <div className='flex items-center justify-between'>
      <div className='flex items-center gap-3'>
        <div className='flex justify-center items-center bg-[#c6e5f5] p-4 h-14 w-14 rounded-full'>
          <p className='text-3xl font-semibold'>r</p>
        </div>

        <div>
          <p className='text-sm font-semibold'>Mr. rohit ji</p>
          <p className='text-sm'>Type: <span className='font-semibold'>Agent</span></p>
          <p className='text-sm'>Created: <span className='font-semibold'>28-05-2024</span></p>
        </div>
      </div>
    
      <div className='flex items-center gap-5'>
      <Link to={"/agents"}><button className='text-sm bg-[#12344d] text-white p-1 px-3 rounded-md hover:bg-blue-600'>Back</button></Link>
        <div className='bg-[#c6e5f5] p-2 rounded-full hover:drop-shadow-xl transition-all hover:scale-125 active:scale-100 hover:bg-[#acafb191] cursor-pointer'>
          <MdEdit className='text-lg text-[#545e72]'/>
        </div >
      </div>
    </div>

    <hr className='mt-6 mb-6'/>


    <div>
      <h3 className=' font-semibold'>Agent Information</h3>


    <div className='flex fle'>
      <div className='flex flex-col gap-3 text-sm mt-2'>
        <p>Mobile</p>
        <p>Email</p>
        <p>Mobile 2</p>
        <p>Email 2</p>
        <p>City</p>
        <p>Address</p>
        <p>Date of Birth</p>
        <p>Marriage Anniversary	</p>
      </div>

      <div className='flex flex-col gap-3 text-sm mt-2'>
        <p>0 8881114429</p>
        <p>rohit888111.a2@gmail.com</p>
        <p className='text-[#999999]'>Not Provided</p>
      </div>
    </div>
    </div>
  </div>

  <div className='bg-white w-full shadow rounded-md p-7 mt-5'>
    <h3 className='font-semibold'>Followup's</h3>

    <table className='border w-full'>
      <tr className='bg-[#f5f7f9] border w-full'>
        <td className='border p-3 text-sm font-semibold text-[#565867] w-16'></td>
        <td className='border p-3 text-sm font-semibold text-[#565867]'>Query ID</td>
        <td className='border p-3 text-sm font-semibold text-[#565867]'>Details</td>
        <td className='border p-3 text-sm font-semibold text-[#565867]'>Reminder</td>
        <td className='border p-3 text-sm font-semibold text-[#565867]'>Status</td>
        <td className='border p-3 text-sm font-semibold text-[#565867]'>Assigned</td>
      </tr>
      <tr>
        <td className='border p-3 text-sm text-center'><div className='flex justify-center items-center text-lg'><IoMdCall /></div></td>
        <td className='border p-3 text-sm '>102771</td>
        <td className='border p-3 text-sm '>CALL AFTER TWO DAYS</td>
        <td className='border p-3 text-xs line-through text-[#ff0000] '><p className='flex items-center gap-2'><span><LuClock9 /></span> 28/05/2024 - 01:00 PM</p></td>
        <td className='border p-3 text-xs '><div className='flex flex-col justify-start items-start'><p className='bg-[#46cd93] text-white rounded-md p-1 px-2'>Done</p> 28/05/2024 - 07:20 PM</div></td>
        <td className='border p-3 text-xs '><div className='flex flex-col gap-1 font-semibold'>TravBizz <span className='text-[#565867] font-normal'>28/05/2024</span></div></td>
      </tr>
    </table>


  </div>


</div>


</div>
    </>
  );
};

export default AgentDetails;