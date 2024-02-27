import styled from "styled-components";

export const StyledPictures = styled.section`

background-color: #000000;

height: 100vh;
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
    flex-direction: column;
    align-items: center;
    justify-content: center;
}


.swiper { 
  width: 60%;
  height: 80%;
  position: absolute;
  /* border: solid 5px blue; */
  
}


.swiper-slide {
    background-position: center;
    background-size: cover;

    border: 2px solid #af00ff; /* Cor da borda */
    box-shadow: 0 0 20px #af00ff, 0 0 40px #af00ff, 0 0 60px #af00ff, 0 0 80px #af00ff, 0 0 100px #af00ff;
    animation: neon-border-glow 1.5s infinite alternate;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
@keyframes neon-border-glow {
  from {
    box-shadow: 0 0 10px #af00ff, 0 0 10px #af00ff, 0 0 60px #af00ff, 0 0 10px #af00ff, 0 0 10px #af00ff;
  }
  to {
    box-shadow: 0 0 10px #af00ff, 0 0 10px #af00ff, 0 0 70px #af00ff, 0 0 20px #af00ff, 0 0 10px #af00ff;
  }
    
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;

  border: solid 3px #f9abf6;
}



.swiper-clickable{
    color: #fff;
}
.swiper-pagination-bullet {
  background-color: #F4F3F0;
}
.swiper-button-prev{
    color: #fff;
    width: 30px;
    height: 50px;
    padding: 20px;
    border-radius: 10px;
    
}
.swiper-button-next{
    color: #fff;
    width: 30px;
    height: 50px;
    padding: 20px;
    border-radius: 10px;
 }


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