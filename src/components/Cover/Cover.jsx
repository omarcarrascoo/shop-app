
import './cover.css'
import { Link } from "react-router-dom"
import bg from '../../assets/img/bg.jpg' 
const Cover = () =>{
    return(
        <>
        <div className="bg">
                <img src={bg} alt="Imagen de fondo" />
        </div>
        <section className="cover">
            <div className="cover__container">
                <h1>Bienvenido a la mejor tienda</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur, repudiandae.</p>
                <Link to="/productos"><button className="btn">Ver Porductos</button></Link>
            </div>
        </section>
        </>
        
    )   
}

export default Cover;