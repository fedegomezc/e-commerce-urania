import styled from 'styled-components';
import Item from './Item';
import { LoaderContainer, Loader} from '../ItemDetail/ItemDetail';

const ItemList = ({datos}) => {
    return (
        <CardsContainer>
        {
            datos.length > 0 ?
            datos.map(item => <Item key={item.id} id={item.id} title={item.text} price={item.cost} image={item.image} description={item.description} />) :
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