import axios from 'axios';
import Cookies from 'js-cookie';

export default class Requests {
    static Url = 'https://api-ornull-list.herokuapp.com/';
    //  static Url = 'http://localhost:3000/';
    static getCredentials () {
        let cookie = Cookies.get('auth_token');
        if (cookie) {
            return JSON.parse(cookie);
        }
        return {};
    }

    static signUp (email, password, passwordConfirmation) {
        return axios.post(this.Url + 'auth', {
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
        return axios.post(this.Url + 'auth/sign_in', {email: email, password: password})
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
        return axios.delete(this.Url + 'auth/sign_out', {headers: this.getCredentials()})
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
        return axios.get(this.Url + 'v1/lists', {headers: this.getCredentials()})
            .then((response) => {
                if (response.status === 200) {
                    return Promise.resolve(response.data);
                }
            });
    }
    static delList (listId) {
        return axios.delete(this.Url + 'v1/lists/' + listId, {headers: this.getCredentials()})
            .then((response) => {
                if (response.status === 200) {
                    return Promise.resolve(response.data.lists);
                }
            });
    }
    static addList (label) {
        return axios.post(this.Url + 'v1/lists', {list: { label: label }}, {headers: this.getCredentials()})
            .then((response) => {
                if (response.status === 200) {
                    return Promise.resolve(response);
                }
            })
            .catch(function (error) {
                return Promise.resolve(error);
            });
    }

    static getTasks (listId) {
        return axios.get(this.Url + 'v1/lists/' + listId + '/tasks', {headers: this.getCredentials()})
            .then((response) => {
                if (response.status === 200) {
                    return Promise.resolve(response.data);
                }
            })
            .catch(function (error) {
                return Promise.resolve(error);
            });
    }

    static addTask (content, listId) {
        return axios.post(this.Url + 'v1/lists/' + listId + '/tasks', {task: {list_id: listId, content: content}}, {headers: this.getCredentials()})
            .then((response) => {
                if (response.status === 200) {
                    return Promise.resolve(response);
                }
            })
            .catch(function (error) {
                return Promise.resolve(error);
            });
    }
    static changeTaskState (task) {
        return axios.patch(this.Url + 'v1/lists/' + task.list_id + '/tasks/' + task.id + '/check', {headers: this.getCredentials()})
            .then((response) => {
                if (response.status === 200) {
                    return Promise.resolve(response);
                }
            })
            .catch(function (error) {
                return Promise.resolve(error);
            });
    }
    static delTask (task) {
        return axios.delete(this.Url + 'v1/lists/' + task.list_id + '/tasks/' + task.id, {headers: this.getCredentials()})
            .then((response) => {
                if (response.status === 200) {
                    return Promise.resolve(response.data.lists);
                }
            });
    }
    static upTaskPosition (task) {
        return axios.patch(this.Url + 'v1/lists/' + task.list_id + '/tasks/' + task.id + '/up', {headers: this.getCredentials()})
            .then((response) => {
                if (response.status === 200) {
                    return Promise.resolve(response);
                }
            })
            .catch(function (error) {
                return Promise.resolve(error);
            });
    }
    static downTaskPosition (task) {
        return axios.patch(this.Url + 'v1/lists/' + task.list_id + '/tasks/' + task.id + '/down', {headers: this.getCredentials()})
            .then((response) => {
                if (response.status === 200) {
                    return Promise.resolve(response);
                }
            })
            .catch(function (error) {
                return Promise.resolve(error);
            });
    }
    static updateTask (task, content) {
        return axios.patch(this.Url + 'v1/lists/' + task.list_id + '/tasks/' + task.id, {task: {content: content}}, {headers: this.getCredentials()})
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
