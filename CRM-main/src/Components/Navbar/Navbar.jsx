import React, { useState } from "react";
import logo from "../../assets/images/logo.png";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import ReceiptLongOutlinedIcon from "@mui/icons-material/ReceiptLongOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import DesktopWindowsOutlinedIcon from "@mui/icons-material/DesktopWindowsOutlined";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import ProfileModal from "./ProfileModal";
import { FaUser } from "react-icons/fa";
import { LuClock9 } from "react-icons/lu";
import { IoMail } from "react-icons/io5";
import { FaSignOutAlt } from "react-icons/fa";
import { BsQuestionCircleFill } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";


const Navbar = ({sendDataToApp}) => {
  const navigate = useNavigate()



  function goToMailSetting() {
   navigate('/mailSetting') 


  }

  function goToManageProfile() {
    navigate('/manageProfile') 

  }

  const [click, setClick] = useState(false);



  const handleClick = () => {
    setClick(!click);
    sendDataToApp(click);
  }


  const mainDiv = (
    <div>
      <div className="bg-[#1f1f1f]  mx-2 rounded-3xl">
          <div id="div1" className="flex text-white text-sm items-center gap-2 p-3">
            <div className="bg-white p-3 text-black rounded-full">
             <FaUser className="text-3xl"/>
            </div>
             <div>
              <h2 className="font-semibold text-white">TravBizz IT Solutions</h2>
              <p className="text-[#adadad] text-xs">Email: <span className="font-semibold">info@travbizz.com</span></p>
              <p className="text-[#adadad] text-xs">Last Login: <span className="font-semibold">13/05/2024 - 04:03 PM</span></p>
             </div>
          </div>

            <hr className="border-[#2d2f31] border-[1px]"/>
          

          <div id="div2" className="text-[#adadad] text-xs flex items-center gap-1 justify-center p-3">
          <LuClock9 />
            <p> Today's Working Hours: 10:48</p>
          </div>

          <hr className="border-[#2d2f31] border-[1px]"/>


          <div id="div3" className="text-white p-3 flex flex-col gap-3">
            <button className="border-[1px] border-[#adadad] w-full text-left px-2 rounded-lg p-1 hover:bg-[#2d2f31] flex items-center gap-4" onClick={goToManageProfile} ><FaUser/> Manage Your Profile</button>
            <button className="border-[1px] border-[#adadad] w-full text-left px-2 rounded-lg p-1 hover:bg-[#2d2f31] flex items-center gap-4" onClick={goToMailSetting}><IoMail /> Mail Setting </button>
          </div>

          <hr className="border-[#2d2f31] border-[1px]"/>


          <div id="div4" className="p-3">
          <p className="text-[#adadad] text-xs">Total Remaining 230 Days</p>
              <p className="text-[#adadad] text-xs">Expiry Date: 30-12-2024</p>
          </div>
      </div>

      <div className="mx-6 py-3 ">
         <button className="flex items-center gap-2 text-white p-2 px-2 w-full text-left text-sm hover:bg-[#383b3d] rounded-lg"><FaSignOutAlt /> Logout of my account</button>
      </div>

      <hr className="border-[#adadad57] mx-2"/>

      <div className="text-[#adadad] text-xs flex justify-center p-3">
        <button className="flex items-center gap-2 mt-1"><BsQuestionCircleFill /> System Support</button>
      </div>

    </div>
  )


  return (
    <div className="flex sticky top-0 z-50 flex-row justify-between items-center w-full bg-[#eff3f7] px-2 h-[3rem]">
      
      <div className="flex md:justify-start justify-center   items-center lg:w-[50%] w-[4rem] md:w-[60%] h-full ">

        <div className="md:flex hidden w-[8rem] h-full ">
          <img src={logo} className="h-full w-full object-contain" alt="logo" />
        </div>

        <div onClick={()=>{handleClick()}} className="md:hidden flex" >
          {click ? <CloseIcon/> : <MenuIcon/> }
        </div>

        <div className="md:flex hidden ml-8 border border-slate-300 active:border-slate-800 focus:border-slate-800 hover:border-slate-800 rounded-md">
          <select className="px-2 focus:outline-none w-[8rem] rounded-l-md">
            <option value="All">All</option>
            <option value="Queries">Queries</option>
            <option value="Itineraries">Itineraries</option>
            <option value="Clients">Clients</option>
            <option value="Agents">Agents</option>
            <option value="Corporate">Corporate</option>
          </select>
          <div>
            <div className="relative">
              <input
                placeholder="Search "
                className=" border-l-slate-300 border-l text-sm h-7 rounded-r-md pl-2 pr-8  focus:outline-none "
              />
              <SearchIcon className="text-slate-600 absolute right-0.5 top-1" />
            </div>
          </div>
        </div>

      </div>

      <div className="md:w-[50%] w-[100%] h-full  flex items-center justify-end gap-3 sm:gap-5 mr-3">
      <Link to="/emailInbox">
        <button className="bg-[#078d80] flex justify-center items-center gap-1 p-1 sm:p-2 rounded-md text-white font-bold  text-xs lg:text-sm">
          <MdOutlineEmail style={{ fontSize: 18 }} /> <span className="sm:block hidden" >Email Inbox</span>
        </button></Link>

        <div className="relative group flex z-10 justify-center cursor-pointer">
          <NotificationsActiveOutlinedIcon />
          <div className="group-hover:visible invisible w-fit p-1 h-fit rounded-md top-9 text-sm  bg-black text-white absolute">
            Notifications
          </div>
        </div>

        <Link to={"/settings"}>
          <div className="relative group z-10  flex justify-center cursor-pointer">
            <SettingsOutlinedIcon />
            <div className="group-hover:visible invisible w-fit p-1 h-fit rounded-md top-9 text-sm  bg-black text-white absolute">
              Settings
            </div>
          </div>
        </Link>

        <Link to={"/expenses"}>
          <div className="relative group flex z-10  justify-center cursor-pointer">
            <ReceiptLongOutlinedIcon />
            <div className="group-hover:visible flex justify-center items-center invisible w-[8rem] p-1 h-fit rounded-md top-9 text-sm  bg-black text-white absolute">
              Company Expense
            </div>
          </div>
        </Link>

        <div className="cursor-pointer">
          <ProfileModal mainButton={<AccountCircleOutlinedIcon />} profileWork={mainDiv}/>
          
        </div>
      </div>
    </div>
  );
};

export default Navbar;
