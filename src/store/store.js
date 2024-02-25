import {createStore, combineReducers,applyMiddleware} from 'redux';
import {thunk} from 'redux-thunk';
// import redux from 'redux';
import cakeReducer from './cake/cakeReducer';
import { userReducer } from './users/userReducer';

const rootReducer = combineReducers({
    cake: cakeReducer,
    user: userReducer

})

// export const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() );

export const store = createStore(rootReducer, applyMiddleware(thunk));
