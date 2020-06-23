const {MongoClient} = require('mongodb');

const MONGO_URL = 'mongodb://localhost:27017';
const DB_NAME ='tododb';
//if there is not tododb database it make a new automatically

//ASYNC IFEE
(async ()=>{
    const client = await MongoClient.connect(MONGO_URL)

    const tododb = client.db(DB_NAME)

    console.log(tododb)
})()