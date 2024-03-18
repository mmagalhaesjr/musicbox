import styled from "styled-components";

export const StyledReservationStructure = styled.div`

    //quarado
    width: 500px;
    height: 500px;
    border-radius: 10px;
    background-color: ${prop => prop.cor};
   

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

  .swiper { 
    width: 90%;
    height: 85%; 
    margin-bottom: 2.5%;
  }
 
.swiper-slide {
    width: 100%;
    height: 90%;
    background-position: center;
    background-size: cover;
    background-color: #fcfcfc69;
    border: solid 5px #ffffff;
    

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}


.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
}



.swiper-clickable{
    color: #fff;
}
.swiper-pagination-bullet {
  background-color: #F4F3F0;
}


.swiper-button-next,
.swiper-button-prev {
    color: #ffffff; 
    width: 20px; 
    height: 20px;
    /* padding: 5px;  */
    border-radius: 10px; 
   

    &:hover{
      color: #000000; 
    }
}

h1{
  font-size: 2rem;
  color: #000000;
}





 @media(max-width:500px){
   
 //quarado
    width: 350px;
    height: 400px;
    border-radius: 10px;
    background-color: ${prop => prop.cor};

    .swiper { 
      width: 95%;
      height:95%; 
      margin-bottom: 0%;
      margin-top: 10px;

      /* border: solid 5px #eb0404; */

    }
    .swiper-slide {
      width: 80%;
      height: 90%;
      background-position: center;
      background-size: cover;
      background-color: #fcfcfc69;
      border: solid 5px #ffffff;
    }
    .swiper-slide img {
      display: block;
      width: 100%;
      height: 100%;
    }
    h1{
      font-size: 1.5rem;
      color: #ffffff;
      margin-top: auto;
      margin-bottom: 30px;
    }

 }


`