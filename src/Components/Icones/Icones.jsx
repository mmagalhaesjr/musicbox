
import { StyledIcones } from "./Styled";



import { FaInstagramSquare } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";



export default function Icones() {
    return (
      
            <StyledIcones>
                <FaInstagramSquare className="ico2" />
                <FaWhatsappSquare className="ico1" />
                <MdOutlineMail className="ico3" />
                <IoLocationSharp  className="ico4"/>
                
            </StyledIcones>
         
         
        
    )

}