const {MongoClient}=require('mongodb');
const url ='mongodb://localhost:27017';
const client = new MongoClient(url);

async function dbConnect()
{
    let result = await client.connect();
    let db = result.db('student');
    return db.collection('profile');
}

module.exports=dbConnect;