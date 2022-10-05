
import ItemCount from "../../buttons/ItemCount"

export const ItemDetail = ({product}) =>{
    return(
        <div className="item">
        <div className="item__container">
            <div className="item__img">
                <img src={product.image} alt="imagen del producto" />
            </div>
            <div className="item__data">
                <h1>{product.title}</h1>
                <p className="price">{product.price}</p>
                <p>{product.description}</p>
                <ItemCount />
            </div>
        </div>
    </div>
    )
}