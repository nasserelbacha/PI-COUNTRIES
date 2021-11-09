import React from "react";
import { useEffect } from "react";
import { getCountriesDetails } from "../../a-s-r/actions";
import {useDispatch, useSelector} from 'react-redux';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import './datalle.css'
export default function Detalle (props){
    const dispatch = useDispatch()
    const {id} = props.match.params 
    const countriesDetail = useSelector((state) =>state.detail)
  
    if(!countriesDetail.length){
        dispatch(getCountriesDetails(id));
    }
    
   let act 
   if (countriesDetail){
    act =  countriesDetail[0]?.activities.map(a => {
                return (<div key = {a.id}> 
                        <h2> Activity </h2>
                        <h4> Name: {a.name} </h4>
                        <h4> Difficulty: {a.difficulty} </h4>
                        <h4> Duration: {a.duration} </h4>
                        <h4> Season: {a.season} </h4> 
                    </div>) 
                })
   } 
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
             <div>{ act.length ?
             act: <h5> THERE IS NOT ACTIVITIES </h5>}    
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