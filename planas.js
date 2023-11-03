/* const {MongoClient} = require('mongodb'); 


const conexion = async () =>{
    try {
    const client = new MongoClient(process.env.MONGO_URI,{
        useNewUrlParser: true,
        userUnifiedTopology: true,
    })

    await client.connect()
        
    } catch (error) {
        
    }
}


const db = client.db();

const user = db.collection('users');

user.find({}).toArray();


 */

/* const {MongoClient} = require('mongodb');

const conexion = async () =>{
    try {
        const client = new MongoClient(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })   
        await client.connect();

        const db = client.db();
        
        const user = db.collection('users');

        const data = await user.find({}).toArray();
    } catch (error) {
        
    }
} */

/* const {MongoClient} = require('mongodb');

const client = new MongoClient(process.env.MONGO_URI,{
    useNewUrlParser: true,
    userUnifiedTopology: true
})

await client.connect();

const db = client.db();

const user = db.collection('users');

const data = await user.find({}).toArray(); */
/* 
const {MongoClient} = require('mongodb');
const client = new MongoClient(process.env.MONGO_URI, {
    newUseUrlParser: true,
    newUnifiedTopology: true
})

await client.connect();

const db = client.db();

const user = db.collection('users');

const data = await user.find({}).toArray() */


/* const {MongoClient} = require('mongodb');

const client = new MongoClient(process.env.MONGO_URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

await client.connect();

const db = client.db();

const user = db.collection('users');

const data = await user.find({}).toArray(); */
/* 

const {MongoClient} = require('mongodb');

const client = new MongoClient(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true});

await client.connect();

const db = client.db();

const collection = db.collection('users');

const data = await collection.find({}).toArray();


const {MongoClient} = require('mongodb');

const client = new MongoClient(process.env.MONGO_URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})

await client.connect();

const db = client.db();

const collection = db.collection('users');

const data = await collection.find({}).toArray(); */