import { StyledFooter } from "./StyledFooter";

import { CiInstagram } from "react-icons/ci";
import { LiaWhatsappSquare } from "react-icons/lia";
import { BsFillTelephoneFill } from "react-icons/bs";


// import logo from '../../assets/logo.gif'

export default function Footer() {
    return (
        <StyledFooter>



            <div id="container">
                
                <a href="/"><h1>Reservar</h1></a>

                <div id="caixaRedes">
                    <CiInstagram className="icone" />
                    <LiaWhatsappSquare className="icone" />
                </div>

                <div id="caixaTelefone" >
                    <BsFillTelephoneFill className="icone" />
                    <p>(32)98888-8888</p>
                </div>
            </div>






        </StyledFooter>
    )

}