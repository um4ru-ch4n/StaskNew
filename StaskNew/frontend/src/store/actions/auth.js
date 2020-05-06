import axios from '../../axios/axios-stask'
import { AUTH_SUCCESS } from './actionTypes'

export function auth(email, password) {
    return async dispatch => {
        const authData = {
            email,
            password
        }

        let url = "auth/login/"

        const response = await axios.post(url, {
            headers: {
                'Content-Type': 'application/json',
            }
        },authData);
        const data = response.data;

        console.log(data)

        /* localStorage.setItem('token', data.idToken);

        dispatch(authSuccess(data.idToken)); */
    };
}

export function authSuccess(token) {
    return {
        type: AUTH_SUCCESS,
        token
    };
}

export function autoLogin() {
    return dispatch => {
        const token = localStorage.getItem('token');

        dispatch(authSuccess(token));

    };
}