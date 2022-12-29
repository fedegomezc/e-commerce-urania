import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
    const [cartList, setCartList] = useState([]);

    const addToCart = (item, quantityToAdd) => {
      let found = cartList.find(product => product.id === item.id);
      if (found === undefined) {
        setCartList([
          ...cartList,
          {
            id: item.id,
            text: item.text,
            price: item.cost,
            image: item.image,
            description: item.description,
            quantityToAdd
          }
        ])
      } else {
        found.quantityToAdd += quantityToAdd;
        setCartList([...cartList])
      }
    }

    const removeList = () => {
      setCartList([])
    }

    const deleteItem = (id) => {
      const newArray = cartList.filter(item => item.id !== id);
      setCartList(newArray);
    }

    const total = cartList.reduce((acc, product) => acc + product.quantityToAdd * product.price, 0);

  return (
        <CartContext.Provider value={{cartList, addToCart, deleteItem, removeList, total}}>
                { children }
        </CartContext.Provider>
  );
}

export default CartContextProvider;