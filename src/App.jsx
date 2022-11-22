import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer';

const App = () => {
  return(
    <>
      <Navbar />
      <ItemListContainer mensaje="Bienvenido/a!" />
    </>
  )
}

export default App;