import React from 'react'
import { useContext } from 'react'
import { CartContext } from './CartContext'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { setDoc, collection, doc, serverTimestamp, updateDoc, increment } from "firebase/firestore";
import { db } from '../../utils/firebaseConfig';




const Cart = () => {
  const { cartList, deleteItem, removeList, total} = useContext(CartContext);

  const createOrder = () => {
    const itemsForDB = cartList.map(item => ({
      id: item.id,
      title: item.text,
      qty: item.quantityToAdd,
      price: item.price
    }));

    cartList.forEach(async (item) => {
      const itemRef = doc(db, "products", item.id);
      await updateDoc(itemRef, {
        stock: increment(-item.quantityToAdd)
      });
    });

    let order = {
      buyer: {
        name: "Leo Messi",
        email: "traemelacopa@messi.com",
        phone: "123456789"
      },
      total: {total},
      items: itemsForDB,
      date: serverTimestamp()
    };

    const createOrderInFirestore = async () => {
      const newOrderRef = doc(collection(db, "orders"))
      await setDoc(newOrderRef, order);
      return newOrderRef
    }

    createOrderInFirestore()
      .then(result =>{
        alert('Orden creada!\nOrder ID: ' + result.id)
        removeList();
      })
      .catch(err => console.log(err));
    
    
  }

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
                          <p>Precio: $ {item.price}</p>
                          <p>Subtotal: $ {item.quantityToAdd * item.price}</p>
                          <button onClick={() => deleteItem(item.id)}>Eliminar</button>
                        </div> 
                      </Product>
                    )
                  )
                }
              </Products>
              <Total>
                <p>Total: $ {total}</p>
                <CheckoutButton onClick={createOrder}>Finalizar compra</CheckoutButton>
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
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  align-items: center;
  `

const Top = styled.div`
  
`
const TopButton = styled.button`
  padding: 10px;

`
const Products = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 800px;
  padding: 20px;
  font-family: 'Roboto', sans-serif;
`
const Product = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  h3 {
    margin: 0 0 10px;
    font-size: 20px;
  }

  img {
    display: flex;
    margin: 0 auto;
    width: 12rem;
    height: auto;
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
  font-family: 'Roboto', sans-serif;
  font-size: 20px;
  position: relative;
  display: block;
  margin: auto;
  text-align: center;
  p {
    padding: 15px;
    font-weight: bold;
  }
`;

const CheckoutButton = styled.button`
  position: relative;
  display: block;
  margin: auto;
  padding: 15px 25px;
  text-align: center;
  font-size: 12px;
  font-family: 'Roboto', sans-serif;
  letter-spacing: 1px;
  text-decoration: none;
  color: #9d43d9;
  background: transparent;
  cursor: pointer;
  transition: ease-out 0.5s;
  border: 2px solid #9d43d9;
  border-radius: 10px;
  box-shadow: inset 0 0 0 0 #9d43d9;

  :hover {
  color: #eecbe3;
  box-shadow: inset 0 -100px 0 0 #bc61f9;
  }

  :active {
  transform: scale(0.9);
  }
  
`;