
const route = require('express').Router()


let todos = [
	{task: ' this is the first task'},
	{task: 'this is another task'}
]



route.get('/',function(req,res){
	res.render('todos',{todos})  //name of hbs file and other is and object where send todos

})


route.post('/',function(req,res){
	todos.push({
		task: req.body.newtodo
	})
	res.redirect('todos')  //back to itself

})

module.exports = route