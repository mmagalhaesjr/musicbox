import { StyledPictures } from './StyledPictures';

import Header from '../../Components/Header/Header';



import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCube, Pagination, Navigation, A11y } from 'swiper/modules';



import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import 'swiper/css/effect-cube';





export default function Pictures() {
    return (
        <StyledPictures>

            <Header />

            <div id='container'>

                <Swiper
                    // modules={[Navigation, Pagination, A11y]}
                    // navigation
                    // pagination={{ clickable: true }}
                    // slidesPerView={window.innerWidth < 700 ? 1 : 3}

                    effect={'cube'}
                   
                    grabCursor={true}
                    loop={true}
                    cubeEffect={{
                        shadow: true,
                        slideShadows: true,
                        shadowOffset: 20,
                        shadowScale: 0.94,
                    }}
                    navigation={true}
                    speed={4000}
                    pagination={{ clickable: true }}
                    modules={[EffectCube, Pagination, Navigation, A11y]}
                    className="mySwiper"
                >

                    <SwiperSlide>
                        <img src='https://i.pinimg.com/originals/c5/bc/41/c5bc41be8cfb5c889cc18f9e984bb49b.jpg' alt="img" />
                    </SwiperSlide>

                    <SwiperSlide>
                        <img src='https://i.pinimg.com/originals/20/b4/6a/20b46a5817b49e8ea7f0931f43d4d7e8.jpg' alt="coworking" />
                    </SwiperSlide>

                    <SwiperSlide>
                        <img src='https://i.pinimg.com/736x/aa/ef/ef/aaefef311f7303329d2260f4cfb2f8c2.jpg' alt="coworking" />
                    </SwiperSlide>

                    <SwiperSlide>
                        <img src='https://www.eoimalaga.com/chino/wp-content/uploads/2018/04/sala_karaoke.jpg' alt="coworking" />
                    </SwiperSlide>

                    <SwiperSlide>
                        <img src='https://s3-eu-west-1.amazonaws.com/prod-ecs-service-web-blog-media/2022/11/sala-de-karaoke.jpg' alt="coworking" />
                    </SwiperSlide>

                    <SwiperSlide>
                        <img src='https://www.guiadasemana.com.br/contentFiles/image/2018/01/FEA/galeria/56435_w840h525_1517336694shutterstock-737673166-karaoke-paulista.jpg' alt="coworking" />
                    </SwiperSlide>



                </Swiper>

            </div>



        </StyledPictures>
    );
}
