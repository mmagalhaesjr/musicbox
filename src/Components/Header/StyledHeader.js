import styled from "styled-components";



export const StyledHeader = styled.div`

width: 100%;
height: 100px;
border-radius: 0 0 10px 10px;

display: flex;
align-items: center;
justify-content: space-evenly;

background-color: #1d1d1d2d;
margin-bottom: 15px;

div{
    width: 100px;
    height: 100px;
    border-radius: 50%;
}

img{
    width:100%;
    border-radius: 50%;
}

ul{
    width: 80%;
    list-style-type: none;
    
    display: flex;
    align-items: center;
    justify-content: space-around;
}


`