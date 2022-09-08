import { BsFillCartFill} from "react-icons/bs";
import './NavBar.css'
import Logo from '../assets/img/logo.png'

function NavBar (){
    return(
        <header className="main__header">
            <div className="header__container">
                <div className="header__logo">
                    <img src={Logo} alt="Logo" />
                </div>
                <nav className="main__nav">
                    <ul>
                        <li><a href="#">Inicio</a></li>
                        <li><a href="#">Nosotros</a></li>
                        <li><a href="#">Productos</a></li>
                        <li><a href="#">Contactanos</a></li>
                    </ul>
                </nav>
                <div className="cart">
                    <i><BsFillCartFill /></i>
                </div>
            </div>
        </header>
    )
}

export default NavBar