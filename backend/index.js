import express from 'express';
import 'dotenv/config';
import mainRouter from './src/routes/index.js';
import cors from "cors";
import connectDB from './db.js';
import auth from './middleware.js';

const app = express();
const port = process.env.PORT || 3000;

connectDB();

app.use(cors());
app.use(express.json());
app.use('/api/v1',mainRouter);
app.use('/api/v1', auth);

app.listen(port, function(err){
    if(err) console.log(err);
    else console.log(`server is running at port number ${port}`);
});