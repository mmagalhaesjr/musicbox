import styled from "styled-components";
import { amarelo, rosa } from '../../Components/constant/constant';


export const StyledReservation = styled.section`
width: 100%;



display: flex;
flex-direction: column;
align-items: center;
justify-content: center;



/* border: solid 3px #ffffff; */

#container{
    width: 98%;
    /* height: 80vh; */
    /* border: solid 3px #ffffff; */

    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
}
.caixa{
    width: 50%;
    height: 200px;
    background-color: ${rosa};
    border: solid 3px #000000;
    border-radius: 10px;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    
}
img{
    width: 40%;
    height: 95%;
    border-radius: 10px;
}
.txt{
    width: 55%;
    height: 95%;
    
    /* border: solid 3px #ffffff; */
}
ul{
    width: 90%;
    
    margin-left: 5%;
    margin-top: 3%;
    line-height: 1.2;
}
h2{
    font-size: 1.5rem;
    font-weight:700;
}

h3{
    margin-top: 5%;
}
.icone{
    font-size: 4rem;
}

.icone,h3,h2,li{
    color: ${amarelo};
}



`