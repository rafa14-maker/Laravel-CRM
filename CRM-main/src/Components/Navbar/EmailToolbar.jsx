import React, { useState } from "react";

const Toolbar = () => {
  const [isBold, setIsBold] = useState(false);
  const [isItalic, setIsItalic] = useState(false);
  const [isUnderLine, setIsUnderLine] = useState(false);
  const [isCenter, setIsCenter] = useState(false);
  const [isLeft, setIsLeft] = useState(false);
  const [isRight, setIsRight] = useState(false);

  const [text, setText] = useState('');
  const [history, setHistory] = useState([]);
  const [currentIndex, setCurrentIndex] = useState("");


  const [selectedFont, setSelectedFont] = useState('Sans Serif');


  // Function to handle font change
  const handleFontChange = (event) => {
    setSelectedFont(event.target.value);
  };
  


  const handleChange = (event) => {
    const { value } = event.target;
    setText(value);
  };

  const handleUndo = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setText(history[currentIndex - 1]);
    }
  };

  const handleRedo = () => {
    if (currentIndex < history.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setText(history[currentIndex + 1]);
    }
  };

  const handleSave = () => {
    if (text.trim() !== '') {
      setHistory([...history.slice(0, currentIndex + 1), text]);
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handleToggleBold = () => {
    setIsBold(!isBold);
  };

  const handleToggleItalic = () => {
    setIsItalic(!isItalic);
  };

  const handleToggleUnderLine = () => {
    setIsUnderLine(!isUnderLine);
  };

  const handleToggleAlignment = (alignment) => {
    setIsLeft(alignment === "left");
    setIsCenter(alignment === "center");
    setIsRight(alignment === "right");
  };

  
  return (
    <>
      <div>
        <textarea
          className={`w-full mt-3 min-h-56 border-none text outline-none overflow-y-scroll

          ${isBold ? "font-bold" : ""}
          ${isItalic ? "italic" : ""}
          ${isUnderLine ? "underline" : ""}
          ${isCenter ? "text-center" : ""}
          ${isLeft ? "text-left" : ""}
          ${isRight ? "text-right" : ""}`}

          value={text}
          onChange={handleChange}
          onBlur={handleSave}

          style={{ fontFamily: selectedFont }}

        ></textarea>
      </div>

      <div className="flex items-center text-sm space-x-2 p-2 border-b border-gray-300 bg-white shadow-sm w-full overflow-x-auto">
        <button className="p-2 hover:bg-gray-200" onClick={handleUndo}>
          <i className="fas fa-undo"></i>
        </button>

        <button className="p-2 hover:bg-gray-200"  onClick={handleRedo}>
          <i className="fas fa-redo"></i>
        </button>

        <select className="p-2 border border-gray-300 rounded-md focus:outline-none"
          value={selectedFont}
          onChange={handleFontChange}>

          <option>Sans Serif</option>
          <option>Serif</option>
          <option>Monospace</option>
        </select>

        <button className="p-2 hover:bg-gray-200">
          <i className="fas fa-text-height"></i>
        </button>

        <button className="p-2 hover:bg-gray-200" onClick={handleToggleBold}>
          <i className={`fas fa-bold ${isBold ? "text-blue-500" : ""}`}></i>
        </button>

        <button className="p-2 hover:bg-gray-200" onClick={handleToggleItalic}>
          <i className={`fas fa-italic ${isItalic ? "text-blue-500" : ""}`}></i>
        </button>

        <button
          className="p-2 hover:bg-gray-200" onClick={handleToggleUnderLine}>
            <i className={`fas fa-underline ${isUnderLine ? "text-blue-500" : ""}`}></i>
        </button>

        <button className="p-2 hover:bg-gray-200">
          <i className="fas fa-font"></i>
        </button>
 
        <button className="p-2 hover:bg-gray-200" onClick={() => handleToggleAlignment("left")}>
            <i className={`fas fa-align-left ${isLeft ? "text-blue-500" : ""}`}></i>
        </button> 


        <button className="p-2 hover:bg-gray-200" onClick={() => handleToggleAlignment("center")}>
          <i
            className={`fas fa-align-center ${isCenter ? "text-blue-500" : ""}`}
          ></i>
        </button>
        <button className="p-2 hover:bg-gray-200" onClick={() => handleToggleAlignment("right")}>
          <i className={`fas fa-align-right ${isRight ? "text-blue-400" : ""}`}></i>
        </button>

        <button className="p-2 hover:bg-gray-200">
          <i className="fas fa-list-ul"></i>
        </button>

        <button className="p-2 hover:bg-gray-200">
          <i className="fas fa-list-ol"></i>
        </button>
      </div>

      <div className=" mb-3">
        <button className="bg-[#0b57d0] text-[#fff] mt-2 text-left p-1 px-5 rounded-full text-base">
          Send
        </button>
      </div>
    </>
  );
};

export default Toolbar;





// <textarea
//     className="w-full min-h-56 border-none text outline-none overflow-y-scroll">
// </textarea>  
