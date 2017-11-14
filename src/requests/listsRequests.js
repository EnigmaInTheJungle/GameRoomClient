import axios from 'axios';
import Requests from './requests';
import {Url} from '../redux/urls.js';

class ListsRequests extends Requests {
    static updateList (listId, label) {
        return axios.patch(Url + 'v1/lists/' + listId, {list: {label: label}}, {headers: this.getCredentials()})
            .then((response) => {
                if (response.status === 200) {
                    return Promise.resolve(response.data);
                }
            });
    }
    static delList (listId) {
        return axios.delete(Url + 'v1/lists/' + listId, {headers: this.getCredentials()})
            .then((response) => {
                if (response.status === 200) {
                    return Promise.resolve(response.data);
                }
            });
    }
    static addList (label) {
        return axios.post(Url + 'v1/lists', {list: { label: label }}, {headers: this.getCredentials()})
            .then((response) => {
                if (response.status === 201) {
                    return Promise.resolve(response.data);
                }
            })
            .catch(function (error) {
                return Promise.resolve(error);
            });
    }
}

export default ListsRequests;
