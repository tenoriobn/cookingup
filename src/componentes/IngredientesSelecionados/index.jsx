import { useContext } from "react"
import { IngredientesContext } from "../IngredientesContext"
import { styled } from "styled-components"
import TagIngrediente from "../TagIngrediente"


const Titulo = styled.h3`
    color: var(--coral, #F0633C);
    text-align: center;
    font-family: Nunito Sans;
    font-size: 31px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; 
    margin-bottom: 24px;
`

const IngredientesSelecionadosContainer = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 24px;
    margin-bottom: 80px;
`

const TagContainer = styled.div`
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 4px;
`
const Legenda = styled.small`
    color: var(--ocre-hover, #D1451E);
    font-family: Nunito Sans;
    font-size: 12.5px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
`

const IngredientesSelecionados = () => {
    const { ingredientesSelecionados, alternarIngrediente } = useContext(IngredientesContext)

    if (!ingredientesSelecionados.length) {
        return null
    }

    return (<>
        <Titulo>Sua lista:</Titulo>
        <IngredientesSelecionadosContainer>

        { ingredientesSelecionados.map(ingrediente => 
            <TagContainer key={ingrediente.id} onClick={() => alternarIngrediente(ingrediente)}>
                <TagIngrediente ingrediente={ingrediente} ativo={true} />
                <Legenda><img src="/icones/close.png" alt="" /> Remover</Legenda>
            </TagContainer>
        )}
        </IngredientesSelecionadosContainer>
    </>)
}

export default IngredientesSelecionados