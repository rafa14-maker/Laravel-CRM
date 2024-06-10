import React from 'react'

const Table = () => {


    const data = [
// { id: 1, name: "Name", dem: "Mail Subject" },
{ id: 2, name: "Tresting", dem: "" },
{ id: 3, name: "Test itinerary", dem: "demo"  },
{ id: 4, name: "Amazing Dubai Tour", dem: "" },
{ id: 5, name: "HOTEL RADISSON BLUE", dem: "" },
{ id: 6, name: "manali trip", dem: "" },
{ id: 7, name: "Amazing Dubai Tour", dem: "Dubai Trip" },
{ id: 8, name: "Full Month Ramzan Umrah Package" }
      ];

      const TableRow = ({ item }) => (
        <tr className=" bg-[#ffff] border hover:bg-[#f5f7f9]" key={item.id}>
          <td className="p-2 px-2 border-r-[#b1b1b1] border text-sm ">{item.name}</td>
          <td className="p-2 px-2 border-r-[#b1b1b1] border text-sm">{item.dem}</td>
          <td className="p-2 px-2 border-r-[#b1b1b1] border">
            <button className="text-[#46cd93] border-[2px] border-[#46cd93] px-2 py-1  hover:bg-[#46cd93] hover:text-[#ffff] ">Select</button>
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
                <td className='p-2 px-2 border-r-[#b1b1b1] border w-[40%]'>Mail Subject</td>
                <td  className='p-2 px-2 border-r-[#b1b1b1] border w-[20%]'></td>
            </tr>
      {data.map((item) => (
        <TableRow key={item.id} item={item} />
      ))}
    </tbody>
  </table>
    </div>
  )
}

export default Table




