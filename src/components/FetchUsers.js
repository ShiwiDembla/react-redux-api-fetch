import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { fetchUsers } from '../store/users/fetchApi'
import axios from "axios";
import { fetchUsersFailure, fetchUsersRequest, fetchUsersSuccess } from "../store/users/userAction";


export default function FetchUsers() {
    const dispatch = useDispatch();
    const { loading, users, error } = useSelector(state => state.user);

   
    const fetchUsers = () => {
        // The fetchUsers function is an action creator that returns an action to fetch users.
        return (dispatch) => {
            dispatch(fetchUsersRequest());
            axios.get('https://jsonplaceholder.typicode.com/users')
                .then(response => {
                    const users = response.data;
                    dispatch(fetchUsersSuccess(users));
                })
                .catch(error => {
                    const errorMsg = error.message;
                    dispatch(fetchUsersFailure(errorMsg));
                });
        };
    };

    return (
        <div>
            <h1>FetchUsers</h1>
            <button onClick={()=>dispatch(fetchUsers())}>Fetch Users</button>
            {loading ? (
                <h2>Loading...</h2>
            ) : error ? (
                <h2>Error: {error}</h2>
            ) : (
                <div>
                    <h2>Users:</h2>
                    <ul>
                        {users.map(user => (
                            <li key={user.id}>{user.name}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}
