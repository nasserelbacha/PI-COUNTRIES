import React from "react";
import { useEffect, useState } from "react";
import {useSelector, useDispatch} from 'react-redux'
import { orderAz, orderZa, poblMayor, poblMenor, getCountries, filterName } from "../../a-s-r/actions";

export default function Orden(){
    const dispatch = useDispatch()
    const[currentPage, setCurrentPage] = useState(1)
    const [order, setOrder] = useState('')
    const countries = useSelector((state) => state.countriesApi)
    console.log(countries)
    function handleChange(e) {
        e.preventDefault()
        dispatch(filterName(e.target.value));
        setCurrentPage(1)
        setOrder(`${order} Ordenado, ${e.target.value}`)

        if (e.target.value === 'all') {
            dispatch(getCountries())
            
        }
        else  if (e.target.value === 'ORDER_AZ') {
           
                dispatch(orderAz());
            }
        else if (e.target.value === 'ORDER_ZA') {
                dispatch(orderZa());
            }
        else if (e.target.value === 'MAYOR_POBLACION') {
                dispatch(poblMayor(countries));
            }
        else if (e.target.value === 'MENOR_POBLACION') {
                dispatch(poblMenor(countries));
            }
         
    }
    return(
        <select onChange={(e) => handleChange(e)}>
            <option value= 'ALL'> Order by </option>
            <option value = 'ORDER_AZ'> A-Z </option>
            <option value= 'ORDER_ZA'> Z-A </option>
            <option value ='MAYOR_POBLACION'> Higher population </option>
            <option value ='MENOR_POBLACION'> Smaller population </option>
        </select>
    )
}