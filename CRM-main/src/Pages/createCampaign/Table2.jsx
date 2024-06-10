import React from 'react'
import { FaUser } from "react-icons/fa";


const Table2 = () => {


    const data = [
// { id: 1, name: "Name", dem: "Mail Subject" },
{ id: 2, name: "yyyyyyyyyy", des: 'yyy', count: "3" },
{ id: 3, name: "TravelBizz Group", des: "Holiday group", count: "3" },
{ id: 4, name: "Holi Trip", des: "Testing", count: "47" },
{ id: 5, name: "Himachal Trip", des: "2n/3d", count:"0" },
{ id: 6, name: "bharatji", des: "ssdd",  count: "0" },
{ id: 7, name: "Raqib travbizz", des: "ssdd", count: "48"},
{ id: 8, name: "test", des: "birthday wishes", count: "53" }
      ];

      const TableRow = ({ item }) => (
        <tr className=" bg-[#ffff] border hover:bg-[#f5f7f9]" key={item.id}>
          <td className="p-2 px-2 border-r-[#b1b1b1] border text-sm font-semibold ">{item.name}</td>
          <td className="p-2 px-2 border-r-[#b1b1b1] border text-sm">{item.des}</td>
          <td className="p-2 px-2 border-r-[#b1b1b1] border text-sm flex border-none gap-1 justify-center items-center"><FaUser/>{item.count}</td>

          <td className="p-2 px-2 border-r-[#b1b1b1] border">
          <div className='flex justify-center'>
          <button className="text-[#46cd93] border-[2px] border-[#46cd93] px-2 py-1  hover:bg-[#46cd93] hover:text-[#ffff] ">Select</button>
          </div>
          </td>
        </tr>
      );
      
  return (
    <div>
        {/* <table className='w-full border'>
            <tr className='w-full bg-slate-300 border'>
                <td className='p-2 px-2 border-r-black border'>Name</td>
                <td className='p-2 px-2 border-r-black border'>Mail Subject</td>
                <td  className='p-2 px-2 border-r-black border'></td>
            </tr>

            <tr className='w-full bg-[#ffff] border'>
                <td className='p-2 px-2 border-r-black border'>Tresting</td>
                <td className='p-2 px-2 border-r-black border'></td>
                <td  className='p-2 px-2 border-r-black border'><button className='text-[#46cd93] border-[2px] border-[#46cd93] px-2 py-1 text-lg'>Select</button></td>
            </tr>

        </table> */}


<table  className='w-full mt-3'>
    <tbody>
    <tr className='w-full bg-[#f5f7f9] border'>
                <td className='p-2 px-2 border-r-[#b1b1b1] border'>Name</td>
                <td className='p-2 px-2 border-r-[#b1b1b1] border w-[40%]'>Description	</td>
                <td  className='p-2 px-2 border-r-[#b1b1b1] border w-[20%]'>Subcribers</td>
                <td  className='p-2 px-2 border-r-[#b1b1b1] border w-[20%]'></td>
            </tr>
      {data.map((item) => (
        <TableRow key={item.id} item={item}  />
        
      ))}
    </tbody>
  </table>
    </div>
  )
}

export default Table2




