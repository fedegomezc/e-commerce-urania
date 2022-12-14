import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemList/ItemListContainer';
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from './components/Cart/Cart';
import CartContextProvider from './components/Cart/CartContext';

const App = () => {
  return(
    <CartContextProvider>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<ItemListContainer />} />
        <Route path='/category/:idCategory' element={<ItemListContainer />} />
        <Route path='/item/:idItem' element={<ItemDetailContainer />} />
        <Route path='/cart' element={<Cart />}/>
      </Routes>
    </BrowserRouter>
    </CartContextProvider>
  )
}

export default App;