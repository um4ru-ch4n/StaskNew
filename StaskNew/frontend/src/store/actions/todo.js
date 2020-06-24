import axios from '../../axios/axios-stask'
import { TODO_ERROR, TASK_TODOS_LIST, CLEAR_CURRENT_TODO, CURRENT_TODO, CLEAR_TASK_TODOS } from './actionTypes'

export function createTodo(formControls) {
    return async dispatch => {
        
        let url = "create_todo"
        const token = localStorage.getItem("token")
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Token ' + token,
            },
            data: JSON.stringify(formControls),
            url: url
        }

        await axios(options)
            .then(() => {
                dispatch(todoError(""));
            })
            .catch(() => {
                dispatch(todoError("Ошибка создания Тоду"));
            })
    }
}

export function fetchTodos(taskId) {
    return async dispatch => {
        const tsId = {
            id: taskId,
        }
        
        let url = "task_todos"
        const token = localStorage.getItem("token")
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Token ' + token,
            },
            data: JSON.stringify(tsId),
            url: url
        }

        await axios(options)
            .then(response => {
                dispatch(taskTodosList(response.data.todos))
            })
            .catch(error => {
                dispatch(todoError("Ошибка получения списка туду"));
            })
    }
}

export function setCurrentTodo(todoId) {
    return {
        type: CURRENT_TODO,
        todoId: todoId
    }
}

export function clearCurrentTodo() {
    return {
        type: CLEAR_CURRENT_TODO,
    }
}

export function taskTodosList(todos) {
    return {
        type: TASK_TODOS_LIST,
        todos: todos
    }
}

export function todoError(errorMessage) {
    return {
        type: TODO_ERROR,
        errorMessage: errorMessage
    }
}

export function clearTaskTodos() {
    return {
        type: CLEAR_TASK_TODOS,
    }
}