import { useEffect, useState } from "react";
import styled from "styled-components";
import ItemList from "./ItemList";
import { data } from "../utils/data";
import { customFetch } from "../utils/customFecth";

const ItemListContainer = (props) => {
    const [datos, setDatos] = useState([]);

    // DB simulation 
    useEffect (() => {
        customFetch(2000, data)
            .then (response => setDatos(response))
            .catch (err => console.log(err))
    }, [])

    return (
        <>
            <WelcomeContainer>{props.mensaje}</WelcomeContainer>
            <ItemList datos = {datos} />
        </>
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