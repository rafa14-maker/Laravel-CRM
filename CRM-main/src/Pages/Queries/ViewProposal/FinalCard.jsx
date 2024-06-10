

import final from "../../../assets/images/final.jpeg"
import { LiaStarSolid } from "react-icons/lia";
import { BiCalendar } from "react-icons/bi";
import { PiForkKnifeFill } from "react-icons/pi";
import { FaHome } from "react-icons/fa";







const FinalCard = (props) => {



    
  return (
    <div className={`flex mt-4 `}>
        <div className="bg-[#ffff] w-full mx-14 border-[1px] rounded-lg border-[#eeeff0">
           <div className={`flex ${props.reverse} ${props.between}`}>
               <div>
               <img src={props.image} className="w-[35rem] rounded-lg" alt="" />
               </div>


                {/* card details */}

        <div className=" mx-8 mt-5">
             
             {props.data}
            


              </div>
           </div>
            
        </div>
    </div>
  )
}

export default FinalCard
























