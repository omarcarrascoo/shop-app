import Producto from '../../assets/img/producto.png'
import './itemCount.css'
import ItemCount from '../buttons/ItemCount'
import {Item} from './Item'

const ItemList = ({products}) =>{
    return(
        <div className="ItemList">
            {products.map((prod, i ) => <Item key={prod.id} product={prod}  />)}
        </div>
        
    )
}
export default ItemList;