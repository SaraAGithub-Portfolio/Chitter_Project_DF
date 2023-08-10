import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import { authRoute } from './src/routes/auth.js';
import { peepsRoute } from './src/routes/peeps.js';

dotenv.config({ path: `.env.${process.env.NODE_ENV}` });
console.log("Loaded DBURI:", process.env.DBURI);
console.log("Loaded PORT:", process.env.PORT);
console.log("Loaded HOST:", process.env.HOST);

console.log('DB URI:', process.env.DBURI);
console.log("NODE_ENV:", process.env.NODE_ENV);

const port = process.env.PORT
const host = process.env.HOST;
const app = express();

const main = async () => {
    console.log(`Connecting to DB @ ${process.env.DBURI}`);
    await mongoose.connect(process.env.DBURI);
    console.log(`Connected to DB @ ${process.env.DBURI}`);
}

main().catch(err => console.log(err))

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Use the combined routes
app.use('/auth', authRoute);
app.use('/peeps', peepsRoute);
// app.get('/', (req, res) => {
//     res.send('Welcome to Chitter Backend')
// });

const server = app.listen(port, host, () => {
    const SERVERHOST = server.address().address;
    const SERVERPORT = server.address().port;
    console.log(`Server is running on http://${SERVERHOST}:${SERVERPORT}`);
});

export default server;
