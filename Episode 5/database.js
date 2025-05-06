const { MongoClient } = require("mongodb");

const URI =
  "mongodb+srv://Rohanrana2003:Rohan%400274@node.qf4mfrd.mongodb.net/";

const client = new MongoClient(URI);
const dbName = "HelloWorld";

async function main() {
  await client.connect();
  console.log("Connected Successfully to the server");
  const db = client.db(dbName);

  const collection = db.collection("User");
  // const data = { name: "Rana", age: 21 };

  // const insertDocuments = await collection.insertOne(data);
  // console.log("Inserted Documents:", insertDocuments);

  // const findDocuments = await collection.find({}).toArray();
  // console.log("Found Documents:", findDocuments);

  const result = await collection.find({ age: "27" }).toArray();
  console.log("Result", result);
  return "Done";
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());
