const { type } = require('@testing-library/user-event/dist/type')
const redux = require('redux')
const reduxLogger = require('redux-logger')
// const middleware 

//define initial state
// const initialState = {
//     cakes : 10,
//     icecreams : 20
// }

const initialCakeState = {
    cakes : 10
}

const initialIcecreamState = {
    icecreams : 20
}



//action creator
const BUY_CAKE = 'BUY_CAKE'
const BUY_ICECREAM = 'BUY_ICECREAM'

const buyCake = () => {
    return {
        type: BUY_CAKE,
        info:"First redux action"
    }
}

const buyIcecream = () =>{
    return{
        type: BUY_ICECREAM,
        info : "Second redux action"
    }
}

//define reducer 
const CakeReducer = (state=initialCakeState, action) => {
    switch(action.type){
    case BUY_CAKE : 
    return  {  //copy of the state
        ...state,
        cakes: state.cakes - 1
    }
    
    default: return state
    }

}
const IcecreamReducer = (state=initialIcecreamState, action) => {
    switch(action.type){
        case BUY_ICECREAM :
            return {
                ...state,
                icecreams: state.icecreams - 1
            }
    
    default: return state
    }

}

//combine reducers 
const combinedReducer = redux.combineReducers({
    cake: CakeReducer,
    icecream: IcecreamReducer
})

const logger = reduxLogger.createLogger()
const applyMiddleware = redux.applyMiddleware

// create store
const store = redux.createStore(combinedReducer, applyMiddleware(logger))
// passing reducer to the store
// store(reducer) 

//getState
console.log('Initial state', store.getState())
const unsubscribe = store.subscribe(() => {})
//make changes to the state using dispatch
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIcecream())
store.dispatch(buyIcecream())
store.dispatch(buyIcecream())
store.dispatch(buyIcecream())

unsubscribe(); //unsubscribing the state