const util=require('util')  //convert  function return in promise wat into callback way
function download(url) {
	return new Promise((resolve,reject)=>{
		console.log('downloading from ${url}')
	if (!url.startsWith('http')){
		return reject(new Error('URL must start with http'))
	}
	setTimeout(() => {
		let
		 savedFile = url.split('/').pop()
		console.log('download and saved as ${savedFile}')
		resolve(savedFile)
	},3000)
 	})
	
}

function compress(file,format){
	return new Promise((resolve,reject)=>{
		console.log('compressing ${file}')
	if (['zip','gzip','7z'].indexOf(format)=== -1){
		return reject(new Error('we only support zip,gzip and 7z'))
	}
	setTimeout(()=>{
		let archive = file.split('.')[0] + '.' + format
		console.log('compressed and saved as ${archive}')
		resolve(archive)
	}, 2000)
	})
	
}

function upload(server,file) {
	return new Promise((resolve,reject) =>{
		console.log('Uploading ${file} to ${server}')
	if (!server.startsWith('ftp://')){
		return reject(new Error('we can only upload FTP servers'))
	}
	setTimeout(() => {
		let remotepath = '${server}/${file}'
		console.log('uploaded to ${remotepath}')
		resolve(remotepath)
	},1000)

	})
	
}

const downloadCb = util.callbackify(download)
const compressCb = util.callbackify(compress)
const uploadCb = util.callbackify(upload)

downloadCb('http://somesite.com/path/image.jpg',(err,file) =>{
	if (err) throw err

	compressCb(file,'zip',(err,archive)=>{
		if (err) {
			console.warn(err)
			achrive=file
		}


		uploadCb('ftp://file.com', archive, (err)=>{
			if (err) throw err

		})
	})
})
