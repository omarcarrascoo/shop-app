
import './App.css';
import NavBar from './components/Nav/NavBar'
import ItemListContainer from './components/itemListContainer/ItemListContainer';
import { ItemDetailCotainer } from './components/itemListContainer/item/ItemDetailContainer';



function App() {
  const nombre = "a Mala Vibra"
  return (
    <>
    <NavBar />
    <ItemListContainer nombre = {nombre} />
    {/* <ItemDetailCotainer /> */}
    </>
    
  );
}

export default App;
