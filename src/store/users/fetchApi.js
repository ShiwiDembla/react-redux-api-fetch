import axios from "axios";
import { fetchUsersFailure, fetchUsersRequest, fetchUsersSuccess } from "./userAction";

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

export { fetchUsers };