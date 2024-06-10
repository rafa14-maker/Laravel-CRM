import React, { useEffect, useState } from 'react'
import { IoMdCall } from 'react-icons/io'
import { LuClock9 } from 'react-icons/lu'
import { MdEdit } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { FormControl, FormGroup, MenuItem, TextField, Drawer, Button } from '@mui/material'
import EditDrawer from './EditDrawer'



const ClientDetail = () => {

// Calculate days and Night
 const [fromDate, setFromDate] = useState("");
 const [toDate, setToDate] = useState("");
 const [days, setDays] = useState(0);
 const [nights, setNights] = useState(0);
 const [type, setType] = useState("");


 useEffect(() => {
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
      size='medium'
      sx={{ 
        backgroundColor: '#12344d', 
        color: '#fff',
       
        '&:hover': {
          backgroundColor: 'bg-blue-600', // Optional: Slightly lighter shade for hover effect
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
          <DatePicker label="From Date" size="small" slotProps={{ textField: { size: 'small' } }} />
          <DatePicker label="To Date" size="small" slotProps={{ textField: { size: 'small' } }} />
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
    <FormGroup  FormGroup row sx={{ gap: '0.5rem',  flexWrap: 'nowrap', '& > *': { flex: 1 }, color: "red" }}>
        <BtnOutlined  handleClicked={closeDrawer}>Cancel</BtnOutlined>
        <button className="bg-[#16a34a] hover:bg-green-900 text-[#ffff]"> <Link to="./queriesDetail">Save</Link> </button>
      </FormGroup>
   </div>
     
      </form>
    )
  }



  return (
    <>
      <div className='bg-[#f9fbfc] h-fit w-full flex'>


        <div className='border-r w-[250px]'>
          <p className='text-xl font-semibold m-3 mt-4'>Client Account</p>
          <div className='flex flex-col font-semibold text-sm items-start mt-5 text-[#212529]'>
              <button className='hover:bg-[#eff2f5] p-3 w-full text-left'>Client Details</button>
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
                  <p className='text-sm'>Type: <span className='font-semibold'>Client</span></p>
                  <p className='text-sm'>Created: <span className='font-semibold'>28-05-2024</span></p>
                </div>
              </div>
            
              <div className='flex items-center gap-5'>
              <Link to={"/clients"}><button className='text-sm bg-[#12344d] text-white p-1 px-3 rounded-md hover:bg-blue-600'>Back</button></Link>
                

 <EditDrawer />
                
              </div>
            </div>

            <hr className='mt-6 mb-6'/>


            <div>
              <h3 className=' font-semibold'>Client Information</h3>


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
            <h3 className='font-semibold mb-4'>Followup's</h3>

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


          <div className='bg-white w-full shadow rounded-md p-7 mt-5'>
            <div className='flex justify-between items-center mb-4'>
                <h3 className='font-semibold '>Queries's</h3>




                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <Btn handleClicked={toggleDrawer('query', true)} className="h-[80%] flex-shrink-0">
                      + Add Queries
                      </Btn>
                      <Drawer anchor='right' open={drawerOpen['query']} onClose={toggleDrawer('query', false)}>
                      <div className="drawer">
                      <h2 className='dashboard-card-heading text-black'>Edit Query</h2>
                      <AddQueryForm closeDrawer={toggleDrawer('query', false)} />
                      </div>
                      </Drawer>
                  </LocalizationProvider>





            </div>

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
  )
}

export default ClientDetail