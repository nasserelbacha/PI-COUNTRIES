import React from "react"
import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { filterActivity} from "../../a-s-r/actions";
import './activity.css'
export default function Activity (){
    const activity = useSelector(state => state.actividad)
    const dispatch = useDispatch()
    function handleChange(e) { 
        dispatch(filterActivity(e.target.value))
        
    }
    return(
        <select className="act" name="" id="" onChange={(e) => handleChange(e)} >
            <option value="todos" > Activities</option>
            { activity?.length && activity.map((a, index)=>(
                        <option key={index} value={a.name}>{a.name}</option>
                    ))
                    } 
                     
        </select>
    )
}