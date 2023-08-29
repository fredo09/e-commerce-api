/*
 *  Import dependeces nodejs
 */

import express from "express";
import dbConnect from "./../config/DBConnect/index.js";

//Check dbConnection Mongo
dbConnect();

const app = express();

export default app;
