import { PROJECT_ERROR, USER_PROJECTS_LIST, CLEAR_USER_PROJECTS } from "../actions/actionTypes";

const initialState = {
    projects: [],
    errorMessage: ""
}

export default function projectReducer(state = initialState, action) {
    switch (action.type) {
        case USER_PROJECTS_LIST:
            return {
                ...state,
                projects: action.projects,
                errorMessage: ""
            };
        case PROJECT_ERROR:
            return {
                ...state,
                errorMessage: action.errorMessage
            };
        case CLEAR_USER_PROJECTS:
            return initialState;
        default:
            return state;
    }
}