import EstruturaInfoSalas from '../../Components/EstruturaInfoSalas/EstruturaInfoSalas';
import { listaBoxes } from '../../constants/BoxesLista';

export default function Sala9(){
    const sala = listaBoxes[8];
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