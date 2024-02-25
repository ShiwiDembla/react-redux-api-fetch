
const initialStage = {
    age: 10,
}




const reducer = (state = initialStage, action) => {
    if(action.type === 'AGE_UP'){
        return {
            ...state,
            age: state.age + action.payload,
        }
    }
    if(action.type === 'AGE_DOWN'){
        return {
            ...state,
            age: state.age - action.payload,
        }
    }
    return state;

}


export default reducer;