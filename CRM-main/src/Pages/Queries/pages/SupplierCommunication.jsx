import React from "react";
import { FaRegCheckSquare } from "react-icons/fa";
import Editor from "../../../Components/Editor";
import ReactDOMServer from 'react-dom/server';
import { FaPaperPlane } from "react-icons/fa";

const SupplierCommunication = () => {
  const textfieldData = ReactDOMServer.renderToString(
    <div>
      <div>
        Dear Sir,<br />
        Kindly provide the best rates for below enquiry for at the earliest<br /><br />
        <table className="w-full border-collapse border border-gray-300" cellpadding="5">
          <tr className="bg-gray-200">
            <td colSpan="6" className="p-2"><strong>Enquiry Detail</strong></td>
          </tr>
          <tr>
            <td className="p-2"><strong>Customer Name </strong></td>
            <td className="p-2">Mr. Mohd Anas </td>
            <td className="p-2"><strong>Enquiry ID </strong></td>
            <td className="p-2">102731</td>
            <td className="p-2"><strong>Enquiry For </strong></td>
            <td className="p-2">Full package</td>
          </tr>
          <tr>
            <td className="p-2"><strong>Check-In</strong></td>
            <td className="p-2">16-05-2024</td>
            <td className="p-2"><strong>Check-Out </strong></td>
            <td className="p-2">17-05-2024</td>
            <td className="p-2"><strong>Nights</strong></td>
            <td className="p-2">0</td>
          </tr>
          <tr>
            <td className="p-2"><strong>Destination</strong></td>
            <td className="p-2"></td>
            <td className="p-2"><strong>Total Pax</strong></td>
            <td className="p-2" colSpan="3">1 Adult - 0 Child - 0 Infant <strong> </strong></td>
          </tr>
          <tr>
            <td className="p-2"><strong>Remarks</strong></td>
            <td className="p-2" colSpan="5"> </td>
          </tr>
        </table>
        <div className="pointer-events-none">
          <div className="mt-20 text-base p-4 mb-20 font-semibold bg-gray-200">Hotel</div>
          <div className="mt-20 text-base p-4 mb-20 font-semibold bg-gray-200">Transfers / Activity</div>
          <table className="w-full border-collapse border border-gray-300 mb-10">
            <tr className="bg-gray-200">
              <td width="33%" className="p-2"><strong>Name  </strong></td>
              <td width="33%" className="p-2"><strong>Date</strong></td>
              <td width="33%" className="p-2"><strong>Type</strong></td>
            </tr>
          </table>
        </div>
        <div dir="ltr">
          <p className="m-0 text-sm text-gray-700 font-medium"><strong>Thanks & Regards,</strong></p>
          <p className="m-0 text-sm text-gray-700 font-medium"> </p>
          <p className="m-0 text-sm text-gray-700 font-medium"><strong>Team Travbizz.com</strong></p>
          <p className="m-0 text-sm text-gray-700 font-medium"><strong>+ 91 9797871223</strong></p>
        </div>
      </div>
    </div>
  );


  return (
    <>
      <div className="m-3 flex gap-6 justify-between">
        <div className="w-full">
          <h3 className="font-semibold text-sm bg-[#f7f7f7] p-2 px-3 ">Supplier Communication</h3>

          <div className="flex flex-col gap-1 mt-3">
            <label htmlFor="Subject" className="text-xs">Subject</label>
            <input type="text" className="outline-none border-[1px] p-1 px-2 rounded-md focus:border-black transition-all" />
          </div>

          <div className="flex flex-col gap-1 mt-3">
            <label htmlFor="Subject" className="text-xs">CC Email</label>
            <input type="text" className="outline-none border-[1px] p-1 px-2 rounded-md focus:border-black transition-all" />
          </div>

          <section className="mt-5">
            <Editor data={textfieldData} />
          </section>

         <div className="flex justify-end">
            <button className="flex items-center p-1 mt-4 gap-2 bg-[#12344d] hover:bg-[#67bde9] transition-all text-white px-3 text-sm rounded-md"><FaPaperPlane />Send Mail To Selected Suppliers</button>
         </div>
        </div>

        <div className="w-[500px]">
          <div className="">
            <h3 className="font-semibold text-sm flex items-center gap-1 bg-[#f7f7f7] p-2 px-3"><FaRegCheckSquare />Select Supplier</h3>
          </div>

    {/* card div */}

        <div id="card div" className="overflow-y-scroll h-screen mt-4">

         <div className="flex gap-4 border-[1.5px] p-2 py-4 rounded-md items-start hover:bg-[#ffffcc]">
             <input type="checkbox" className="scale-150 mt-2 ml-2" />
           <div>
             <h3 className="text-xs font-semibold">Abad Hotels</h3>
             <p className="text-xs flex items-center flex-wrap mt-1">Mr. Abad Hotels <div className="bg-[#e0e3ec] rounded-full h-2 w-2 mt-1 mx-3"></div>Mr. Abad Hotels</p>
           </div>
          </div>

          <div className="flex gap-4 border-[1.5px] mt-4 p-2 py-4 rounded-md items-start hover:bg-[#ffffcc]">
             <input type="checkbox" className="scale-150 mt-2 ml-2" />
           <div>
             <h3 className="text-xs font-semibold">abc</h3>
             <p className="text-xs flex items-center flex-wrap mt-1">Mr. fais Private Limited <div className="bg-[#e0e3ec] rounded-full mx-3 h-2 w-2 mt-1"></div>  tustehofye@gufum.com</p>
           </div>
          </div>

          <div className="flex gap-4 border-[1.5px] mt-4 p-2 py-4 rounded-md items-start hover:bg-[#ffffcc]">
             <input type="checkbox" className="scale-150 mt-2 ml-2" />
           <div>
             <h3 className="text-xs font-semibold">ATLAS</h3>
             <p className="text-xs flex items-center flex-wrap mt-1">Mr. ABBAS ABBAS <div className="bg-[#e0e3ec] rounded-full mx-3 h-2 w-2 mt-1"></div>ABBAS@A.COM</p>
           </div>
          </div>

          <div className="flex gap-4 border-[1.5px] mt-4 p-2 py-4 rounded-md items-start hover:bg-[#ffffcc]">
             <input type="checkbox" className="scale-150 mt-2 ml-2" />
           <div>
             <h3 className="text-xs font-semibold">abc</h3>
             <p className="text-xs flex items-center flex-wrap mt-1">Mr. fais Private Limited  <div className="bg-[#e0e3ec] rounded-full mx-3 h-2 w-2 mt-1"></div>  tustehofye@gufum.com</p>
           </div>
          </div>

          <div className="flex gap-4 border-[1.5px] mt-4 p-2 py-4 rounded-md items-start hover:bg-[#ffffcc]">
             <input type="checkbox" className="scale-150 mt-2 ml-2" />
           <div>
             <h3 className="text-xs font-semibold">abc</h3>
             <p className="text-xs flex items-center flex-wrap mt-1">Mr. fais Private Limited  <div className="bg-[#e0e3ec] rounded-full mx-3 h-2 w-2 mt-1"></div>  tustehofye@gufum.com</p>
           </div>
          </div>

          <div className="flex gap-4 border-[1.5px] mt-4 p-2 py-4 rounded-md items-start hover:bg-[#ffffcc]">
             <input type="checkbox" className="scale-150 mt-2 ml-2" />
           <div>
             <h3 className="text-xs font-semibold">abc</h3>
             <p className="text-xs flex items-center flex-wrap mt-1">Mr. fais Private Limited  <div className="bg-[#e0e3ec] rounded-full mx-3 h-2 w-2 mt-1"></div>  tustehofye@gufum.com</p>
           </div>
          </div>

          <div className="flex gap-4 border-[1.5px] mt-4 p-2 py-4 rounded-md items-start hover:bg-[#ffffcc]">
             <input type="checkbox" className="scale-150 mt-2 ml-2" />
           <div>
             <h3 className="text-xs font-semibold">abc</h3>
             <p className="text-xs flex items-center flex-wrap mt-1">Mr. fais Private Limited  <div className="bg-[#e0e3ec] rounded-full mx-3 h-2 w-2 mt-1"></div>  tustehofye@gufum.com</p>
           </div>
          </div>

          <div className="flex gap-4 border-[1.5px] mt-4 p-2 py-4 rounded-md items-start hover:bg-[#ffffcc]">
             <input type="checkbox" className="scale-150 mt-2 ml-2" />
           <div>
             <h3 className="text-xs font-semibold">abc</h3>
             <p className="text-xs flex items-center flex-wrap mt-1">Mr. fais Private Limited  <div className="bg-[#e0e3ec] rounded-full mx-3 h-2 w-2 mt-1"></div>  tustehofye@gufum.com</p>
           </div>
          </div>

          <div className="flex gap-4 border-[1.5px] mt-4 p-2 py-4 rounded-md items-start hover:bg-[#ffffcc]">
             <input type="checkbox" className="scale-150 mt-2 ml-2" />
           <div>
             <h3 className="text-xs font-semibold">abc</h3>
             <p className="text-xs flex items-center flex-wrap mt-1">Mr. fais Private Limited  <div className="bg-[#e0e3ec] rounded-full mx-3 h-2 w-2 mt-1"></div>  tustehofye@gufum.com</p>
           </div>
          </div>

          <div className="flex gap-4 border-[1.5px] mt-4 p-2 py-4 rounded-md items-start hover:bg-[#ffffcc]">
             <input type="checkbox" className="scale-150 mt-2 ml-2" />
           <div>
             <h3 className="text-xs font-semibold">abc</h3>
             <p className="text-xs flex items-center flex-wrap mt-1">Mr. fais Private Limited  <div className="bg-[#e0e3ec] rounded-full mx-3 h-2 w-2 mt-1"></div>  tustehofye@gufum.com</p>
           </div>
          </div>

          
        </div>


        </div>
      </div>
    </>
  );
};

export default SupplierCommunication;
