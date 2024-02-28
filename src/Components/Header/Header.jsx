import { StyledHeader } from "./StyledHeader";

import logo from '../../assets/logo.png'

export default function Header() {
    return (
        <StyledHeader>

            <a href="/"><img src={logo} alt="" /></a>
           

            <div id="caixalinks">
                <p>texto</p>
                <p>texto</p>
                <p>texto</p>
            </div>
         
         
        </StyledHeader>
    )

}