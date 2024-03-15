import { StyledBaixo, StyledCima, StyledRoomsStructure } from "./Styled";
import Header from '../Header/Header';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css/effect-creative';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { EffectCreative, Navigation, Pagination, A11y } from 'swiper/modules';



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
                    <div id="fotos">

                    <Swiper
                                modules={[EffectCreative, Navigation, Pagination, A11y]}
                                navigation
                                grabCursor={true}
                                effect={'creative'}
                                creativeEffect={{
                                    prev: {
                                        shadow: true,
                                        translate: [0, 0, -400],
                                    },
                                    next: {
                                        translate: ['100%', 0, 0],
                                    },
                                }}

                                className="swiper-slide"
                            >

                            <SwiperSlide><img src={p.imagem} alt="img" /></SwiperSlide>
                            <SwiperSlide><img src={p.imagem} alt="img" /></SwiperSlide>
                            <SwiperSlide><img src={p.imagem} alt="img" /></SwiperSlide>
                            
                           
                        </Swiper>

                    </div>
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