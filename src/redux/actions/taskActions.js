import axios from 'axios';
import Cookies from 'js-cookie';
import {Url} from '../urls';

export const GET_TASKS_SUCCESS = 'GET_TASKS_SUCCESS';
export const ADD_TASK_SUCCESS = 'ADD_TASK_SUCCESS';
export const UPDATE_TASK_SUCCESS = 'UPDATE_TASK_SUCCESS';
export const DELETE_TASK_SUCCESS = 'DELETE_TASK_SUCCESS';

function getCredentials () {
    let cookie = Cookies.get('auth_token');
    if (cookie) {
        return JSON.parse(cookie);
    }
    return {};
}

export function getTasks (listId) {
    return (dispatch) => {
        return axios.get(Url + 'v1/list_tasks/' + listId, { headers: getCredentials() })
            .then((response) => {
                if (response.status === 200) {
                    dispatch(getListsSuccess(response.data));
                    return Promise.resolve('success');
                }
            })
            .catch(() => {
                return Promise.resolve('error');
            });
    };
}

export function addTask (label) {
    return (dispatch) => {
        return axios.post(Url + 'v1/lists', {list: { label: label }}, {headers: getCredentials()})
            .then((response) => {
                if (response.status === 201) {
                    dispatch(addListSuccess(response.data));
                    return Promise.resolve('success');
                }
            })
            .catch(() => {
                return Promise.resolve('error');
            });
    };
}

export function updateTask (taskId, content) {
    return (dispatch) => {
        return axios.patch(Url + 'v1/tasks/' + taskId, {task: {content: content}}, {headers: getCredentials()})
            .then((response) => {
                if (response.status === 200) {
                    dispatch(updateListSuccess(response.data));
                    return Promise.resolve('success');
                }
            })
            .catch(() => {
                return Promise.resolve('error');
            });
    };
}

export function deleteTask (taskId) {
    return (dispatch) => {
        return axios.delete(Url + 'v1/tasks/' + taskId, {headers: getCredentials()})
            .then((response) => {
                if (response.status === 200) {
                    dispatch(deleteListSuccess(response.data));
                    return Promise.resolve('success');
                }
            })
            .catch(() => {
                return Promise.resolve('error');
            });
    };
}

function getListsSuccess (tasks) {
    return { type: GET_TASKS_SUCCESS, payload: tasks };
}

function addListSuccess (task) {
    return { type: ADD_TASK_SUCCESS, payload: task };
}

function updateListSuccess (task) {
    return { type: UPDATE_TASK_SUCCESS, payload: task };
}

function deleteListSuccess (task) {
    return { type: DELETE_TASK_SUCCESS, payload: task };
}
