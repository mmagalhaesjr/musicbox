import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCube, Pagination, Navigation, A11y } from 'swiper/modules';



import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import 'swiper/css/effect-cube';
import { StyledBoxReservation } from './StyledBoxReserva';


export default function BoxReserva(prop) {
    return (

        <StyledBoxReservation cor={prop.cor}>

            <Swiper

                effect={'cube'}

                grabCursor={true}
                loop={true}
                cubeEffect={{
                    shadow: true,
                    slideShadows: true,
                    shadowOffset: 50,
                    shadowScale: 0.94,

                }}
                navigation={true}
                speed={4000}
                pagination={{ clickable: true }}
                modules={[EffectCube, Pagination, Navigation, A11y]}
                className="mySwiper custom-shadow"
            >

                <SwiperSlide>

                </SwiperSlide>

                <SwiperSlide>

                </SwiperSlide>

            </Swiper>
            <h1>{prop.nome}</h1>
        </StyledBoxReservation>
    )
}