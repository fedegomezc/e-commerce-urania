import styled from 'styled-components';
import Item from './Item';
import { LoaderContainer, Loader} from '../ItemDetail/ItemDetail';

const ItemList = (props) => {
    return (
        <CardsContainer>
        {
            props.datos.length > 0 ?
            props.datos.map(item => <Item key={item.id} {...item}/> ) :
            <LoaderContainer><Loader></Loader></LoaderContainer>
        }
        </CardsContainer>
    )
}

export default ItemList;


// Styled Components //

const CardsContainer = styled.section`
    display: flex;
    width: 100%;
    min-width: 350px;
    justify-content: center;
    align-items: flex-start;
    flex-wrap: wrap;
    padding: 3em;
`