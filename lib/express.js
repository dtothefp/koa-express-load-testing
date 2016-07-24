import express from 'express';
import {sources} from './config';
import {debug} from './utils/run-debug';
import listenCb from './utils/listen-cb';

const {DEBUG} = process.env;

debug(`Starting ${DEBUG}`);

const app = express();

app.use((req, res, next) => {
  res.send('Hello Express ES6');

  next();
});

const {serverPort: port = 3000} = sources;

app.listen(port, listenCb(port));