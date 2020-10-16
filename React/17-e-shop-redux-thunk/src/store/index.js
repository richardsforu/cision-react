import {createStore,applyMiddleware,compose} from 'redux'
import rootReducer from '../reducers'
import thunk from 'redux-thunk'
//import {items} from './actions';

const initialState ={ 
  

}

const composeEnhancers=
typeof window ==='object' &&
window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE_ ?
window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE_({

}):compose

const enhancer=composeEnhancers(applyMiddleware(thunk));

const store=createStore(rootReducer,initialState,enhancer)
export default store