import axios from 'axios';

export function getCountries(){
    return async function(dispatch){
        try{
        const  r = await axios('http://localhost:3001/countries');
        // //console.log(r.data)
        return dispatch({type:'GET_COUNTRIES', payload: r.data})
        }
        catch(err){
            //console.log(err)
        }
    }
}
export function getCountriesDetails(id){
    return async function (dispatch){
        try{
            const r = await axios (`http://localhost:3001/countries/${id}`) 
           
            return dispatch({type: 'GET_COUNTRIES_DETAIL', payload: r.data})
        }
        catch (err){
            //console.log('mal id')
        }
    }
}
export function getCountriesName (name){
    return async function (dispatch){
        try{
            const r = await axios (`http://localhost:3001/countries?name=${name}`)
            return dispatch({type: 'GET_COUNTRIES_NAME', payload: r.data})
        }
        catch(err){
            //console.log('no existe el nombre')
        }
    }
}
export function addActivity (activity){
    return async function (dispatch){
        //console.log("entrooooooooooooooooo", activity)
        try{
            const re = await axios.post('http://localhost:3001/activity', activity)
            return dispatch({type:'ADD_ACTIVITY', payload: re.data})
        }
        catch(err){
            //console.log(err)
            //console.log("entrooooooooooooooooo catch")
        }
    }
}
export function getActivity (activity){
    return async function (dispatch){
        try{
            const r = await axios('http://localhost:3001/activity')
            r.data= r.data.filter(data => data.Activity.filter(a => a.name === activity).length)
            return dispatch({type:'GET_ACTIVITY', payload:r.data})
        }
        catch(err){
            //console.log(err)
        }
    }
}

export function getContinents (payload){
    return async function(dispatch){
        try{
         return dispatch({ type:'GET_CONTINENTS', payload})
        }
        catch(err){
        //console.log(err)
        }
    }
}
export const orderAz = () => { 
    return  function (dispatch){
        dispatch({type:'LOADING', payload: true})
        return dispatch({type:'ORDER_AZ'})
 }
}
 
   export const orderZa = () => {
    return  function (dispatch){
            dispatch({type:'LOADING', payload: true})
            return dispatch({type: 'ORDER_ZA'})
        }
 }

export const poblMayor = () => {
 return  function (dispatch){
    dispatch({type:'LOADING', payload: true})
    return dispatch({type: 'MAYOR_POBLACION'})
}
}

export const poblMenor = () =>{
 return  function (dispatch){
    dispatch({type:'LOADING', payload: true})
    return dispatch({type: 'MENOR_POBLACION'})
}

}

export const filterName = (name) => () => {
    return ({
        type: 'FILTER_NAME',
        payload: name,
        }

    )
}