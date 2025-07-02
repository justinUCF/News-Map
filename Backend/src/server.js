// This is the main entry point for the Express server that handles API requests.
// It sets up the server and defines routes for handling requests.

import express from "express";
import cors from "cors";
import records from "./routes/record.js";

// Load environment variables from .env file if it exists
const PORT = process.env.PORT || 5050;
const app = express();


app.use(cors());
app.use(express.json());
app.use("/record", records);

// start the Express server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});