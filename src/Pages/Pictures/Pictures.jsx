import { StyledPictures } from './StyledPictures';

import Header from '../../Components/Header/Header';



import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCube, Pagination, Navigation, A11y } from 'swiper/modules';



import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import 'swiper/css/effect-cube';


import foto1 from '../../assets/salas/1.png'
import foto2 from '../../assets/salas/2.png'
import foto3 from '../../assets/salas/3.png'
import foto4 from '../../assets/salas/4.png'
import foto5 from '../../assets/salas/5.png'
import foto6 from '../../assets/salas/6.png'
import foto7 from '../../assets/salas/7.png'
import foto8 from '../../assets/salas/8.png'
import foto9 from '../../assets/salas/9.png'
import foto10 from '../../assets/salas/10.png'





export default function Pictures() {
    return (
        <StyledPictures>

            <Header />

            <div id='container'>

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
                        <img src={foto1} alt="img" />
                    </SwiperSlide>

                    <SwiperSlide>
                        <img src={foto2} alt="img" />
                    </SwiperSlide>

                    <SwiperSlide>
                        <img src={foto3} alt="img" />
                    </SwiperSlide>

                    <SwiperSlide>
                        <img src={foto4} alt="img" />
                    </SwiperSlide>

                    <SwiperSlide>
                        <img src={foto5} alt="img" />
                    </SwiperSlide>

                    <SwiperSlide>
                        <img src={foto6} alt="img" />
                    </SwiperSlide>

                    <SwiperSlide>
                        <img src={foto7} alt="img" />
                    </SwiperSlide>

                    <SwiperSlide>
                        <img src={foto8} alt="img" />
                    </SwiperSlide>

                    <SwiperSlide>
                        <img src={foto9} alt="img" />
                    </SwiperSlide>

                    <SwiperSlide>
                        <img src={foto10} alt="img" />
                    </SwiperSlide>

                   



                </Swiper>

            </div>



        </StyledPictures>
    );
}
