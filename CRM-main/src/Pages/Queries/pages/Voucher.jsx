import { Link, useNavigate } from "react-router-dom";

const Voucher = ( ) => {

  const navigate = useNavigate()



  
  return (
    <div className=" border-[1px] m-4 p-2 mr-4 border-[#dbdbdb] rounded-lg shadow-sm">
      <div className="bg-[#f7f7f7]">
        <p className="font-semibold p-1 pl-2 mb-2 mr-2">Vouchers</p>
      </div>
      <div>
        <table className="w-full ">
          <tr className="w-full ">
            <td className="border-[1px] border-[#dbdbdb] font-semibold p-1 w-[60%] px-2" colSpan={5}>
              Type
            </td>
            <td className="border-[1px] border-[#dbdbdb] font-semibold px-2">From Date</td>
            <td className="border-[1px] border-[#dbdbdb] font-semibold px-2">To Date</td>
            <td className="border-[1px] border-[#dbdbdb] font-semibold px-2" ></td>
          </tr>

          <tr className="w-full text-sm">
            <td className="border-[1px] border-[#dbdbdb] p-1 px-2" colSpan={5}>
              
            </td>
            <td className="border-[1px] border-[#dbdbdb] px-2">22-05-2024</td>
            <td className="border-[1px] border-[#dbdbdb] px-2">22-05-2024</td>
            <td className="border-[1px] border-[#dbdbdb] text-sm font-semibold px-2 text-center p-1"><Link to={`/downloadVoucher`} target="target"><button className="text-white px-2 p-1 rounded-md bg-[#005ee2]">Download</button></Link></td>
          </tr>

          <tr className="w-full text-sm">
            <td className="border-[1px] border-[#dbdbdb] p-1 px-2" colSpan={5}>
            Accommodation
            </td>
            <td className="border-[1px] border-[#dbdbdb] px-2">21-05-2024</td>
            <td className="border-[1px] border-[#dbdbdb] px-2">22-05-2024</td>
            <td className="border-[1px] border-[#dbdbdb] text-sm font-semibold px-2 text-center p-1"><Link to={`/downloadVoucher`} target="target"><button className="text-white px-2 p-1 rounded-md bg-[#005ee2]">Download</button></Link></td>
          </tr>

          <tr className="w-full text-sm">
            <td className="border-[1px] border-[#dbdbdb] p-1 px-2" colSpan={5}>
            Activity
            </td>
            <td className="border-[1px] border-[#dbdbdb] px-2">22-05-2024</td>
            <td className="border-[1px] border-[#dbdbdb] px-2">22-05-2024</td>
            <td className="border-[1px] border-[#dbdbdb] text-sm font-semibold px-2 text-center p-1"><Link to={`/downloadVoucher`} target="target"><button className="text-white px-2 p-1 rounded-md bg-[#005ee2]">Download</button></Link></td>
          </tr>

          <tr className="w-full text-sm">
            <td className="border-[1px] border-[#dbdbdb] p-1 px-2" colSpan={5}>
            Flight
            </td>
            <td className="border-[1px] border-[#dbdbdb] px-2">21-05-2024</td>
            <td className="border-[1px] border-[#dbdbdb] px-2">21-05-2024</td>
            <td className="border-[1px] border-[#dbdbdb] text-sm font-semibold px-2 text-center p-1"><Link to={`/downloadVoucher`} target="target"><button className="text-white px-2 p-1 rounded-md bg-[#005ee2]">Download</button></Link></td>
          </tr>

          <tr className="w-full text-sm">
            <td className="border-[1px] border-[#dbdbdb] p-1 px-2" colSpan={5}>
            Transportation
            </td>
            <td className="border-[1px] border-[#dbdbdb] px-2">21-05-2024</td>
            <td className="border-[1px] border-[#dbdbdb] px-2">21-05-2024</td>
            <td className="border-[1px] border-[#dbdbdb] text-sm font-semibold px-2 text-center p-1"><Link to={`/downloadVoucher`} target="target"><button className="text-white px-2 p-1 rounded-md bg-[#005ee2]">Download</button></Link></td>
          </tr>
          
        </table>
      </div>
    </div>
  );
};

export default Voucher;