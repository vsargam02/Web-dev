const mocha = require('mocha')
const expect = require('chai').expect
const request = require('request')

const app = require('../server')
let server;

describe('server',()=>{

    before((done)=>{
        server=app.listen(2222,done)
    })

    it('rate should be correct ',(done)=>{
        request.get('http://localhost:2222/rate', (err, resp,body)=>{
            let rates = JSON.parse(body)
            expect(rates.fixed).to.equal(50)
            expect(rates.perKm).to.equal(10)

            //expect(body.fixed).to.equal(50)
        done()
        })
    })
    after(()=>{
        //
        server.close()
    })

})