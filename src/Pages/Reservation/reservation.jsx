import Header from "../../Components/Header/Header";
import { StyledReservation } from "./StyledReservation";

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


import { listaBoxes } from "../../constants/BoxesLista";
import EstruturaBoxsReserva from "../../Components/EstruturaBoxsReserva/EstruturaBoxsReserva";







export default function Reservation() {

    useEffect(() => {
        AOS.init();
    }, []);


    return (
        <StyledReservation>
            <Header />


            <div id='container'
                data-aos="zoom-in-up"
                data-aos-anchor-placement="bottom-bottom"
                data-aos-duration="1500"
            >

                {listaBoxes.map((box) => (
                    < EstruturaBoxsReserva key={box.nome}
                  
                    nome={box.nome}
                    imagem={box.imagem}
                    cor={box.cor}
                    />
                ))}

            </div>

        </StyledReservation>
    )
}