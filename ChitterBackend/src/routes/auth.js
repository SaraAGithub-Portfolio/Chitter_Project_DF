import express from 'express';
import { userValidationRules, validate } from '../middleware/backend.validation.js';
import { createUser, loginUser } from '../controller/auth.controller.js';

const router = express.Router();

router.post('/signup', userValidationRules(), validate, createUser);
router.post('/login', loginUser);


export { router as authRoute };

