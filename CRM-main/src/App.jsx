import  { useState } from "react";
import { createBrowserRouter, Outlet, RouterProvider, useLocation, useParams } from "react-router-dom";
import Clients from "./Pages/Clients/Clients";
import Agents from "./Pages/Agents/Agents";
import Navbar from "./Components/Navbar/Navbar";
import SideBar from "./Components/SideBar";
import Itineraries from "./Pages/Itineraries/Itineraries";
import Queries from "./Pages/Queries/Queries";
import QueriesDetail from "./Pages/Queries/QueriesDetail";
import Corporate from "./Pages/Corporate/Corporate";
import Dashboard from "./Pages/Home/Dashboard";
import Expense from "./Pages/Expense/Expense";
import ClientDetail from "./Pages/Clients/ClientDetail";
import AgentDetails from "./Pages/Agents/AgentDetails";
import EmailTemplate from "./Pages/EmailTemplate/EmailTemplate";
import MarketingDashboard from "./Pages/MarketingDashboard/MarketingDashboard";
import ClientsGroup from "./Pages/ClientsGroup/ClientsGroup";
import Campagins from "./Pages/Campagins/Campagins";
import LandingPages from "./Pages/LandingPages/LandingPages";
import CreateCampaign from "./Pages/createCampaign/CreateCampaign";
import CreateEmailTemplate from "./Pages/CreateEmailTemplate/CreateEmailTemplate";
import CreateLandingPage from "./Pages/CreateLandingPage/CreateLandingPage";
import LedgerReport from "./Pages/Reports/LedgerReport/LedgerReport";
import MIS_Report from "./Pages/Reports/MIS-Report/MIS_Report";
import TaskReport from "./Pages/Reports/TaskReport/TaskReport";
import ToursReport from "./Pages/Reports/ToursReport/ToursReport";
import CollectionReport from "./Pages/Reports/CollectionReport/CollectionReport";
import NotesReport from "./Pages/Reports/NotesReport/NotesReport";
import AttendanceReport from "./Pages/Reports/AttendanceReport/AttendanceReport";
import ProfitLossReport from "./Pages/Reports/ProfitLossReport/ProfitLossReport";
import Setting from "./Pages/Settings/Setting";
import Suppliers from "./Pages/Settings/AdminSettingPages/Suppliers";
import Destinations from "./Pages/Settings/AdminSettingPages/Destinations";
import RoomType from "./Pages/Settings/AdminSettingPages/RoomType";
import MealPlan from "./Pages/Settings/AdminSettingPages/MealPlan";
import Hotel from "./Pages/Settings/AdminSettingPages/Hotel/Hotel";
import Transfer from "./Pages/Settings/AdminSettingPages/Transfer";
import DayItinerary from "./Pages/Settings/AdminSettingPages/DayItinerary";
import LeadSource from "./Pages/Settings/AdminSettingPages/LeadSource";
import PackageTheme from "./Pages/Settings/AdminSettingPages/PackageTheme";
import MailSetting from "./Pages/Settings/AdminSettingPages/MailSetting";
import WeatherSetting from "./Pages/Settings/AdminSettingPages/WeatherSetting";
import Currency from "./Pages/Settings/AdminSettingPages/Currency";
import Driver from "./Pages/Settings/AdminSettingPages/Driver/Driver";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CorporateDetail from "./Pages/Corporate/CorporateDetail";
import Login from "./Pages/Login/Login";
import Footer from "./Components/Footer/Footer";
import ManageProfile from "./Pages/Settings/AdminSettingPages/ManageProfile/ManageProfile";
import EditProfile from "./Pages/Settings/AdminSettingPages/ManageProfile/EditProfile";
import ProposalSent from "./Pages/Queries/NavButtons/ProposalSent";
import ViewProposal from "./Pages/Queries/ViewProposal/ViewProposal";
import Build from "./Pages/Queries/ViewProposal/Build";
import Final from "./Pages/Queries/ViewProposal/Final";
import Pricing from "./Pages/Queries/ViewProposal/Pricing";
import Active from "./Pages/Queries/NavButtons/Active";
import Confirmed from "./Pages/Queries/NavButtons/Confirmed";
import FollowUp from "./Pages/Queries/NavButtons/FollowUp";
import HotLead from "./Pages/Queries/NavButtons/HotLead";
import Invalid from "./Pages/Queries/NavButtons/Invalid";
import New from "./Pages/Queries/NavButtons/New";
import NoConnect from "./Pages/Queries/NavButtons/NoConnect";
import Canceled from "./Pages/Queries/NavButtons/Canceled";
import EmailInbox from "./Components/Navbar/EmailInbox";
import DownloadVoucher from "./Pages/Queries/pages/DownloadVoucher";
import ReiviewCampaign from "./Pages/createCampaign/ReiviewCampaign";
import Activity from "./Pages/Settings/AdminSettingPages/Activity";

const App = () => {
  const Layout = () => {
    const [show, setShow] = useState(true);

    const location = useLocation();

    // console.log(location.pathname);


    const getStatusFromSideBar = (click) => {
      setShow(click);
    };

    const handleMouseLeave = () => {
      setShow(true); // or set it to whatever value hides the sidebar
    };

    return (
      <>
     
          <div className="main h-screen w-full flex flex-col ">
            {location.pathname === "/downloadVoucher" ? "" : <Navbar sendDataToApp={getStatusFromSideBar} />}
            <div className="wrapper flex flex-1 !overflow-y-hidden ">
            {location.pathname === "/downloadVoucher" ? "" : <div
                className={`sideBar-Wrapper md:block ${
                  show ? "hidden" : ""
                } w-[3.7rem] md:static absolute z-20  bg-[#12344d] text-white`}
              >
                <SideBar />
              </div>}
  
              <div className="content-Wrapper flex-1 w-full overflow-y-auto  ">
                <Outlet />
              </div>
            </div>
            <ToastContainer position="bottom-right" autoClose={2000} />
            {location.pathname === "/downloadVoucher" ? "" : <Footer />}
          </div>
    
      </>
    );

    
  };

  const router = createBrowserRouter([
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <Dashboard /> },
        { path: "/clients", element: <Clients /> },
        { path: "/clients/:clientId", element: <ClientDetail /> },
        { path: "/agents", element: <Agents /> },
        { path: "/agents/:agentId", element: <AgentDetails /> },
        { path: "/itineraries", element: <Itineraries /> },
        { path: "/queries", element: <Queries /> },
        { path: "/queries/active", element: <Active/> },
        { path: "/queries/canceled", element: <Canceled/> },
        { path: "/queries/confirmed", element: <Confirmed/> },
        { path: "/queries/followUp", element: <FollowUp/> },
        { path: "/queries/hotLead", element: <HotLead/> },
        { path: "/queries/invalid", element: <Invalid/> },
        { path: "/queries/new", element: <New/> },
        { path: "/queries/noConnect", element: <NoConnect/> },
        { path: "/queries/proposalSent", element: <ProposalSent/> },
        { path: "/queries/proposalSent/viewProposal/", element: <Build/> },
        { path: "/queries/proposalSent/viewProposal/final", element: <Final/> },
        { path: "/queries/proposalSent/viewProposal/pricing", element: <Pricing/> },
        { path: "/queries/:queryId/*", element: <QueriesDetail/> },
        { path: "/corporate", element: <Corporate /> },
        { path: "/corporate/:corporateId", element: <CorporateDetail /> },
        { path: "/settings/*", element: <Setting /> },
        { path: "/expenses", element: <Expense /> },
        { path: "/marketingDashboard", element: <MarketingDashboard /> },
        {
          path: "/marketingDashboard/createCampaigns",
          element: <CreateCampaign />,
        },
        { path: "/clientsGroup", element: <ClientsGroup /> },
        { path: "/emailTemplate", element: <EmailTemplate /> },
        {
          path: "/emailTemplate/createTemplate",
          element: <CreateEmailTemplate />,
        },
       
        { path: "/campagins", element: <Campagins /> },
        { path: "/campagins/createCampaigns", element: <CreateCampaign /> },
        { path: "/campagins/createCampaigns/reviewCampaign", element: <ReiviewCampaign /> },
        { path: "/landingPages", element: <LandingPages /> },
        { path: "/landingPages/create", element: <CreateLandingPage /> },
        { path: "/ledgerReport", element: <LedgerReport /> },
        { path: "/MIS-report", element: <MIS_Report /> },
        { path: "/taskReport", element: <TaskReport /> },
        { path: "/toursReport", element: <ToursReport /> },
        { path: "/collectionReport", element: <CollectionReport /> },
        { path: "/notesReport", element: <NotesReport /> },
        { path: "/attendanceReport", element: <AttendanceReport /> },
        { path: "/profitLossReport", element: <ProfitLossReport /> },
        { path: "/suppliers", element: <Suppliers /> },
        { path: "/destinations", element: <Destinations /> },
        { path: "/roomType", element: <RoomType /> },
        { path: "/mealPlan", element: <MealPlan /> },
        { path: "/accommodation", element: <Hotel /> },
        { path: "/driver", element: <Driver /> },
        { path: "/transfer", element: <Transfer /> },
        { path: "/dayItinerary", element: <DayItinerary /> },
        { path: "/leadSource", element: <LeadSource /> },
        { path: "/packageTheme", element: <PackageTheme /> },
        { path: "/mailSetting", element: <MailSetting /> },
        { path: "/manageProfile", element: <ManageProfile /> },
        { path: "/manageProfile/editProfile", element: <EditProfile />},
        { path: "/weatherSetting", element: <WeatherSetting /> },
        { path: "/currency", element: <Currency /> },
        { path: "/activity", element: <Activity /> },
        { path: "/queriesDetail", element: <QueriesDetail/> },
        { path: "/emailInbox", element: <EmailInbox/> },
        { path: "/downloadVoucher", element: <DownloadVoucher/> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export { App };
