/*
 *  Root paths
 */

import express from "express";
import userPaths from "./Users/index.js";

const api = express();

//root paths
api.use(userPaths);

export default api;
