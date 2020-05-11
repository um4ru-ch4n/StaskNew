import axios from '../../axios/axios-stask'
import  { REGISTRATION_ERROR } from './actionTypes'

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