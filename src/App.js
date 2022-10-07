
import './App.css';
import NavBar from './components/Nav/NavBar'
import Rutas from './routes/Routes';


import {
  BrowserRouter as Router,
} from "react-router-dom";
function App() {
  const nombre = "a Mala Vibra"
  return (
    <>
    <Router>
        <NavBar />
        <Rutas/>
    </Router>
    
    </>
    
  );
}

export default App;
