import express from 'express'
import { leadRoutes } from './routes';
import 'dotenv/config';
import { ErrorProcessing } from './repositories/implementations/ErrorRepository';

const app = express()

app.use(express.json())

app.use(leadRoutes) // localhost:3333

app.use(ErrorProcessing) // middleware de erro

export { app };
