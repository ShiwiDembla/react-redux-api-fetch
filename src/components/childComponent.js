
import React from 'react';
import {useSelector} from 'react-redux';

const ChildComponent = () => {
    const age = useSelector(state => state.age);
    return (
        <div>
        <h1>the age is : {age}</h1>
        </div>
    );
    }

    export default ChildComponent;