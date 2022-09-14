import './itemCount.css';
import Producto from '../../assets/img/producto.png'
import { BsPlusLg} from "react-icons/bs";
import { BsDash} from "react-icons/bs";
import React, {useState} from 'react'

const ItemCount = () =>{
    const stock=10;

    const [contador, setContador] = useState(1)
    

    const addQ = () =>{
        setContador(contador + 1);
        console.log(contador)
        if(contador>0){
            const btn = document.getElementById("less")
            btn.classList.remove("hide")
        }
    }

    const quitQ = () =>{
        setContador (contador - 1);
        if(contador==2){
            const btn = document.getElementById("less")
            btn.classList.add("hide")
        }
        
    }

    return(
        <div className="productCard">
            <div className="cardContainer">
                <div className="cardImg">
                    <img src={Producto} alt="Imagen del producto"/>
                </div>
                <div className="cardName">
                    <h3>Nombre del producto</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia, quas.</p>
                </div>
                <div className="cardOptions">
                    <p>Seleccione la cantidad</p>
                    <div className="card__options__container">
                        <button className="btn hide" id="less" onClick={quitQ}><BsDash /></button>
                        <p>{contador}</p>
                        <button onClick={addQ}><BsPlusLg /></button>
                        
                    </div>
                    <div className="card__addCart">
                        <button>Agregar al carrito</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ItemCount;