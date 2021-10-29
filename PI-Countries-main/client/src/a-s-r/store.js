import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from './reducer'
import thunk from "redux-thunk";


const compseH = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;

export const store = createStore(
  rootReducer, compseH (applyMiddleware(thunk))
);
// import {createStore,applyMiddleware} from 'redux';
// import thunk from 'redux-thunk'
// import  rootReducer  from './reducer';
// import { composeWithDevTools } from 'redux-devtools-extension';

// const store = createStore(rootReducer, composeWithDevTools(
//     applyMiddleware(thunk),
//   ));
// export default store