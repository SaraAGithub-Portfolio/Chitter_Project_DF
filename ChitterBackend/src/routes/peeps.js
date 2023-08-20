import express from 'express';
import { addPeep, getPeeps } from '../controller/peeps.controller.js';
import { validatePeeps } from '../middleware/validatePeeps.js';

const router = express.Router();

router.route(`/`)
    .get(getPeeps)
    .post(validatePeeps, addPeep);

export { router as peepsRoute }

