import axios from '../../axios/axios-stask'
import { AUTH_SUCCESS, AUTH_LOGOUT, AUTH_ERROR, REGISTRATION_ERROR } from './actionTypes'
import { clearUserProjects } from './project'

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

        await axios(options)
            .then(response => {
                localStorage.setItem('token', response.data.token);
                dispatch(authSuccess(response.data.user, response.data.token));
            })
            .catch(error => {
                dispatch(authError());
            })
    };
}

export function deleteToken() {
    return dispatch => {
        const token = localStorage.getItem('token')
        const options = {
            method: 'POST',
            headers: {
                'Authorization': 'Token ' + token,
            },
            url: "auth/logout"
        };

        axios(options)
            .then(() => {
                dispatch(logout())
            })
    };
}

export function allLogout() {
    return {
        type: AUTH_LOGOUT
    };
}

export function logout() {
    return async dispatch => {
        localStorage.removeItem('token')
        dispatch(clearUserProjects())
        dispatch(allLogout())
    }
}

export function authSuccess(user, token) {
    return {
        type: AUTH_SUCCESS,
        user,
        token
    };
}

export function authError() {
    return {
        type: AUTH_ERROR,
        errorMessage: "Неправильный логин или пароль"
    };
}

export function autoLogin() {
    return dispatch => {
        const token = localStorage.getItem('token');
        if (token) {
            const options = {
                method: 'GET',
                headers: {
                    'Authorization': 'Token ' + token,
                },
                url: "auth/user"
            };

            axios(options)
                .then((response) => {
                    dispatch(authSuccess(response.data, token))
                })
                .catch(error => {
                    dispatch(logout())
                })

        } else {
            dispatch(logout())
        }

    };
}

export function registration(formControls) {
    return async dispatch => {
        let url = "auth/register"

        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            data: JSON.stringify(formControls),
            url: url
        };
        await axios(options)
            .catch(error => {
                dispatch(registrationError());
            })
    };
}

export function registrationError() {
    return {
        type: REGISTRATION_ERROR,
        errorMessage: "Ошибка регистрации"
    };
}