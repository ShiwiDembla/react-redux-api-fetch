import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { buyCake } from '../store/cake/cakeAction';

export default function Cake_with_hooks() {
    const cakes = useSelector(state => state.cakes);
    const dispatch = useDispatch();
  return (
    
    <div>
            <h1>BuyCakes - numOfCakes {cakes}</h1>
            <button onClick={()=>dispatch(buyCake())}>Buy Cakes</button>
        </div>
  )
}
