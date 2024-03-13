import { useParams } from 'react-router-dom';


import Sala1 from '../CadaSala/Sala1'
import Sala2 from '../CadaSala/Sala2';
import Sala3 from '../CadaSala/Sala3';
import Sala4 from '../CadaSala/Sala4';
import Sala5 from '../CadaSala/Sala5';
import Sala6 from '../CadaSala/Sala6';
import Sala7 from '../CadaSala/Sala7';
import Sala8 from '../CadaSala/Sala8';
import Sala9 from '../CadaSala/Sala9';
import Sala10 from '../CadaSala/Sala10';


export default function SalaId(){
    const {salaId} = useParams()


const salaComponentes = {
    1: <Sala1/>,
    2: <Sala2 />,
    3: <Sala3 />,
    4: <Sala4 />,
    5: <Sala5 />,
    6: <Sala6 />,
    7: <Sala7 />,
    8: <Sala8 />,
    9: <Sala9 />,
    10: <Sala10 />
}
const selecionarSala = salaComponentes[salaId]

return(
    <>
    <div>
        {selecionarSala || <p>Sala não encontrado</p>}
    </div>
</>
)
}