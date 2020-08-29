import axios from 'axios';

const urlPrefix = 'http://localhost:9090/'
const crudOperation = axios.create({
    baseURL: urlPrefix,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
});
const getEvent = url => crudOperation.get(url);

module.exports = {
    getEvent
};
