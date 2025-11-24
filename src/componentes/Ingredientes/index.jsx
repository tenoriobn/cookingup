import { useContext } from "react"
import { styled } from "styled-components"
import { IngredientesContext } from "../IngredientesContext"
import CardIngrediente from "../CardIngrediente"
import IngredientesSelecionados from "../IngredientesSelecionados"

const Main = styled.main`
    border-radius: 60px 60px 0px 0px;
    background: var(--creme, #FFFAF3);
    padding: 100px 120px;

`

const Titulo = styled.h3`
    color: var(--verde-medio, #3D6D4A);
    text-align: center;
    font-family: Paytone One;
    font-size: 37px;
    font-style: normal;
    font-weight: 400;
    line-height: 120%;
`

const Paragrafo = styled.p`
    color: var(--cinza, #444);
    text-align: center;
    font-family: Nunito Sans;
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; 
    margin: 32px 0;
`

const CardsContainer = styled.section`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 24px;
    align-items: stretch;

`

const Ingredientes = () => {

    const { categorias } = useContext(IngredientesContext);

    return (
        <Main>
            <IngredientesSelecionados />

            <Titulo>Ingredientes</Titulo>
            <Paragrafo>
                Selecione abaixo os ingredientes que você quer usar nesta receita:
            </Paragrafo>
            <CardsContainer>
                {categorias.map(categoria => <CardIngrediente categoria={categoria} key={categoria.id}/>)}
            </CardsContainer>
        </Main>
    )
}

export default Ingredientes