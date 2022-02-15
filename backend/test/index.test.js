import request from "supertest";
import { expect } from "chai";
import 'dotenv/config'

import app, { port } from '../index.js'

describe ('Smoke tests', () => {

    const _env = process.env
    
    it ('Port gets assigned properly', () => {
        expect(port()).to.not.be.oneOf(['', 'undefined'])
        expect(port()).to.be.oneOf([`${_env.PORT}`, '5000'])
    })

    it ('Server returns expected value', (done) => {
        const res = request(app).get('/')
        res.expect ({val: 'Hello World'})
        res.expect (200, done)
    })
})