import { FooterStyle, Logo, Menu } from "./style";

export function Footer () {
    return (
        <FooterStyle>
        <Menu>
        <ul>
            <li>Sobre</li>
            <li>Contato</li>
            <li>Política de devolução</li>
            <li>FAQ</li>
        </ul>

        <ul>
            <li>Fretes</li>
            <li>Garantias</li>
            <li>Tecnologia</li>
            <li>Atendimento</li>
        </ul>
        </Menu>
        <Logo>
        <h1>spacetravel</h1>
        </Logo>
        </FooterStyle>
    )
} 