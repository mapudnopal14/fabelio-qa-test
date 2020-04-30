const assert = require('chai').expect;
const page = require('../page/crud_page.js');
const data = require('../data/data.json');
const code = require('../helper/response_code_message.json');
var chai = require('chai');
chai.use(require('chai-json-schema'));

const testCaseCrud = {
    "methodList": {
        "create": {
            "post": "As an user, i can use CREATE request"
        },
        "read": {
            "get": "As an user, i can use READ request"
        },
        "update": {
            "put": "As an user, i can use UPDATE request"
        },
        "delete": {
            "delete": "As an user, i can use DELETE request"
        }
    }
};

describe('Test Case for C.R.U.D Request', () => {
    it(`@post ${testCaseCrud.methodList.create.post}`, async () => {
        const response = await page.methodPost('');
        assert(response.status).to.equal(code.successOk);
        assert(response.body.url).to.equal(data.url_post);
    })

    it(`@get ${testCaseCrud.methodList.read.get}`, async () => {
        const response = await page.methodGet('');
        assert(response.status).to.equal(code.successOk);
        assert(response.body.url).to.equal(data.url_get);
    })

    it(`@put ${testCaseCrud.methodList.update.put}`, async () => {
        const response = await page.methodPut('');
        assert(response.status).to.equal(code.successOk);
        assert(response.body.url).to.equal(data.url_put);
    })

    it(`@delete ${testCaseCrud.methodList.delete.delete}`, async () => {
        const response = await page.methodDelete('');
        assert(response.status).to.equal(code.successOk);
        assert(response.body.url).to.equal(data.url_delete);
    })
})