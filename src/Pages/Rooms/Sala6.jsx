import EstruturaInfoSalas from '../../Components/RoomsStructure/RoomsStructure';
import { listaBoxes } from '../../constants/BoxesLista';

export default function Sala6(){
    const sala = listaBoxes[5];
    return(
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