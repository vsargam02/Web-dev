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
	
async function  task(){
	await helloSlayer(3,'arnav')     //due to await function the exectuion is stop till the promise is resolve
	await helloSlayer(2,'prateek')   // then next line exectues
	await helloSlayer(3,'rishab')
}

task()
helloSlayer(4,'rishi') // it running parallel through the entire program  
// await cannot use globlly it use under nested function
