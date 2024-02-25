import { BUY_CAKE } from "./cakeTypes"

const initialCakeState  = {
    cakes : 10
}

const cakeReducer = (state = initialCakeState, action) => {
    switch(action.type){
        case BUY_CAKE: 
        if (state.cakes === 0) {
            console.log("No more cakes left!");
            return state; // Return the current state without modifying anything
        }
        else{
            return {
                ...state,
                cakes: state.cakes - 1
            }
        }
        default: return state
    }
}

export default cakeReducer;