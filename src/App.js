import logo from './logo.svg';
import './App.css';
import { useState , } from 'react';
import {Provider,  } from 'react-redux'
import {useDispatch,useSelector} from 'react-redux';
import ChildComponent from './components/childComponent';
import BuyCakess from './components/BuyCakes';
import {store} from './store/store';
import Cake_with_hooks from './components/Cake_with_hooks';
import FetchUsers from './components/FetchUsers';


function App() {


  // dispatch action with redux with global state
  // const age = useSelector(state => state.age);

  // const dispatch = useDispatch();
  // const ageUp = () =>{
  //   dispatch({type: 'AGE_UP', payload: 10});
  // }
  // const ageDown = () =>{
  //   dispatch({type: 'AGE_DOWN', payload: 5});
  // }


  // state from redux store



  return (
    <Provider store={store}>
    <div className="App">
      {/* <h2>Age State: {age}</h2>
      <button onClick={ageUp}>Age up</button>
      <button onClick={ageDown}>Age down</button>
      <ChildComponent/> */}
      <BuyCakess/>
      <h4>Cake reducer with hooks</h4>
      <Cake_with_hooks/>
      <h5>API Call</h5>
      <FetchUsers/>
    </div>
    </Provider>
  );
}

export default App;
