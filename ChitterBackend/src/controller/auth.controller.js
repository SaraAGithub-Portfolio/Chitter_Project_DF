// controller/auth.controller.js

import User from '../models/user.model.js';

export const createUser = (req, res) => {
    const { email } = req.body;

    User.findOne({ email }, (err, user) => {
        if (user) {
            res.status(400).send({ message: 'User already exists' });
        } else {
            const newUser = new User(req.body);
            newUser.save(err => {
                if (err) {
                    res.status(500).send(err);
                } else {
                    res.send({ message: 'Registration successful' });
                }
            });
        }
    });
}

export const loginUser = (req, res) => {
    const { email, password } = req.body;

    User.findOne({ email }, (err, user) => {
        if (user && password === user.password) {
            res.send({ message: 'Login success', user });
        } else {
            res.status(404).send({ message: 'Details not found' });
        }
    });
}


