// This is the main entry point for the Express server that handles API requests.
// It sets up the server and defines routes for handling requests.

import express from "express";
import cors from "cors";
import registration from "./api/users/route.js";
import dailyNews from "./api/dailyNews/route.js";

// Load environment variables from .env file if it exists
const PORT = process.env.PORT || 5050;

//create server using express, app is the server object
const app = express();

// cors is a middleware that allows the server to share information from the front & back end
// these lines enable cors and tell the server to allow jsons
app.use(cors());
app.use(express.json());

//mount specific api files
app.use("/api/users/route", registration);
app.use("/api/dailyNews/route", dailyNews);

// start the Express server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});