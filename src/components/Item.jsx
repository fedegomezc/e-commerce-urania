import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Item = (props) => {
    return (
        <CardContainer>
            <img src={props.image} alt={props.description} />
            <h3>${props.cost}</h3>
            <h4>{props.text}</h4>
            <button>Agregar al carrito</button>
            <Link to={`/item/${props.id}`}>+Info</Link>
        </CardContainer>
    )
}

export default Item;

const CardContainer = styled.div`
    width: 250px;
    height: auto;
    margin: 15px;
    padding: 0.7em;
    border-radius: 7px;
    transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
    background-color: #af96be;
    font-family: 'Roboto', sans-serif;

    img {
    width: 100%;
    }

    h3 {
    margin: 0.5em 0em;
    color: #d3c5d8;
    font-weight: bold;
    }
    h4 {
    font-size: 0.875em;
    margin: 0.5em 0em;
    color: #d3c5d8;
    font-weight: normal;
    }
    :hover {
    transform: translateY(-7px);
    box-shadow: 1.25px 1.25px 10px rgba(191, 167, 147, 1);
    }

    button {
    position: relative;
    display: inline-block;
    margin: 15px;
    padding: 15px 30px;
    text-align: center;
    font-size: 12px;
    letter-spacing: 1px;
    text-decoration: none;
    color: rgb(135, 44, 209);
    background: transparent;
    cursor: pointer;
    transition: ease-out 0.5s;
    border: 2px solid rgb(135, 44, 209);
    border-radius: 10px;
    box-shadow: inset 0 0 0 0 rgb(176, 44, 209);
    }

    button:hover {
    color: #3f213c;
    box-shadow: inset 0 -100px 0 0 rgb(196, 134, 246);
    }

    button:active {
    transform: scale(0.9);
    }
`