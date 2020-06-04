const express = require('express')
const server = express()

server.get('/',function(req,res,next){
	console.log('yo')
	res.send('hello world')
})
server.get('/greet/:tod/:name',function(req,res,next){
	let tod = 'morning'
	switch(req.params.tod){
		case 'evening': tod = "Evening"; break;
		case 'evening': tod = "Morning"; break;
	}
	let greeting = "good " + tod + ", " + req.params.name
	res.send(greeting)
})

server.get('/html',function(req,res,next){
	res.send(`
		<html>
			<body>
				<h1>This is a HTML page</h1>
				<i>This looks really nice</i>
			</body>
		</html>`)
})

server.listen(2121)