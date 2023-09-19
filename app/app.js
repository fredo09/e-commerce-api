/*
 *  Import dependeces nodejs
 */

import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import { erroPathNotFound } from "./../middlewares/errorHanddlers/index.js";
import dbConnect from "./../config/DBConnect/index.js";
import rootPatsh from "./../routers/index.js";

//config Enviroment variables
dotenv.config();

//Check dbConnection Mongo
dbConnect();

const app = express();

//Middlewares BodyParser
app.use(bodyParser.urlencoded({ extended: false, limit: "50mb" }));
app.use(bodyParser.json({ limit: "50mb" }));

//Errors
//app.use(erroPathNotFound);

app.use(`/api/${process.env.API_VERSION}`, rootPatsh);

export default app;
