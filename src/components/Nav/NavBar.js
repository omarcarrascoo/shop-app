
import './NavBar.css'
import Logo from '../../assets/img/logo.png'
import {CartWidget} from '../Cart/CartWidget'
import { Link } from 'react-router-dom'


function NavBar (){
    return(
        <header className="main__header">
            <div className="header__container">
                <div className="header__logo">
                    <img src={Logo} alt="Logo" />
                </div>
                <nav className="main__nav">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/item">About</Link></li>
                        <li><a href="#">Productos</a></li>
                        <li><a href="#">Contactanos</a></li>
                    </ul>
                </nav>
                <CartWidget />
            </div>
        </header>
    )
}

export default NavBar