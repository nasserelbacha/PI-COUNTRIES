import React from "react";
import { useEffect, useState } from "react";
import { addActivity, getCountries } from "../../a-s-r/actions";
import { Link } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux'
import { compareAz } from "../../a-s-r/helpers/helpers";
import './post.css'
import validater from "./helpers";


export default function Post(){
    const dispatch = useDispatch();
    const paises = useSelector(state => state.countries.sort(compareAz))

  if(!paises.length){
      dispatch(getCountries())
  }
    const [error, setError] = useState('')

    const [activities, setActivities] = useState({
        name: '',
        season: '',
        duration: '',
        difficulty: '',
        idCountry:[],
    })
    
    const handleSubmit = e => {
        e.preventDefault();
        dispatch(addActivity(activities))
        console.log(activities)
        alert('Activity Created')
        setActivities({
            name : '',
            season: '',
            duration: '',
            difficulty: '',
            idCountry:[],
        })
 
    }
function handleSelect(e) {
    setActivities({...activities, idCountry:[...activities.idCountry,e.target.value]})
}

    const handleChange = e => {
        setActivities({
            ...activities,
            [e.target.name]: e.target.value
        })
        
    }
    
    useEffect(() => {
        var validate = validater(activities)
        setError(validate)
    }, [activities]) 
 
    
    const deleteId = id =>{
    
        let borrar  = activities.idCountry.filter(e => e !== id)
        console.log(borrar)
        setActivities({
            ...activities,
            idCountry: borrar  
        })
        
    }
    
        return(
        <div className="post">
            <h2> Create your Activity! </h2>
            <form className="container-post" onSubmit ={handleSubmit}>
                <label htmlFor="countries">
                    <select name="countries" id="countries" onChange={handleSelect}>
                        <option value="" > Select </option>
                        {paises.map(e => ( <option value={e.id}> {e.name} {e.id} </option>) ) }
                    </select>
                </label>
                <label htmlFor="name"  onChange={handleChange}>
                    <input type="text" placeholder="name" name="name" className="input" value={activities.name}  />
                </label>
                <label htmlFor="season">
                    <select type="text" name="season"  onChange={handleChange}>
                        <option value="" > Season </option>
                        { ['Winter', 'Spring', 'Autumn', 'Summer' ].map(e => ( <option value={e}>  {e} </option> )) }
                    </select> 
                </label>
                <label htmlFor="difficulty">
                    <select type="text" name="difficulty" onChange={handleChange}>
                        <option value=""  > Difficulty </option>
                        { [1, 2, 3, 4, 5 ].map(e => ( <option value={e}> {e} </option> )) }
                    </select> 
                </label>
                <label htmlFor="duration" onChange={handleChange}>
                    <input type="number" placeholder="duration in days.." name="duration" className="input"  value={activities.duration }   /> 
                </label>
               <div>
               </div>
                    <div>
                        <span className={error} >{error}</span>  
                    </div>
                  
                {activities.idCountry.length > 0 ?    
                        <ul className="pais-seleccionado" onChange={handleSelect}>  
                             {activities.idCountry.map(e => (<li key={e}> {e} <button className="X" onClick={()=> deleteId(e)} > X </button> </li> ) )} 
                        </ul> : null }
               <div>
                    <button type="submit" className="btn-submit">Add New Activity</button>
                <Link to='/home'>
                    <button className='btn-atras'>Back</button> 
                </Link>
                </div>
            </form>
        </div>
    )
}
