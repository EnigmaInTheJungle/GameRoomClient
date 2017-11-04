import axios from 'axios';

export default class Requests {
    static data = {};

    static fillData (data) {
        this.data = data;
    }

    static getLists () {
        return axios.get('http://localhost:3000/v1/lists', {headers: this.data})
            .then((response) => {
                if (response.status === 200) {
                    return Promise.resolve(response.data.data.lists);
                }
            });
    }

    static addList (label) {
        return axios.post('http://localhost:3000/v1/lists', {label: label}, {headers: this.data})
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
        return axios.post('http://localhost:3000/v1/lists/' + listId + '/tasks', {label: label}, {headers: this.data})
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
