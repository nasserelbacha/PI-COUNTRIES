import React from "react";
import { useDispatch } from "react-redux";
import './card.css'
import { Link } from 'react-router-dom'
import { getCountriesDetails } from "../../a-s-r/actions";

export default function Card({ id,name, flag, continent}) {
    const dispatch = useDispatch()
    return(
            <Link className='link' to = {`/detail/${id}`} >
        <div className='card' key={id} onClick={ () => dispatch(getCountriesDetails(id))}>
            <h4 className='name'> {name} </h4>
            <h5 className='name'> {continent} </h5>
            <img src={flag} alt="imagen no encontrada" width='145px' height='145px' className='image' />
        </div>
            </Link>        
    )
}