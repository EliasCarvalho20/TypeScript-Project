import 'reflect-metadata';

import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

import './database/connection';
import routes from './routes';

dotenv.config();

const PORT: number = Number(process.env.PORT) || 3333;
const app = express();

app.use(bodyParser.json());
app.use(routes);

app.listen(PORT, () => console.log(`Patiently Waiting At ${PORT}`));
