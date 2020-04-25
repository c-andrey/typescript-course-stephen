import express from 'express';
import { router } from './routes';
import http from 'http';
import bodyParser from 'body-parser';
import cookieSession from 'cookie-session';

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieSession({ keys: ['asd'] }));
app.use(router);

http.createServer(app).listen(3000, () => {
  console.log('listening on 3000');
});
