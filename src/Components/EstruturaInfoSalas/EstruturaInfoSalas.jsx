import { StyledBaixo, StyledCima, StyledEstrutura } from "./Styled";
import Header from '../Header/Header';

import sala1 from '../../assets/salas/1.png'
import { FaWhatsapp } from "react-icons/fa";

export default function EstruturaInfoSalas() {
    return (
        <>
            <Header />
            <StyledEstrutura>

                <StyledCima>
                    <img src={sala1} alt="" />
                    <div id="texto">
                        <h1>SALA 1 </h1>
                        <p>Capacidade: 10 pessoas</p>
                        <p>Metragem: 100m²</p>
                    </div>
                </StyledCima>
                {/* ------------------------------------------ */}
                <StyledBaixo>


                    <div id="contato">
                        <h1>
                            Reserve pelo Whatapp
                        </h1>
                        <FaWhatsapp className="icone" />
                        <h1>
                            ou ligue: (32 98888-8888)
                        </h1>

                    </div>
                </StyledBaixo>

            </StyledEstrutura>
        </>

    )
}