import React from "react";
import headerImage from '../../Assets/headerImage.png'
import './Header.css'
const Header = () => {
return (
  
    <section className="header">
    <div className="btnCont">
    
    <h2 className="headerTitulo">Obtene Hasta 50% De Descuento <br/>En Auriculares Seleccionados</h2>
    <button className="headerBtn">Comprar</button>
    </div>
    <img src={headerImage} alt="imagenMujerAuriculares" className="img"/>
    
    </section>
   
)
}

export {Header}