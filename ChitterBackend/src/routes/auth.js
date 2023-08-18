import express from 'express';
import { createUser, loginUser } from '../controller/auth.controller.js';

const router = express.Router();

router.post('/signup', createUser);
router.post('/login', loginUser);


export { router as authRoute };
