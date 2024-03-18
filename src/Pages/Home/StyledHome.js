import styled from "styled-components";
import { verde, verdeEscuro, rosa, rosaEscuro, } from "../../constants/Cores";


export const StyledHome = styled.main`
//home
    width: 100%;
    height: 80vh;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  

#container{
    width: 98%;
    height: 100%; 

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
@media(max-width:500px){
    //home
    width: 100%;
    height: 80vh;

    display: flex;
    align-items: center;
    justify-content: center;
}
`

export const StyleParteCima = styled.section`
//cima
    width: 100%;
    height: 65%;
   
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1%; 
     

    .ladoEsquerdo1{
    width: 70%;
    height: 100%;
    background-color: #e5dcad;
    background-color: #34343400;
    border: 2px solid #af00ff; 
    /* box-shadow: 0 0 5px #af00ff, 0 0 5px #af00ff, 0 0 10px #af00ff, 0 0 10px #af00ff, 0 0 10px #af00ff; */
   
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

    @media(max-width:500px){
        //cima
        width: 100%;
        height: 65%;
   
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 1%; 

        .ladoEsquerdo1{
        width: 100%;
        height: 50%;
        border-radius: 10px;
        border: none;
    /* box-shadow: 0 0 5px #af00ff, 0 0 5px #af00ff, 0 0 10px #af00ff, 0 0 10px #af00ff, 0 0 10px #af00ff; */

        display: flex;
        align-items: center;
        justify-content: center;
        }
        .ladoDireito1{
        width: 100%;
        height: 50%;
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
    }

`
//----------------------------------------------------------------------




export const StyleParteBaixo = styled.section`
//baixo
    width: 100%;
    height: 30%;
    margin-top: 1%;
    
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1%;

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

@media(max-width:500px){
    //baixo
    width: 100%;
    height: 30%;
    margin-top: 2%;
    
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1%;
    h2{
    font-size: 2rem;
    color: #ffffff;
    font-weight: 100;
    }
    .icone{
    width: 150px;
    height: 50%;
    }

    .ladoDireito2{
    width: 40%;
    height: 100%;
    
    background-color: ${verde};
    border-radius: 10px;

    display: flex;
    flex-direction: column;
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
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
  

    &:hover{
        background-color: ${rosaEscuro}; 
    }
    }
}
`