import axios from '../../axios/axios-stask'
import { AUTH_SUCCESS } from './actionTypes'

export function auth(email, password, isLogin) {
    return async dispatch => {
        const authData = {
            email,
            password,
            returnSecureToken: true
        }

        let url = "auth/register/";

        if (isLogin) {
            url = "auth/login";
        }

        const response = await axios.post(url, authData);
        const data = response.data;

        localStorage.setItem('token', data.idToken);

        dispatch(authSuccess(data.idToken));
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