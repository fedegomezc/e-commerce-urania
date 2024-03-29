import React from 'react'
import { useContext } from 'react'
import { CartContext } from './CartContext'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { setDoc, collection, doc, serverTimestamp, updateDoc, increment } from "firebase/firestore";
import { db } from '../../utils/firebaseConfig';
import Swal from 'sweetalert2';
import {BsCartXFill} from 'react-icons/bs'

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
        phone: "197819862022"
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
        Swal.fire({
          title: 'Orden Creada!',
          text: 'Order ID: ' + result.id,
          confirmButtonText: 'Cerrar',
          confirmButtonColor: '#9d43d9',
      })
        removeList();
      })
      .catch(err => console.log(err));
    
    
  }

  return (
    <>
      <CartTitle>
        <h1>Carrito</h1>
      </CartTitle>
      <ul>
        {
          cartList.length === 0 
          ? <EmptyCart>
              <BsCartXFill /> <br />
              <p>El carrito está vacío</p>
            </EmptyCart>
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
                        <ProductInfo>
                          <h3>{item.text}</h3>
                          <p>Cantidad: {item.quantityToAdd}</p>
                          <p>Precio: $ {item.price}</p>
                          <h4>Subtotal: $ {item.quantityToAdd * item.price}</h4>
                        </ProductInfo> 
                        <button onClick={() => deleteItem(item.id)}>Eliminar</button>
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

const EmptyCart = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px;
  font-size: 30px;

  p {
    font-family: sans-serif;
    font-size: large;
  }
`

const CartTitle = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;

  h1 {
    font-family: 'Roboto', sans-serif;
    color: #9d43d9;

  }
`

const CartContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  `

const Top = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%

`
const TopButton = styled.button`
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

`
const Products = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  width: 80%;
  padding: 20px;
  font-family: 'Roboto', sans-serif;
`
const Product = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  h3 {
    margin: 0 0 10px;
    font-size: 18px;
    color: #9d43d9;
  }

  h4 {
    padding-top: 5px;
    text-align: center;
  }

  img {
    display: flex;
    margin: 0 auto;
    width: 8rem;
    height: auto;
    border-radius: 100px;
  }

  p {
    margin: 0;
    font-size: 15px;
    padding: 3px;
  }

  button {
  min-width: 130px;
  height: 40px;
  color: #f4368b;
  padding: 5px 10px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  display: inline-block;
  outline: none;
  border-radius: 5px;
  border: 2px solid #f4368b;
  background: #fff;

  :hover {
  background: #f4368b;
  color: #fff
  }
  }
`
const ProductInfo = styled.div`
  width: 300px;
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