import bodyParser from 'body-parser';
import comperssion from 'compression';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import express from 'express';
import http from 'http';

const app = express();
const PORT = 8800;

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
