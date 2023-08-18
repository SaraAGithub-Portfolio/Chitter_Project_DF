import { validationResult } from 'express-validator';
import { signupService, loginUserService } from '../services/auth.service.js';

export const createUser = async (req, res) => {
    const result = validationResult(req)
    if (result.errors.length !== 0) {  // <-- Fix here
        return res.status(422).send('Signup unsuccessful');
    }
    try {
        const newUser = await signupService(req.body);
        res.status(201).json({ newUser });
    } catch (error) {
        console.error(error.message);
        res.status(400).send('Signup unsuccessful');
    }
}

export const loginUser = async (req, res) => {
    console.log('Login endpoint hit');
    const result = validationResult(req)
    if (result.errors.length !== 0) {
        return res.status(422).send('Log in unsuccessful');
    }
    try {
        const user = await loginUserService(req.body);
        res.status(200).json({ message: "Log in successful", user });
    } catch (error) {
        console.error(error.message);
        res.status(400).send('Log in unsuccessful');
    }
}
