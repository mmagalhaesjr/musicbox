import EstruturaInfoSalas from '../../Components/RoomsStructure/RoomsStructure';
import { listaBoxes } from '../../constants/BoxesLista';



export default function Sala5() {


   

    const sala = listaBoxes[4];
    return (
        <>
            <EstruturaInfoSalas
                key={sala.id}
                nome={sala.nome}
                imagem={sala.imagem}
                cor={sala.cor}
                capacidade={sala.capacidade}
                metros={sala.metros}
                info={sala.info}
            />
        </>
    )
}