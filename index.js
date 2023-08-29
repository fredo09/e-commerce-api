/*
 * Iniciamos el servidor Api en express
 */

import http from "http";
import app from "./app/app.js";

const PORT = process.env.PORT || 3000;

// Create server
const server = http.createServer(app);

server.listen(
  PORT,
  console.log(`Server levantado en http://localhost:${PORT}/`)
);
