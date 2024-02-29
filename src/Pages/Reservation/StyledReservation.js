import styled from "styled-components";

import { verde } from '../../Components/constant/constant';




export const StyledReservation = styled.section`

width: 100%;
height: 100vh;
background-color: #ffffff;
background-color: #000000;

overflow: hidden;

display: flex;
flex-direction: column;
align-items: center;
justify-content: center;



/* border: solid 2px red; */

#container{
    width: 100%;
    height: 100%;
    position: relative;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2%;
    flex-wrap: wrap;

    /* border: solid 2px #ffffff; */
}

#cx{
    width: 300px;
    height: 300px;
    border-radius: 10px;
    background-color: ${verde};

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}


.swiper { 
  width: 200px;
  height: 200px; 
  margin-bottom: 2.5%;
}



.swiper-slide {
    background-position: center;
    background-size: cover;
    background-color: #fcfcfc69;
    border: solid 2px #ffffff;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}


.swiper-slide img {
  display: block;
  width: 50%;
  height: 100%;
  border-radius: 10px;
  border: solid 3px #ffffff;
}



.swiper-clickable{
    color: #fff;
}
.swiper-pagination-bullet {
  background-color: #F4F3F0;
}
/* .swiper-button-prev{
    color: #000000;
    width: 30px;
    height: 50px;
    padding: 20px;
    border-radius: 10px;
    
} */

.swiper-button-next,
.swiper-button-prev {
    color: #ffffff; 
    width: 20px; 
    height: 20px;
    /* padding: 5px;  */
    border-radius: 10px; 
    overflow: hidden; 
}

/* .custom-shadow .swiper-slide-shadow-left,
.custom-shadow .swiper-slide-shadow-right {
    background: rgba(255, 255, 255, 0.5); 
} */


 @media(max-width:900px){
    .swiper { 
        width: 60%;
        height: 50%;
        position: absolute;
  /* border: solid 5px blue; */
}
 }
 @media(max-width:600px){
    .swiper { 
        width: 90%;
        height: 40%;
        position: absolute;
  /* border: solid 5px blue; */
}
 }

`