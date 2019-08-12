import axios from 'axios';

const instance = axios.create({
    baseURL:'https://react-my-burger-12345678.firebaseio.com/'
});

export default instance;