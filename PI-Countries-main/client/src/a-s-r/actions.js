import axios from 'axios';

export function getCountries(){
    return async function(dispatch){
        try{
        var r = await axios('http://localhost:3001/countries');
        console.log(r.data)
        return dispatch({type:'GET_COUNTRIES', payload: r.data})
        }
        catch(err){
            console.log(err)
        }
    }
}