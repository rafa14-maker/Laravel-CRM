import { RiPencilFill } from "react-icons/ri";
import MoveToInboxIcon from '@mui/icons-material/MoveToInbox';
import CenterModal from "./ComposeModel";
import { useState, useEffect } from "react";
import Toolbar from "./EmailToolbar";
import SendIcon from '@mui/icons-material/Send';
import SaveAsIcon from '@mui/icons-material/SaveAs';
import { IoClose } from "react-icons/io5";
import { TbReload } from "react-icons/tb";
import FadeMenu from "./MenuBar";
import { MdDelete } from "react-icons/md";
import PaginationRanges from "./Pagination";

const EmailInbox = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const [currentSection, setCurrentSection] = useState("inbox");
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 550);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 550);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const truncateText = (text, wordLimit) => {
    const words = text.split(' ');
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(' ') + ' ...';
    }
    return text;
  };

  const inboxMessages = Array(20).fill({
    text: 'Inbox message: Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita, recusandae.',
    time: '4:00pm',
  });

  const sentMessages = Array(20).fill({
    text: 'Sent message: Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita, recusandae.',
    time: '3:00pm',
  });

  const draftMessages = Array(20).fill({
    text: 'Draft message: Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita, recusandae.',
    time: '2:00pm',
  });

  const handleOpenModal = (content) => {
    setModalContent(content);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const data1 = (
    <div>
      <div className="bg-[#c2e7ff] p-2 flex justify-between items-center cursor-pointer">
        <p className="font-semibold">New Message </p>
        <p className="text-xl" onClick={() => handleCloseModal()}><IoClose/></p>
      </div>
      <div className="mt-3">
        <p>
          To: <input type="text" className="border-none outline-none" />
        </p>
        <hr className="border-[1px] mt-3 border-[#dad9d9]" />
      </div>
      <div className="mt-3">
        <p>
          Subject <input type="text" className="border-none outline-none" />
        </p>
        <hr className="border-[1px] mt-3 border-[#eee]" />
      </div>
      <Toolbar />
    </div>
  );

  const getButtonClassName = (section) => {
    return `flex w-56 max-[700px]:w-full justify-between transition-all p-2 rounded-xl mt-2 cursor-pointer ${
      currentSection === section ? 'bg-blue-500 text-white' : 'hover:bg-[#dadada]'
    }`;
  };

  const renderMessages = () => {
    let messages = [];
    if (currentSection === "inbox") {
      messages = inboxMessages;
    } else if (currentSection === "sent") {
      messages = sentMessages;
    } else if (currentSection === "draft") {
      messages = draftMessages;
    }

    return messages.map((message, index) => (
      <div key={index} className="mb-4">
        <div className="flex justify-between">
          <input type="checkbox" className="mr-3" />
          <p className="font-semibold max-[600px]:font-normal max-[550px]:text-xs">
            {isMobile ? truncateText(message.text, 7) : message.text}
          </p>
          <p className="max-[550px]:text-xs max-[550px]:text-gray-800 ml-3">{message.time}</p>
        </div>
        <hr className="border-[1px] border-[#f3f2f2] mt-2 " />
      </div>
    ));
  };

  return (
    <div className="bg-[#f6f8fc] h-auto">
      <div className="flex">
        <div className="p-3 bg-[#f6f8fc]">
          <div>
            <button
              className="flex items-center font-semibold bg-[#c2e7ff] gap-3 px-3 p-4 rounded-xl transition-all hover:shadow-lg"
              onClick={() => handleOpenModal(data1)}
            >
              <RiPencilFill className="text-xl" /> <p className="max-[700px]:hidden">Compose</p>
            </button>
          </div>

          <div
            className={getButtonClassName("inbox")}
            onClick={() => setCurrentSection("inbox")}
          >
            <button className="flex items-center gap-6 font-semibold text-base">
              <MoveToInboxIcon /> <p className="max-[700px]:hidden transition-all">Inbox</p>
            </button>
            <div>
              <p className="text-sm max-[700px]:hidden transition-all">4%</p>
            </div>
          </div>

          <div
            className={getButtonClassName("sent")}
            onClick={() => setCurrentSection("sent")}
          >
            <button className="flex items-center font-semibold gap-6">
              <SendIcon /> <p className="max-[700px]:hidden transition-all">Sent</p>
            </button>
          </div>

          <div
            className={getButtonClassName("draft")}
            onClick={() => setCurrentSection("draft")}
          >
            <button className="flex items-center font-semibold gap-6">
              <SaveAsIcon /> <p className="max-[700px]:hidden transition-all">Draft</p>
            </button>
          </div>
        </div>

        <div className="bg-[#ffff] w-full p-3 mx-5 mt-3 rounded-3xl">
          <div className="flex items-center justify-between">
            <div className="flex gap-5">
              <TbReload className="text-4xl p-2 hover:bg-gray-200 rounded-lg"/>
              <MdDelete className="text-4xl p-2 hover:bg-gray-200 rounded-lg"/>
            </div>
            <div className="flex">
              <FadeMenu />
              <PaginationRanges/>
            </div>
          </div>
          <div>{renderMessages()}</div>
        </div>
      </div>

      <CenterModal open={modalOpen} onClose={handleCloseModal} data={modalContent} />
    </div>
  );
};

export default EmailInbox;
