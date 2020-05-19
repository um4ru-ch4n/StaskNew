import { TASK_ERROR, PROJECT_TASKS_LIST, CLEAR_PROJECT_TASKS, CURRENT_TASK, CLEAR_CURRENT_TASK } from "../actions/actionTypes";

const initialState = {
    tasks: [],
    errorMessage: "",
    currentTask: {}
}

export default function taskReducer(state = initialState, action) {
    switch (action.type) {
        case PROJECT_TASKS_LIST:
            return {
                ...state,
                tasks: action.tasks,
                errorMessage: ""
            };
        case TASK_ERROR:
            return {
                ...state,
                errorMessage: action.errorMessage
            };
        case CURRENT_TASK:
            let curTask = {}
            state.tasks.forEach(task => {
                if (task.id === action.taskId) {
                    curTask = task
                }
            });
            return {
                ...state,
                currentTask: curTask,
                errorMessage: ""
            };
        case CLEAR_CURRENT_TASK:
            return {
                ...state,
                currentTask: {},
                errorMessage: ""
            };
        case CLEAR_PROJECT_TASKS:
            return initialState;
        default:
            return state;
    }
}