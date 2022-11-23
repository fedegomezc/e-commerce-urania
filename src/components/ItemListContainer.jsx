import styled from "styled-components";

const ItemListContainer = (props) => {
    return (
        <WelcomeContainer>{props.mensaje}</WelcomeContainer>
    )
}

export default ItemListContainer;

const WelcomeContainer = styled.div`
    display: block;
    margin: auto;
    width: 50%;
    padding: 50px;
    text-align: center;
    font-family: 'Roboto', sans-serif;
    font-size: 25px;
    color: #550ee7
`