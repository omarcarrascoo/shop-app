import { useEffect } from "react"
import { useState } from "react"
import './item.css'
import ItemCount from "../../buttons/ItemCount"


export const ItemDetailCotainer = () =>{
    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState (true)

    useEffect(() =>{
        const getItem = async () =>{
            try{
                const respuesta = await fetch ('https://fakestoreapi.com/products/1');
                const data = await respuesta.json();
                setProduct(data)
            } catch(error) {
                console.error(error);
            }
            finally{
                setLoading(false)
            }
        };
        getItem(product);
    })
    console.log(product)
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