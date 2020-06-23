const {MongoClient} = require('mongodb');

const MONGO_URL = 'mongodb://localhost:27017';
const DB_NAME ='tododb';

async function readTask(){
    const client = await MongoClient.connect(MONGO_URL)
    const tododb = client.db(DB_NAME)

    const todos = tododb.collection('todos')

    //all database are selected
    const todoArr = await todos.find({}).toArray()
    todoArr.forEach((todo)=> console.log(JSON.stringigy(todo)))

    //query parameter,only priority 1 ae fetch
    const todoArr =await todo.find({priority:1}).toArray
    todoArr.forEach((todo)=> console.log(JSON.stringigy(todo)))

    //priority greater than 1
    const todoArr =await todo.find({priority: {$gt: 1}}).toArray
    todoArr.forEach((todo)=> console.log(JSON.stringigy(todo)))

    //it return all those which have not priority
    const todoArr =await todo.find({priority : {$exist: false }}).toArray
    todoArr.forEach((todo)=> console.log(JSON.stringigy(todo)))

    // using AND operater
    const todoArr =await todo.find({
        $and: [
            {priority : {$lt :3}},
            {priority : {$gt:1}}
        ]
    }).toArray
    todoArr.forEach((todo)=> console.log(JSON.stringigy(todo)))

    
    //another exampleconst todoArr =await todo.find({
        const todoArr =await todo.find({  
        $and: [
            {owner : 'manager'},
            {priority : {$gt:1}}
        ]
    }).toArray
    todoArr.forEach((todo)=> console.log(JSON.stringigy(todo)))

    const todoArr = await todos.find({}).sort({priority:1}).toArray()

    const todoArr = await todos.find({priority:{$exists:true}}).sort({priority:1}).toArray()



}

readTask()