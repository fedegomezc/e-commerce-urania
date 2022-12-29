import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Item = (props) => {
    return (
        <CardContainer>
            <img src={props.image} alt={props.description} />
            <h3>${props.cost}</h3>
            <h4>{props.text}</h4>
            <BuyButton>Agregar al carrito</BuyButton>
            <InfoLink to={`/item/${props.id}`}>+Info</InfoLink>
        </CardContainer>
    )
}

export default Item;

// Styled components

const InfoLink = styled(Link)`
    text-decoration: none;
    color: #9d43d9;
    position: relative;
    text-align: center;
    display: block;
    margin: auto;
    padding-top: 15px;
`

const CardContainer = styled.div`
    width: 250px;
    height: auto;
    margin: 15px;
    padding: 0.7em;
    border-radius: 7px;
    transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
    background-color: #eecbe3;
    font-family: 'Roboto', sans-serif;

    img {
    width: 100%;
    }

    h3 {
    margin: 0.5em 0em;
    color: #9d43d9;
    font-weight: bold;
    padding-left: 10px;
    }
    h4 {
    font-size: 0.875em;
    margin: 0.5em 0em;
    color: #9d43d9;
    font-weight: normal;
    padding-bottom: 10px;
    padding-left: 10px;
    }
    :hover {
    transform: translateY(-7px);
    box-shadow: 1.25px 1.25px 10px #3f659e;
    }

`
export const BuyButton = styled.button`
    position: relative;
    display: block;
    margin: auto;
    padding: 15px 25px;
    text-align: center;
    font-size: 12px;
    font-family: 'Roboto', sans-serif;
    letter-spacing: 1px;
    text-decoration: none;
    color: #9d43d9;
    background: transparent;
    cursor: pointer;
    transition: ease-out 0.5s;
    border: 2px solid #9d43d9;
    border-radius: 10px;
    box-shadow: inset 0 0 0 0 #9d43d9;

    :hover {
    color: #eecbe3;
    box-shadow: inset 0 -100px 0 0 #bc61f9;
    }

    :active {
    transform: scale(0.9);
    }
`