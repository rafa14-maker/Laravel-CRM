import { useEffect, useState } from 'react';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import PostAddIcon from '@mui/icons-material/PostAdd';
import MoreTimeIcon from '@mui/icons-material/MoreTime';

import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import MenuItem from '@mui/material/MenuItem';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import FormGroup from '@mui/material/FormGroup';
import Checkbox from '@mui/material/Checkbox';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { BarChart } from '@mui/x-charts/BarChart';
import { PieChart } from '@mui/x-charts/PieChart';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import "./dashboard.css"
import { RiExternalLinkFill } from 'react-icons/ri';

import WeatherCard from './Weather';
import { IoLocationSharp } from 'react-icons/io5';
import { Link } from 'react-router-dom';





const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontFamily: 'inherit',
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          fontFamily: 'inherit',
        }
      }
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontFamily: 'inherit',
        }
      }
    },
    MuiTableHead: {
      styleOverrides: {
        root: {
          "& .MuiTableRow-root th:first-child": {
            borderTopLeftRadius: "5px",
            borderBottomLeftRadius: "5px",
          },
          "& .MuiTableRow-root th:last-child": {
            borderTopRightRadius: "5px",
            borderBottomRightRadius: "5px",
          },
          "& .MuiTableRow-root th": {
            color: "#fff",
            backgroundColor: "#4a4a69",
          }
        }
      }
    },
  },
});

export default function Dashboard() {

  const data = [
    { id: 25455, name: 'Ammazing Dubai Tour (5 Nights / 6 Days)', assigned: "Mr. Meten Ranjani 4 Adults | 2 Child", confirmed: "Day 2 (02/jan/2024) | Srinagar To Gulmarg Early Morning proceed to Gulmarg Via Tangmarg Road , driving past willow trees , fast flowoing streams ansd lush green meadows. Gulmarg- the meadows of flowers is an apt tem ...." ,detail:"Driver name: Naveed Mustufa , Mobile Number : +912222333 , Vechile No : Jkl 556 , Vehicle with : Non Ac" },
    { id: 25455, name: 'Ammazing Dubai Tour (5 Nights / 6 Days)', assigned: "Mr. Meten Ranjani 4 Adults | 2 Child", confirmed: "Day 2 (02/jan/2024) | Srinagar To Gulmarg Early Morning proceed to Gulmarg Via Tangmarg Road , driving past willow trees , fast flowoing streams ansd lush green meadows. Gulmarg- the meadows of flowers is an apt tem ...." ,detail:"Driver name: Naveed Mustufa , Mobile Number : +912222333 , Vechile No : Jkl 556 , Vehicle with : Non Ac" },
    { id: 25455, name: 'Ammazing Dubai Tour (5 Nights / 6 Days)', assigned: "Mr. Meten Ranjani 4 Adults | 2 Child", confirmed: "Day 2 (02/jan/2024) | Srinagar To Gulmarg Early Morning proceed to Gulmarg Via Tangmarg Road , driving past willow trees , fast flowoing streams ansd lush green meadows. Gulmarg- the meadows of flowers is an apt tem ...." ,detail:"Driver name: Naveed Mustufa , Mobile Number : +912222333 , Vechile No : Jkl 556 , Vehicle with : Non Ac" },
    // { id: 25455, name: 'Ajay kumar', assigned: 212, confirmed: 140 },
    // { id: 3, name: 'Faizan Raza Khan', assigned: 90, confirmed: 55 },
    // { id: 4, name: 'ratan kumar', assigned: 83, confirmed: 22 },
    // { id: 5, name: 'Mohd Imran', assigned: 81, confirmed: 43 },
    // { id: 6, name: 'Aazim Khaki', assigned: 75, confirmed: 42 },
    // { id: 7, name: 'Avesh Tyagi', assigned: 58, confirmed: 34 },
    // { id: 8, name: 'BK BK', assigned: 47, confirmed: 15 },
];
  const numberFormatter = new Intl.NumberFormat('en-PK', { style: 'currency', currency: 'PKR', minimumFractionDigits: 0 });

  const [drawerOpen, setDrawerOpen] = useState({
    client: false,
    query: false,
    itinerary: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) return;

    setDrawerOpen({ ...drawerOpen, [anchor]: open });
  };

  return (
    <div className='p-5 bg-[#f7f9fa]'>
    <ThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <main className="dashboard-container">

      
        <article className="dashboard-card dashboard-grid-item-col2 dashboard-create h-[170px] bg-white">
            <div>
              <p style={{ color: "#38cab3"}}>Good Morning</p>
              <p>Time to Travel</p>
              <p>{(new Date()).toDateString()}</p>
            </div>

            <div>
              <Btn style={{ backgroundColor: "gray!important"}} handleClick={toggleDrawer('client', true)}>
                <PersonAddAltIcon fontSize='small'/>
                Client
              </Btn>
              <Drawer anchor='right' open={drawerOpen['client']} onClose={toggleDrawer('client', false)}>
                <div className="drawer">
                  <h2 className='dashboard-card-heading'>Add Client</h2>

                  <AddClientForm closeDrawer={toggleDrawer('client', false)} />
                </div>
              </Drawer>

              <Btn handleClick={toggleDrawer('query', true)}>
                <PostAddIcon fontSize='small' />
                Query
              </Btn>


              
              <Drawer anchor='right' open={drawerOpen['query']} onClose={toggleDrawer('query', false)}>
                <div className="drawer">
                  <h2 className='dashboard-card-heading'>Add Query</h2>

                  <AddQueryForm closeDrawer={toggleDrawer('query', false)} />
                </div>
              </Drawer>

              <Btn handleClick={toggleDrawer('itinerary', true)}>
                <MoreTimeIcon fontSize='small' />
                Itinerary
              </Btn>
              <Drawer anchor='right' open={drawerOpen['itinerary']} onClose={toggleDrawer('itinerary', false)}>
                <div className="drawer">
                  <h2 className='dashboard-card-heading'>Add Itinerary</h2>

                  <AddItineraryForm closeDrawer={toggleDrawer('itinerary', false)} />
                </div>
              </Drawer>
            </div>
          </article>

          <article className="dashboard-card dashboard-grid-item-col2 dashboard-task bg-white">
            <h2 className="dashboard-card-heading text-[#4a4a69]">
              Task/Followups
            </h2>

            <p style={{ marginTop: '1rem', textAlign: 'center' }}>
              Tasks/Followups
            </p>
          </article>



  

      



          

          <article className="dashboard-card dashboard-grid-item-col2 dashboard-payment bg-white">
            <h2 className="dashboard-card-heading text-[#4a4a69]">
              Payment Collection
            </h2>

            <TableContainer sx={{ marginTop: '1.5rem', maxHeight: '300px' }}>
              <Table size='small' aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Query ID</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Amount</TableCell>
                    <TableCell>Status</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {payments.map((row) => (
                    <TableRow key={row.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                      <TableCell component="th" scope="row">{row.id}</TableCell>
                      <TableCell>{row.name}</TableCell>
                      <TableCell>{row.amount}</TableCell>
                      <TableCell sx={{ color: row.status === 'overdue' ? 'red' : 'black' }}> <p className='bg-[red] text-white text-center rounded-md text-xs py-1 px-2' >{row.status}</p> </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </article>

          <div className=' dashboard-grid-item-col6 dashboard-task'>
        <div className='flex justify-between flex-wrap'> 
        <WeatherCard/>
            <WeatherCard/>
            <WeatherCard/>
            <WeatherCard/>
        </div>
        </div>

          


          <div class="flex items-center justify-center   dashboard-grid-item-col6">
  <section class="grid sm:grid-cols-2 lg:grid-cols-6 gap-6 w-full ">
    <Link to={"/queries"}>
      <div class="relative p-4 bg-gradient-to-r from-[#636363] cursor-pointer to-[#1a1a1a] rounded-md overflow-hidden">
        <div class="relative z-10 mb-4 text-white text-4xl leading-none font-semibold">0</div>
        <div class="relative z-10 text-[#a1a1a1] leading-none font-semibold">Today's Queries</div>
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" class="absolute right-0 bottom-0 h-32 w-32 -mr-8 -mb-8 text-[#000] opacity-50">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>
    </Link>
    
    <Link to={"/queries"}>
      <div class="relative p-4 bg-gradient-to-r cursor-pointer from-blue-400 to-blue-600 rounded-md overflow-hidden">
        <div class="relative z-10 mb-4 text-white text-4xl leading-none font-semibold">2033</div>
        <div class="relative z-10 text-blue-200 leading-none font-semibold">Total Queries</div>
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" class="absolute right-0 bottom-0 h-32 w-32 -mr-8 -mb-8 text-blue-700 opacity-50">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      </div>
    </Link>
    
    <Link to={"/queries/proposalSent"}>
      <div class="relative p-4 bg-gradient-to-r cursor-pointer from-[#7dcccc] to-[#0cb5b5] rounded-md overflow-hidden">
        <div class="relative z-10 mb-4 text-white text-4xl leading-none font-semibold">30</div>
        <div class="relative z-10 text-[#acffff] leading-none font-semibold">Proposal Sent</div>
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" class="absolute right-0 bottom-0 h-32 w-32 -mr-8 -mb-8 text-[#106666] opacity-50">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      </div>
    </Link>


    <Link to={"/queries/followUp"}>
      <div class="relative p-4 bg-gradient-to-r cursor-pointer from-yellow-400 to-yellow-600 rounded-md overflow-hidden">
        <div class="relative z-10 mb-4 text-white text-4xl leading-none font-semibold">248</div>
        <div class="relative z-10 text-yellow-200 leading-none font-semibold">Total Pro. Conf</div>
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" class="absolute right-0 bottom-0 h-32 w-32 -mr-8 -mb-8 text-yellow-700 opacity-50">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      </div>
    </Link>

    <Link to={"/queries/confirmed"}>
      <div class="relative p-4 bg-gradient-to-r cursor-pointer from-[#78ffc4] to-[#46cd93] rounded-md overflow-hidden">
        <div class="relative z-10 mb-4 text-white text-4xl leading-none font-semibold">1002</div>
        <div class="relative z-10 text-[#ffffff] leading-none font-semibold">Total Confirmed</div>
        <img src="https://cdn-icons-png.flaticon.com/512/15889/15889146.png" class="absolute right-0 bottom-0 h-32 w-32 -mr-8 -mb-8 opacity-25"/>
      </div>
    </Link>

    <Link to={"/queries/invalid"}>
      <div class="relative p-4 bg-gradient-to-r cursor-pointer from-[#ff8a83] to-[#f9392f] rounded-md overflow-hidden">
        <div class="relative z-10 mb-4 text-white text-4xl leading-none font-semibold">25</div>
        <div class="relative z-10 text-[#ffdddb] leading-none font-semibold">Total Lost</div>
        <img src="https://cdn-icons-png.flaticon.com/512/4221/4221551.png" class="absolute right-0 bottom-0 h-32 w-32 -mr-8 -mb-8  opacity-25"/>
      </div>
    </Link>
  </section>
</div>


          

{/* 
          <article data-type="todaysqueries" className='dashboard-card dashboard-data bg-white' >
            <h2 className='flex gap-2 items-center text-[#4a4a69]'><RiExternalLinkFill className='text-3xl text-[#0cb5b5]' />Today's Queries</h2>
            <p style={{ color: "#0cb5b5"}}>0</p>
            <a href='#'><span>Open</span></a>
          </article>
          <article data-type="totalqueries" className='dashboard-card dashboard-data bg-white'>
            <h2 className='flex gap-2 items-center text-[#4a4a69]'><RiExternalLinkFill className='text-3xl text-violet-600' /> Total Queries</h2>
            <p style={{ color: "#655be6"}}>2033</p>
            <a href='#'><span>Open</span></a>
          </article>
          <article data-type="proposal" className='dashboard-card dashboard-data bg-white'>
            <h2 className='flex gap-2 items-center text-[#4a4a69]'><RiExternalLinkFill className='text-3xl text-[#0f1f3e]' />Proposal Sent</h2>
            <p style={{ color: "#0f1f3e"}}>30</p>
            <a href='#'><span>Open</span></a>
          </article>
          <article data-type="proconf" className='dashboard-card dashboard-data bg-white'>
            <h2 className='flex gap-2 items-center text-[#4a4a69]'><RiExternalLinkFill className='text-2xl text-[#cc00a9]' />Total Pro. Conf</h2>
            <p style={{ color: "#cc00a9"}}>248</p>
            <a href='#'><span>Open</span></a>
          </article>
          <article data-type="confirmed" className='dashboard-card dashboard-data bg-white'>
            <h2 className='flex gap-2 items-center text-[#4a4a69]'><RiExternalLinkFill className='text-2xl text-[#6c757d]' />Total Confirmed</h2>
            <p style={{marginLeft: "-50px" , color: "#6c757d"}}>1002</p>
            <a href='#'><span>Open</span></a>
          </article>
          <article data-type="lost" className='dashboard-card dashboard-data bg-white'>
            <h2 className='flex gap-2 items-center text-[#4a4a69]'><RiExternalLinkFill className='text-2xl text-[#f9392f]' />Total Lost</h2>
            <p style={{ color: "#f9392f"}}>25</p>
            <a href='#'><span>Open</span></a>
          </article> */}

          

         

          <article className='dashboard-card dashboard-grid-item-col6 dashboard-tours bg-white'>
            <h2 className="dashboard-card-heading text-[#4a4a69] mb-3">

              Today's tours
            </h2>
            <div className="overflow-x-auto h-72 overflow-y-scroll">
            <table className="min-w-full bg-white  ">
                <thead className=''>
                    <tr className='sticky top-0'>
                        <th className="py-2 px-4 border-b-2 border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-600">Query ID</th>
                        <th className="py-2 px-4 border-b-2 border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-600">Tour Details</th>
                        <th className="py-2 px-4 border-b-2 border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-600">Client Details</th>
                        <th className="py-2 px-4 border-b-2 border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-600">Transportation Details</th>
                        <th className="py-2 px-4 border-b-2 border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-600">Night Stay At</th>
                    </tr>
                </thead>
                <tbody className=''>
                    {data.map(row => (
                        <tr key={row.id} className="align-top">
                            <td className="py-2 px-4 border-b border-gray-200">{row.id}</td>
                            <td className="py-2 px-4 border-b border-gray-200">{row.name}</td>
                            <td className="py-2 px-4 border-b border-gray-200">{row.assigned}</td>
                            <td className="py-2 px-4 border-b border-gray-200">{row.confirmed}</td>
                            <td className="py-2 px-4 border-b border-gray-200">{row.detail}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>

            <div className='mt-5'>
        
              <Link to={"/toursReport"}>
                <Btn>
                  View all tours
                </Btn>
              </Link>
            </div>
          </article>


          

         
          <article className='dashboard-card dashboard-grid-item-col2 dashboard-report bg-white'>
  <h2 className="dashboard-card-heading text-[#4a4a69]">
    Finance Report
  </h2>

  <div className='flex flex-col'>
    
    <div className='flex flex-col gap-2'>
      <p style={{backgroundColor:"#d2f1ff"}}>
        <span style={{fontWeight: "600" , color: "#4a4a69" , fontSize: "15px"}}>This Month Sales</span>
        <span style={{fontWeight: "600" , color: "black" , fontSize: "17px"}}>{numberFormatter.format(financialReport.monthlySales)}</span>
      </p>
      <p style={{backgroundColor:"#d2ffc1"}}>
        <span style={{fontWeight: "600" , color: "#4a4a69" , fontSize: "15px"}} >This Month Collections</span>
        <span style={{fontWeight: "600" , color: "black" , fontSize: "17px"}}>{numberFormatter.format(financialReport.monthlyCollections)}</span>
      </p>
      <p style={{backgroundColor:"#ffe1e1"}}>
        <span style={{fontWeight: "600" , color: "#4a4a69" , fontSize: "15px"}} >Total Pending Collection</span>
        <span style={{fontWeight: "600" , color: "black" , fontSize: "17px"}}>{numberFormatter.format(financialReport.pendingCollections)}</span>
      </p>
      <p style={{backgroundColor:"#ffeeb3"}}>
        <span style={{fontWeight: "600" , color: "#4a4a69" , fontSize: "15px"}} >Total Supplier Pending</span>
        <span style={{fontWeight: "600" , color: "black" , fontSize: "17px"}}>{numberFormatter.format(financialReport.totalSupplierPending)}</span>
      </p>
      <p style={{backgroundColor:"#eee1ff"}}>
        <span style={{fontWeight: "600" , color: "#4a4a69" , fontSize: "15px"}} >This Month Expense</span>
        <span style={{fontWeight: "600" , color: "black" , fontSize: "17px"}}>{numberFormatter.format(financialReport.monthlyExpense)}</span>
      </p>
    </div>

    <div className='flex justify-between mt-1'>
      <p className='flex flex-col-reverse border-[1px] bg-[#f9f9f9]'>
        <span>2024 Sales</span>
        <span style={{color: "#4a4a69"}}>{numberFormatter.format(financialReport.yearlySales)}</span>
      </p>
      <p className='flex flex-col-reverse border-[1px] bg-[#f9f9f9]'>
        <span>2024 Collections</span>
        <span style={{color: "#4a4a69"}}>{numberFormatter.format(financialReport.yearlyCollections)}</span>
      </p>
    </div>

  </div>
</article>


          <article className='dashboard-card dashboard-grid-item-col2 dashboard-chart bg-white'>
            <h2 className="dashboard-card-heading text-[#4a4a69]">
              This year queries
            </h2>

            <BarChart
              xAxis={[
                {
                  id: 'months',
                  data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                  scaleType: 'band',
                },
              ]}
              series={[{ data: yearQueries, color: 'blueviolet' }]}
              height={300}
            />
          </article>






          <article className='dashboard-card dashboard-grid-item-col2 dashboard-chart bg-white'>
            <h2 className="dashboard-card-heading text-[#4a4a69]">
              Queries by status
            </h2>


       

            <PieChart
              series={[
                {
                  innerRadius: '10%',
                  outerRadius: '80%',
                  paddingAngle: 1,
                  cornerRadius: 5,
                  highlightScope: { faded: 'global', highlighted: 'item' },
                  faded: { innerRadius: 30, additionalRadius: -10, color: 'gray' },
                  data: [
                    { id: 0, value: queryByStatus.new, label: 'New', color: '#1e88e5' },
                    { id: 1, value: queryByStatus.active, label: 'Active', color: '#e53935' },
                    { id: 2, value: queryByStatus.noConnect, label: 'No connect', color: '#607d8b' },
                    { id: 3, value: queryByStatus.hotLead, label: 'Hot lead', color: '#ffc107' },
                    { id: 4, value: queryByStatus.confirmed, label: 'Confirmed', color: '#0d47a1' },
                    { id: 5, value: queryByStatus.cancelled, label: 'Cancelled', color: '#757575' },
                    { id: 6, value: queryByStatus.invalid, label: 'Invalid', color: '#424242' },
                    { id: 7, value: queryByStatus.proposalSent, label: 'Proposal Sent', color: '#ffee58' },
                    { id: 8, value: queryByStatus.followUp, label: 'Follow up', color: '#2196f3' },
                  ],
                },
              ]}
              height={300}
              slotProps={{ legend: { hidden: true } }}
            />
    
          </article>



          <div className='dashboard-card dashboard-grid-item-col6 dashboard-task'>
        <div className='flex justify-evenly'> 
       
      <Link to="/queries">
          <div className='bg-blue-500  cursor-pointer p-2 w-48 justify-center rounded-lg 
                text-[#fff] flex items-center border shadow-md '>
                  <p className='text-base font-normal flex items-center'> 
                  <IoLocationSharp className='font-normal'/>Top Destinations
                  </p>
          </div>
      </Link>

      <Link to="/queries">
              <div className='bg-[#ffe1e1]  cursor-pointer p-2 w-48 text-center rounded-lg text-[#000] border-[1px] border-[#dadada] shadow-md'>
              <p className='text-base font-normal'> Dubai (975)</p>
              </div>
      </Link>

      <Link to="/queries">
          <div className='bg-[#ffe1e1] p-2  w-48 cursor-pointer text-center rounded-lg text-[#000] border-[1px] border-[#dadada] shadow-md'>
          <p className='text-base font-normal'> Kashmir (93)</p>
          </div>
      </Link>

      <Link to="/queries">
          <div className='bg-[#ffe1e1] p-2 w-48  cursor-pointer text-center rounded-lg text-[#000] border-[1px] border-[#dadada] shadow-md'>
          <p className='text-base font-normal'> Manali (77)</p>
          </div>
      </Link>

      <Link to="/queries">
          <div className='bg-[#ffe1e1] p-2 w-48  cursor-pointer text-center rounded-lg text-[#000] border-[1px] border-[#dadada] shadow-md'>
          <p className='text-base font-normal'> Kerala (63)</p>
          </div>
      </Link>

      <Link to="/queries">
          <div className='bg-[#fff] p-2 w-48 cursor-pointer text-center rounded-lg text-[#000]  border-[1px] border-[#dadada] shadow-md  '>
          <p className='text-base font-normal'> Thailand (50)</p>
          </div>
      </Link>

        </div>
        </div>



          <article className='dashboard-card dashboard-grid-item-col2 dashboard-sales bg-white'>
            <h2 className="dashboard-card-heading text-[#4a4a69]">
              Sales Rep
            </h2>

            <TableContainer sx={{ marginTop: '1.5rem', maxHeight: '300px' }}>
              <Table size='small' aria-label="simple table" >
                <TableHead >
                  <TableRow >
                    <TableCell >#</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell align='right'>Assigned</TableCell>
                    <TableCell align='right'>Confirmed</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {selesRep.map((row, i) => (
                    <TableRow key={row.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                      <TableCell component="th" scope="row">{i + 1}</TableCell>
                      <TableCell>{row.name}</TableCell>
                      <TableCell align='right' sx={{backgroundColor:"#f3f3f3"}}>{row.assigned}</TableCell>
                      <TableCell align='right' sx={{ backgroundColor: '#e8fff1' }}>{row.confirmed}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </article>

          <article className='dashboard-card dashboard-grid-item-col2 dashboard-sales bg-white'>
            <h2 className="dashboard-card-heading text-[#4a4a69]">
              Top Lead Sources
            </h2>

            <TableContainer sx={{ marginTop: '1.5rem', maxHeight: '300px' }}>
              <Table size='small' aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>#</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell align='right'>Total queries</TableCell>
                    <TableCell align='right'>Confirmed</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {leadSources.map((row, i) => (
                    <TableRow key={row.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                      <TableCell component="th" scope="row">{i + 1}</TableCell>
                      <TableCell>{row.name}</TableCell>
                      <TableCell align='right' sx={{backgroundColor:"#f3f3f3"}}>{row.totalQueries}</TableCell>
                      <TableCell align='right' sx={{ backgroundColor: '#e8fff1' }}>{row.confirmed}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </article>

          
        </main>
      </LocalizationProvider>
    </ThemeProvider>
    </div>
  )
}

function Btn({ handleClick, children, className }) {
  return (
    <Button onClick={handleClick} variant='contained' sx={{ backgroundColor: '#12344d', color:"white" , fontWeight: "600" , '&:hover': { backgroundColor: '#1699dd' } }} className={className} size='large'>
      {children}
    </Button>
  )
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
function AddClientForm({ closeDrawer }) {
  return (
    <form className="drawer-form">
      <FormControl sx={{ width: '100%' }}>
        <TextField select defaultValue="mr" size='small'>
          <MenuItem value="mr">Mr.</MenuItem>
          <MenuItem value="mrs">Mrs.</MenuItem>
          <MenuItem value="ms">Ms.</MenuItem>
          <MenuItem value="dr">Dr.</MenuItem>
          <MenuItem value="prof">Prof.</MenuItem>
        </TextField>
      </FormControl>

      <TextField label="First name" variant="outlined" size='small' />
      <TextField label="Last name" variant="outlined" size='small' />
      <TextField label="Email" variant="outlined" size='small' />
      <TextField label="Mobile" variant="outlined" size='small' />
      <TextField label="City" variant="outlined" size='small' />
      <TextField label="Address" variant="outlined" size='small' />
      <TextField label="Date of birth" variant="outlined" size='small' />

      <FormGroup row sx={{ gap: '0.5rem', flexWrap: 'nowrap', '& > *': { flex: 1 } }}>
        <BtnOutlined handleClick={closeDrawer}>Cancel</BtnOutlined>
        <button className="bg-[#16a34a] transition-all hover:bg-green-900 text-[#ffff]"> <Link to="./queriesDetail">Save</Link> </button>      </FormGroup>
    </form>
  )
}

// function AddQueryForm({ closeDrawer }) {
//   return (
//     <form className="drawer-form">
//       <FormControl sx={{ width: '100%' }}>
//         <TextField select defaultValue="client" size='small' label="Type" >
//           <MenuItem value="client">Client</MenuItem>
//           <MenuItem value="agent">Agent</MenuItem>
//           <MenuItem value="corporate">Corporate</MenuItem>
//         </TextField>
//       </FormControl>

//       <FormGroup row sx={{ gap: '0.5rem', '&>*': { flex: 1 } }}>
//         <TextField label="Mobile" variant="outlined" size='small' required />
//         <TextField label="Email" variant="outlined" size='small' required type='email' />
//       </FormGroup>
//       <FormGroup row sx={{ gap: '0.5rem' }}>
//         <FormControl>
//           <TextField select defaultValue="mr" size='small'>
//             <MenuItem value="mr">Mr.</MenuItem>
//             <MenuItem value="mrs">Mrs.</MenuItem>
//             <MenuItem value="ms">Ms.</MenuItem>
//             <MenuItem value="dr">Dr.</MenuItem>
//             <MenuItem value="prof">Prof.</MenuItem>
//           </TextField>
//         </FormControl>
//         <TextField label="Client name" variant="outlined" size='small' required sx={{ flex: 1 }} />
//       </FormGroup>

//       <FormGroup row sx={{ gap: '0.5rem', '&>*': { flex: 1 } }}>
//         <TextField label="Destinations" variant="outlined" size='small' required />
//         <FormControl>
//           <TextField select defaultValue="january" size='small' label="Travel month" fullWidth>
//             <MenuItem value="january">January</MenuItem>
//             <MenuItem value="february">February</MenuItem>
//             <MenuItem value="march">March</MenuItem>
//             <MenuItem value="april">April</MenuItem>
//             <MenuItem value="may">May</MenuItem>
//             <MenuItem value="june">June</MenuItem>
//             <MenuItem value="july">July</MenuItem>
//             <MenuItem value="august">August</MenuItem>
//             <MenuItem value="september">September</MenuItem>
//             <MenuItem value="october">October</MenuItem>
//             <MenuItem value="november">November</MenuItem>
//             <MenuItem value="december">December</MenuItem>
//           </TextField>
//         </FormControl>
//       </FormGroup>

//       <FormGroup row sx={{ gap: '0.5rem', '&>*': { flex: 1 } }}>
//         <DatePicker label="From Date" size="small" slotProps={{ textField: { size: 'small' } }} />
//         <DatePicker label="To Date" size="small" slotProps={{ textField: { size: 'small' } }} />
//       </FormGroup>

//       <FormGroup row sx={{ gap: '0.5rem', '&>*': { flex: 1 } }}>
//         <TextField label="Adult" variant="outlined" size='small' type='number' InputProps={{ inputProps: { min: 1, max: 24 } }} required />
//         <TextField label="Child" variant="outlined" size='small' type='number' InputProps={{ inputProps: { min: 0, max: 12 } }} />
//         <TextField label="Infant" variant="outlined" size='small' type='number' InputProps={{ inputProps: { min: 0, max: 6 } }} />
//       </FormGroup>

//       <FormGroup row sx={{ gap: '0.5rem', flexWrap: 'nowrap', '& > *': { flex: 1 } }}>
//         <FormControl>
//           <TextField select defaultValue="16" size='small' label="Lead source" required>
//             <MenuItem value="advertisment">Advertisment</MenuItem>
//             <MenuItem value="agent">Agent</MenuItem>
//             <MenuItem value="akbartravel">AkbarTravel</MenuItem>
//             <MenuItem value="chat">Chat</MenuItem>
//             <MenuItem value="facebook">Facebook</MenuItem>
//             <MenuItem value="hellotravel">Hello Travel</MenuItem>
//             <MenuItem value="instagram">Instagram</MenuItem>
//             <MenuItem value="justdial">Justdial</MenuItem>
//             <MenuItem value="online">Online</MenuItem>
//             <MenuItem value="others">Others</MenuItem>
//             <MenuItem value="referral">Referral</MenuItem>
//             <MenuItem value="snapchat">snapchat</MenuItem>
//             <MenuItem value="telephone">Telephone</MenuItem>
//             <MenuItem value="walk-in">Walk-In</MenuItem>
//             <MenuItem value="website">Website</MenuItem>
//             <MenuItem value="whatsapp">WhatsApp</MenuItem>
//           </TextField>
//         </FormControl>
//         <FormControl>
//           <TextField select defaultValue="hot" size='small' label="Priority" required>
//             <MenuItem value="general">General Query</MenuItem>
//             <MenuItem value="hot">Hot Query</MenuItem>
//           </TextField>
//         </FormControl>
//         <FormControl>
//           <TextField select defaultValue="me" size='small' label="Assign To" required>
//             <MenuItem value="me">Assign to me</MenuItem>
//           </TextField>
//         </FormControl>
//       </FormGroup>

//       <FormControl sx={{ width: '100%' }}>
//         <TextField select defaultValue="activitiesonly" size='small' label="Select service">
//           <MenuItem value="activitiesonly">Activities only</MenuItem>
//           <MenuItem value="flightonly">Flight only</MenuItem>
//           <MenuItem value="fullpackage">Full package</MenuItem>
//           <MenuItem value="hotelflight">Hotel + Flight</MenuItem>
//           <MenuItem value="hoteltransport">Hotel + Transport</MenuItem>
//           <MenuItem value="hotelonly">Hotel only</MenuItem>
//           <MenuItem value="transportonly">Transport only</MenuItem>
//           <MenuItem value="visaonly">Visa only</MenuItem>
//         </TextField>
//       </FormControl>

//       <TextField label="Remark" variant="outlined" size='small' multiline />

//       <FormGroup row sx={{ gap: '0.5rem', flexWrap: 'nowrap', '& > *': { flex: 1 } }}>
//         <BtnOutlined handleClick={closeDrawer}>Cancel</BtnOutlined>
//         <Btn handleClick={() => { }}>Save</Btn>
//       </FormGroup>
//     </form>
//   )
// }


function AddQueryForm({ closeDrawer }) {
const [type, setType] = useState("client");

// type change function
const handleTypeChange = (event) => {
  setType(event.target.value);
};


// Calculate days and Night
const [fromDate, setFromDate] = useState("");
const [toDate, setToDate] = useState("");
const [days, setDays] = useState(0);
const [nights, setNights] = useState(0);

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

      <FormGroup row sx={{ gap: '0.5rem', '&>*': { flex: 1 } }} >
        
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
    <Link to="./queriesDetail">
      <button className="bg-[#16a34a] w-64 p-2 transition-all hover:bg-green-900 text-[#ffff]"> Save</  button>
    </Link> 
    </FormGroup>
 </div>
    </form>
  )
}

function AddItineraryForm({ closeDrawer }) {
  return (
    <form className="drawer-form">
      <TextField label="Itinerary name" variant="outlined" size='small' />
      <DatePicker label="Start Date" size="small" slotProps={{ textField: { size: 'small' } }} />
      <DatePicker label="End Date" size="small" slotProps={{ textField: { size: 'small' } }} />
      <TextField label="Adult" variant="outlined" size='small' type='number' />
      <TextField label="Child" variant="outlined" size='small' type='number' />
      <TextField label="Destinations" variant="outlined" size='small' />
      <TextField label="Notes" variant="outlined" size='small' multiline />

      <p>Website setting</p>

      <FormGroup>
        <FormControlLabel control={<Checkbox defaultChecked sx={{ color: '#0d47a1', '&.Mui-checked': { color: '#0d47a1' } }} />} label="Show on website" />
      </FormGroup>
      <FormControl sx={{ width: '100%' }}>
        <TextField select size='small' label="Theme">
          <MenuItem value={'2n-3dpackage'}>2N-3D Package</MenuItem>
          <MenuItem value={'adventure'}>Adventure</MenuItem>
          <MenuItem value={'beach'}>Beach</MenuItem>
          <MenuItem value={'economyumrah'}>Economy Umrah</MenuItem>
          <MenuItem value={'fundaymemoriableday'}>FunDay/Memoriable Day</MenuItem>
          <MenuItem value={'heritage'}>Heritage</MenuItem>
          <MenuItem value={'hillstation'}>Hill Station</MenuItem>
          <MenuItem value={'honeymoon'}>Honeymoon</MenuItem>
          <MenuItem value={'islandtrip'}>Island trip</MenuItem>
          <MenuItem value={'umrah'}>Umrah</MenuItem>
          <MenuItem value={'wildlife'}>Wildlife</MenuItem>
        </TextField>
      </FormControl>
      <TextField label="Per person price" variant="outlined" size='small' />
      <DatePicker label="Validity" size="small" slotProps={{ textField: { size: 'small' } }} />
      <FormGroup row>
        <FormControlLabel control={<Checkbox defaultChecked sx={{ color: '#0d47a1', '&.Mui-checked': { color: '#0d47a1' } }} />} label="Popular" />
        <FormControlLabel control={<Checkbox defaultChecked sx={{ color: '#0d47a1', '&.Mui-checked': { color: '#0d47a1' } }} />} label="Special" />
      </FormGroup>
      <TextField label="About package" variant="outlined" size='small' multiline />


      <FormGroup row sx={{ gap: '0.5rem', flexWrap: 'nowrap', '& > *': { flex: 1 } }}>
        <BtnOutlined handleClick={closeDrawer}>Cancel</BtnOutlined>
        <button className="bg-[#16a34a] transition-all hover:bg-green-900 text-[#ffff]"> <Link to="./queriesDetail">Save</Link> </button>      </FormGroup>
    </form>
  )
}

/** Data */

const financialReport = {
  yearlySales: 5517876,
  yearlyCollections: 3256695,
  monthlySales: 863886,
  monthlyCollections: 607741,
  pendingCollections: 17788563,
  totalSupplierPending: 18487310,
  monthlyExpense: 15000,
}

const tours = [];

const yearQueries = [119, 84, 61];

const queryByStatus = {
  new: 527,
  active: 48,
  noConnect: 28,
  hotLead: 26,
  confirmed: 1014,
  cancelled: 70,
  invalid: 25,
  proposalSent: 34,
  followUp: 264,
}

const payments = [
  {
    id: 100052,
    name: 'Aniket Patade',
    amount: 50000,
    status: 'overdue'
  },
  {
    id: 100051,
    name: 'Mujahid',
    amount: 28000,
    status: 'overdue'
  },
  {
    id: 100050,
    name: 'Mujahid',
    amount: 22223,
    status: 'overdue'
  },
  {
    id: 100053,
    name: 'Aniket Patade',
    amount: 80500,
    status: 'overdue'
  },
  {
    id: 100061,
    name: 'pooja Shah',
    amount: 53525,
    status: 'overdue'
  },
  {
    id: 100066,
    name: 'Himanshu',
    amount: 10000,
    status: 'overdue',
  },
  {
    id: 100088,
    name: 'Atul',
    amount: 10000,
    status: 'overdue',
  },
  {
    id: 100089,
    name: 'Surath Mukherjee',
    amount: 10000,
    status: 'overdue',
  },
  {
    id: 100153,
    name: 'Aniket Patade',
    amount: 80500,
    status: 'overdue'
  },
  {
    id: 100161,
    name: 'pooja Shah',
    amount: 53525,
    status: 'overdue'
  },
  {
    id: 100166,
    name: 'Himanshu',
    amount: 10000,
    status: 'overdue',
  },
  {
    id: 100188,
    name: 'Atul',
    amount: 10000,
    status: 'overdue',
  },
  {
    id: 100189,
    name: 'Surath Mukherjee',
    amount: 10000,
    status: 'overdue',
  },
];

const selesRep = [
  { id: "11", name: 'TravBizz IT Solutions', assigned: 973, confirmed: 461 },
  { id: "12", name: 'Ajay kumar', assigned: 212, confirmed: 140 },
  { id: "13", name: 'Faizan Raza Khan', assigned: 90, confirmed: 55 },
  { id: "14", name: 'ratan kumar', assigned: 83, confirmed: 22 },
  { id: "15", name: 'Mohd Imran', assigned: 81, confirmed: 43 },
  { id: "16", name: 'Aazim Khaki', assigned: 75, confirmed: 42 },
  { id: "17", name: 'Avesh Tyagi', assigned: 58, confirmed: 34 },
  { id: "18", name: 'BK BK', assigned: 47, confirmed: 15 },
  { id: "19", name: 'Ashwin Naidu', assigned: 47, confirmed: 30 },
  { id: "111", name: 'User Panel', assigned: 46, confirmed: 19 },
  { id: "112", name: 'Ayaaz Ahmad', assigned: 32, confirmed: 20 },
  { id: "113", name: 'Surya Ji', assigned: 30, confirmed: 19 },
  { id: "114", name: 'Azhar Ansari', assigned: 28, confirmed: 17 },
  { id: "115", name: 'mohd anas', assigned: 27, confirmed: 16 },
  { id: "116", name: 'Azhar A Ansari', assigned: 18, confirmed: 11 },
]

const leadSources = [
  { id: "13", name: 'Advertisment', totalQueries: 536, confirmed: 250 },
  { id: "14", name: 'Walk-In', totalQueries: 469, confirmed: 316 },
  { id: "3", name: 'Referral', totalQueries: 165, confirmed: 102 },
  { id: "4", name: 'Facebook', totalQueries: 85, confirmed: 40 },
  { id: "5", name: 'Instagram', totalQueries: 75, confirmed: 37 },
  { id: "6", name: 'Telephone', totalQueries: 63, confirmed: 38 },
  { id: "7", name: 'WhatsApp', totalQueries: 61, confirmed: 22 },
  { id: "8", name: 'Agent', totalQueries: 47, confirmed: 22 },
  { id: "9", name: 'Website', totalQueries: 48, confirmed: 20 },
  { id: "10", name: 'Chat', totalQueries: 43, confirmed: 28 },
  { id: "11", name: 'Online', totalQueries: 26, confirmed: 14 },
  { id: "12", name: 'Others', totalQueries: 21, confirmed: 6 },
]
