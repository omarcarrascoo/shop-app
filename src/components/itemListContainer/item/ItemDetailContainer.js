import { useEffect } from "react"
import { useState } from "react"
import './item.css'
import ItemCount from "../../buttons/ItemCount"
import { ItemDetail } from "./ItemDetail"


export const ItemDetailCotainer = () =>{
    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState (true)

    useEffect(() =>{
        const getItem = async () =>{
            try{
                const respuesta = await fetch ('https://fakestoreapi.com/products/2');
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
    return(
       <ItemDetail product={product}></ItemDetail>
    )
}