
import './App.css';
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer';


function App() {
  const nombre = prompt ("Ingrese su nombre")
  return (
    <>
    <NavBar />
    <ItemListContainer nombre = {nombre} />
    </>
    
  );
}

export default App;
