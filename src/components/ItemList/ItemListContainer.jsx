import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { fetchFromFirestore } from "../../utils/fetchFirestore";

const ItemListContainer = () => {
    const [datos, setDatos] = useState([]);
    const { idCategory } = useParams();
 
    useEffect (() => {
        
        fetchFromFirestore(idCategory)
            .then(result => setDatos(result))
            .catch(err => console.log(err))
                
    }, [idCategory]);

    useEffect(() => {
        return (() => {
            setDatos([]);
        })
    }, []);
 
    return (
        <>
            <ItemList datos = {datos} />
        </>
    )
}

export default ItemListContainer;