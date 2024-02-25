import React from 'react'
import {  connect } from 'react-redux';
import { buyCake } from '../store/cake/cakeAction';


function BuyCakess
    (props) {
    
    return (
        <div>
            <h1>BuyCakes - numOfCakes {props.cakes}</h1>
            <button onClick={props.buyCake}>Buy Cakes</button>
        </div>
    )
}


//takes redux state and returns an object with the state we want to map to our component
const mapStateToProps = state => {
    return {
        cakes: state.cakes,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        buyCake: () => dispatch(buyCake())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BuyCakess)