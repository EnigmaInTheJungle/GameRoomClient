import axios from 'axios';

export default class Requests {
    static data = {};

    static fillData (data) {
        this.data = data;
    }

    static getLists () {
        return axios.get('http://localhost:3000/lists', {headers: this.data})
            .then((response) => {
                if (response.status === 200) {
                    return Promise.resolve(response.data.lists);
                }
            });
    }
    static delList (listId) {
        return axios.delete('http://localhost:3000/lists/' + listId, {headers: this.data})
            .then((response) => {
                if (response.status === 200) {
                    return Promise.resolve(response.data.lists);
                }
            });
    }
    static addList (name) {
        return axios.post('http://localhost:3000/lists', {list: { name: name }}, {headers: this.data})
            .then((response) => {
                if (response.status === 200) {
                    return Promise.resolve(response);
                }
            })
            .catch(function (error) {
                return Promise.resolve(error);
            });
    }

    static addTask (content, listId) {
        return axios.post('http://localhost:3000/lists/' + listId + '/tasks', {task: {list_id: listId, content: content}}, {headers: this.data})
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
        return axios.patch('http://localhost:3000/lists/' + task.list_id + '/tasks/' + task.id + '/check', {headers: this.data})
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
        return axios.delete('http://localhost:3000/lists/' + task.list_id + '/tasks/' + task.id, {headers: this.data})
            .then((response) => {
                if (response.status === 200) {
                    return Promise.resolve(response.data.lists);
                }
            });
    }
    static upTaskPosition (task) {
        return axios.patch('http://localhost:3000/lists/' + task.list_id + '/tasks/' + task.id + '/up', {headers: this.data})
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
        return axios.patch('http://localhost:3000/lists/' + task.list_id + '/tasks/' + task.id + '/down', {headers: this.data})
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
