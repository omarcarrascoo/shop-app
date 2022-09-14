import './Nav/NavBar.css'
import ItemCount from './buttons/ItemCount'

const ItemListContainer = ({nombre}) =>{
    return(
        <div className="container">
            <h1>Bienvenido {nombre}</h1>
            <ItemCount />
        </div> 
        
        
    ) 
}
export default ItemListContainer
