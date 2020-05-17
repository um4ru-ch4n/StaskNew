import { PROJECT_ERROR, USER_PROJECTS_LIST, CLEAR_USER_PROJECTS, CURRENT_PROJECT, CLEAR_CURRENT_PROJECT } from "../actions/actionTypes";

const initialState = {
    projects: [],
    errorMessage: "",
    currentProject: {}
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
        case CURRENT_PROJECT:
            let curProject = {}
            state.projects.forEach(project => {
                if (project.id === action.projectId) {
                    curProject = project
                }
            });
            return {
                ...state,
                currentProject: curProject
            };
        case CLEAR_CURRENT_PROJECT:
            return {
                ...state,
                currentProject: {}
            };
        case CLEAR_USER_PROJECTS:
            return initialState;
        default:
            return state;
    }
}