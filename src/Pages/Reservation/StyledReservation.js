import styled from "styled-components";


export const StyledReservation = styled.section`

width: 100%;
height: 80vh;
background-color: #ffffff;
background-color: #000000;

display: flex;
flex-direction: column;
align-items: center;
justify-content: center;



/* border: solid 2px red; */

#container{
    width: 95%;
    height: 100%;
    position: relative;

    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 2%;
    flex-wrap:nowrap;
    overflow: auto;
   
    overflow-x: auto; 
    overflow-x: auto; 
    overflow-y: auto; 

    
    &::-webkit-scrollbar {
        width: 10px;
        height: 10px; 
        border: solid 2px #88888814;
    }

    
    &::-webkit-scrollbar-thumb {
        background-color: #88888830;
        border-radius: 5px;
    }

    /* border: solid 2px #ffffff;  */
}





`