import axios from '../../axios/axios-stask'
import { AUTH_SUCCESS, AUTH_LOGOUT } from './actionTypes'

export function auth(email, password) {
    return async dispatch => {
        const requestData = {
            email: email,
            password: password,
        }

        let url = "auth/login"

        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            data: JSON.stringify(requestData),
            url: url
        };

        const response = await axios(options)
            .catch(error => {
                
            })

        if (response) {
            localStorage.setItem('token', response.data.token);
            dispatch(authSuccess(response.data.token));
        }
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
    return async dispatch => {
        const token = localStorage.getItem('token');

        if (token) {
            const options = {
                method: 'GET',
                headers: {
                    'Authorization': 'Token ' + token,
                },
                url: "http://localhost:8000/api/auth/user"
            };

            try {
                await axios(options)
                dispatch(authSuccess(token));
            } catch (error) {
                dispatch(logout())
            }
        } else {
            dispatch(logout())
        }

    };
}