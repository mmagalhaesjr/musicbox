import { StyledHeader } from "./StyledHeader";

import logo from '../../assets/logo.png'


import { FaInstagramSquare } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";


export default function Header() {
    return (
        <StyledHeader>

            <a href="/"><img src={logo} alt="" /></a>
           

            <div id="caixalinks">
                <FaInstagramSquare className="ico2" />
                <FaWhatsappSquare className="ico1" />
                <MdOutlineMail className="ico3" />
                <IoLocationSharp  className="ico4"/>
                
            </div>
         
         
        </StyledHeader>
    )

}