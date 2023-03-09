import bodyParser from 'body-parser';
import comperssion from 'compression';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import express from 'express';
import http from 'http';
import mongoose from 'mongoose';

const app = express();
const PORT = 8800;
const MONGO_URL = 'mongodb+srv://ricki:mongodb@cluserts.m0ftvpb.mongodb.net/?retryWrites=true&w=majority';

app.use(
  cors({
    credentials: true,
  })
);

app.use(comperssion());
app.use(cookieParser());
app.use(bodyParser.json());

const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`server running on http://localhost:${PORT}/`);
});

mongoose.Promise = Promise;
mongoose.connect(MONGO_URL);
mongoose.connection.on('error', (error: Error) => console.log(error));
