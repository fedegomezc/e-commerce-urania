import React from 'react'
import { useContext } from 'react'
import { CartContext } from './CartContext'
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cartList, deleteItem, removeList, total } = useContext(CartContext);

  return (
    <>
      <h1>Carrito</h1>
      <ul>
        {
          cartList.length === 0 
          ? <div>
              <p>El carrito está vacío</p>
            </div>
          : <CartContainer>
              <Top>
                <Link to='/'><TopButton>SEGUIR COMPRANDO</TopButton></Link>
                <TopButton onClick={() => removeList()}>ELIMINAR TODO</TopButton>
              </Top>
              <Products>
                {
                  cartList.map(item => 
                    (
                      <Product key={item.id}>
                        <div>
                        | <img src={item.image} alt={item.description} />
                        </div>
                        <div>
                          <h3>{item.text}</h3>
                          <p>Cantidad: {item.quantityToAdd}</p>
                          <p>Precio: {item.price}</p>
                          <p>Subtotal: {item.quantityToAdd * item.price}</p>
                          <button onClick={() => deleteItem(item.id)}>Eliminar</button>
                        </div> 
                      </Product>
                    )
                  )
                }
              </Products>
              <Total>
                <p>Total: {total}</p>
                <CheckoutButton>Finalizar compra</CheckoutButton>
              </Total>
              
            </CartContainer>
        }
      </ul>
    </>
  )
}

export default Cart

// Styled components

const CartContainer = styled.section`

`

const Top = styled.div`
  

`
const TopButton = styled.button`
  

`
const Products = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 800px;
  padding: 20px;
`
const Product = styled.div`
  background-color: #fff;
  border: 1px solid #ddd;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  padding: 20px;
  text-align: center;
  width: 300px;

  h3 {
    margin: 0 0 10px;
  }

  img {
    display: flex;
    margin: 0 auto;
    max-width: 100%;
  }

  p {
    margin: 0;
  }

  button {
    background-color: #f44336;
    border: 0;
    color: #fff;
    cursor: pointer;
    display: block;
    font-size: 16px;
    margin: 20px auto 0;
    padding: 10px;
    width: 150px;
  }
`
const Total = styled.div`
  /* estilos para la sección final */
`;

const CheckoutButton = styled.button`
  /* estilos para el botón de finalizar compra */
`;