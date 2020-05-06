import axios from '../../axios/axios-stask'
import { AUTH_SUCCESS, AUTH_LOGOUT } from './actionTypes'

export function auth(email, password) {
    return async dispatch => {
        const authData = {
            email: email,
            password: password,
        }

        let url = "auth/login"

        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            data: JSON.stringify(authData),
            url: url
        };

        const response = await axios(options)

        const data = response.data;

        localStorage.setItem('token', data.token);

        dispatch(authSuccess(data.token));
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

//TODO: Проверка на устаревший токен. Запрос на http://localhost:8000/api/auth/user
export function autoLogin() {
    return dispatch => {
        const token = localStorage.getItem('token');
        console.log(token)
        if (!token) {
            dispatch(logout())
        } else {
            dispatch(authSuccess(token));
        }
    };
}