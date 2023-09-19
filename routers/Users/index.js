/*
 *  Routers Users
 */

import express from "express";
import { resgisterUserCrt } from "./../../controllers/index.js";

const api = express();

//User Paths
api.post("/users/signUp", resgisterUserCrt);

export default api;
