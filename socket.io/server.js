const http = require('http')
const express = require('express')
const app = express()
const socketio =require('socket.io')

const server = http.createServer(app)
const io = socketio(server)

io.on('connection',(socket)=>{
    console.log('connected with socket id=', socket.id)
    
    socket.on('msg_send',(data)=>{
        io.emit('msg_rcvd',data) //io is to send msg everyone and itself
        //socket.emit('msg_rvcd,data) //send msg to itself, gets back to same socket
    })
})

app.use('/',express.static(__dirname + '/public'))

server.listen(4444, ()=>{
    console.log('statred on http://localhost:4444')
})