import { styled } from "styled-components"

const Botao = styled.button`
    background: ${props => props.$ativo ? 'var(--coral, #F0633C)' : 'var(--cinza-claro, #EFEFEF)'};
    color: ${props => props.$ativo ? 'var(--creme, #FFFAF3)' : 'var(--cinza, #444)'};
    font-weight: ${props => props.$ativo ? '700' : '400'};
    padding: 8px;
    border-radius: 8px;
    border: none;
    cursor: pointer;
    text-align: center;
    font-family: Nunito Sans;
    font-size: 18px;
    font-style: normal;
    line-height: 150%; 
`


const TagIngrediente = ({ ingrediente, onClick, ativo }) => {
    return (<Botao $ativo={ativo} onClick={onClick}>
        {ingrediente.nome}
    </Botao>)
}

export default TagIngrediente