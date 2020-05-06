import axios from '../../axios/axios-stask'
import { AUTH_SUCCESS, AUTH_LOGOUT } from './actionTypes'

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
        dispatch(autoLogout(data.expiresIn));
    };
}

export function logout() {
    localStorage.removeItem('token');
    return {
        type: AUTH_LOGOUT
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
        if (!token) {
            dispatch(logout())
        } else {
            dispatch(authSuccess(token));
        }
    };
}