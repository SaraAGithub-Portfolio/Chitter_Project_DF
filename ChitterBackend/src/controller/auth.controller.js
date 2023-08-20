import { validationResult } from 'express-validator';
import User from '../models/user.model.js';
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";


const login = async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            const err = new Error('Login failed');
            err.statusCode = 422;
            err.data = errors.array();
            throw err;
        }

        const user = await User.findOne({ username: req.body.username });
        if (!user) {
            return res.status(404).send({
                accessToken: null,
                message: "Username not found"
            });
        }

        const passwordValid = bcrypt.compareSync(req.body.password, user.password);

        if (!passwordValid) {
            return res.status(401).send({
                accessToken: null,
                message: "Invalid username/password combination"
            });
        }

        const token = jwt.sign({ id: user.id }, process.env.SECRET, { expiresIn: 86400 });

        res.status(200).send({
            id: user._id,
            username: user.username,
            name: user.name,
            accessToken: token
        });
    } catch (err) {
        res.status(err.statusCode ?? 500).send({ message: err.data });
    }
};

const signup = (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            const err = new Error('Validation failed');
            err.statusCode = 422;
            err.data = errors.array();
            throw err;
        }

        const user = new User({
            name: req.body.name,
            username: req.body.username,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, 8)
        });

        user.save();
        res.status(201).send({ message: 'Signup successful' });
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
};

const loginFunction = { login, signup };

export default loginFunction;
