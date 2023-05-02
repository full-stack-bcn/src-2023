
import mongodb from 'mongodb';

const url = "mongodb://admin:fullstack@localhost:27017?authSource=admin"
const client = new mongodb.MongoClient(url);

await client.connect();
console.log("connected");

const db = client.db("russian");
const tweets = db.collection("tweets");

const result = await tweets.find({ author: '10_GOP' }).limit(3).toArray();
console.log(result);

client.close();


