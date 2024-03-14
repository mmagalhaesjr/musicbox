import { StyledBaixo, StyledCima, StyledRoomsStructure } from "./Styled";
import Header from '../Header/Header';


import { FaWhatsapp } from "react-icons/fa";


import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function RoomsStructure(p) {

    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <>
            <Header />
            <StyledRoomsStructure data-aos="zoom-in-up"
                    data-aos-anchor-placement="bottom-bottom"
                    data-aos-duration="800">

                <StyledCima>
                    <img src={p.imagem} alt="img" />
                    <div id="texto">
                        <h1>{p.nome}</h1>
                        <div className="info">
                            <p>Capacidade:{p.capacidade}</p>
                            <p>Metros:{p.metros}²</p>

                            <p>{p.info}</p>
                        </div>

                        
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



            </StyledRoomsStructure>
        </>

    )
}