import Header from "../../Components/Header/Header";
import { StyledReservation } from "./StyledReservation";


import { FaWhatsapp } from "react-icons/fa";
import foto1 from '../../assets/salas/3.png'
import foto2 from '../../assets/salas/2.png'
import foto3 from '../../assets/salas/1.png'
import foto4 from '../../assets/salas/4.png'
import foto5 from '../../assets/salas/5.png'
import foto6 from '../../assets/salas/6.png'


export default function Reservation() {
    return (
        <StyledReservation>
            <Header />

            <div id="container"  
                  data-aos="zoom-in-up"
                  data-aos-anchor-placement="bottom-bottom"
                  data-aos-duration="800"
            >

                <div className="caixa">
                    <img src={foto1} alt="" />
                    <div className="txt">
                        <h2>Box Cantarola Lounge: </h2>
                        <ul>
                            <li>
                                Diametro: 100m²
                            </li>
                            <li>
                                Capacidade: Comporta até 10 pessoas
                            </li>
                        </ul>

                        <h3>AGENDAR:</h3>
                        <FaWhatsapp className="icone" />

                    </div>

                </div>

                <div className="caixa">
                    <img src={foto2} alt="" />
                    <div className="txt">
                        <h2>Box Sinfonia Sonora: </h2>
                        <ul>
                            <li>
                                Diametro: 100m²
                            </li>
                            <li>
                                Capacidade: Comporta até 10 pessoas
                            </li>
                        </ul>

                        <h3>AGENDAR:</h3>
                        <FaWhatsapp className="icone" />

                    </div>

                </div>

                <div className="caixa">
                    <img src={foto3} alt="" />
                    <div className="txt">
                        <h2>Box KaraokeLand: </h2>
                        <ul>
                            <li>
                                Diametro: 100m²
                            </li>
                            <li>
                                Capacidade: Comporta até 10 pessoas
                            </li>
                        </ul>

                        <h3>AGENDAR:</h3>
                        <FaWhatsapp className="icone" />

                    </div>

                </div>

                <div className="caixa">
                    <img src={foto4} alt="" />
                    <div className="txt">
                        <h2>Box Serenata Estelar: </h2>
                        <ul>
                            <li>
                                Diametro: 100m²
                            </li>
                            <li>
                                Capacidade: Comporta até 10 pessoas
                            </li>
                        </ul>

                        <h3>AGENDAR:</h3>
                        <FaWhatsapp className="icone" />

                    </div>

                </div>

                <div className="caixa">
                    <img src={foto5} alt="" />
                    <div className="txt">
                        <h2>Box Afinando & Diversão: </h2>
                        <ul>
                            <li>
                                Diametro: 100m²
                            </li>
                            <li>
                                Capacidade: Comporta até 10 pessoas
                            </li>
                        </ul>

                        <h3>AGENDAR:</h3>
                        <FaWhatsapp className="icone" />

                    </div>

                </div>

                <div className="caixa">
                    <img src={foto6} alt="" />
                    <div className="txt">
                        <h2>Box Cantoria Cosmopolita: </h2>
                        <ul>
                            <li>
                                Diametro: 100m²
                            </li>
                            <li>
                                Capacidade: Comporta até 10 pessoas
                            </li>
                        </ul>

                        <h3>AGENDAR:</h3>
                        <FaWhatsapp className="icone" />

                    </div>

                </div>
               


            </div>
        </StyledReservation>
    )
}