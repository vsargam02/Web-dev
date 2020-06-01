$(function(){

	let newTodoBox = $('#newtodo')
	let addtodoBtn = $('#addtodo')
	let todoList = $('#todolist')

	addtodoBtn.click(function(){
		let newtodo = newTodoBox.val() //val returns the iput value

		$.post(   //request is sent from your page to the server and server sent back the response
			       //so the page is not refresh so new page is not fetch from the server
			       // only new post request is made and some data downloaged from the serer back
			'/todos/',  // three variables 1: path where we want to send post req
			{task: newtodo}, //2:body javascript object
			function(data){  //3:callback function :runs when post req send,when response is back  this run then this function run
				todoList.empty(); //empty all the html data like li
				for (todo of data){
					todoList.append('<li>' + todo.task + '</li>')
				}
			})


	})
})

