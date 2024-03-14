import { useParams } from 'react-router-dom';


import Sala1 from './Sala1'
import Sala2 from './Sala2';
import Sala3 from './Sala3';
import Sala4 from './Sala4';
import Sala5 from './Sala5';
import Sala6 from './Sala6';
import Sala7 from './Sala7';
import Sala8 from './Sala8';
import Sala9 from './Sala9';
import Sala10 from './Sala10';


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