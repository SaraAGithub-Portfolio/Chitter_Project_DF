import express from 'express';
import { addPeep, getPeeps } from '../controller/peeps.controller.js';

const router = express.Router();

// Route to add a new peep
router.post('/', addPeep);

// Route to list all peeps
router.get('/', getPeeps);

export { router as peepsRoute }

