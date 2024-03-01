import styled from "styled-components";
import { verde,verdeEscuro,rosa,rosaEscuro, } from "../../constants/Cores";


export const StyledHome = styled.main`
width: 100%;
height: 80vh;

display: flex;
align-items: center;
justify-content: center;
/* border: solid 3px #ffffff; */

#container{
    width: 98%;
    height: 100%; 
}




#parteCima{
    width: 100%;
    height: 65%;
   
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1%;   
}
.ladoEsquerdo1{
    width: 70%;
    height: 100%;
    background-color: #e5dcad;
    border-radius: 10px;

    display: flex;
    align-items: center;
    justify-content: center;
}
.ladoDireito1{
    width: 30%;
    height: 100%;
    background-color: transparent;
    border-radius: 10px;
}
.musicbox{
    width: 95%;
    height: 90%;
}
.ladoDireito1 img{
    width: 100%;
    height: 100%;
    border-radius: 10px;
    transition: filter 0.3s ease, transform 1s ease;
}
.ladoDireito1 img:hover {
    filter: hue-rotate(50deg);
  }
  .ladoDireito1:hover h3 {
    opacity: 1;
  }



  



#parteBaixo{
    width: 100%;
    height: 30%;
    margin-top: 1%;
    
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1%;
}
.ladoDireito2{
    width: 40%;
    height: 100%;
    
    background-color: ${verde};
    border-radius: 10px;

    display: flex;
    align-items: center;
    justify-content: space-evenly;
    &:hover{
        background-color: ${verdeEscuro};
    }
}
.ladoEsquerdo2{
    width: 60%;
    height: 100%;
    background-color: ${rosa};
    border-radius: 10px;

    display: flex;
    align-items: center;
    justify-content: space-evenly;

    &:hover{
        background-color: ${rosaEscuro}; 
    }
}
.ladoEsquerdo2 a{
    width: 100%;
    height: 100%;
}
.icone{
    width: 200px;
    height: 100%;
}
h2{
    font-size: 3rem;
    color: #ffffff;
    font-weight: 100;
}



`