import styled from "styled-components";
import { amarelo, rosa, roxo, verde } from '../../constants/Cores';

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

`

export const StyleCxComida = styled.section`
    width: 45%;
    height: 90%;
    border: solid 3px #ffffff;

    display: flex;
    align-items: center;
    justify-content: start;
    flex-wrap: wrap;

    .g{
    width: 70%;
    height: 33%;
    border-radius: 10px;
    background-color: ${roxo};
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

export const StyleCxBebida = styled.section`
    width: 45%;
    height: 90%;
    border: solid 3px #ffffff;

    display: flex;
    align-items: center;
    justify-content: start;
    flex-wrap: wrap;

    .g{
    width: 70%;
    height: 33%;
    border-radius: 10px;
    background-color: ${verde};
    border: solid 3px  #000000;
}
.p{
    width: 30%;
    height: 33%;
    border-radius: 10px;
    background-color: ${rosa};
    border: solid 3px  #000000;
}

`