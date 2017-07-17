const chai = require('chai');
const assert = chai.assert;
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const app = require('../lib/app');

describe('/greeting', () => {
    const request = chai.request(app);
    it('works', done => {
        request.get('/greeting')
            .end((err, res) => {
                if (err) done(err);
                assert.equal(res.text, 'hello stranger');
                done();
            });
    });

    it('works', done => {
        request.get('/greeting/joe')
            .end((err, res) => {
                if (err) done(err);
                assert.equal(res.text, 'hello joe');
                done();
            });
    });
});