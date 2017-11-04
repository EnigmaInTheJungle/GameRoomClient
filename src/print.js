import axios from 'axios';

const data = {
    'access-token': 'DNREdWvGdA2f_eaj11BLtg',
    'client': 'fyiRhFMlVA8xe2NOu-5rAA',
    'uid': 'test@mail.com'
};

export default function printMe () {
    axios.get('http://localhost:3000/v1/lists', {headers: data})
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
    console.log('I get called from print.js!');
}
