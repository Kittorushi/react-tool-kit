import nextConnect from 'next-connect';
import { connectToDatabase } from './database';
import session from './session';
import passport from '../lib/mongo/passport';

const middleware = nextConnect();
console.log(`---MIDDLER WARE 1 ====  ${middleware}-  MIDDLER WARE 1  END HERE `)
console.log("-----------------------MIDDLER WARE 1----------------------------")

const testmid = middleware
  .use(session)
  .use(passport.initialize())
  .use(passport.session());

console.log(`MIDDLER WARE ALL SESSION INIT  ${testmid} MIDDLER WARE ALL SESSION INIT END HERE `)
console.log("-----------------------MIDDLER WARE 2----------------------------")

// Connect to MongoDB and store the client instance
const checlk = connectToDatabase();
console.log(`MIDDLERWARE CONNECT TO DATABASE START ====  ${checlk} MIDDLERWARE CONNECT TO DATABASE END HERE `)
console.log("-----------------------MIDDLER WARE 3----------------------------")

export default middleware;
