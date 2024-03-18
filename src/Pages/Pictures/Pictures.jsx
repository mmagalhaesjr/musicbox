import { StyledPictures } from './StyledPictures';



import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCube, Pagination, Navigation, A11y } from 'swiper/modules';



import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import 'swiper/css/effect-cube';


import foto1 from '../../assets/fotos/3.jpg'
import foto2 from '../../assets/fotos/2.jpg'
import foto3 from '../../assets/fotos/1.jpg'
import foto4 from '../../assets/fotos/4.jpg'
import foto5 from '../../assets/fotos/5.jpg'
import foto6 from '../../assets/fotos/6.jpg'


import Header from '../../Components/Header/Header';
import Icones from '../../Components/Icones/Icones';





export default function Pictures() {

    useEffect(() => {
        AOS.init();
    }, []);

    return (

        <>
   <Header />

            <StyledPictures>
           

           
            <div id="container" 
                      data-aos="zoom-in-up"
                      data-aos-anchor-placement="bottom-bottom"
                      data-aos-duration="800"
                >

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

                        {/* <SwiperSlide>
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
                        </SwiperSlide> */}

                    </Swiper>

                </div>
              
                <Icones />
            </StyledPictures>
        </>

    );
}
