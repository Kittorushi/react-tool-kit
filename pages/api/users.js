import nextConnect from 'next-connect';
import middleware from '../../middlewares/middleware';
import { connectToDatabase } from '../../middlewares/database';
// import { extractUser } from '../../lib/mongo/api-helpers';
// import isEmail from 'validator/lib/isEmail';
// import normalizeEmail from 'validator/lib/normalizeEmail';
// import bcrypt from 'bcryptjs';
// Connect to MongoDB and store the client instance


const dbPromise = connectToDatabase();

const handler = nextConnect();

const handcheck = handler.use(middleware);
// console.log(` \n DB PROMISE ${dbPromise} --\n-- and ------ HANDLER ${handler} --\n --- and -- ---- ${handcheck}---- END---\n-`)
// handler.post(async (req, res) => {
//     console.log("-----------------USER >JS FILE------------------")


//     try {
//         // const client = await dbPromise;
//         // const db = client.db(process.env.NEXT_PUBLIC_MONGODB_DB);

//         // const { name, password } = req.body;
//         // const email = normalizeEmail(req.body.email);

//         // // Perform your database operations using the db instance
//         // // ...

//         // res.status(201).json({
//         //     user: extractUser(req),
//         // });
//     } catch (error) {
//         console.log(`TEEETTTEETTETTETET`)
//         console.error(error);
//         res.status(500).json({ message: 'Internal Server Error' });
//     }
// });

handler.get(async (req, res) => {
    res.send("Hello world")
})




export default handler;






// // POST /api/users
// export default async function handler(req, res) {

//     const db = client.db(process.env.NEXT_PUBLIC_MONGODB_DB);
//     console.log(req)
//     try {
//         // Wait for the MongoDB connection to be established
//         const db = await dbPromise;

//         const { name, password } = req.body;
//         const email = normalizeEmail(req.body.email);

//         // Perform your database operations using the db instance
//         // ...

//         res.status(201).json({
//             user: extractUser(req),
//         });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: 'Internal Server Error' });
//     }
// }

// export default handler;