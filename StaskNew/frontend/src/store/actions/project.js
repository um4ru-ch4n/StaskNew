import axios from '../../axios/axios-stask'
import {PROJECT_ERROR, USER_PROJECTS_LIST, CLEAR_USER_PROJECTS, CURRENT_PROJECT, CLEAR_CURRENT_PROJECT, PROJECTS_USERS_LIST } from './actionTypes'

export function createProject(formControls) {
    return async dispatch => {
        let url = "create_project"
        const token = localStorage.getItem("token")
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Token ' + token,
            },
            data: JSON.stringify(formControls),
            url: url
        };
        console.log(options.data)
        await axios(options)
            .catch(error => {
                dispatch(projectError("Ошибка создания проекта"));
            })
    }
}

export function fetchProjects() {
    return async dispatch => {
        let url = "user_projects"
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
                dispatch(userProjectsList(response.data.projects))
            })
            .catch(error => {
                dispatch(projectError("Ошибка получения списка проектов"));
            })
    }
}

export function fetchProjectUsers(projectId) {
    return async dispatch => {
        const prId = {
            id: projectId,
        }
        let url = "project_users"
        const token = localStorage.getItem("token")
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Token ' + token,
            },
            data: JSON.stringify(prId),
            url: url
        };
        
        await axios(options)
            .then(response => {
                dispatch(userProjectUsersList(response.data.users))
            })
            .catch(error => {
                dispatch(projectError("Ошибка получения списка пользователей"));
            })
    }
}

export function setCurrentProject(projectId) {
    return {
        type: CURRENT_PROJECT,
        projectId: projectId
    }
}

export function clearCurrentProject() {
    return {
        type: CLEAR_CURRENT_PROJECT,
    }
}

export function userProjectsList(projects) {
    return {
        type: USER_PROJECTS_LIST,
        projects: projects
    }
}

export function userProjectUsersList(projectUsers) {
    return {
        type: PROJECTS_USERS_LIST,
        projectUsers: projectUsers
    }
}

export function projectError(errorMessage) {
    return {
        type: PROJECT_ERROR,
        errorMessage: errorMessage
    }
}

export function clearUserProjects() {
    return {
        type: CLEAR_USER_PROJECTS,
    }
}