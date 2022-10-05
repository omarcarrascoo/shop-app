
import { Link } from "react-router-dom"
import ItemCount from "../buttons/ItemCount"


export const Item = ({product}) => {
    console.log(product)
    return(
        <div className="productCard">
            <div className="cardContainer">
                <div className="cardImg">
                    <img src={product.image} alt="Imagen del producto"/>
                </div>
                <div className="cardName">
                    <h3>{product.title}</h3>
                    <p>{product.description}</p>
                </div>
                <div className="btns__container">
                    <div className="card__addCart">
                            <button>Agregar al carrito</button>
                    </div>
                    <div className="card__addCart">
                            <button><Link to="/item">Ver Mas</Link></button>
                    </div>
                </div>
            </div>
        </div>
    )
        
}