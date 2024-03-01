import { StyleCxBebida, StyleCxComida, StyledMenu } from "./StyledMenu";
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

                    <StyleCxComida >

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

                    </StyleCxComida>

                    {/* ---------------------------- */}

                    <StyleCxBebida >

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

                    </StyleCxBebida>

                </div>
            </StyledMenu>
        </>

    )
}