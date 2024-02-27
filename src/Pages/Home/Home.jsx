import { StyledHome } from "./StyledHome";
import Header from '../../Components/Header/Header';

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

                            <img src={cantores} alt="" />

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