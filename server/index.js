import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';

import { app } from './server.js';

const __dirname = path.resolve();
const PORT = 8080;

app.use(express.static(path.join(__dirname, 'dist')));
app.use(bodyParser.json());

app.get('/', (_req, res) => {
  res.sendFile(path.join(__dirname + '/dist/index.html'));
});

app.listen(PORT);
