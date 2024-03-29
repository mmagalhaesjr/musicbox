import { StyledReservationStructure, } from './Styled';

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCube, Pagination, Navigation, A11y } from 'swiper/modules';



import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


import 'swiper/css/effect-cube';





export default function ReservationStructure(prop) {
    return (
        <a href={prop.link} >
            <StyledReservationStructure cor={prop.cor} >

                <Swiper

                    effect={'cube'}

                    grabCursor={true}
                    loop={true}
                    cubeEffect={{
                        shadow: true,
                        slideShadows: true,
                        shadowOffset: 50,
                        shadowScale: 0,

                    }}
                    navigation={true}
                    speed={4000}
                    pagination={{ clickable: true }}
                    modules={[EffectCube, Pagination, Navigation, A11y]}

                >

                    <SwiperSlide>
                        <img src={prop.imagem} alt="" />
                    </SwiperSlide>

                    <SwiperSlide>
                        <img src={prop.imagem} alt="" />
                    </SwiperSlide>



                </Swiper>
                <h1>{prop.nome}</h1>
            </StyledReservationStructure>
        </a>
    )
}