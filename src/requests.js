import axios from 'axios';
import Cookies from 'js-cookie';

export default class Requests {
    static getCredentials () {
        let cookie = Cookies.get('auth_token');
        if (cookie) {
            return Cookies.getJSON('auth_token');
        }
        return {};
    }

    static signUp (email, password, passwordConfirmation) {
        return axios.post('http://localhost:3000/auth', {
            email: email,
            password: password,
            password_confirmation: passwordConfirmation,
            confirm_success_url: ''
        }).then((response) => {
            if (response.status === 200) {
                return Promise.resolve(response);
            }
        }).catch(function (error) {
            return Promise.resolve(error);
        });
    }

    static signIn (email, password) {
        return axios.post('http://localhost:3000/auth/sign_in', {email: email, password: password})
            .then((response) => {
                if (response.status === 200) {
                    Cookies.set('auth_token', JSON.stringify({
                        'access-token': response.headers['access-token'],
                        'client': response.headers['client'],
                        'uid': response.headers['uid']
                    }));
                    return Promise.resolve(response);
                }
            })
            .catch(function (error) {
                return Promise.resolve(error);
            });
    }

    static signOut () {
        return axios.delete('http://localhost:3000/auth/sign_out', {headers: this.getCredentials()})
            .then((response) => {
                if (response.status === 200) {
                    Cookies.remove('auth_token');
                    return Promise.resolve(response);
                }
            })
            .catch(function (error) {
                return Promise.resolve(error);
            });
    }

    static getLists () {
        return axios.get('http://localhost:3000/v1/lists', {headers: this.getCredentials()})
            .then((response) => {
                if (response.status === 200) {
                    return Promise.resolve(response.data.data.lists);
                }
            });
    }

    static addList (label) {
        return axios.post('http://localhost:3000/v1/lists', {label: label}, {headers: this.getCredentials()})
            .then((response) => {
                if (response.status === 200) {
                    return Promise.resolve(response);
                }
            })
            .catch(function (error) {
                return Promise.resolve(error);
            });
    }

    static deleteList (id) {
        return axios.delete('http://localhost:3000/v1/lists/' + id, {headers: this.getCredentials()})
            .then((response) => {
                if (response.status === 200) {
                    return Promise.resolve(response);
                }
            })
            .catch(function (error) {
                return Promise.resolve(error);
            });
    }

    static addTask (label, listId) {
        return axios.post('http://localhost:3000/v1/lists/' + listId + '/tasks', {label: label}, {headers: this.getCredentials()})
            .then((response) => {
                if (response.status === 200) {
                    return Promise.resolve(response);
                }
            })
            .catch(function (error) {
                return Promise.resolve(error);
            });
    }
}
