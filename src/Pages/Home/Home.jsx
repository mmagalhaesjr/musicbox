import { StyledHome } from "./StyledHome";
import Header from '../../Components/Header/Header';



import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { Link } from "react-router-dom";

import cantores from '../../assets/cantores.jpg';
import calendario from '../../assets/icones/calendario.png'
import cardapio from '../../assets/icones/cardapio.png'
import musicbox from '../../assets/icones/musicbox.gif'


export default function Home() {

    useEffect(() => {
        AOS.init();
    }, []);


    return (




        <>


            <Header />

            <StyledHome>
                <div id="container"
                    data-aos="zoom-in-up"
                    data-aos-anchor-placement="bottom-bottom"
                    data-aos-duration="800"
                >



                    <section id="parteCima">

                        <div className="ladoEsquerdo1">

                            <img className="musicbox" src={musicbox} alt="" />

                        </div>
                        <div className="ladoDireito1">

                            <a href="/fotos">
                                <img src={cantores} alt="img" />
                                
                            </a>

                        </div>
                    </section>






                    <section id="parteBaixo">


                        <Link className="ladoEsquerdo2" to={"/reservas"}>

                            <img className="icone" src={calendario} alt="img" />
                            <h2>Reservar</h2>

                        </Link>



                        <Link className="ladoDireito2" to={"/reservas"}>

                            <img className="icone" src={cardapio} alt="" />
                            <h2>Cardápio</h2>

                        </Link>

                    </section>


                </div >

            </StyledHome >
        </>

    )

}

