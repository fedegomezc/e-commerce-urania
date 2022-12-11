import { useEffect, useState } from "react";
import { customFetch } from "../../utils/customFecth";
import { data } from "../../utils/data";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
    const [dato, setDatos] = useState({});
    const { id } = useParams();

    useEffect (() => {
        customFetch(2000, data.find(item => item.id == id))
            .then (result => setDatos(result))
            .catch (err => console.log(err))
    }, []);

    return (
        <ItemDetail item={dato}/>
    );
}

export default ItemDetailContainer;