import { styled } from "styled-components"
import ItemNavegação from "./ItemNavegação"

const ListaEstilizada = styled.ul`
list-style: none;
padding: 0;
margin: 0;
width: 212px;
`

const BarraLateral = () => {
    return(
        <aside>
            <nav>
                <ListaEstilizada>
                    <ItemNavegação 
                        iconeAtivo="/icones/home-ativo.png"
                        iconeInativo="/icones/home-inativo.png"
                        ativo={true}
                    >
                        Início
                        </ItemNavegação>
                    <ItemNavegação 
                        iconeAtivo="/icones/mais-vistas-ativo.png"
                        iconeInativo="/icones/mais-vistas-inativo.png"
                    >
                        Mais vistas
                        </ItemNavegação>
                    <ItemNavegação 
                        iconeAtivo="/icones/mais-curtidas-ativo.png"
                        iconeInativo="/icones/mais-curtidas-inativo.png"
                    >
                        Mais curtidas
                        </ItemNavegação>
                    <ItemNavegação 
                        iconeAtivo="/icones/novas-ativo.png"
                        iconeInativo="/icones/novas-inativo.png"
                    >
                        Novas
                        </ItemNavegação>
                    <ItemNavegação 
                        iconeAtivo="/icones/surpreenda-me-ativo.png"
                        iconeInativo="/icones/surpreenda-me-inativo.png"
                    >
                        Surpreenda-me
                        </ItemNavegação>
                </ListaEstilizada>
            </nav>
        </aside>
    )
}

export default BarraLateral