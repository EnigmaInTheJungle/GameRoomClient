import Cookies from 'js-cookie';

class Requests {
    static getCredentials () {
        let cookie = Cookies.get('auth_token');
        if (cookie) {
            return JSON.parse(cookie);
        }
        return {};
    }
}

export default Requests;
