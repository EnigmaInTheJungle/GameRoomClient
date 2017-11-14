import axios from 'axios';
import Cookies from 'js-cookie';
import {Url} from '../urls';

export const GET_LISTS_SUCCESS = 'GET_LISTS_SUCCESS';
export const ADD_LIST_SUCCESS = 'ADD_LIST_SUCCESS';
export const UPDATE_LIST_SUCCESS = 'UPDATE_LIST_SUCCESS';
export const DELETE_LIST_SUCCESS = 'DELETE_LIST_SUCCESS';

function getCredentials () {
    let cookie = Cookies.get('auth_token');
    if (cookie) {
        return JSON.parse(cookie);
    }
    return {};
}

export function getLists () {
    return (dispatch) => {
        return axios.get(Url + 'v1/lists', { headers: getCredentials() })
            .then((response) => {
                if (response.status === 200) {
                    dispatch(getListsSuccess(response.data));
                    return Promise.resolve(response.data);
                }
            })
            .catch(() => {
                return Promise.resolve('error');
            });
    };
}

export function addList (label) {
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

export function updateList (listId, label) {
    return (dispatch) => {
        return axios.patch(Url + 'v1/lists/' + listId, {list: {label: label}}, {headers: getCredentials()})
            .then((response) => {
                if (response.status === 200) {
                    dispatch(updateListSuccess(response.data));
                    return Promise.resolve(response.data);
                }
            })
            .catch(() => {
                return Promise.resolve('error');
            });
    };
}

export function deleteList (listId) {
    return (dispatch) => {
        return axios.delete(Url + 'v1/lists/' + listId, {headers: getCredentials()})
            .then((response) => {
                if (response.status === 200) {
                    dispatch(deleteListSuccess(response.data));
                    return Promise.resolve(response.data);
                }
            })
            .catch(() => {
                return Promise.resolve('error');
            });
    };
}

function getListsSuccess (lists) {
    return { type: GET_LISTS_SUCCESS, payload: lists };
}

function addListSuccess (list) {
    return { type: ADD_LIST_SUCCESS, payload: list };
}

function updateListSuccess (list) {
    return { type: UPDATE_LIST_SUCCESS, payload: list };
}

function deleteListSuccess (list) {
    return { type: DELETE_LIST_SUCCESS, payload: list };
}
