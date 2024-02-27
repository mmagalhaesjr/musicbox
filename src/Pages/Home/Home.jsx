import { StyledHome } from "./StyledHome";
import Header from '../../Components/Header/Header';

import { Transition } from 'react-transition-group';

import cantores from '../../assets/gif.gif';

export default function Home() {

    
    return (



        
        <>


            <Header />

            <StyledHome>
                <div id="container">



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

