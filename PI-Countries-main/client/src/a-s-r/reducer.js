import { compareAz, compareZa, MayPoblacion, MenPoblacion } from "./helpers/helpers"

const initialState = {
 countries : [],
 countriesApi: [],
 loading: false,
 detail: []
}
const rootReducer = (state= initialState, {type, payload}) => {
    console.log(payload)
    switch(type) {
        case 'GET_COUNTRIES':
            return{
                ...state,
                countries: payload,
                countriesApi: payload
            }
        case 'GET_COUNTRIES_NAME':
            return{
                ...state,
                countries: payload
            }
            case 'ORDER_AZ':
                return{
                ...state,
                countriesApi: state.countriesApi.sort(compareAz), 
                loading: false
                  
            };
            case 'ORDER_ZA':
                return{
                ...state, 
                countriesApi: state.countriesApi.sort(compareZa), 
                loading: false   
            };
            case 'MAYOR_POBLACION':
                return{
                    ...state, 
                    countriesApi: state.countriesApi.sort(MayPoblacion), 
                    loading: false     
            };
            case 'MENOR_POBLACION':
                return{
                    ...state, 
                    countriesApi: state.countriesApi.sort(MenPoblacion), 
                    loading: false    
            };
           
            case 'LOADING':
                return{
                    ...state,
                    loading: payload
                }
            case 'GET_COUNTRIES_DETAIL':
                return{
                    ...state,
                    detail: payload
                }    
            default:
                return state;
    }
}
export default rootReducer;