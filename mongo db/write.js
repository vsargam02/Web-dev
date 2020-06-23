const {MongoClient} = require('mongodb');

const MONGO_URL = 'mongodb://localhost:27017';
const DB_NAME ='tododb';
//if there is not tododb database it make a new automatically

async function writeTask(){
    const client = await MongoClient.connect(MONGO_URL)
    const tododb = client.db(DB_NAME)

    const todos = tododb.collection('todos') //collection like a table
    
    // const todo ={
    //     task: 'an important task',
    //     priority :2,
    //     owner : 'manager'
    // }
    // const result =todos.insertOne(todo)

    const resullt =await todos.insertMany([
        {task:'simple task',priority:4, owner:'security'},
        {task:'complicated task',priority:1, owner:'CEO'},
        {task:'some admisnistrative task',priority:3, owner:'manager'},
        {task:'extra task',priority:2, owner:'executive'},
        
        {task:'another task', owner:'security'},
        {task:'bonus task', owner:'security'},
    ])
    console.log(result)
}



writeTask()