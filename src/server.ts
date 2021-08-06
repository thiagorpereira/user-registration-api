import express from 'express';
import "./database"; 

import "./shared/container" 
import { router } from './routes';
import upload from './config/upload';

const app = express();

app.use(express.json());

app.use("/avatar", express.static(`${upload.tmpFolder}/avatar`));

app.use(router)

app.listen(3333, () => console.log("Server is running!"))
