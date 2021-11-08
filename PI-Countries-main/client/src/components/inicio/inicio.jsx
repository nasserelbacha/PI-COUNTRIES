import React from 'react';
import { Link } from 'react-router-dom';
import './inicio.css'
const Inicio = () => {
    
    return (
            <div className="inicio">
                <div className="cont">  
                    <Link to='/home' >
                    <button className="boton"> Home
                    </button>
                </Link>
                <h2 className="h2"> Application designed by </h2>
                 <a href="https://www.linkedin.com/in/nasser-el-bacha-3073231b2/" className="a" target="_blank"> Nasser El Bacha </a>
                </div>
            </div>
     
    )
}
export default Inicio;