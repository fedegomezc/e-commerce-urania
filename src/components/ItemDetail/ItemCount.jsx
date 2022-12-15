import { useState } from "react";
import styled from "styled-components";

const ItemCount = ({stock = 0, initial = 1, onAdd}) => {
    const [count, setCount] = useState(initial)

    return (
        <CountContainer>
        <ButtonCount onClick={() => setCount(count - 1)} disabled={count === initial || stock === 0}>-</ButtonCount>
        <p>{count}</p>
        <ButtonCount onClick={() => setCount(count + 1)} disabled={count === stock || stock === 0}>+</ButtonCount>
        </CountContainer>
    )

}

export default ItemCount;

const CountContainer = styled.div`
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
`

const ButtonCount = styled.button`
    margin: 10px;
    padding: 10px;
    border-radius: 15px;
    color: #eecbe3;
    border: 2px solid #9d43d9;
    background-color: #b784da;

    :hover {
    background-color: #9d43d9;
    }

    :active {
    transform: scale(0.9);
    }
`