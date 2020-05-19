import axios from '../../axios/axios-stask'
import { TASK_ERROR, PROJECT_TASKS_LIST, CLEAR_PROJECT_TASKS, CURRENT_TASK, CLEAR_CURRENT_TASK } from './actionTypes'

export function createTask(formControls) {
    return async dispatch => {
        if (!formControls["start_date"]) {
            delete formControls["start_date"]
        }
        if (!formControls["end_date"]) {
            delete formControls["end_date"]
        }
        let url = "create_task"
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
                dispatch(taskError(""));
            })
            .catch(error => {
                dispatch(taskError("Ошибка создания Таска - "));
            })
    }
}

export function fetchTasks() {
    return async dispatch => {
        let url = "project_tasks"
        const token = localStorage.getItem("token")
        const options = {
            method: 'GET',
            headers: {
                'Authorization': 'Token ' + token,
            },
            url: url
        };
        await axios(options)
            .then(response => {
                dispatch(projectTasksList(response.data.tasks))
            })
            .catch(error => {
                dispatch(taskError("Ошибка получения списка Тасков"));
            })
    }
}

export function setCurrentTask(taskId) {
    return {
        type: CURRENT_TASK,
        taskId: taskId
    }
}

export function clearCurrentProject() {
    return {
        type: CLEAR_CURRENT_TASK,
    }
}

export function projectTasksList(tasks) {
    return {
        type: PROJECT_TASKS_LIST,
        tasks: tasks
    }
}

export function taskError(errorMessage) {
    return {
        type: TASK_ERROR,
        errorMessage: errorMessage
    }
}

export function clearProjectTasks() {
    return {
        type: CLEAR_PROJECT_TASKS,
    }
}