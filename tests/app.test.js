const chai = require('chai');
const assert = chai.assert;
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const app = require('../lib/app');

describe('app', () => {
    const request = chai.request(app);
    it('works', done => {
        request.get('/')
            .end((err, res) => {
                if (err) done(err);
                assert.equal(res.text, 'hello world');
                done();
            });
    });
});