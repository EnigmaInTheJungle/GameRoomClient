import axios from 'axios';
import Cookies from 'js-cookie';
import {updateHeaderClient} from './headerActions';
import {Url} from '../urls';

export const SIGN_IN_SUCCESS = 'SIGN_IN_SUCCESS';
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const SIGN_OUT_SUCCESS = 'SIGN_OUT_SUCCESS';
export const VALIDATION_TOKEN_SUCCESS = 'VALIDATION_TOKEN_SUCCESS';
export const VALIDATION_TOKEN_ERROR = 'VALIDATION_TOKEN_ERROR';

export function signIn (email, password) {
    return (dispatch) => {
        return axios.post(Url + 'auth/sign_in', {email: email, password: password})
            .then((response) => {
                if (response.status === 200) {
                    dispatch(updateHeaderClient(response.headers));
                    dispatch(signInSuccess());
                    return Promise.resolve('success');
                }
            })
            .catch(function (error) {
                return Promise.reject(error);
            });
    };
}

export function signUp (email, password, passwordConfirmation) {
    return (dispatch) => {
        return axios.post(Url + 'auth', {
            email: email,
            password: password,
            password_confirmation: passwordConfirmation,
            confirm_success_url: ''
        }).then((response) => {
            if (response.status === 200) {
                dispatch(updateHeaderClient(response.headers));
                dispatch(signUpSuccess());
                return Promise.resolve('success');
            }
        }).catch(function (error) {
            return Promise.resolve(error);
        });
    };
}

export function signOut () {
    return (dispatch, getState) => {
        return axios.delete(Url + 'auth/sign_out', {headers: getState().header})
            .then((response) => {
                if (response.status === 200) {
                    Cookies.remove('auth_token');
                    dispatch(signOutSuccess());
                    return Promise.resolve(response);
                }
            })
            .catch(function (error) {
                return Promise.resolve(error);
            });
    };
}

export function validateToken () {
    return (dispatch) => {
        return axios.get(Url + 'auth/validate_token', {headers: Cookies.getJSON('auth-token')})
            .then((response) => {
                if (response.status === 200 || response.status === 304) {
                    dispatch(updateHeaderClient(response.headers));
                    dispatch(signInSuccess());
                    return Promise.resolve('success');
                }
            })
            .catch((error) => {
                dispatch(validationTokenError(false));
                return Promise.reject(error);
            });
    };
}

export function signInSuccess () {
    return { type: SIGN_IN_SUCCESS, payload: {} };
}

export function validationTokenSuccess (data) {
    return { type: VALIDATION_TOKEN_SUCCESS, payload: data };
}

export function validationTokenError (data) {
    return { type: VALIDATION_TOKEN_ERROR, payload: data };
}

export function signOutSuccess () {
    return { type: SIGN_OUT_SUCCESS, payload: {} };
}

export function signUpSuccess () {
    return { type: SIGN_UP_SUCCESS, payload: {} };
}
