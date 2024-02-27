import { StyledHome } from "./StyledHome";
import Header from '../../Components/Header/Header';

import { Transition } from 'react-transition-group';

import cantores from '../../assets/gif.gif';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

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

                        </div>
                        <div className="ladoDireito1">

                            <Transition in={true} appear={true} timeout={1000}>
                                {(state) => (
                                    <a href="/fotos" className={`fade-${state}`}>
                                        <img src={cantores} alt="img" />
                                    </a>
                                )}
                            </Transition>


                        </div>
                    </section>






                    <section id="parteBaixo">

                        <div className="ladoEsquerdo2">

                        </div>
                        <div className="ladoDireito2">

                        </div>

                    </section>


                </div>

            </StyledHome>
        </>

    )

}

