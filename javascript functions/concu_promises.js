// now using with promises 
//to make the sequnce
function helloSlayer(times,name){
	return new Promise((resolve,reject) => {
		let count=0
	let loopId = setInterval(()=>{
		count++
		console.log('hello '+ name)
		if(count===times){
			clearInterval(loopId)
			resolve()
		}
		
	},100)
})

}
	
//Concurrently
// helloSlayer(3,'arnav')
// 	.then(helloSlayer(2,'prateek'))
// 	.then(helloSlayer(3,'rishab'))
// 	.then(helloSlayer(2,'harshit'))
// 	.then(helloSlayer(4,'ayush'))
	

//Sequentially
helloSlayer(3,'arnav')       
	.then(() => helloSlayer(2,'prateek'))
	.then(() => helloSlayer(3,'rishab'))
	.then(() => helloSlayer(2,'harshit'))
	.then(() => helloSlayer(4,'ayush'))

