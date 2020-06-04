// function fakeDownload(done){
// 	setTimeout(function(){
// 		let downloadedData = "some data we ripped of the interweb"
// 		done(downloadedData)
// 	},1000)
// }

// fakeDownload(function(data){
// 	console.log("we downloaded a file which has this data ->")
// 	console.log(data)
// })

 function fakedownloadPromise(correct){
 	return new Promise(function(resolve,reject){

 		setTimeout(function(){
 			let downloadedData = " some data from net"
 			console.info("downloading has completed")
 			if(correct){
 				resolve(downloadedData)
 			}else{
 				reject(new Error("could not download the file"))
 			}
 		},1000)
 	})
 }

 let downloaded = fakedownloadPromise(true);
 downloaded.catch(function(err){
 	console.log(err)
 })
 setTimeout(function(){
 	downloaded.then(function(data){
 		console.info("the data that was downloaded is this ->")
 		console.info(data)
 	})
 }),3000