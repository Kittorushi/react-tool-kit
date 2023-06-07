import { MongoClient } from 'mongodb';

let client = null;
const uri = process.env.NEXT_PUBLIC_MONGODB_URI;
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

export async function connectToDatabase() {

  const client = new MongoClient(uri, options);

  try {
    // Connect to the MongoDB database
    await client.connect();
    console.log('Database connected successfully');
    return client;
  } catch (error) {
    console.error('Error connecting to the database:', error);
    throw error;
  }
  // console.log("**********************PHASE 1 *****************************")
  // if (!client) {
  //   console.log("**********************PHASE 2 *****************************")
  //   client = new MongoClient(process.env.NEXT_PUBLIC_MONGODB_URI, {
  //     useNewUrlParser: true,
  //     useUnifiedTopology: true,
  //   });
  //   console.log("**********************PHASE 2 CONTINUE *****************************")
  //   console.log(`DATBASE CLIENT ===   ${client}  DATBASE CLIENT END HERE`)
  //   console.log("**********************PHASE 3 *****************************\n ")

  //   const chhecll = await client.connect();
  //   console.log("**********************PHASE 4 *****************************")
  //   console.log(` DATABASE CONNECT CLIENT === ${chhecll}  DATABASE CONNECT CLIENT END HERE`)
  //   console.log("**********************PHASE 5 ***************************** \n")
  //   console.log(`DATABASE CLIENT TEST AGAIN 2nd TIME   ---------   ${client} DATABASE OBJECT CLIENT --------END DATABSE HERE -----`)
  // }
  // console.log(`\n DATABASE OBEJCT Client  ---------   ${client} DATABASE OBJECT CLIENT --------END -----`)
  // return client;
}

export async function setUpDb(db) {
  console.log("**********************RISTA 4 *****************************")
  db.collection('users').createIndex({ email: 1 }, { unique: true });
  console.log("**********************RISTA DAR *****************************")
}

export default async function database(req, res, next) {
  console.log("**********************DATABASE *****************************")
  const client = await connectToDatabase();
  // console.log(client)
  console.log("**********************DATABASE 1 *****************************")
  req.dbClient = client;
  req.db = client.db(process.env.NEXT_PUBLIC_MONGODB_DB);
  console.log("**********************DATABASE 2*****************************")
  const cchhc = await setUpDb(req.db);
  console.log("**********************DATABASE 4*****************************")

  // console.log(cchhc)
  console.log("**********************DATABASE 5*****************************")
  return next();
}
