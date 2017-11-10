// import { shallow, mount, render } from 'enzyme';
// import ListsRequests from '../requests/listsRequests';
// import sinon from 'sinon';
import ListsRequests from '../requests/listsRequests';

test('sad', () => {
    let response = signIn('testing@mail.com', 'aa123456');
    return response.then((response) => {
        expect(5).toEqual(200);
    });
});

