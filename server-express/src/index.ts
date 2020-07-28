import express from 'express';
import { AppRouter } from './AppRouter';
import http from 'http';
import bodyParser from 'body-parser';
import cookieSession from 'cookie-session';

import './controllers/LoginController';
import './controllers/RootController';

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieSession({ name: 'session', keys: ['loggedIn'] }));
app.use(AppRouter.getInstance());

http.createServer(app).listen(3000, () => {
  console.log('listening on 3000');
});
