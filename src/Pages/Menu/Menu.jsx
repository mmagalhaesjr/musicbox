import { StyledMenu } from "./StyledMenu";
import Header from '../../Components/Header/Header';


export default function Menu() {
    return (

        <>
            <Header />

            <StyledMenu>
                <div id="container" 
                      data-aos="zoom-in-up"
                      data-aos-anchor-placement="bottom-bottom"
                      data-aos-duration="800"
                >

                    <div id="cxComida">

                        <div className="g">

                        </div>
                        <div className="p">

                        </div>
                        <div className="p">

                        </div>
                        <div className="g">

                        </div>
                        <div className="g">

                        </div>
                        <div className="p">

                        </div>

                    </div>

                    {/* ---------------------------- */}

                    <div id="cxBebida">

                        <div className="g">

                        </div>
                        <div className="p">

                        </div>
                        <div className="p">

                        </div>
                        <div className="g">

                        </div>
                        <div className="g">

                        </div>
                        <div className="p">

                        </div>

                    </div>

                </div>
            </StyledMenu>
        </>

    )
}