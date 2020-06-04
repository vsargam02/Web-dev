/*understanding Asynchronous javascript - with callbacks
a program that downloads a file,
compresses it , and then uploads it somewhere else.
*/



function download(url,downloaded){
	console.log('downloading from ${url}')
	if (!url.startsWith('http')){
		return downloaded(new Error('URL must start with http'))
	}
	setTimeout(() => {
		let savedFile = url.split('/').pop()
		console.log('download and saved as ${savedFile}')
		downloaded(null,savedFile)
	},3000)
}

function compress(file,format,compressed){
	console.log('compressing ${file}')
	if (['zip','gzip','7z'].indexOf(format)=== -1){
		return compressed(new Error('we only support zip,gzip and 7z'))
	}
	setTimeout(()=>{
		let archive = file.split('.')[0] + '.' + format
		console.log('compressed and saved as ${archive}')
		compressed(null,archive)
	}, 2000)
}

function upload(server,file,uploaded){
	console.log('Uploading ${file} to ${server}')
	if (!server.startsWith('ftp://')){
		return uploaded(new Error('we can only upload FTP servers'))
	}
	setTimeout(()=>{
		let remotepath = '${server}/${file}'
		console.log('uploadded to ${remotepath}')
		uploaded(null,remotepath)
	},1000)
}

download('http://somesite.com/path/image.jpg',(err,file) =>{
	if (err) throw err

	compress(file,'gzip',(err,archive)=>{
		if (err) {
			console.warn(err)
			achrive=file
		}


		upload('ftp://file.com', archive, (err)=>{
			if (err) throw err

		})
	})
})
