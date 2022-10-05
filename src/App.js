
import './App.css';
import NavBar from './components/Nav/NavBar'
import ItemListContainer from './components/itemListContainer/ItemListContainer';
import { ItemDetailCotainer } from './components/itemListContainer/item/ItemDetailContainer';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";
import CartProvider from './context/CartCotext';
function App() {
  const nombre = "a Mala Vibra"
  return (
    <>
    <Router>
      <CartProvider>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer/>} />
          <Route path='/item' element={<ItemDetailCotainer/>} />
        </Routes>
      </CartProvider>
    </Router>
    
    </>
    
  );
}

export default App;
