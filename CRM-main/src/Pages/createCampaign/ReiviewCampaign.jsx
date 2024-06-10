import React, { useState } from "react";
import compaignBg from "../../assets/images/bg-cover.png";
import { FaUser } from "react-icons/fa";
import CenterModal from "../Queries/ViewProposal/CenterModal";
import { IoClose } from "react-icons/io5";

const ReiviewCampaign = () => {

  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState("");

  const handleOpenModal = (content) => {
    setModalContent(content);
    setModalOpen(true);
    if (content === exportModal) {
      return console.log("Export");
    }
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };


  const manaliModal = <div>
    <div className='flex justify-between text-2xl font-semibold bg-[#fcfdfd] p-2 text-[#212529] items-center w-[1100px]'>
      <h3>View Template
</h3>
      <IoClose className='cursor-pointer font-bold ' onClick={handleCloseModal}/>
    </div>
    <hr className=''/>

  <div className="p-4 py-8">
    <p className="text-[#212529] pb-3"><span className="font-semibold">Name:</span> Manali trip</p>
    <hr />
    <p className="text-[#212529] py-3"><span className="font-semibold">Email Subject:</span> DUBAI TRIP</p>
    <hr />
  </div>
  </div>




  return (
    <div
      style={{
        backgroundImage: `url(${compaignBg})`,
        height: "100vh",
        width: "100%",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="">
        <div className="flex justify-center items-center h-full>">
          <div className="bg-white w-[60%] transition-all p-9 rounded-xl shadow-md border-[1px] border-[#e0e0e0] max-[700px]:w-[90%]">
            <p className="text-2xl font-semibold text-center">
              Review Campaign
            </p>
            <hr className="mt-3" />

            <div className="leading-8">
              <div className="mt-3">
                <p className="">
                  Campaign Name: <span className="font-semibold">ssd</span>
                </p>
                <p  className="">
                  Tempelate:{" "}
                  <span onClick={() => handleOpenModal(manaliModal)} className="font-semibold text-[#5aadff] hover:text-[#66a5e4] cursor-pointer">
                    manali trip
                  </span>
                </p>
              </div>

              <div>
                <p className="flex gap-2 items-center">
                  Clients Group:{" "}
                  <span className="font-semibold">Himachal Trip</span>
                  <span className=" text-[#5aadff] hover:text-[#66a5e4] flex cursor-pointer gap-2 font-semibold items-center">
                    ( <FaUser className="text-sm gap-2 items-center" />{" "}
                    0Suscribers)
                  </span>
                </p>
              </div>
              <hr className="mt-3" />
            </div>

            <div
              className="flex  justify-between gap-3 max-[1280px]:flex-wrap  
 max-[1280px]:w-full "
            >
              <div className="w-full mt-2">
                <p className="text-sm">Full Name*</p>
                <input
                  type="text"
                  placeholder="TravelBizz"
                  className="w-full p-2 mt-2 rounded-lg bg-[#e9ecef]"
                />
              </div>
              <div className="w-full mt-2">
                <p className="text-sm">Full Email*</p>
                <input
                  type="text"
                  placeholder="info@travbizz.com"
                  className="w-full p-2 rounded-lg mt-2 bg-[#e9ecef]"
                />
              </div>
            </div>

            <div>
              <div className="w-full mt-2">
                <p className="text-sm">Subject*</p>
                <input
                  type="text"
                  placeholder="info@travbizz.com"
                  className="w-full p-2 mt-2 border rounded-lg"
                />
              </div>

              <div className="w-full mt-2">
                <p className="text-sm">Enter Test Email ID</p>
                <div className="flex items-center mt-2 max-[400px]:flex-wrap max-[400px]:justify-center max-[400px]:gap-2">
                  <div className="w-full">
                    <input
                      type="text"
                      placeholder="info@travbizz.com"
                      className="w-[80vh] p-2 border rounded-lg max-[1400px]:w-[100%] "
                    />
                  </div>
                  <div>
                    <button className="mx-3 bg-[#1b3d58] hover:bg-[#1699dd] text-[#ffff] w-28 py-1 rounded-md">
                      {" "}
                      Test Mail
                    </button>
                  </div>
                </div>
              </div>
              <div className="w-full bg-[#12344d] text-[#ffff] p-4 transition-all rounded-md mt-4 flex justify-center hover:bg-[#1699dd]">
                <button className="text-sm">Launch Campaign Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <CenterModal open={modalOpen} onClose={handleCloseModal} data={modalContent}/>
    </div>
  );
};

export default ReiviewCampaign;
