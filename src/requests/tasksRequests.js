import axios from 'axios';
import Requests from './requests';
import {Url} from '../redux/urls.js';

class TasksRequests extends Requests {
    static getTasks (listId) {
        return axios.get(Url + 'v1/list_tasks/' + listId, {headers: this.getCredentials()})
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
        return axios.post(Url + 'v1/tasks', {task: {list_id: listId, content: content}}, {headers: this.getCredentials()})
            .then((response) => {
                if (response.status === 201) {
                    return Promise.resolve(response.data);
                }
            })
            .catch((error) => {
                // return Promise.resolve(error);
                console.log(error);
            });
    }
    static changeTaskState (task) {
        return axios.patch(Url + 'v1/tasks/' + task.id + '/check', {headers: this.getCredentials()})
            .then((response) => {
                if (response.status === 200) {
                    return Promise.resolve(response.data);
                }
            })
            .catch(function (error) {
                return Promise.resolve(error);
            });
    }
    static delTask (task) {
        return axios.delete(Url + 'v1/tasks/' + task.id, {headers: this.getCredentials()})
            .then((response) => {
                if (response.status === 200) {
                    return Promise.resolve(response.data);
                }
            });
    }
    static upTaskPosition (task) {
        return axios.patch(Url + 'v1/tasks/' + task.id + '/up', {headers: this.getCredentials()})
            .then((response) => {
                if (response.status === 200) {
                    return Promise.resolve(response.data);
                }
            })
            .catch(function (error) {
                return Promise.resolve(error);
            });
    }
    static downTaskPosition (task) {
        return axios.patch(Url + 'v1/tasks/' + task.id + '/down', {headers: this.getCredentials()})
            .then((response) => {
                if (response.status === 200) {
                    return Promise.resolve(response.data);
                }
            })
            .catch(function (error) {
                return Promise.resolve(error);
            });
    }
    static updateTask (task, content) {
        return axios.patch(Url + 'v1/tasks/' + task.id, {task: {content: content}}, {headers: this.getCredentials()})
            .then((response) => {
                if (response.status === 200) {
                    return Promise.resolve(response.data);
                }
            })
            .catch(function (error) {
                return Promise.resolve(error);
            });
    }
}

export default TasksRequests;
