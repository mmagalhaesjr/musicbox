import { StyledBaixo, StyledCima, StyledEstrutura } from "./Styled";
import Header from '../Header/Header';


import { FaWhatsapp } from "react-icons/fa";




export default function EstruturaInfoSalas(p) {
    return (
        <>
            <Header />
            <StyledEstrutura>
               
                    <StyledCima>
                        <img src={p.imagem} alt="" />
                        <div id="texto">
                            <h1>{p.nome}</h1>
                            <p>{p.capacidade}</p>
                            <p>{p.metros}</p>
                            <p>{p.info}</p>
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