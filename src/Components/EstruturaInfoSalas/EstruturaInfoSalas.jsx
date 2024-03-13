import { StyledBaixo, StyledCima, StyledEstrutura } from "./Styled";
import Header from '../Header/Header';


import { FaWhatsapp } from "react-icons/fa";


export default function EstruturaInfoSalas(prop) {
    return (
        <>
            <Header />
            <StyledEstrutura>
               
                    <StyledCima>
                        <img src={prop.imagem} alt="" />
                        <div id="texto">
                            <h1>{prop.nome}</h1>
                            {/* <p>{prop.capacidade}</p>
                            <p>{prop.metros}</p>
                            <p>{prop.info}</p> */}
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