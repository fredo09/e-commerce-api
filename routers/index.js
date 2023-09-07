/*
 *  Root paths
 */

import express from "express";
import userPaths from "./Users/index.js";
import loginPath from "./Login/index.js";

const api = express();

//root paths
api.use(userPaths);
api.use(loginPath);

export default api;
