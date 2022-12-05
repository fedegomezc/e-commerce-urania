import Item from './Item';

const ItemList = (props) => {
    return (
        <>
        {
            props.datos.map(item => <Item key={item.id} text={item.text} image={item.image}/> )
        }
        </>
    )
}

export default ItemList;