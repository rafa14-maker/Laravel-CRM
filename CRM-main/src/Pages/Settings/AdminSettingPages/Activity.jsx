import { AgGridReact } from 'ag-grid-react';

import React, { useEffect, useState } from 'react'
import EditIcon from '@mui/icons-material/Edit';
import { FormControl, FormGroup, Link, MenuItem, TextField, Drawer, Button, Modal, Box   } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

import { LocalizationProvider } from '@mui/x-date-pickers';
import { Textarea } from '@mui/joy';
import { IoClose } from 'react-icons/io5';
import CenterModal from '../../Queries/ViewProposal/CenterModal';


const Activity = () => {


    const [modalOpen, setModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState("");
  
    const handleOpenModal = (content) => {
      setModalContent(content);
      setModalOpen(true);
      
    };
  
  
  
    
  
    const handleCloseModal = () => {
      setModalOpen(false);
    };

const iconModal3  = <div >
  <div className='flex justify-between text-2xl font-semibold bg-[#fcfdfd] p-2 items-center w-[1200px]'>
      <h3>Update Price</h3>
      <IoClose className='cursor-pointer font-bold ' onClick={handleCloseModal}/>
    </div>
    <hr />

   <div className='mt-5 mx-3'>
   <p className='font-semibold text-xl'>dsd</p>
   </div>

<div className='mt-6 flex w-full gap-5 px-3 pb-5 items-end justify-between'>
    <div className='w-full'>
        <p className='text-[14px]'>From Date</p>
        <input type="Date" className='p-2 w-full border mt-2' />
    </div>

    <div className='w-full'>
        <p className='text-[14px]'>To</p>
        <input type="Date" className='p-2 w-full border mt-2' />
    </div>


    <div className='w-full'>
        <p className='text-[14px]'>Adult</p>
        <input type="number" className='p-2 w-full border mt-2' min="0" />
    </div>

    <div className='w-full'>
        <p className='text-[14px]'>Child</p>
        <input type="number" className='p-2 w-full border mt-2' min="0" />
    </div>

    <div className='w-full'>
<button className='bg-[#183a54] text-white px-3 text-sm rounded p-1 '>
    Add
    </button>  
</div>
</div>

<div className=' mx-3'>
   <p className='font-semibold text-xl'>Rate list</p>
   </div>


<div className='mx-3 mt-3'>
    <table className='w-full'>
    <tr className="w-full bg-[#e4e4e4] p-2">
            
            <td className="border-[1px] border-[#dbdbdb] font-medium text-sm p-2">from</td>
            <td className="border-[1px] border-[#dbdbdb] font-medium text-sm p-2">To</td>
            <td className="border-[1px] border-[#dbdbdb] font-medium text-sm p-2 ">Adult</td>
            <td className="border-[1px] border-[#dbdbdb] font-medium text-sm p-2">Child</td>
            <td className="border-[1px] border-[#dbdbdb] font-medium text-sm p-2"></td>
          </tr>
    </table>
</div>

<p className='text-center text-sm text-[] mt-3'>No Rate</p>

</div>




const iconModal2  = <div>
  <div className='flex justify-between text-xl font-medium bg-[#fcfdfd] p-2 items-center w-[500px]'>
      <h3>Import Activity Excel</h3>
      <IoClose className='cursor-pointer font-bold ' onClick={handleCloseModal}/>
    </div>
    <hr />

    <div className='mx-5'>
      <p className='text-[12px] mt-8 '>Import Excel</p>
      <div className='border p-1 mt-3 rounded-md'>
        <input type="file" />
      </div>
      <hr className='mt-7' />
      <div className='flex justify-end mt-5 pb-5'>
        <button className='bg-[#1a3c57] text-[#fff] text-xs p-2 px-3 rounded-md'>
          Save
        </button>
      </div>
    </div>
</div>

  


    // drawerOpen function
    const [drawerOpen, setDrawerOpen] = useState({
      client: false,
      query: false,
      itinerary: false,
    });
    


  // toggleDrawer function
  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) return;

    setDrawerOpen({ ...drawerOpen, [anchor]: open });
  };



  



  // drawer btn function 
  function Btn({ handleClicked, children, className }) {
    return (
       <Button 
       onClick={handleClicked}  
       className={className} 
       size='medium'
       style={{ 
         backgroundColor: '#12344d', 
         borderRadius: "0px",
         color: '#fff',
      
         '&:hover': {
           backgroundColor: '#0e2e4a', // Change to the desired hover color
         },
         textTransform: 'none', // Disable uppercase transformation
         boxShadow: 'none', // Remove default box-shadow
       }}
       variant="contained" // Ensures the button has a solid background
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

  const [type, setType] = useState('client')


  
  function AddQueryForm({ closeDrawer }) {
    return (
      <form className="drawer-form">
         
         <FormGroup>
            <TextField label="Mobile" variant="outlined" size='small' sx={{width: "500px"}} required  />
         </FormGroup>

         <FormGroup>
            <TextField label="Destination" variant="outlined" size='small' required />
         </FormGroup>

         <FormGroup>
         <TextField id="Activity Details" label="Activity Details" variant="outlined"  />
         </FormGroup>

         <FormGroup>

         <p className='text-sm'>Activity Photo*</p>
         <div className='border p-2 rounded mt-2 '>
           <input type="file" />
           </div>
         </FormGroup>

         <FormControl sx={{ width: '100%' }} value={"DEFAULT"} disabled={true}>
        <TextField
          select
          defaultValue="client"
          size='small'
          label="Status"
        >
          <MenuItem value="client">Active</MenuItem>
          <MenuItem value="agent">Inactive</MenuItem>
=        </TextField>
      </FormControl>

        <div className="buttons">
    <FormGroup  FormGroup row sx={{ gap: '0.5rem',  flexWrap: 'nowrap', '& > *': { flex: 1 }, color: "red" }}>
        <BtnOutlined  handleClicked={closeDrawer}>Cancel</BtnOutlined>
        <Link to="./queriesDetail">
      <button className="bg-[#16a34a] w-60 p-2 transition-all hover:bg-green-900 text-[#ffff]"> Save</      button>
        </Link>
    </FormGroup>
   </div>
      </form>
    )
  }

    const data = [
        {
            id: "12EF34RC1",
            date: "15-03-2024",
            status: "active",
            name: "dsd",
            currencyRate: 0.014,
            price: "Update",
            by: "TravBizz",
          },
          {
            id: "98AB76YZ3",
            date: "16-03-2024",
            status: "inactive",
            name: "Eze & Saint-Paul de Vence Private Half-Day Tour",
            currencyRate: 2.24,
            price: "Update",
            by: "TravBizz",
          },
        {
          id: "45CD67FG8",
          date: "17-03-2024",
          status: "active",
          name: "Discover the Lérins Islands and the Bay of Cannes by Private Boat",
          currencyRate: 0.012, // Equivalent in INR
          price: "Update",
          by: "TravBizz",

        },
        {
          id: "23GH89IJ5",
          date: "18-03-2024",
          status: "active",
          name: " Cannes E-Bike Guided Tour",
          currencyRate: 1.54, // Equivalent in INR
          price: "Update",
          by: "TravBizz",

        },
        {
          id: "67KL12MN0",
          date: "19-03-2024",
          status: "active",
          name: "Ferry from Cannes to St Tropez",
          currencyRate: 0.011, // Equivalent in INR
          price: "Update",
          by: "TravBizz",

        },
        {
          id: "34OP56QR7",
          date: "20-03-2024",
          status: "inactive",
          name: "	Fort Aguada, Goa  ",
          currencyRate: 0.021, // Equivalent in INR
          price: "Update",
          by: "TravBizz",

        },
        {
          id: "89ST23UV4",
          date: "21-03-2024",
          status: "active",
          name: "cad",
          currencyRate: 0.019, // Equivalent in INR
          price: "Update",
          by: "TravBizz",

        },
        {
          id: "12WX34YZ5",
          date: "22-03-2024",
          status: "inactive",
          name: "sgd",
          currencyRate: 0.02, // Equivalent in INR
          price: "Update",
          by: "TravBizz",
        },
        {
          id: "56CD78EF9",
          date: "23-03-2024",
          status: "active",
          name: "chf",
          currencyRate: 0.015, // Equivalent in INR
          price: "Update",
          by: "TravBizz",

        },
        {
          id: "78GH90IJ1",
          date: "24-03-2024",
          status: "inactive",
          name: "nzd",
          currencyRate: 0.023, // Equivalent in INR
          price: "Update",
          by: "TravBizz",

        },
      ];


    const [search, setSearch] = useState("");


  const [row, setRow] = useState(data);
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const [gridApi, setGridApi] = useState(null);
  const [value, setValue] = useState();

  const [stat, setStat] = useState("");

  const [column, setColumn] = useState([
    {
      headerName: "Name",
      field: "name",
      width: 450,
      cursor: "pointer",
      cellRenderer: (params) => {
        return (
          <div onClick={()=> handleOpenModal(iconModal3)} className="cursor-pointer">
            <div className="">
              {params.value}
            </div>
          </div>
        );
      },
      
      
    },
    {
      headerName: "Destination",
      field:'currencyRate',
      width: 200,
     
    },

    {
        headerName: "Price ",
        field: "price",
        width: 100,
        cellRenderer: (params) => {
          return (
            <div className="flex items-center cursor-pointer justify-center w-full h-full">
              <div onClick={()=> handleOpenModal(iconModal3)} className="flex items-center justify-center w-14 ">
                {params.value}
              </div>
            </div>
          );
        },
      },

    {
        headerName: "Status",
        field: "status",
      width: 150,

        cellRenderer: (params) => {
          return (
            <div className="flex items-center cursor-pointer justify-center w-full h-full">
              <div
                className="bg-green-700 w-16 rounded-lg text-white flex justify-center h-6 items-center"
              >
                {params.value}
              </div>
            </div>
          );
        },
      },

      {
        headerName: "By",
        field: "by",
        width: 150,
        cellRenderer: (params) => {
          return (
            <div className="flex items-center justify-center gap-2 cursor-pointer w-full h-full">
              <div className="flex items-center justify-center cursor-pointer w-14">
              <div  >
             <span   className="bg-[#deeaf9] text-sm hover:text-black  rounded-full mr-2  p-1 px-2 "
              style={{ fontSize: "12px" }}>
                  T
                </span>
             </div>
                {params.value}
           
              </div>
            </div>
          );
        },
      },
    {
      headerName: "Date",
      field: "date",
      width: 150,
      cursor:"pointer",
    },
    {
      width: 95,
      sortable: false,
      filter: false,
      cellRenderer: (params) => {
        return (
          // <div  className="flex items-center cursor-pointer justify-center w-full h-full" >
          //   <EditIcon 

            
          //     className=" "
          //     style={{ fontSize: "25px" }}
          //   />

      <LocalizationProvider dateAdapter={AdapterDayjs}>

              
                     <Btn  handleClicked={toggleDrawer('query', true)}  className="" >
                 
                     <EditIcon className='text-[8px] text-[#ffffff]'/>
                
                     </Btn>
            



      <Drawer anchor='right' open={drawerOpen['query']} onClose={toggleDrawer('query', false)}>
        <div className="drawer">
          <p></p>
          <AddQueryForm closeDrawer={toggleDrawer('query', false)} />
        </div>
      </Drawer>
</LocalizationProvider>
          // </div>
        );
      },
    },
  ]);

  const onGridReady = (params) => {
    setGridApi(params.api);
    setRow(data);
  };

  const quickFilter = () => {
    gridApi.setGridOption("quickFilterText", search);
  };

  const defaultColDef = {
    sortable: true,
    filter: true,
    cellStyle: { borderRight: "1px solid #d9d9db" },
    width: 191,
    tooltipField: "name",
  };

  return (
   <>
   
   <div className='flex justify-between cursor-pointer items-center pt-3 mx-3'>
        <div className='flex items-center gap-5  '><p className='font-semibold'>Activity</p>
      <input 
            value={search}
            onChange={(e) => {
            setSearch(e.target.value);
            quickFilter();
         }}         
            className="border border-slate-300 h-[80%] p-3 rounded-md text-sm w-[18rem] focus:outline-none focus:border focus:border-black"
            placeholder="Search by anything...."
          />
    </div>
    <div>
<div className='flex gap-3  '>
        <button className='border p-2 px-4 border-[#d1d1d196] shadow-sm transition-all duration-300 ease-in-out text-xs font-semibold bg-gradient-to-t from-[#e9e4e4] to-[#fff] rounded-md hover:bg-gradient-to-b from-[#f3f3f3] to-[#e9e4e4] flex items-center gap-1'>Download Format</button>
        <button onClick={()=> handleOpenModal(iconModal2)}  className='border px-4 border-[#d1d1d196] shadow-sm transition-all duration-300 ease-in-out text-xs font-semibold bg-gradient-to-t from-[#e9e4e4] to-[#fff] rounded-md hover:bg-gradient-to-b from-[#f3f3f3] to-[#e9e4e4] flex items-center gap-1'>Import File</button>
        <button className='border px-4 border-[#d1d1d196] shadow-sm p-1 transition-all duration-300 ease-in-out text-xs font-semibold bg-gradient-to-t from-[#e9e4e4] to-[#fff] rounded-md hover:bg-gradient-to-b from-[#f3f3f3] to-[#e9e4e4] flex items-center gap-1'>Export Data</button>



  <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Btn handleClicked={toggleDrawer('query', true)} className="h-[80%] flex-shrink-0">
        Add Activities
      </Btn>
      <Drawer anchor='right' open={drawerOpen['query']} onClose={toggleDrawer('query', false)}>
        <div className="drawer">
          <h2 className='dashboard-card-heading text-black'>Add Activity</h2>
          <AddQueryForm closeDrawer={toggleDrawer('query', false)} />
        </div>
      </Drawer>
  </LocalizationProvider>
</div>



    </div>
    </div>

<div className="h-full w-full mt-3">
<div
  className="ag-theme-quartz"
  style={{ height: "100%", width: "100%" }}
>
  <AgGridReact
    onGridReady={onGridReady}
    columnDefs={column}
    rowData={row}
    defaultColDef={defaultColDef}
    enableBrowserTooltips={true}
    pagination={true}
  />


</div>
</div>



<CenterModal  open={modalOpen} onClose={handleCloseModal} data={modalContent}/>

   </>
  )
}

export default Activity