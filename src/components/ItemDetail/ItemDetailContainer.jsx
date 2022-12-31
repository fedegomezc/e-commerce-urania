import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { fetchOneFromFirestore } from "../../utils/fetchFirestore";

const ItemDetailContainer = () => {
    const [dato, setDato] = useState({});
    const { idItem } = useParams();

    useEffect(() => {
        fetchOneFromFirestore(idItem)
            .then(result => setDato(result))
            .catch(err => console.log(err))
    }, []);

    return (
        <ItemDetail item={dato}/>
    );
}

export default ItemDetailContainer;