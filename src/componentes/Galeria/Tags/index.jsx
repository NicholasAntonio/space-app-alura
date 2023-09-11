import styled from 'styled-components'
import tags from './tags.json'

const ParagrafroEstilizado = styled.p`
    color: #D9D9D9;
    font-size: 24px;
    font-weight: 400;
    width: 219px;
`
const MainContainer = styled.div`
    display: flex;
    align-items: center;
`

const FiltroContainer = styled.div`
    display: flex;
    gap: 24px;
    width: 522px;
    height: 49px;
`

const BotaoEstilizado = styled.button`
    font-size: 24px;
    color: #FFFFFF;
    background: rgba(217, 217, 217, 0.3);
    border-radius: 10px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    padding: 12px;
    box-sizing: border-box;
    border: 2px solid transparent;
    &:hover {
      border-color: #C98CF1;
    }

`



const Tags = () => {
    return <MainContainer>

        <ParagrafroEstilizado>Busque por tags:</ParagrafroEstilizado>
        <FiltroContainer>
        {
            tags.map(tag => <BotaoEstilizado key={tag.id}>{tag.titulo}</BotaoEstilizado>)
        }
        </FiltroContainer>
    </MainContainer>
}

export default Tags