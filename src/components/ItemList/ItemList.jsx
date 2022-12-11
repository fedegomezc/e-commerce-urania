import styled from 'styled-components';
import Item from './Item';

const ItemList = (props) => {
    return (
        <CardsContainer>
        {
            props.datos.map(item => <Item key={item.id} {...item}/> )
        }
        </CardsContainer>
    )
}

export default ItemList;

const CardsContainer = styled.section`
    display: flex;
    width: 100%;
    min-width: 350px;
    justify-content: center;
    align-items: flex-start;
    flex-wrap: wrap;
    padding: 3em;
`