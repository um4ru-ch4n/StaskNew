import axios from '../../axios/axios-stask'
import { AUTH_SUCCESS } from './actionTypes'

export function auth(email, password) {
    return async dispatch => {
        const authData = {
            email: email,
            password: password,
        }

        let url = "auth/login/"

        const options = {
            method: 'POST',
            config: {headers: { 'Content-Type': 'application/json'},},
            data: authData,
            url: url
        }; 

        /* const response = await axios.post(url,authData, {
            headers: {
                'Content-Type': 'application/json',
            }
        }); */

        const response = await axios(options)

        const data = response.data;
        
        console.log(response)

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