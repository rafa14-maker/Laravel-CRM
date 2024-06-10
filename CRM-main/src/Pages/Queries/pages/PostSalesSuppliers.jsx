import React from "react";
import { FaBed } from "react-icons/fa";
import PostSalesCard from "../../../Components/PostSalesCard";
import { FaPersonWalking } from "react-icons/fa6";
import { IoIosCar, IoIosStar, IoMdAirplane } from "react-icons/io";
import { LuClock9 } from "react-icons/lu";

const PostSalesSuppliers = () => {

  const obj = [
    {
      head: <span className="font-[500] text-sm pl-2 flex items-center gap-1"><FaBed />Accommodation</span>,
      smallHead: <div> <h3 className="flex items-center gap-3 text-sm font-semibold">Bur Dubai <span className="flex text-sm text-[#ff9900]"> <IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar /></span></h3>
      <p className="text-[11px] font-bold mt-1 text-[#999999]">FRONT VILLA - 21-05-2024 TO 25-05-2024</p></div>,

      tableValue1: <div>Abad Hotels</div>,
      tableCnNum: <div>CN: 1234</div>,
      tableValue2: <span className="bg-[#01c875] text-white p-1 rounded-md mx-2 flex justify-center">Confirmed</span>,
      tableValue3: <span className="bg-[#01c875] text-white p-1 rounded-md mx-2 flex justify-center">Amount Paid</span>,
      tableValue4: "2500",
      tableValue5: "17-05-2024",
      tableValue6: "16-05-2024",
      tableValue7: "1000",
      tableValue8: "1500",

    },
    {
      head: <span className="font-[500] text-sm pl-2 flex items-center gap-1"><FaPersonWalking />Activity</span>,
      smallHead: <div> <h3 className="flex items-center gap-3 text-sm font-semibold">Burj Khalifa</h3>
      <p className="text-[11px] font-bold mt-1 text-[#999999] flex items-center gap-1">22-05-2024 -<LuClock9 />  1:00 PM TO 2:00 PM</p></div>,

      tableValue1: <div>No Supplier Selected</div> ,
      tableValue2: <span className="bg-[#e77350] text-white p-1 rounded-md mx-2 flex justify-center">Mail Sent</span>,
      tableValue3: <span className="bg-[#e77350] text-white p-1 rounded-md mx-2 flex justify-center">Payment Pending</span>,
      tableValue4: "6000",
      tableValue7: "0",
      tableValue8: "6000",
    },
    {
      head: <span className="font-[500] text-sm pl-2 flex items-center gap-1"><IoMdAirplane className="rotate-45 font-bold" />Flight</span>,
      smallHead: <div> <h3 className="flex items-center gap-3 text-sm font-semibold">Indigo</h3>
      <p className="text-[11px] font-bold mt-1 text-[#999999] flex items-center gap-1">21-05-2024 -<LuClock9 />1:00 PM TO 2:00 PM</p></div>,

      tableValue1: <div>No Supplier Selected</div> ,
      tableValue2: <span className="bg-[#e77350] text-white p-1 rounded-md mx-2 flex justify-center">Mail Sent</span>,
      tableValue3: <span className="bg-[#e77350] text-white p-1 rounded-md mx-2 flex justify-center">Payment Pending</span>,
      tableValue4: "20000",
      tableValue7: "0",
      tableValue8: "20000",
    },
    {
      head: <span className="font-[500] text-sm pl-2 flex items-center gap-1"><IoIosCar />Transportation</span>,
      smallHead: <div> <h3 className="flex items-center gap-3 text-sm font-semibold">Dubai : Airport to Hotel</h3>
      <p className="text-[11px] font-bold mt-1 text-[#999999] flex items-center gap-1">21-05-2024 -<LuClock9 />1:00 PM TO 2:00 PM - VEHICLE: 1</p></div>,

      tableValue1: <div>No Supplier Selected</div> ,
      tableValue2: <span className="bg-[#e77350] text-white p-1 rounded-md mx-2 flex justify-center">Mail Sent</span>,
      tableValue3: <span className="bg-[#e77350] text-white p-1 rounded-md mx-2 flex justify-center">Payment Pending</span>,
      tableValue4: "5000",
      tableValue7: "0",
      tableValue8: "5000",
    },
  ]

  
  return (
    <>
    <div className="p-3 bg-[#f2f4f8] h-auto flex flex-col gap-3">
      {obj.map((item)=>{
        return <PostSalesCard head={item.head} smallHead={item.smallHead} tValue1={item.tableValue1} tValue2={item.tableValue2} tValue3={item.tableValue3} tValue4={item.tableValue4} tValue5={item.tableValue5} tValue6={item.tableValue6} tValue7={item.tableValue7} tValue8={item.tableValue8} tValueCn={item.tableCnNum}/>
      })}
      
    </div>
    </>
  );
};

export default PostSalesSuppliers;
