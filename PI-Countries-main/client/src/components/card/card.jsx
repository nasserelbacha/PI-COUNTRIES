import React from "react";
import './card.css'
import { Link } from 'react-router-dom'
export default function Card({ id,name, flag, continent}) {
    return(
        <div className='card'>
            <Link className='link' to = {`/detail/${id}`}>
            <h4 className='name'> {name} </h4>
            <h5 className='name'> {continent} </h5>
            <img src={flag} alt="imagen no encontrada" width='145px' height='145px' className='image' />
            </Link>        
        </div>
    )
}