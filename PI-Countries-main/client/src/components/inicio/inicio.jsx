import React from 'react';
import { Link } from 'react-router-dom';
import './inicio.css'
const Inicio = () => {
    
    return (
            <div className="inicio">
                <Link to='/home' >
                    <button className="boton"> Home
                    </button>
                </Link>
            </div>
     
    )
}
export default Inicio;