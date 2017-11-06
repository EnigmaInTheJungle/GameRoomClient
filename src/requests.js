import axios from 'axios';
import Cookies from 'js-cookie';

export default class Requests {
    static getCredentials () {
        return JSON.parse(Cookies.get('auth_token'));
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
