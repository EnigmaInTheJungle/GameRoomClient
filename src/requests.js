import axios from 'axios';

export default class Requests {
    static data = {};

    static fillData (data) {
        this.data = data;
    }

    static getLists () {
        const data = {
            'access-token': 'DNREdWvGdA2f_eaj11BLtg',
            'client': 'fyiRhFMlVA8xe2NOu-5rAA',
            'uid': 'test@mail.com'
        };
        return axios.get('http://localhost:3000/v1/lists', {headers: data})
            .then((response) => {
                if (response.status === 200) {
                    return Promise.resolve(response.data.data.lists);
                }
            })
            .catch(function (error) {
                return Promise.resolve(error);
            });
    }

    static addList (label) {
        const data = {
            'access-token': 'DNREdWvGdA2f_eaj11BLtg',
            'client': 'fyiRhFMlVA8xe2NOu-5rAA',
            'uid': 'test@mail.com'
        };
        return axios.post('http://localhost:3000/v1/lists', {label: label}, {data})
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
