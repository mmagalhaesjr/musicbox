import styled from "styled-components";



export const StyledHeader = styled.div`

width: 100%;
height: 100px;
border-radius: 0 0 10px 10px;

display: flex;
align-items: center;
justify-content: center;

background-color: #1d1d1d2d;
margin-bottom: 15px;

#caixalinks{
    width: 80%;
    
    
    display: flex;
    align-items: center;
    justify-content: space-around;
}

a img{
    width: 150px;
    height: 80px;
}

.ico1{
   font-size: 2.2rem;
   color: #20f404;
   cursor: pointer;
}
.ico2{
   font-size: 2.2rem;
   color: #f404cc;
   cursor: pointer;
}
.ico3{
    background-color: #3804f4;
   font-size: 1.9rem;
   color: #000000;
   cursor: pointer;
   border-radius: 3px;
}
.ico4{
    background-color: #dcf404;
   font-size: 1.9rem;
   color: #000000;
   cursor: pointer;
   border-radius: 3px;
}

@media(max-width:500px){
    #caixalinks{
    width: 80%;
    
    
    display: flex;
    align-items: center;
    justify-content: space-around;
    display: none;
}
}


`