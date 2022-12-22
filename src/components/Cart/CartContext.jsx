import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
    const [cartList, setCartList] = useState([]);

    const addToCart = (item, quantityToAdd) => {
      setCartList([
        ...cartList,
         {
          id: item.id,
          text: item.text,
          price: item.cost,
          quantityToAdd
         }
        ]);
    }

    const removeList = () => {	//implementa la funcionalidad para dejar el carrito vacío
    }

    const deleteItem = (id) => {
      const newArray = cartList.filter(item => item.id !== id);
      setCartList(newArray);
    }

  return (
        <CartContext.Provider value={{cartList, addToCart, deleteItem}}>
                { children }
        </CartContext.Provider>
  );
}

export default CartContextProvider;

// {cartList, addToCart, removeList, deleteItem}