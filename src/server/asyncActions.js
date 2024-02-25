

const thunk = require('redux-thunk').thunk;
const redux = require('redux');
const axios = require('axios');
const applyMiddleware = redux.applyMiddleware;



// Define initial state
const initialState = {
    loading: false,
    data: [],
    error: ''
};

// Define action types
const FETCH_DATA_REQUEST = 'FETCH_DATA_REQUEST';
const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';

// Define action creators
const fetchDataRequest = () => ({
    type: FETCH_DATA_REQUEST
});

const fetchDataSuccess = (data) => ({
    type: FETCH_DATA_SUCCESS,
    payload: data
});

const fetchDataFailure = (error) => ({
    type: FETCH_DATA_FAILURE,
    payload: error
});



// Define reducer
const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_DATA_REQUEST:
            return {
                ...state,
                loading: true
            };
        case FETCH_DATA_SUCCESS:
            return {
                loading: false,
                data: action.payload,
                error: ''
            };
        case FETCH_DATA_FAILURE:
            return {
                loading: false,
                data: [],
                error: action.payload
            };
        default:
            return state;
    }
};
// Create Redux store with middleware
const store = redux.createStore(reducer, applyMiddleware(thunk));

// Define async action creator using Redux Thunk
const fetchData = () => {
    return (dispatch) => {
        dispatch(fetchDataRequest());
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                // Assuming the response data is an array of items
                dispatch(fetchDataSuccess(response.data));
            })
            .catch(error => {
                dispatch(fetchDataFailure(error.message));
            });
    };
};
// Dispatch async action creator to fetch data
store.dispatch(fetchData());

// Subscribe to store updates for logging
store.subscribe(() => {
    console.log(store.getState());
});


// console.log(redux.applyMiddleware);
// console.log(reduxThunk.default);