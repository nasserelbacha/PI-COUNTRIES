import Nav from '../nav/nav';
import Card from '../card/card'
import { useEffect, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import './home.css'
import { getCountries } from '../../a-s-r/actions';
import Paginado from '../Paginado/Paginado'

export const Home = () => {
    const dispatch = useDispatch()
    const countries = useSelector((state) => state.countries)
    const [currentPage, setCurrentPage] = useState(1);
    const counPerPage = 9
    const indexOfLastCard = currentPage * counPerPage;
    const indexOfFirstCard= indexOfLastCard - counPerPage;
    const currentCountries = countries.slice(indexOfFirstCard, indexOfLastCard);
    const paginate = (pageNumber) => setCurrentPage(pageNumber )
    
    useEffect (() => {
        dispatch(getCountries())
    }, dispatch)

    return(
        <div className="container">
        {
         currentCountries?.map (e => {
             return(
                <Card name={e.name} imagen ={e.imagen} continent ={e.continent}></Card>
         )})
         
        }
        <Paginado 
        counPerPage = {counPerPage}
        paginate = {paginate}
        />
        </div>
        
    )
        
    
}

export default Home