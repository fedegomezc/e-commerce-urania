import React from 'react'
import { useContext } from 'react'
import { CartContext } from './CartContext'

const Cart = () => {
  const ctx = useContext(CartContext);

  return (
    <>
      <h1>Your Cart</h1>
      <ul>
        {
          ctx.length === 0 
          ? <p>El carrito está vacío</p>
          : ctx.map(item => <li key={item.id}>{item.name}</li>)
        }
      </ul>
    </>
  )
}

export default Cart