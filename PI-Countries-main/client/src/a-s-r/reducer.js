import { compareAz, compareZa, MayPoblacion, MenPoblacion } from "./helpers/helpers"

const initialState = {
 countries :[],
 countriesApi:[],
 loading: false,
 detail:[],
 continent:[],
 actividad: []
}
const rootReducer = (state= initialState, {type, payload}) => {
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
                countriesApi: payload
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

            case 'GET_CONTINENTS':
                const allcountries = state.countriesApi
                console.log("GET_CONTINENTS - allcountries****************: " , allcountries)  
                const filtro = payload === 'all' ? 
                allcountries:
                allcountries.filter(c => c.continent === payload)
                return{
                        ...state,
                        countriesApi: filtro
                }
             case 'ADD_ACTIVITY':
                 return{
                     ...state, 
                     actividad: payload
                    }   
            case 'GET_ACTIVITY':
                 return{
                         ...state,
                        actividad: payload
                    }  

            case 'FILTER_ACTIVITY':
                const activitiesbycountries = state.actividad
                console.log("FILTER_ACTIVITY - activitiesbycountries****************: " , activitiesbycountries)
                
                const filt =  activitiesbycountries.filter(a=> a.name === payload)[0].countries.map(e => e)
                console.log("FILT_____:", filt)
            return{
                    ...state,
                    countriesApi: filt
                }

                default:
                    return state;
                }
            }
export default rootReducer;