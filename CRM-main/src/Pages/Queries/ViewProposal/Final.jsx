import ViewProposal from "./ViewProposal";
import logo from "../../../assets/images/logo.png";
import view2 from "../../../assets/images/view2.jpg";
import FinalCard from "./FinalCard";
import { LiaStarSolid } from "react-icons/lia";
import { BiCalendar } from "react-icons/bi";
import { FaHome } from "react-icons/fa";
import final from "../../../assets/images/final.jpeg"
import final2 from "../../../assets/images/final2.jpg"
import final4 from "../../../assets/images/final4.jpg"
import { FaBed } from "react-icons/fa";
import { TbWalk } from "react-icons/tb";
import { FaCar } from "react-icons/fa";
import FinalScroll from "./FinalScroll";
import { FaUser } from "react-icons/fa";
import { MdOutlineAdsClick } from "react-icons/md";






const Final = () => {

  const Gap = () => <span style={{ marginLeft: '10px' }}></span>;


const mainDiv = <div>

  <div className="flex gap-4 mt-2">
            <p className="font-semibold text-2xl flex items-center gap-3"> <FaBed className="text-2xl "/>  Bur Dubai </p>

            <p className="flex items-center text-lg text-[#ff9900]">  <LiaStarSolid />
               <LiaStarSolid />
               <LiaStarSolid />
               <LiaStarSolid /></p>
            </div>


          

               <hr className="border-[1px] mt-2 border-[#c7c0c0]" />



            <div className="card-details flex justify-between mt-5">
              <div>
                <p>Check in</p>
                <p className="flex items-center text-sm"><BiCalendar /> <span className="font-semibold text-sm">13 May 2024</span></p>
              </div>
              <div>
                <p>Check out</p>
                <p className="flex items-center text-sm"><BiCalendar /> <span className="font-semibold text-sm">13 May 2024</span></p>
              </div>
            </div>

            <hr className="border-[1px] mt-3 border-[#c7c0c0] w-full" />

        <div className="flex items-center mt-3">
              <p className="text-sm"><span className="font-semibold text-sm">Room:</span> 1 Double <Gap />  |  </p> 
              <p className="text-sm font-semibold flex items-center"> <span className="text-base"> </span> <Gap/>Meal: </p><Gap/>
              <p className="text-sm flex items-center">|  <Gap/>  <span className="text-sm flex items-center font-semibold"> <span className="text-sm font-semibold flex gap-5"> <FaHome/> </span> Room Type:</span> Front Villa</p>
        </div>

        <div className="mt-3">
          <button className="bg-[#2b93cb] px-2 text-white p-1 ">View More</button>
        </div>
</div>

const div1 = <div>

    <div className=" gap-4 mt-2">
            <p className="font-semibold text-xl flex items-center gap-3"> <FaCar className="text-2xl "/>   Dubai : Airport to Hotel
 </p>
            <div >
                <p className="flex items-center text-base"><BiCalendar /> 13 May 2024</p>
            </div>
            <p className="mt-3">Pick up from airport and transfer to hotel</p>   
    </div>
            </div>

const div2 = <div>

<div className=" gap-4 mt-2">
        <p className="font-semibold text-xl flex items-center gap-3"> <TbWalk className="text-2xl "/>  AT - GOT 1 </p>
        <div >
            <p className="flex items-center text-base"><BiCalendar /> 13 May 2024</p>
        </div>
        <p className="mt-3">City Tour with Burj khalifa</p>   
</div>
        </div>



const div3 = <div>

<div className=" gap-4 mt-2">
        <p className="font-semibold text-xl flex items-center gap-3"> <TbWalk className="text-2xl "/> Burj Khalifa </p>
        <div >
            <p className="flex items-center text-base"><BiCalendar /> 13 May 2024</p>
        </div>
        <p className="mt-3">124th Floor
</p>   
</div>
        </div>



const div4 = <div>

<div className=" gap-4 mt-2">
        <p className="font-semibold text-xl flex items-center gap-3"> <TbWalk className="text-2xl "/>  Dubai Desert Safari
 </p>
        <div >
            <p className="flex items-center text-base"><BiCalendar /> 13 May 2024</p>
        </div>
        <p className="mt-3 w-[32rem]">For an adrenaline-pumping adventure sign up for a desert safari and head out for dune bashing adventure in a 4x4 vehicle filled with thrilling twists and turns.


</p>   
</div>
        </div>

  return (
    <>
      <ViewProposal />





      <div className="bg-[#f0f0f0] h-auto">

      {/* top heading */}

   <div className="flex justify-between mx-14 bg-[#ffff] p-6">
   <div>
        <p className="font-semibold text-3xl">Nikhil Ji Dubai Trip</p>
        <p className="font-normal text-xl">13 May 2024 to 15 May 2024 - ID: 104226</p>
      </div>

    <div>
        <img src={logo} alt="" />
    </div>

   </div>



{/* table div */}

<div className="bg-[#fff] p-5 mx-14 mt-2 rounded-xl shadow">
<table className="w-full ">
  <tr className=" bg-[#4fbdff] text-[#ffff]">
    <td className="border-[1px] border-[#eeeff0] font-medium text-sm p-1" colSpan={11}>Option1</td>
  </tr>
          <tr className="w-full bg-[#e4e4e4] p-2">
            <td className="border-[1px] border-[#dbdbdb] font-medium text-sm p-1" colSpan={5}>
              City
            </td>
            <td className="border-[1px] border-[#dbdbdb] font-medium text-sm p-2">Hotel Name</td>
            <td className="border-[1px] border-[#dbdbdb] font-medium text-sm p-2">Check In</td>
            <td className="border-[1px] border-[#dbdbdb] font-medium text-sm p-2 ">Check Out</td>
            <td className="border-[1px] border-[#dbdbdb] font-medium text-sm p-2">Nights</td>
            <td className="border-[1px] border-[#dbdbdb] font-medium text-sm p-2">Room Types</td>
            <td className="border-[1px] border-[#dbdbdb] font-medium text-sm p-2">Meal Plan</td>
          </tr>
          <tr className="w-full ">
            <td className="border-[1px] border-[#dbdbdb] font-normal text-sm p-2" colSpan={5}>
              Dubai
            </td>
            <td className="border-[1px] border-[#dbdbdb] font-normal text-sm p-2"><p>Bur Dubai (5 Star) <br />
                  Double Room: 1</p></td>
            <td className="border-[1px] border-[#dbdbdb] font-normal text-sm p-2">13-May-2024	</td>
            <td className="border-[1px] border-[#dbdbdb] font-normal text-sm p-2 ">13-May-2024	</td>
            <td className="border-[1px] border-[#dbdbdb] font-normal text-sm p-2">0</td>
            <td className="border-[1px] border-[#dbdbdb] font-normal text-sm p-2">Front Villa</td>
            <td className="border-[1px] border-[#dbdbdb] font-normal text-sm p-2">	</td>
          </tr>
        </table>


        <p className="text-center font-semibold text-xl mt-3 p-4 ">Option 1 - Total Package Price: <span className="text-[#f5604c]">26,775 INR</span> 
</p>
</div>

{/* table div 2 */}
<div className="bg-[#fff] p-5 mx-14 mt-4 rounded-xl shadow">

  
<table className="w-full ">
  <tr className=" bg-[#04bf58] text-[#ffff]">
    <td className="border-[1px] border-[#eeeff0] font-medium text-sm p-1" colSpan={11}>Option1</td>
  </tr>
          <tr className="w-full bg-[#e4e4e4] p-2">
            <td className="border-[1px] border-[#dbdbdb] font-medium text-sm p-1" colSpan={5}>
              City
            </td>
            <td className="border-[1px] border-[#dbdbdb] font-medium text-sm p-2">Hotel Name</td>
            <td className="border-[1px] border-[#dbdbdb] font-medium text-sm p-2">Check In</td>
            <td className="border-[1px] border-[#dbdbdb] font-medium text-sm p-2 ">Check Out</td>
            <td className="border-[1px] border-[#dbdbdb] font-medium text-sm p-2">Nights</td>
            <td className="border-[1px] border-[#dbdbdb] font-medium text-sm p-2">Room Types</td>
            <td className="border-[1px] border-[#dbdbdb] font-medium text-sm p-2">Meal Plan</td>
          </tr>
          <tr className="w-full ">
            <td className="border-[1px] border-[#dbdbdb] font-normal text-sm p-2" colSpan={5}>
              Dubai
            </td>
            <td className="border-[1px] border-[#dbdbdb] font-normal text-sm p-2"><p>dfssd (1 Star)
 <br />
            Double Room: 1
            </p></td>
            <td className="border-[1px] border-[#dbdbdb] font-normal text-sm p-2">14-May-2024	</td>
            <td className="border-[1px] border-[#dbdbdb] font-normal text-sm p-2 ">14-May-2024	</td>
            <td className="border-[1px] border-[#dbdbdb] font-normal text-sm p-2">0</td>
            <td className="border-[1px] border-[#dbdbdb] font-normal text-sm p-2">sdfdf	</td>
            <td className="border-[1px] border-[#dbdbdb] font-normal text-sm p-2">	sdfdf	</td>
          </tr>
        </table>


        <p className="text-center font-semibold text-xl mt-3 p-4 ">Option 1 - Total Package Price: <span className="text-[#f5604c]">24,150 INR</span> 
</p>
</div>



{/* hr lines */}

<div className="mx-14">
<hr className="border-[1px] mt-5 border-[#c5c2c2]"/>

<p className="font-semibold text-2xl mt-3">Day 1 Mon, 13 May 2024</p>


<hr className="border-[1px] mt-5 border-[#c5c2c2]"/>
</div>



{/* card start */}

<div className='flex bg-[#ffff] border-2  items-start border-[#eeeff0] justify-between mx-14 rounded-lg shadow-sm mt-8 p-3'>
<div className='flex items-center'>
<div className=' rounded'>
  <img src={view2} className='w-20 h-20 rounded-lg' alt="" />
</div>

  <div className='flex flex-col mx-2'>
        <p className='font-semibold text-xl'>Arrival in dubai</p>
        <p className='text-base'>Arrival in dubai and transfer to hotel via private car</p>
  </div>
</div>
  </div> 



  {/* card 2 start */}

  <FinalCard image={final2} data={div1} reverse="flex-row-reverse"  between="justify-between" />


  <FinalCard image={final} data={mainDiv} />


{/* hr title line */}

  <div className="mx-14">
      <hr className="border-[1px] mt-5 border-[#c5c2c2]"/>
      <p className="font-semibold text-2xl mt-3">Day 2 Tue, 14 May 2024</p>
      <hr className="border-[1px] mt-5 border-[#c5c2c2]"/>
  </div>



  <FinalCard image={final2} data={div2} reverse="flex-row-reverse" between="justify-between"/>

  <FinalCard image={final} data={div1} reverse="flex-row-reverse"  between="justify-between" />

  <FinalCard image={final} data={div3} reverse="flex-row-reverse"  between="justify-between" />



  {/* hr title line */}

  <div className="mx-14">
      <hr className="border-[1px] mt-5 border-[#c5c2c2]"/>
      <p className="font-semibold text-2xl mt-3">Day 3 Wed, 15 May 2024</p>
      <hr className="border-[1px] mt-5 border-[#c5c2c2]"/>
  </div>


  <FinalCard image={final4} data={div4} reverse="flex-row-reverse"  between="justify-between" />


    {/* hr title line */}

    <div className="mx-14">
      <hr className="border-[1px] mt-5 border-[#c5c2c2]"/>
      <p className="font-semibold text-2xl mt-3 text-center">Day 3 Wed, 15 May 2024</p>
      <hr className="border-[1px] mt-5 border-[#c5c2c2]"/>
  </div>


  <FinalScroll />

  
    {/* hr title line */}

    <div className="mx-14">
      <hr className="border-[1px] mt-5 border-[#c5c2c2]"/>
      <p className="font-semibold text-2xl mt-3 text-center">Comments</p>
      <hr className="border-[1px] mt-5 border-[#c5c2c2]"/>
  </div>


  <div className="bg-[#ffff] mx-14 p-5 mt-5">
    <p className="text-center">No Comment Available</p>

    {/* <div className="w-full border-[1px] border-[#c5c2c2]"> */}
      <textarea placeholder="Enter your comment" className="w-full border-[1px] border-[#c5c2c2] mt-5 p-3 outline-none rounded-md"></textarea>
    {/* </div> */}

    <div className="flex justify-end">
      <button className="bg-[#06304c] px-4 text-[#fff] mt-3 outline-none rounded p-1">Submit Comment</button>
    </div>
  </div>



{/* footer */}

<div className="bg-[#343642] mx-14 p-5 mt-5 mb-5">
<div className="flex p-5">
<div className="flex items-center gap-3 ">
<FaUser className="text-[#ffff] text-3xl" />
 <div>
 <p className="text-[#ffff] font-semibold text-x">TravBizz IT Solutions</p>
  <p className="text-[#ffff]">Travbizz Travel IT Solutions</p>
 </div>
</div>
</div>
<div className="flex justify-center">




{/* horizontal div */}

<div className="flex mb-7">


<div className="flex gap-5 justify-center ">

<div className="">
<div  className="w-full">
<hr className="border-[1px] w-[32rem] mt-5 border-[#eeeff0"/>
<div className="flex justify-between mt-2">
  <p className="text-[#fff] text-sm ">Email address	</p>
  <p className="text-[#fff] text-sm ">info@travbizz.com</p>
</div>
</div>

<div className="w-full">
<hr className="border-[1px] w-[32rem] mt-5 border-[#eeeff0"/>
<div className="flex justify-between mt-2">
  <p className="text-[#fff] text-sm ">Phone number		</p>
  <p className="text-[#fff] text-sm ">1234567890</p>
</div>
</div>



<div  className="w-full">
<hr className="border-[1px] w-[32rem] mt-5 border-[#eeeff0"/>
<div className="flex justify-between mt-2">
  <p className="text-[#fff] text-sm "> Total price			</p>
  <p className="text-[#fff] text-sm flex items-center gap-2 cursor-pointer"> <MdOutlineAdsClick/> www.travbizz.com
  
</p>

</div>
<hr className="border-[1px] w-[32rem] mt-4 border-[#eeeff0]"/>

</div>
</div>



<div  className="w-full">
<div>
<hr className="border-[1px] w-[32rem] mt-5 border-[#eeeff0]"/>
<div className="flex justify-between mt-2">
  <p className="text-[#fff] text-sm ">Phone number		</p>
  <p className="text-[#fff] text-sm ">1234567890</p>
</div>
</div>



<div className="w-full ">
<hr className="border-[1px] w-[32rem] mt-5 border-[#eeeff0]"/>
<div className="flex justify-between mt-2">
  <p className="text-[#fff] text-sm "> Total price			</p>
  <p className="text-[#fff] text-sm flex items-center gap-2 cursor-pointer"> ₹
</p>
</div>
</div>
<hr className="border-[1px] w-[32rem] mt-4  border-[#eeeff0]"/>

</div>

</div>
</div>
</div>

  </div>

  



   </div>
    </>
  );
};

export default Final;
