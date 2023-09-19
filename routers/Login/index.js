/*
 *  Route Login
 */

import express from "express";
import { LoginCtr, getUserProfile } from "./../../controllers/index.js";

const api = express();

//Login Path
api.post("/users/signIn", LoginCtr);
api.get("/users/profile", getUserProfile);

export default api;
