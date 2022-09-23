
import { useEffect } from 'react'
import ItemList from './ItemList';
import { useState } from "react";


const ItemListContainer = ({nombre}) =>{
   const [products, setProducts] = useState([])
   const[loading, setLoading] = useState(true)

   useEffect(() => {
    const getItem = async () => {
        try {
            const respuesta = await fetch ('https://fakestoreapi.com/products');
            const data = await respuesta.json();
            setProducts(data)
            
        } catch (error) {
            console.error(error)
        }
        finally{
            setLoading(false)
        }
    };
    getItem();

   }, [])

    return(
        <div className="container">
            <h1>Conoce nuestros productos</h1>
            <ItemList products={products} />
        </div> 
        
        
    ) 
}
export default ItemListContainer
