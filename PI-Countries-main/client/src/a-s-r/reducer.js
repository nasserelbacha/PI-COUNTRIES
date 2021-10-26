const initialState = {
 countries : []
}
const rootReducer = (state= initialState, {type, payload}) => {
    switch(type) {
        case 'GET_COUNTRIES':
            return{
                ...state,
                countries: payload
            }
            default:
                return state;
    }
}
export default rootReducer;