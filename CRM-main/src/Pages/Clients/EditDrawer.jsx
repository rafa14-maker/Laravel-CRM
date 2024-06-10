import { Button, Drawer, FormControl, FormGroup, MenuItem, TextField } from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import React, { useState } from 'react'
import { useEffect } from 'react';
import { MdEdit } from 'react-icons/md';
import { Link } from 'react-router-dom';

const EditDrawer = () => {

// Calculate days and Night

const [selectedDate, setSelectedDate] = useState(null);




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
 


// drawer btn function 
function Btn({ handleClicked, children, className }) {
 return (
    <Button 
    onClick={handleClicked}  
    className={className} 
    size='medium'
    style={{ 
      backgroundColor: '#12344d', 
      borderRadius: "10px",
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




 function AddQueryForm({ closeDrawer }) {
   return (
     <form className="drawer-form">


<FormGroup row sx={{ gap: '0.5rem',  }}>
      <FormControl fullWidth>
        <TextField select defaultValue="mr" size="small" fullWidth>
          <MenuItem value="mr">Mr.</MenuItem>
          <MenuItem value="mrs">Mrs.</MenuItem>
          <MenuItem value="ms">Ms.</MenuItem>
          <MenuItem value="dr">Dr.</MenuItem>
          <MenuItem value="prof">Prof.</MenuItem>
        </TextField>
      </FormControl>
    </FormGroup>

    
    <FormGroup row sx={{ gap: '0.5rem', '&>*': { flex: 1 } }}>
          <TextField label="First Name" variant="outlined" size='small' required />
        </FormGroup>

        <FormGroup row sx={{ gap: '0.5rem', '&>*': { flex: 1 } }}>
          <TextField label="Last Name" variant="outlined" size='small' required />
        </FormGroup>

        <FormGroup row sx={{ gap: '0.5rem', '&>*': { flex: 1 } }}>
          <TextField label="Email" variant="outlined" size='small' required />
        </FormGroup>

        <FormGroup row sx={{ gap: '0.5rem' }}>
      <div className="gap-container" style={{ display: 'flex', gap: '10px' }}>
        <TextField
          sx={{ width: '80px' }}
          label="Mobile"
          variant="outlined"
          size="small"
          placeholder="+91"
          required
        />
        <TextField
          sx={{ width: '410px' }}
          label=""
          variant="outlined"
          size="small"
          placeholder=""
          required
        />
      </div>
    </FormGroup>

    <FormGroup row sx={{ gap: '0.5rem', '&>*': { flex: 1 } }}>
          <TextField label="Email2" variant="outlined" size='small' required />
        </FormGroup>
      
        <FormGroup row sx={{ gap: '0.5rem' }}>
      <div className="gap-container" style={{ display: 'flex', gap: '10px' }}>
        <TextField
          sx={{ width: '80px' }}
          label="Mobile2"
          variant="outlined"
          size="small"
          placeholder="+91"
          required
        />
        <TextField
          sx={{ width: '410px' }}
          label=""
          variant="outlined"
          size="small"
          placeholder=""
          required
        />
      </div>
    </FormGroup>
      
    <FormGroup row sx={{ gap: '0.5rem', '&>*': { flex: 1 } }}>
          <TextField label="Address" variant="outlined" size='small' required />
    </FormGroup>

    <FormGroup>
    <DatePicker
        label="Date of Birth"
        size="small"
        slotProps={{ textField: { size: 'small' } }}
      />
    </FormGroup>

    <FormGroup>
    <DatePicker
        label="Marriage Anniversary"
        size="small"
        slotProps={{ textField: { size: 'small' } }}
      />
    </FormGroup>
      
 
      
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
    
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <Btn 
                        handleClicked={toggleDrawer('query', true)} 
                        className=""
                        >
                     <MdEdit className='text-lg text-[#ffffff]'/>

                            
                    </Btn>
                     
                      <Drawer anchor='right' open={drawerOpen['query']} onClose={toggleDrawer('query', false)}>
                      <div className="drawer">
                      <h2 className='dashboard-card-heading text-black'>Edit Client</h2>
                      <AddQueryForm closeDrawer={toggleDrawer('query', false)} />
                      </div>
                      </Drawer>
                  </LocalizationProvider>
    </>
  )
}

export default EditDrawer