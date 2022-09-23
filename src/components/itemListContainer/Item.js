
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
                <ItemCount  />
            </div>
        </div>
    )
        
}