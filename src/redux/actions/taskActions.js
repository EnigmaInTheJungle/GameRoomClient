import axios from 'axios';
import Requests from '../../requests/requests';
import {Url} from '../urls';

export const GET_TASKS_SUCCESS = 'GET_TASKS_SUCCESS';
export const ADD_TASK_SUCCESS = 'ADD_TASK_SUCCESS';
export const UPDATE_TASK_SUCCESS = 'UPDATE_TASK_SUCCESS';
export const DELETE_TASK_SUCCESS = 'DELETE_TASK_SUCCESS';
export const CHANGE_TASK_STATE_SUCCESS = 'CHANGE_TASK_STATE_SUCCESS';
export const UP_TASK_POSITION_SUCCESS = 'UP_TASK_POSITION_SUCCESS';
export const DOWN_TASK_POSITION_SUCCESS = 'DOWN_TASK_POSITION_SUCCESS';

export function getTasks (listId) {
    return (dispatch) => {
        return axios.get(Url + 'v1/list_tasks/' + listId, { headers: Requests.getCredentials() })
            .then((response) => {
                if (response.status === 200) {
                    dispatch(getTasksSuccess(response.data));
                    return Promise.resolve('success');
                }
            })
            .catch(() => {
                return Promise.resolve('error');
            });
    };
}

export function addTask (listId, content) {
    return (dispatch) => {
        return axios.post(Url + 'v1/tasks', {task: {list_id: listId, content: content}}, {headers: Requests.getCredentials()})
            .then((response) => {
                if (response.status === 201) {
                    dispatch(addTaskSuccess(response.data));
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
        return axios.patch(Url + 'v1/tasks/' + taskId, {task: {content: content}}, {headers: Requests.getCredentials()})
            .then((response) => {
                if (response.status === 200) {
                    dispatch(updateTaskSuccess(response.data));
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
        return axios.delete(Url + 'v1/tasks/' + taskId, {headers: Requests.getCredentials()})
            .then((response) => {
                if (response.status === 200) {
                    dispatch(deleteTaskSuccess(response.data));
                    return Promise.resolve('success');
                }
            })
            .catch(() => {
                return Promise.resolve('error');
            });
    };
}

export function changeTaskState (taskId) {
    return (dispatch) => {
        return axios.patch(Url + 'v1/tasks/' + taskId + '/check', {}, {headers: Requests.getCredentials()})
            .then((response) => {
                if (response.status === 200) {
                    dispatch(changeTaskStateSuccess(response.data));
                    return Promise.resolve('success');
                }
            })
            .catch(() => {
                return Promise.resolve('error');
            });
    };
}

export function upTaskPosition (taskId) {
    return (dispatch) => {
        return axios.patch(Url + 'v1/tasks/' + taskId + '/up', {}, {headers: Requests.getCredentials()})
            .then((response) => {
                if (response.status === 200) {
                    dispatch(upTaskPositionSuccess(response.data));
                    return Promise.resolve('success');
                }
            })
            .catch(() => {
                return Promise.resolve('error');
            });
    };
}

export function downTaskPosition (taskId) {
    return (dispatch) => {
        return axios.patch(Url + 'v1/tasks/' + taskId + '/down', {}, {headers: Requests.getCredentials()})
            .then((response) => {
                if (response.status === 200) {
                    dispatch(downTaskPositionSuccess(response.data));
                    return Promise.resolve('success');
                }
            })
            .catch(() => {
                return Promise.resolve('error');
            });
    };
}

function getTasksSuccess (tasks) {
    return { type: GET_TASKS_SUCCESS, payload: tasks };
}

function addTaskSuccess (task) {
    return { type: ADD_TASK_SUCCESS, payload: task };
}

function updateTaskSuccess (task) {
    return { type: UPDATE_TASK_SUCCESS, payload: task };
}

function deleteTaskSuccess (task) {
    return { type: DELETE_TASK_SUCCESS, payload: task };
}

function changeTaskStateSuccess (task) {
    return { type: CHANGE_TASK_STATE_SUCCESS, payload: task };
}

function upTaskPositionSuccess (tasks) {
    return { type: UP_TASK_POSITION_SUCCESS, payload: tasks };
}

function downTaskPositionSuccess (tasks) {
    return { type: DOWN_TASK_POSITION_SUCCESS, payload: tasks };
}
