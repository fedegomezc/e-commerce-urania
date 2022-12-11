import { useState } from "react";

const ItemCount = ({stock = 0, initial = 1, onAdd}) => {
    const [count, setCount] = useState(initial)

    return (
        <>
        <button onClick={() => setCount(count - 1)} disabled={count === initial || stock === 0}>-</button>
        <p>{count}</p>
        <button onClick={() => setCount(count + 1)} disabled={count === stock || stock === 0}>+</button>
        </>
    )

}

export default ItemCount;