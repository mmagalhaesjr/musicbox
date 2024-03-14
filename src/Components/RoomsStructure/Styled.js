import styled from "styled-components";




export const StyledRoomsStructure = styled.section`

width: 100%;
height: 80vh;

display: flex;
flex-direction: column;
align-items: center;
justify-content: center;




`

export const StyledCima = styled.div`
    width: 100%;
    height: 50%;
    background-color: #000000;
   

    display: flex;
    align-items: center;
    justify-content: center;

    a{
        width: 100%;
        height: 100%;
        cursor: pointer;
    }
    img{
        width: 50%;
        height: 100%;
        border-radius: 10px;
    }
    #texto{
        width: 50%;
        height: 100%;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 20px;
    }
    h1{
        font-size: 3rem;
    }
    .info{
        width: 80%;
        
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content:center;
        gap: 10px;

    }
`
export const StyledBaixo = styled.div`
    width: 100%;
    height: 50%;
    background-color: #ffffff;
    margin-top: 20px;

#contato{
    width: 100%;
    height: 100%;
    
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2%;
}

    h1{
        font-size: 3rem;
        color: #000000;
    }
    .icone{
        font-size: 3rem;
        color: #000000;
    }

   
`