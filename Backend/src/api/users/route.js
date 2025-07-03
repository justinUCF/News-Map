import express from 'express';

//connect to the database
import db from '../../db/connection.js';
import { ObjectId } from 'mongodb';

const router = express.Router();



// Export the router for use in your app
export default router;
