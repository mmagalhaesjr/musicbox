import Header from "../../Components/Header/Header";
import { StyledReservation } from "./StyledReservation";

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


import { listaBoxes } from "../../constants/BoxesLista";
import ReservationStructure from "../../Components/ReservationStructure/ReservationStructure";




export default function Reservation() {

    useEffect(() => {
        AOS.init();
    }, []);


    return (

        <>
            <Header />
            <StyledReservation>



                <div id="container"
                    data-aos="zoom-in-up"
                    data-aos-anchor-placement="bottom-bottom"
                    data-aos-duration="800"
                >

                    {listaBoxes.map((box) => (
                        < ReservationStructure key={box.nome}
                            link={`/sala/${box.id}`}
                            nome={box.nome}
                            imagem={box.imagem}
                            cor={box.cor}
                        />
                    ))}

                </div>

            </StyledReservation>
        </>

    )
}