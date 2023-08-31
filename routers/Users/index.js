/*
 *  Routers Users
 */

import express from "express";
import { resgisterUserCrt } from "./../../controllers/UserController/index.js";

const api = express();

//User Paths
api.post("/signUp", resgisterUserCrt);

export default api;
