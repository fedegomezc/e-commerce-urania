import { useEffect, useState } from "react";
import styled from "styled-components";
import ItemList from "./ItemList";
import { data } from "../../utils/data";
import { customFetch } from "../../utils/customFecth";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
    const [datos, setDatos] = useState([]);
    const { idCategory } = useParams();
 
    useEffect (() => {
        let task = idCategory ? data.filter(item => item.idCategory === parseInt(idCategory)) : data
        
        customFetch( 2000, task)
        .then (response => setDatos(response))
        .catch (err => console.log(err))            
    }, [idCategory]);

    return (
        <>
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