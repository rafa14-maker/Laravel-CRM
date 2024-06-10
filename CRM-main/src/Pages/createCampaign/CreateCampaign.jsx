import React, { useState } from "react";
import compaignBg from "../../assets/images/bg-cover.png";
import StickyHeadTable from "./Table";
import Table2 from "./Table2";
import { Link } from "react-router-dom";

const CreateCampaign = () => {
  const [step, setStep] = useState(1);

  const handleNextStep = () => {
    setStep(2);
  };

  const handleNextStep2 = () => {
    setStep(3);
  };

  return (
    <div
      style={{
        backgroundImage: `url(${compaignBg})`,
        height: "100vh",
        width: "100%",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed"
      }}
    >
      <div className="flex justify-center items-center h-full">
        <div className="bg-white w-[70%] p-9 rounded-xl shadow-md border-[1px] border-[#e0e0e0]">
          <div className="mx-3">
            <p className="text-2xl font-semibold text-center">Create New Campaign</p>

            {step === 1 && (
              <>
                <p className="text-[12px]">Campaign Name</p>
                <input
                  type="text"
                  placeholder="Enter your campaign name..."
                  className="p-4 transition-all border-[1px] border-[#adadad73] rounded-md w-full mt-2"
                />
                <div
                  className="w-full bg-[#12344d] text-[#ffff] p-4 transition-all rounded-md mt-4 flex justify-center hover:bg-[#1699dd]"
                  onClick={handleNextStep}
                >
                  <button className="text-sm">Next Step</button>
                </div>
              </>
            )}

            {step === 2 && (
              <>
                <p className="text-sm font-semibold">Select Template</p>
                <StickyHeadTable />
                <div
                  className="w-full bg-[#12344d] text-[#ffff] p-4 transition-all rounded-md mt-4 flex justify-center hover:bg-[#1699dd]"
                  onClick={handleNextStep2}
                >
                  <button className="text-sm">Next Step</button>
                </div>
              </>
            )}

            {step === 3 && (
              <>
                <p className="text-sm font-semibold">Select Clients Group</p>
                {/* Add your Select Clients Group component or logic here */}
                <Table2 />
             <Link to="/campagins/createCampaigns/reviewCampaign">
             <div
                  className="w-full bg-[#12344d] text-[#ffff] p-4 transition-all rounded-md mt-4 flex justify-center hover:bg-[#1699dd]"
                  onClick={handleNextStep2}  
                >
                  <button className="text-sm">Review Campaign</button>
                </div>
             </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateCampaign;
