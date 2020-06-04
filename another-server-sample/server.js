const express = require('express')
const server = express()

const m1 = function(req,res,next){
	console.log('we are in middleware 1')
	next()
}
const m2 = function(req,res,next){
	console.log('we are in middleware 2')
	next()
}
const m3 = function(req,res,next){
	console.log('we are in middleware 3')
	next()
}
server.use(m1)
server.use(m2)

server.get('/',function(req,res,next){
	res.send('hello world')
})


server.listen(3232)