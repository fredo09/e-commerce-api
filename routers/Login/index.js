/*
 *  Route Login
 */

import express from "express";
import { LoginCtr } from "./../../controllers/index.js";

const api = express();

//Login Path
api.post("/signIn", LoginCtr);

export default api;
