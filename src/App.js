
import './App.css';
import NavBar from './components/Nav/NavBar'
import ItemListContainer from './components/ItemListContainer';



function App() {
  const nombre = "a Mala Vibra"
  return (
    <>
    <NavBar />
    <ItemListContainer nombre = {nombre} />

    </>
    
  );
}

export default App;
