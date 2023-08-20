import express from 'express';
import { body } from 'express-validator';
import { checkDuplicateInfo } from '../middleware/validateSignup.js'
import loginFunction from '../controller/auth.controller.js';


const router = express.Router();

const { login, signup } = loginFunction

router.use((req, res, next) => {
    res.header(
        `Access-Control-Allow-Headers`,
        `x-access-token, Origin, Content-Type, Accept`
    );
    next();
})

router.post(`/signup`, [
    body(`email`).exists().normalizeEmail().escape().isEmail(),
    body(`name`).exists().escape().trim(),
    body(`username`).exists().escape().trim(),
    body(`password`).exists().escape().trim(),
    checkDuplicateInfo,
], signup);

router.post(`/login`, [
    body(`username`).exists().escape(),
    body(`password`).exists().escape(),

], login);


export { router as authRoute };
