import React from 'react'
import { useContext } from 'react'
import { CartContext } from './CartContext'

const Cart = () => {
  const { cartList, deleteItem } = useContext(CartContext);

  return (
    <>
      <h1>Carrito</h1>
      <ul>
        {
          cartList.length === 0 
          ? <p>El carrito está vacío</p>
          : cartList.map(item => <li key={item.id}>{item.text} - cantidad: {item.quantityToAdd} - <button onClick={() => deleteItem(item.id)}>Eliminar</button></li>)
        }
      </ul>
    </>
  )
}

export default Cart