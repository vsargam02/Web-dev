const {db} = require('./db/model')
const {app} = require('./server')

const start = async()=>{
    try{
        await db.sync();

        app.listen(3131,()=>{
            console.log('server started on http://localhost:3131')
        })

    }catch(e){
        console.error(e)

    }
}
start()