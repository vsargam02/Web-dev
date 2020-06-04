const route = require('express').Router()

let teachers =  [
	{name: 'Arnav', subject: 'Wev Dev'},
	{name: 'Pateek', subject:'Cometitve Coding'}
]
route.get('/',(req,res)=>res.send(teachers))

route.get('/add',(req,res)=>{
	teachers.push({
		name: req.query.name,
		subject: req.query.subject
	})
	res.send(teachers)
})

route.get('/:id',(req,res)=> res.send(teachers[req.params.id]))






module.exports = route

//add new teacher
//localhost:2233/teachers/add?name=Lily&subjecet=java