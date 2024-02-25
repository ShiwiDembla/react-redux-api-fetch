
const redux = require('redux')

//define initial state
const initialState = {
    cakes : 10,
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
const reducer = (state=initialState, action) => {
    switch(action.type){
    case BUY_CAKE : 
    return  {  //copy of the state
        ...state,
        cakes: state.cakes - 1
    }
    case BUY_ICECREAM :
        return {
            ...state,
            icecreams: state.icecreams - 1
        }
    default: return state
    }

}
// create store
const store = redux.createStore(reducer)
// passing reducer to the store
// store(reducer) 

//getState
console.log('Initial state', store.getState())
const unsubscribe = store.subscribe(() => console.log('Updated state', store.getState()))
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

