import nextSession from "next-session";

import { MongoClient } from "mongodb";
const MongoStore = require('connect-mongo')



export default async function (req, res) {
  console.log("HHHH")
  const client = await MongoClient.connect(process.env.NEXT_PUBLIC_MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  console.log(client)
  console.log("------------------------------SESSION 1 ----------------------------------")
  console.log("------------------------------SESSION 11 ----------------------------------")

  const mongoStore = new MongoStore({
    clientPromise: Promise.resolve(client),
    stringify: false,
  });
  console.log(mongoStore)
  console.log("-----------------------------SESSION 2 -----------------------------------")
  console.log("-----------------------------SESSION 22-----------------------------------")
  console.log("------------------------SESSSION 2 END ---------------------------")

  const options = {
    store: mongoStore,
  };
  console.log(options)
  console.log("-----------------------------SESSION 3  -----------------------------------")
  console.log("-----------------------------SESSION 33 -----------------------------------")

  const session = nextSession(options);
  console.log(session)
  console.log("------------------------------SESSION 4 ----------------------------------")
  console.log("------------------------------SESSION 44 ----------------------------------")

  const waiintline = await session(req, res);
  console.log(waiintline)
  console.log("------------------------------ SESSION 5 TEST DONE----------------------------------")


  console.log(`SESSION OBJECT --------  ${session} SESSION OBJEC END `)

  return session

}
