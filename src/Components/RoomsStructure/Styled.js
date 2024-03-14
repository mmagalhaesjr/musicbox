import styled from "styled-components";



export const StyledRoomsStructure = styled.section`

width: 100%;
height: 80vh;
background-color: red;

display: flex;
flex-direction: column;
align-items: center;
justify-content: center;



`

export const StyledCima = styled.div`
    width: 100%;
    height: 50%;
    background-color: blue;

    display: flex;
    align-items: center;
    justify-content: center;

    a{
        width: 100%;
        height: 100%;
        cursor: pointer;
        background-color: blue;
    }

    img{
        width: 50%;
        height: 100%;
        border-radius: 10px;
    }
    #texto{
        width: 50%;
        height: 100%;
        border: solid 2px red;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 20px;
    }
`
export const StyledBaixo = styled.div`
    width: 100%;
    height: 50%;
    background-color: orange;

#contato{
    width: 100%;
    height: 100%;
    
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2%;
}

    h1{
        font-size: 2rem;
    }
    .icone{
        font-size: 3rem;
    }

   
`