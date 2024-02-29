import styled from "styled-components";
import { amarelo, azul } from '../../Components/constant/constant';

export const StyledMenu = styled.section`
width: 100%;


display: flex;
flex-direction: column;
align-items: center;
justify-content: start;



/* border: solid 3px #ffffff; */

#container{
    width: 98%;
    height: 80vh;
    border: solid 3px #ffffff;

    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-wrap: wrap;
}
#cxComida{
    width: 45%;
    height: 90%;
    border: solid 3px #ffffff;

    display: flex;
    align-items: center;
    justify-content: start;
    flex-wrap: wrap;
}
#cxBebida{
    width: 45%;
    height: 90%;
    border: solid 3px #ffffff;

    display: flex;
    align-items: center;
    justify-content: start;
    flex-wrap: wrap;
}
.g{
    width: 70%;
    height: 33%;
    border-radius: 10px;
    background-color: ${azul};
    border: solid 3px  #000000;
}
.p{
    width: 30%;
    height: 33%;
    border-radius: 10px;
    background-color: ${amarelo};
    border: solid 3px  #000000;
}


`