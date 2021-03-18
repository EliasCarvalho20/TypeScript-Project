import 'reflect-metadata';

import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

import './database/connection';
import routes from './routes';
import { tempFolder } from './config/fileUpload';

dotenv.config();

const PORT: number = Number(process.env.PORT) || 3333;
const app = express();

app.use(bodyParser.json());
app.use('/files', express.static(tempFolder));
app.use(routes);

app.listen(PORT, () => console.log(`Patiently Waiting At ${PORT}`));
