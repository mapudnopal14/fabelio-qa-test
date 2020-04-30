const supertest = require('supertest');
const env = require('dotenv').config();

const api = supertest(process.env.URL_API);

const methodPost = () => api
    .post('/post')
    .set('accept', 'application/json')

const methodGet = () => api
    .get('/get')
    .set('accept', 'application/json')

const methodPut = () => api
    .put('/put')
    .set('accept', 'application/json')

const methodDelete = () => api
    .delete('/delete')
    .set('accept', 'application/json')

module.exports = {
    methodPost,
    methodGet,
    methodPut,
    methodDelete
}