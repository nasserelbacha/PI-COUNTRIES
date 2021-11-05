import React from "react";
import {useDispatch} from 'react-redux'
import { getContinents } from "../../a-s-r/actions";
export default function Continent(){
    const dispatch = useDispatch();
    function handleChange(e) {
        dispatch(getContinents(e.target.value))
    }
    return(
        <select onChange={ e => handleChange(e)}>
        <option value='All'>All Continents </option>
                <option value='South America'>South America</option>
                <option value='North America'>North America</option>
                <option value='Europe'>Europe</option>
                <option value='Africa'>Africa</option>
                <option value='Asia'>Asia</option>
                <option value='Oceania'>Oceania</option>
                <option value='Antarctica'>Antarctica</option>
                
        </select>
    )
}