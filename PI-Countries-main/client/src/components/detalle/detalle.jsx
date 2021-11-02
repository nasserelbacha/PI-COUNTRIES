import React from "react";
import { useEffect } from "react";
import { getCountriesDetails } from "../../a-s-r/actions";
import {useDispatch, useSelector} from 'react-redux';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import './datalle.css'
export default function Detalle (props){
    const {id} = props.match.params 
    console.log(id)
    const countriesDetail = useSelector((state) =>state.detail)
    console.log(countriesDetail)
    const dispatch= useDispatch()
    useEffect(() => {
	    dispatch(getCountriesDetails(id));
	}, [dispatch], id);
    return(
        <div >
        {countriesDetail.map(e => (
         <div className="detail">
         <h2  className="card-title"> Name: {e.name}</h2>
         <div className='detail-img'>
              <img src={e.flag} className='imagen'  alt="" />
         </div>
         <div className='datos'>
             <div className='container'>
                 <h4> Continent: {e.continent}</h4>
             </div>
             <div className='container'>
                 <h4> Codigo: {e.id}</h4>
             </div>
             <div className='container'>
                 <h4> Area: {e.area} km </h4>
             </div>
             <div className='container'>
                 <h4> Poblation:  {e.poblation}</h4>
             </div>
             </div>
             <div className='btn'>
     <Link to='/home'>
         <button className='btn-back'>Back</button> 
     </Link>
     
 </div>
     </div>
         ))}

 </div>
    )
}