import EstruturaInfoSalas from "../../Components/EstruturaInfoSalas/EstruturaInfoSalas";

export default function Sala1(prop){
    return(
        <>
        <EstruturaInfoSalas 
            nome={prop.nome}
            imagem={prop.imagem}
         />
        </>
    )
}