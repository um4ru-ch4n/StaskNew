import { TODO_ERROR, TASK_TODOS_LIST, CLEAR_CURRENT_TODO, CURRENT_TODO, CLEAR_TASK_TODOS } from "../actions/actionTypes";

const initialState = {
    todos: [],
    errorMessage: "",
    currentTodo: {}
}

export default function todoReducer(state = initialState, action) {
    switch (action.type) {
        case TASK_TODOS_LIST:
            return {
                ...state,
                todos: action.todos,
                errorMessage: ""
            };
        case TODO_ERROR:
            return {
                ...state,
                errorMessage: action.errorMessage
            };
        case CURRENT_TODO:
            let curTodo = {}
            state.todos.forEach(todo => {
                if (todo.id === action.todoId) {
                    curTodo = todo
                }
            });
            return {
                ...state,
                currentTodo: curTodo,
                errorMessage: ""
            };
        case CLEAR_CURRENT_TODO:
            return {
                ...state,
                currentTodo: {},
                errorMessage: ""
            };
        case CLEAR_TASK_TODOS:
            return initialState;
        default:
            return state;
    }
}