import { styled } from "styled-components"
import TagIngrediente from "../TagIngrediente"
import { useContext } from "react"
import { IngredientesContext } from "../IngredientesContext"

const CardContainer = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const Card = styled.section`
    display: flex;
    padding: 16px 8px;
    flex-direction: column;
    align-items: stretch;
    gap: 32px;
    flex: 1 0 0;
    border-radius: 16px;
    background: var(--branco, #FFF);
    box-shadow: 4px 4px 10px 0px rgba(68, 68, 68, 0.05);

`
const CardHeader = styled.header`
    text-align: center;
`

const CardBody = styled.div`
    display: flex;
    justify-content: center;
    gap: 8px;
    flex-wrap: wrap;
`

const CardTitulo = styled.h4`
    color: var(--verde-medio, #3D6D4A);
    text-align: center;
    font-family: Nunito Sans;
    font-size: 22px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%;
`

const CardIngrediente = ({ categoria }) => {
    const { alternarIngrediente, ingredienteEstaSelecionado } = useContext(IngredientesContext);
    return (
        <CardContainer>
            <Card>
                <CardHeader>
                    <img src={categoria.icone} />
                    <CardTitulo>{categoria.nome}</CardTitulo>
                </CardHeader>
                <CardBody>
                    {categoria.ingredientes
                        .map(ingrediente =>
                            <TagIngrediente
                                ingrediente={ingrediente}
                                key={ingrediente.id}
                                onClick={() => alternarIngrediente(ingrediente)}
                                ativo={ingredienteEstaSelecionado(ingrediente)}
                            />)}
                </CardBody>
            </Card>
        </CardContainer>
    )
}

export default CardIngrediente