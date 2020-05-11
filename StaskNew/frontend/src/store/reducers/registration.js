import { REGISTRATION_ERROR } from "../actions/actionTypes";

const initialState = {
    errorMessage: ""
}

export default function registrationReducer(state = initialState, action) {
    switch (action.type) {
        case REGISTRATION_ERROR:
            return {
                ...state,
                errorMessage: action.errorMessage
            };
        default:
            return state;
    }
}