import request from "supertest";
import { expect } from "chai";

import app, { port } from '../index.js'

describe ('Smoke tests', () => {

    it ('Port gets assigned properly', () => {
        expect(port()).to.be.a('number')
        expect(port()).to.not.be.oneOf(['', 'undefined'])
        expect(port()).to.equal(5000)
    })

    it ('Server returns expected value', (done) => {
        const res = request(app).get('/')
        res.expect ({val: 'Hello World'})
        res.expect (200, done)
    })
})