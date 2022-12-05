import { useEffect, useState } from "react";
import styled from "styled-components";
import { customFetch } from "../utils/customFecth";
import { data } from "../utils/data";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
    const [dato, setDatos] = useState({});

    useEffect (() => {
        customFetch(2000, data[5])
            .then (result => setDatos(result))
            .catch (err => console.log(err))
    }, []);

    return (
        <ItemDetail item={dato}/>
    );
}

export default ItemDetailContainer;