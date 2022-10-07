import {
    Route,
    Routes
  } from "react-router-dom";


import { ItemDetailCotainer } from '../components/itemListContainer/item/ItemDetailContainer';
import ItemListContainer from '../components/itemListContainer/ItemListContainer';
import Cover from '../components/Cover/Cover.jsx'




const Rutas = ()=>{
    return(
        <Routes>
          <Route path='/' element={<Cover />} />
          <Route path='/item' element={<ItemDetailCotainer/>} />
          <Route path="/productos" element={<ItemListContainer/>}/>
        </Routes>
    )
}

export default Rutas;