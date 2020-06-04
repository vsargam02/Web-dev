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
async function task(){
	await Promise.all([
		 helloSlayer(6,'arnav'),
		 helloSlayer(2,'rishab') ,
		 helloSlayer(3,'harshit') 
		 ])
	console.log('------first batch over------')
	await Promise.all([
		helloSlayer(4,'ayush'),
		helloSlayer(6,'garima'),
		helloSlayer(2,'kartik')
		])


}
task()