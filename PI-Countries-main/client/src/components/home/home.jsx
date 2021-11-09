import Nav from '../nav/nav'
import Card from '../card/card'
import { useEffect, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import './home.css'
import { getActivity, getCountries, filterActivity } from '../../a-s-r/actions';
import Paginado from '../Paginado/Paginado'

export const Home = () => {
    const dispatch = useDispatch()
    const countries = useSelector((state) => state.countriesApi)
    // console.log(countries)
    const changeLoading = useSelector(state => state.loading)
    const [currentPage, setCurrentPage] = useState(1);
    const counPerPage = 9
    const indexOfLastCard = currentPage * counPerPage;
    const indexOfFirstCard= indexOfLastCard - counPerPage;
    const currentCountries = countries.slice(indexOfFirstCard, indexOfLastCard);
    const paginate = (pageNumber) => setCurrentPage(pageNumber )
    
    useEffect (() => {
        dispatch(getCountries())
        dispatch(getActivity())
          
      
    }, [])


    return(
        
        <div className="home">
             <Paginado 
        counPerPage = {counPerPage}
        paginate = {paginate}
        />
        <div className="container">
        {
         currentCountries?.map (e => {
             return(
                <Card id={e.id} name={e.name} flag ={e.flag} continent ={e.continent} poblation = {e.poblation}>
                </Card>
         )})
         
        }
         </div>
     
        </div>
        
    )
        
    
}

export default Home