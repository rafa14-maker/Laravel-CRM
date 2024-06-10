import React from "react";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import EventAvailableOutlinedIcon from "@mui/icons-material/EventAvailableOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import LockIcon from "@mui/icons-material/Lock";
import Textarea from "@mui/joy/Textarea";
import AddIcon from "@mui/icons-material/Add";
import RecentActorsOutlinedIcon from "@mui/icons-material/RecentActorsOutlined";
import AssignmentTurnedInOutlinedIcon from "@mui/icons-material/AssignmentTurnedInOutlined";
import Diversity3OutlinedIcon from "@mui/icons-material/Diversity3Outlined";
import CreditCardOutlinedIcon from "@mui/icons-material/CreditCardOutlined";
import TaskAltOutlinedIcon from "@mui/icons-material/TaskAltOutlined";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import PersonIcon from "@mui/icons-material/Person";
import TextsmsIcon from "@mui/icons-material/Textsms";
import ScheduleIcon from "@mui/icons-material/Schedule";
import ArticleIcon from "@mui/icons-material/Article";
import "./queryDetail.css";
import { Link, Route, Routes, useNavigate, useParams } from "react-router-dom";
import Details from "./pages/Details";
import Billing from "./pages/Billing";
import FollowUps from "./pages/FollowUps";
import GuestDocuments from "./pages/GuestDocuments";
import Mail from "./pages/Mail";
import Voucher from "./pages/Voucher";
import SupplierCommunication from "./pages/SupplierCommunication";
import History from "./pages/History";
import PostSalesSuppliers from "./pages/PostSalesSuppliers";
import Proposals from "./pages/Proposals";
import FeedBack from "./pages/FeedBack";
// modal imports 
import  { useEffect, useRef, useState } from "react";
import TextField from "@mui/material/TextField";
import { AgGridReact } from "ag-grid-react";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import CardGiftcardOutlinedIcon from "@mui/icons-material/CardGiftcardOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import TextSnippetOutlinedIcon from "@mui/icons-material/TextSnippetOutlined";
import NorthEastIcon from "@mui/icons-material/NorthEast";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import { FaUser, FaWhatsapp } from "react-icons/fa";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import CloseIcon from "@mui/icons-material/Close";
import Modal from "@mui/material/Modal";
import _ from "lodash";
import { FaCalendarDays } from "react-icons/fa6";
import { FaPerson } from "react-icons/fa6";
import { MdModeEdit, MdOutlineReply, MdOutlineSmartphone } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import Menu from '@mui/material/Menu';
import { Box, Button, Drawer, FormControl, FormGroup, MenuItem } from "@mui/material";
import { IoClose } from "react-icons/io5";
import Editor from "../../Components/Editor";
import ReactDOMServer from 'react-dom/server';
import logo from "../../assets/images/logo.png"
import CenterModal from "./ViewProposal/CenterModal";

import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';


// import { DatePicker } from "@mui/x-date-pickers";
// import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import PostAddIcon from '@mui/icons-material/PostAdd';



import "./ActiveAnimation.css"
// import { DatePicker } from '@mui/x-date-pickers';










function QueriesDetail() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [email, setEmail] = useState("");
  const [destination, setDestination] = useState("");
  const [selectedMonth, setSelectedMonth] = useState("");
  const [selectAdultage, setSelectAdultage] = useState("");
  const [selectChildage, setSelectChildage] = useState("");
  const [selectInfantage, setSelectInfantage] = useState("");
  const [selectSource, setSelectSource] = useState("");
  const [selectPriority, setSelectPriority] = useState("");
  const [selectAssign, setSelectAssign] = useState("");
  const [selectService, setSelectService] = useState("");
  const [remarks, setRemarks] = useState("");
  const [type, setType] = useState("");
  const [errors, setErrors] = useState({ name: null, helperTxt: null });
  const [activeButton, setActiveButton] = useState(null);
  



// form function start

// Calculate days and Night
const [fromDate, setFromDate] = useState("");
const [toDate, setToDate] = useState("");
const [days, setDays] = useState(0);
const [nights, setNights] = useState(0);

useEffect(() => {
  setActiveButton(location.pathname);
  if (fromDate && toDate) {
    const from = new Date(fromDate);
    const to = new Date(toDate);

    // Calculate the difference in milliseconds
    const difference = to.getTime() - from.getTime();

    // Convert milliseconds to days
    const daysDifference = Math.ceil(difference / (1000 * 3600 * 24));

    const nightsDifference = Math.max(0, daysDifference - 1); // Subtract one day for nights calculation

    setDays(daysDifference);
    setNights(nightsDifference);
  } else {
    setDays('');
    setNights('');
  }
}, [fromDate, toDate, location.pathname]);


// proposal  
const [activeItem, setActiveItem] = useState(null);

const handleItemClick = (index) => {
  setActiveItem(index);
};  
const items = [
  "New", "Active", "No Connect", "Hot Lead", 
  "Proposal Sent", "Follow Up", "Confirmed", 
  "Cancelled", "Invalid"
];

// drawerOpen function
const [drawerOpen, setDrawerOpen] = useState({
client: false,
query: false,

});



 // toggleDrawer function
 const toggleDrawer = (anchor, open) => (event) => {
  if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) return;

  setDrawerOpen({ ...drawerOpen, [anchor]: open });
};


// type change function
const handleTypeChange = (event) => {
  setType(event.target.value);
};


// drawer btn function 
function Btn({ handleClicked, children, className }) {
  return (
    <Button 
    onClick={handleClicked}  
    className={className} 
    size='small' // Adjust size to 'small' to match the example
    sx={{ 
      backgroundColor: 'transparent', 
      color: '#000',
      border: "1px solid #b1b1b1", // Ensure the border is solid
      px: 2, // Padding left and right
     // Padding top and bottom
      borderRadius: '0.375rem', // Border radius for rounded corners
      display: 'flex', // Flex display
      alignItems: 'center', // Center items vertically
      gap: 1, // Gap between icon and text
      fontSize: '0.75rem', // Set the font size to text-xs
      textTransform: 'none', // Disable uppercase transformation

      '&:hover': {
        backgroundColor: 'rgba(0, 0, 0, 0.04)', // Slightly lighter shade for hover effect
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // Shadow effect on hover
      },
    }}
  >
    {children}
  </Button>
  );
}



// BtnOutlined
function BtnOutlined({ handleClicked, children }) {
  return (
    <Button onClick={handleClicked} variant='outlined'
      sx={{
        color: '#fff',
         backgroundColor: "#dc2626",
        '&:hover': {
          color: '#fff',
          borderColor: '#dc2626',
          backgroundColor: '#7f1d1d'
        }
      }}>
      {children}
    </Button>
  )
}

//   const params = useParams()
// console.log(params.queryId);



function AddQueryForm({ closeDrawer }) {
  return (
    <form className="drawer-form">
      <FormControl sx={{ width: '100%' }} value={"DEFAULT"} disabled={true}>
      <TextField
        select
        value={type}
        onChange={handleTypeChange}
        defaultValue="client"
        size='small'
        label="Type"
      >
        <MenuItem value="client">Client</MenuItem>
        <MenuItem value="agent">Agent</MenuItem>
        <MenuItem value="corporate">Corporate</MenuItem>
      </TextField>
    </FormControl>

      <FormGroup row sx={{ gap: '0.5rem', '&>*': { flex: 1 } }}>
        <TextField label="Mobile" variant="outlined" size='small' required />
        <TextField label="Email" variant="outlined" size='small' required type='email' />
      </FormGroup>
      <FormGroup row sx={{ gap: '0.5rem' }}>
        <FormControl>
          <TextField select defaultValue="mr" size='small'>
            <MenuItem value="mr">Mr.</MenuItem>
            <MenuItem value="mrs">Mrs.</MenuItem>
            <MenuItem value="ms">Ms.</MenuItem>
            <MenuItem value="dr">Dr.</MenuItem>
            <MenuItem value="prof">Prof.</MenuItem>
          </TextField>
        </FormControl>
        <TextField label="Client name" variant="outlined" size='small' required sx={{ flex: 1 }} />
      </FormGroup>

      {type === 'agent' || type === 'corporate' ? (
      <FormGroup row sx={{ gap: '0.5rem', '&>*': { flex: 1 } }}>
        <TextField label="Company" variant="outlined" size='small' required />
        <TextField label="GST" variant="outlined" size='small' required type='email' />
      </FormGroup>
    ) : null}

    
      <FormGroup row sx={{ gap: '0.5rem', '&>*': { flex: 1 } }}>
        <TextField label="Destinations" variant="outlined" size='small' required />
        <FormControl>
          <TextField select defaultValue="january" size='small' label="Travel month" fullWidth>
            <MenuItem value="january">January</MenuItem>
            <MenuItem value="february">February</MenuItem>
            <MenuItem value="march">March</MenuItem>
            <MenuItem value="april">April</MenuItem>
            <MenuItem value="may">May</MenuItem>
            <MenuItem value="june">June</MenuItem>
            <MenuItem value="july">July</MenuItem>
            <MenuItem value="august">August</MenuItem>
            <MenuItem value="september">September</MenuItem>
            <MenuItem value="october">October</MenuItem>
            <MenuItem value="november">November</MenuItem>
            <MenuItem value="december">December</MenuItem>
          </TextField>
        </FormControl>
      </FormGroup>




<FormGroup row sx={{ gap: '0.5rem', '&>*': { flex: 1 } }}>
    <DatePicker
      value={fromDate}
      onChange={(date) => setFromDate(date)}
      label="From Date"
      size="small"
      slotProps={{ textField: { size: 'small' } }}
    />
    <DatePicker
      value={toDate}
      onChange={(date) => setToDate(date)}
      label="To Date"
      size="small"
      slotProps={{ textField: { size: 'small' } }}
    />
    <TextField
      value={(nights !== 0 ? `${nights} Nights, ` : '') + days + ' Days'}
      label="Package Duration"
      variant="outlined"
      size="small"
      required
      sx={{ flex: 1, width: 24 }}
    />
  </FormGroup>
    

      <FormGroup row sx={{ gap: '0.5rem', '&>*': { flex: 1 } }}>
        <TextField label="Adult" variant="outlined" size='small' type='number' InputProps={{ inputProps: { min: 1, max: 24 } }} required />
        <TextField label="Child" variant="outlined" size='small' type='number' InputProps={{ inputProps: { min: 0, max: 12 } }} />
        <TextField label="Infant" variant="outlined" size='small' type='number' InputProps={{ inputProps: { min: 0, max: 6 } }} />
      </FormGroup>

      <FormGroup row sx={{ gap: '0.5rem', flexWrap: 'nowrap', '& > *': { flex: 1 } }}>
        <FormControl>
          <TextField select defaultValue="16" size='small' label="Lead source" required>
            <MenuItem value="advertisment">Advertisment</MenuItem>
            <MenuItem value="agent">Agent</MenuItem>
            <MenuItem value="akbartravel">AkbarTravel</MenuItem>
            <MenuItem value="chat">Chat</MenuItem>
            <MenuItem value="facebook">Facebook</MenuItem>
            <MenuItem value="hellotravel">Hello Travel</MenuItem>
            <MenuItem value="instagram">Instagram</MenuItem>
            <MenuItem value="justdial">Justdial</MenuItem>
            <MenuItem value="online">Online</MenuItem>
            <MenuItem value="others">Others</MenuItem>
            <MenuItem value="referral">Referral</MenuItem>
            <MenuItem value="snapchat">snapchat</MenuItem>
            <MenuItem value="telephone">Telephone</MenuItem>
            <MenuItem value="walk-in">Walk-In</MenuItem>
            <MenuItem value="website">Website</MenuItem>
            <MenuItem value="whatsapp">WhatsApp</MenuItem>
          </TextField>
        </FormControl>
        <FormControl>
          <TextField select defaultValue="hot" size='small' label="Priority" required>
            <MenuItem value="general">General Query</MenuItem>
            <MenuItem value="hot">Hot Query</MenuItem>
          </TextField>
        </FormControl>
        <FormControl>
          <TextField select defaultValue="me" size='small' label="Assign To" required>
            <MenuItem value="me">Assign to me</MenuItem>
          </TextField>
        </FormControl>
      </FormGroup>

      <FormControl sx={{ width: '100%' }}>
        <TextField select defaultValue="activitiesonly" size='small' label="Select service">
          <MenuItem value="activitiesonly">Activities only</MenuItem>
          <MenuItem value="flightonly">Flight only</MenuItem>
          <MenuItem value="fullpackage">Full package</MenuItem>
          <MenuItem value="hotelflight">Hotel + Flight</MenuItem>
          <MenuItem value="hoteltransport">Hotel + Transport</MenuItem>
          <MenuItem value="hotelonly">Hotel only</MenuItem>
          <MenuItem value="transportonly">Transport only</MenuItem>
          <MenuItem value="visaonly">Visa only</MenuItem>
        </TextField>
      </FormControl>

      <TextField label="Remark" variant="outlined" size='small' multiline />

    
   <div className="buttons">
   <FormGroup row sx={{ gap: '0.5rem',  flexWrap: 'nowrap', '& > *': { flex: 1 }, color: "red" }}>
        <BtnOutlined  handleClicked={closeDrawer}>Cancel</BtnOutlined>
        <button className="bg-[#16a34a] hover:bg-green-900 text-[#ffff]"> <Link to="./queriesDetail">Save</Link> </button>
      </FormGroup>
   </div>
   
    </form>
  )
}

// form all functions completed





  const buttonData = [
    { label: 'New', color: '#ffcccc' },
    { label: 'Active', color: '#ccffcc' },
    { label: 'No Connect', color: '#ccccff' },
    { label: 'Hot Lead', color: '#ffffcc' },
    { label: 'Proposal Sent', color: '#ffccff' },
    { label: 'Follow Up', color: '#ccffff' },
    { label: 'Confirmed', color: '#ffddcc' },
    { label: 'Cancelled', color: '#ccffdd' },
    { label: 'Invalid', color: '#dddddd' },
  ];

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event , index) => {
    setActiveButton(index);
    setAnchorEl(event.currentTarget);
  };

  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState("");

  const handleOpenModal = (content) => {
    console.log("email clicked");
    setModalContent(content);
    setModalOpen(true);
   
  };


  const handleCloseModal = () => {
    setModalOpen(false);
  };
  
 

















  // const navigate = useNavigate()

  //naviagte save

  // const navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    console.log("submit");
    console.log(
      phoneNumber,
      searchResults,
      selectAdultage,
      email,
      destination,
      selectedMonth,
      selectChildage,
      selectInfantage,
      selectSource,
      selectPriority,
      selectAssign,
      selectService,
      remarks
    );
    navigate("/queries/102498");
  };




  // adultage child infant array



  

 



  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [gridApi, setGridApi] = useState(null);
  const [able, setAble] = useState(false);

  const quickFilter = (search) => {
    gridApi.setGridOption("quickFilterText", search);
  };

  const [proposalModal, setProposalModal] = useState(false);
  const [queryModal, setQueryModal] = useState(false);

  const handleClose = (MODE) => {
    setAnchorEl(null);

    if (MODE === "PROPOSAL") {
      return setProposalModal(!proposalModal);
    } else if (MODE === "QUERY") {
      return setQueryModal(!queryModal);
    }
  };
  const querypage = [
    {
      icon: <RecentActorsOutlinedIcon style={{ fontSize: 18 }} />,
      name: "Query Details    ",
      link: "detail",
    },
    {
      icon: <ArticleIcon style={{ fontSize: 18 }} />,
      name: "Proposal",
      link: "proposals",
    },
    {
      icon: <EmailOutlinedIcon style={{ fontSize: 18 }} />,
      name: "Mails",
      link: "mail",
    },
    {
      icon: <AssignmentTurnedInOutlinedIcon style={{ fontSize: 18 }} />,
      name: "Followup's",
      link: "followUps",
    },
    {
      icon: <Diversity3OutlinedIcon style={{ fontSize: 18 }} />,
      name: "Suppliers Communication",
      link: "supplierCommunication",
    },
    {
      icon: <CreditCardOutlinedIcon style={{ fontSize: 18 }} />,
      name: "Post Sales Suppliers",
      link: "postSalesSuppliers",
    },
    {
      icon: <TaskAltOutlinedIcon style={{ fontSize: 18 }} />,
      name: "Voucher",
      link: "voucher",
    },
    {
      icon: <ArticleOutlinedIcon style={{ fontSize: 18 }} />,
      name: "Billing",
      link: "billing",
    },
    {
      icon: <PersonIcon style={{ fontSize: 18 }} />,
      name: "Guest Document",
      link: "guestDocs",
    },
    {
      icon: <TextsmsIcon style={{ fontSize: 18 }} />,
      name: "Feedback",
      link: "feedBack",
    },
    {
      icon: <ScheduleIcon style={{ fontSize: 18 }} />,
      name: "History",
      link: "history",
    },
  ];


  const composeTable = ReactDOMServer.renderToString(<div className='overflow-y-scroll h-[79vh]'>



    <div className='p-2 text-sm font-bold'>
      {/* <p className='font-normal'>3Night 4days</p> */}
      <p className='mt-5'><strong>Thanks & Regards,</strong></p><br />
      
      <p className='mt-5 mb-5'><strong>Team Travbizz.com<br />
      + 91 9797871223  </strong></p>
      <hr />
    </div>
  </div>)

  const composeModalMail = <div>
  <div className='flex justify-between text-xl font-semibold bg-[#fcfdfd] p-2 items-center w-[900px]'>
  <h3>Compose Mail</h3>
  <IoClose className='cursor-pointer font-bold ' onClick={handleCloseModal}/>
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
  




 const [column, setColumn] = useState([
    {
      headerCheckboxSelection: true,
      checkboxSelection: true,
      sortable: false,
      filter: false,
      flex: 0.2,
    },
    {
      cellRenderer: (params) => {
        return (
          <div className="flex flex-col h-full w-full">
            <div className="flex w-full flex-col justify-evenly   h-[45%]">
              <p className="h-5 text-blue-600 text-base hover:text-blue-800 font-semibold cursor-pointer">
                {params.data.id}
              </p>
              <div className="w-fit h-5 px-2 flex justify-center items-center  rounded-md bg-[#0cb5b5]">
                <span className="text-xs font-bold text-white">Active</span>
              </div>
            </div>
            <div className="flex flex-col h-[45%]">
              <div className=" h-6 text-slate-600 flex items-center">
                Requirement
              </div>
              <div className=" h-2 flex items-center font-bold text-sm  ">
                Hotel + Flight
              </div>
            </div>

            <div className="h-[10%]"></div>
          </div>
        );
      },
    },
    {
      cellRenderer: (params) => {
        return (
          <div className="flex flex-col h-full w-full">
            <div className="flex w-full flex-col justify-evenly  h-[45%]">
              <p className="text-sm font-semibold h-5">
                {`Travocorp (Corporate)`}
              </p>
              <div className="flex text-slate-600 justify-start h-2 items-center">
                9805852240
              </div>
            </div>
            <div className="flex flex-col h-[45%]">
              <div className=" h-6 text-slate-600 text-xs flex items-center">
                sahil12@gmail.com
              </div>
              <div className=" h-2 flex items-center text-slate-700 text-xs  ">
                Agent
              </div>
            </div>

            <div className="h-[10%]"></div>
          </div>
        );
      },
    },
    {
      cellRenderer: (params) => {
        return (
          <div className="flex flex-col h-full w-full">
            <div className="flex w-full flex-col justify-evenly  h-[45%]">
              <p className="text-sm font-semibold h-3">Destination</p>
              <div className="w-fit h-5 px-2 flex justify-center items-center  rounded-md bg-[#737373]">
                <span className="text-xs font-bold text-white">Dehli</span>
              </div>
            </div>
            <div className="flex flex-col h-[45%]">
              <div className=" h-6 text-slate-800 text-sm flex items-center">
                Travllers
              </div>
              <div className=" h-5 flex items-center text-slate-700 text-xs  ">
                <span className="font-bold text-black text-sm">{`1`}</span>
                &nbsp;Adult&nbsp;
                <span className="font-bold text-black text-sm">{`3`}</span>
                &nbsp;Child&nbsp;
                <span className="font-bold text-black text-sm">{`2`}</span>
                &nbsp;Infant&nbsp;
              </div>
            </div>

            <div className="h-[10%]"></div>
          </div>
        );
      },
    },
    {
      cellRenderer: (params) => {
        return (
          <div className="flex flex-col h-full w-full">
            <div className="flex w-full flex-col justify-evenly  h-[45%]">
              <span className="h-2 flex items-center">
                <CardGiftcardOutlinedIcon
                  style={{ color: "gray", fontSize: 17 }}
                />
                <span className="text-xs text-slate-600">10-04-2024</span>
              </span>
              <span className="h-1 flex items-center">
                Till :
                <span className="text-xs text-slate-600">&nbsp;10-04-2024</span>
              </span>
            </div>
            <div className="flex flex-col h-[45%]">
              <div className=" h-6 text-slate-700 text-sm font-[500] flex items-center">
                Assinged To
              </div>
              <div className=" h-5 flex items-center text-slate-700 text-xs  ">
                <select className="border border-slate-400 w-[90%] rounded">
                  <option value={""}>Assingn To me</option>
                  <option value={""}></option>
                  <option value={""}></option>
                </select>
              </div>
            </div>

            <div className="h-[10%]"></div>
          </div>
        );
      },
    },
    {
      cellRenderer: (params) => {
        return (
          <div className="flex flex-col h-full w-full">
            <div className="flex w-full flex-col justify-evenly  h-[45%]">
              <span className="h-2 flex items-center">
                <CalendarMonthOutlinedIcon
                  style={{ color: "gray", fontSize: 17 }}
                />
                <span className="text-xs text-slate-600">10-04-2024</span>
              </span>
              <span className="h-1 flex items-center">
                <TextSnippetOutlinedIcon
                  style={{ color: "#ffa500", fontSize: 17 }}
                />
                <span className="text-xs text-slate-600">&nbsp;No Notes</span>
              </span>
            </div>
            <div className="flex flex-col h-[45%]">
              <span className="h-5 flex items-center">
                <AccessTimeOutlinedIcon
                  style={{ color: "gray", fontSize: 17 }}
                />
                <span className="text-xs text-slate-600">Created</span>
              </span>
              <span className="h-4 flex items-center">
                <span className="text-xs text-slate-600">10-04-2024</span>
              </span>
            </div>

            <div className="h-[10%]"></div>
          </div>
        );
      },
      flex: 0.7,
    },
    {
      cellRenderer: (params) => {
        return (
          <div className="flex flex-col h-full w-full">
            <div className="flex w-full flex-col justify-center items-start  h-[45%]">
              <div className=" w-full h-8 flex items-center">
                <Link to={`/queries/${params.data.id}`}>
                  <div className="group cursor-pointer hover:bg-black border border-black h-6 w-6 rounded-full flex justify-center items-center">
                    <NorthEastIcon
                      className="group-hover:text-white"
                      style={{ fontSize: 17 }}
                    />
                  </div>
                </Link>

                <div className="group cursor-pointer hover:bg-black border border-black h-6 w-6 ml-1 rounded-full flex justify-center items-center">
                  <FaWhatsapp
                    className="group-hover:text-white"
                    style={{ fontSize: 17 }}
                  />
                </div>
                <div className="group cursor-pointer hover:bg-black border border-black h-6 w-6 ml-1 rounded-full flex justify-center items-center">
                  <EmailOutlinedIcon
                    className="group-hover:text-white"
                    style={{ fontSize: 17 }}
                  />
                </div>
                <Link to={`/queries/${params.data.id}`}>
                <div
               
                  className="group cursor-pointer hover:bg-black border border-black h-6 w-6 ml-1 rounded-full flex justify-center items-center"
                >
                  <EditOutlinedIcon
                    className="group-hover:text-white"
                    style={{ fontSize: 17 }}
                  />
                </div>
                </Link>
                <div
                  onClick={() => {
                    setProposalModal(true);
                  }}
                  className="group cursor-pointer hover:bg-black border border-black h-6 w-6 ml-1 rounded-full flex justify-center items-center"
                >
                  <CardGiftcardIcon
                    className="group-hover:text-white"
                    style={{ fontSize: 17 }}
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col h-[45%]">
              <span className="h-5 flex items-center">
                <AccessTimeOutlinedIcon
                  style={{ color: "gray", fontSize: 17 }}
                />
                <span className="text-xs text-slate-600">Last Updated</span>
              </span>
              <span className="h-4 flex items-center">
                <span className="text-xs text-slate-600">
                  10-04-2024 - 07:42 PM
                </span>
              </span>
            </div>

            <div className="h-[10%]"></div>
          </div>
        );
      },
    },
  ]);

  
 
  return (
    <div>
      <div className="flex justify-between border-y bg-[#f5f7f9] border-slate-300 px-4 ">
        <div className="flex flex-row px-1 items-center">
          <div className="font-[500]"> Query ID 12345 </div>
        </div>
        <div className="flex py-2 justify-evenly">
      <Link target="target" to='https://api.whatsapp.com/send?text=Hi&phone=+919521508406'>
             <button className="text-xs mx-1 border px-4 py-2 hover:drop-shadow-md rounded-md flex items-center    gap-1">
            <WhatsAppIcon style={{ fontSize: 18 }} className="text-green-600" />{" "}
            WhatsApp
          </button>
      </Link>
          <button  onClick={()=> handleOpenModal(composeModalMail)}  className="text-xs mx-1 border px-4 py-2 hover:drop-shadow-md rounded-md flex items-center gap-1">
            <EmailOutlinedIcon style={{ fontSize: 18 }} /> Email
          </button>
      <Link to="/queries/102498/followUps">
            <button className="text-xs mx-1 border px-4 py-2 hover:drop-shadow-md rounded-md flex items-center gap-1">
            <EventAvailableOutlinedIcon style={{ fontSize: 18 }} /> Task
          </button>

       </Link>



  <LocalizationProvider dateAdapter={AdapterDayjs}>

  <Btn handleClicked={toggleDrawer('query', true)}>
      <div className="flex items-center gap-1">
        <MdModeEdit className="text-lg"/>  Edit
      </div>
    </Btn>
         
    <Drawer anchor='right' open={drawerOpen['query']} onClose={toggleDrawer('query', false)}>
      <div className="drawer">
        <h2 className='dashboard-card-heading text-black'>Edit Query</h2>

        <AddQueryForm closeDrawer={toggleDrawer('query', false)} />
      </div>
    </Drawer>
</LocalizationProvider>






     






     
        </div>




         
      </div>

      <div className="flex flex-col justify-start h-fit items-start mt-2 m-auto border border-slate-200 rounded-lg w-[99%]">
        <div className="border w-full rounded-t-lg py-1 bg-[#f5f7f9]">
          <div className="text-xs px-3 ">
            Created: 19-04-2024 | Last Updated: 19/04/2024 - 10:39 PM
          </div>
          




    <div className="items--container">
      {items.map((item, index) => (
        <div 
          key={index} 
          className={`item hover:!cursor-pointer group ${activeItem === index ? 'active' : ''}`} 
          onClick={() => handleItemClick(index)}
        >
          <div className={`arrow top group-hover:bg-[#cecece]  group-hover:!border-[#cecece] ${activeItem === index ? 'active' : ''}`} />
          <div className={`content ${activeItem === index ? 'active' : ''}`} style={{ color: activeItem === index ? '#cecece' : '' }}>
            {item}
          </div>
          <div className={`arrow bottom group-hover:bg-[#cecece] group-hover:!border-[#cecece] ${activeItem === index ? 'active' : ''}`} />
        </div>
      ))}
    </div>


        </div>
        <div className="flex flex-row w-full"> 
          <div className="w-[20%] h-full flex flex-col border-r py-1 border-slate-300 bg-[#f5f7f9]">

            {querypage.map((item, index) => {
              return (
                <Link key={index} to={item.link}>
                  <div
                    className={`mx-2 text-sm px-2 hover:cursor-pointer py-2 rounded-sm border-transparent leading-[2rem] border-l-[8px] ${
                      window.location.pathname.includes(item.link)
                        ? "shadow-lg border-l-[8px] border-l-green-600 bg-white"
                        : "hover:bg-slate-200"
                    }`}
                  >
                    {item.icon} {item.name}
                  </div>
                </Link>
              );
            })}
          </div>
          <div className="w-[80%] h-[67vh] overflow-y-auto ">
            <Routes>
              <Route path="/" element={<Details />} />
              <Route path="/detail" element={<Details />} />
              <Route path="/billing" element={<Billing />} />
              <Route path="/followUps" element={<FollowUps />} />
              <Route path="/guestDocs" element={<GuestDocuments />} />
              <Route path="/mail" element={<Mail />} />
              <Route path="/voucher" element={<Voucher />} />
              <Route
                path="/supplierCommunication"
                element={<SupplierCommunication />}
              />
              <Route path="/history" element={<History />} />
              <Route
                path="/postSalesSuppliers"
                element={<PostSalesSuppliers />}
              />
              <Route path="/proposals" element={<Proposals />} />
              <Route path="/feedBack" element={<FeedBack />} />
            </Routes>
          </div>



          
          
        </div>
      </div>






      
      <CenterModal open={modalOpen} onClose={handleCloseModal} data={modalContent}/>



    </div>
  );
}

export default QueriesDetail;