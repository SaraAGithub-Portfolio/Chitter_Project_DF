import User from "../models/user.model.js";

export const checkDuplicateInfo = async (req, res, next) => {
    try {
        const username = await User.findOne({ username: req.body.username })
        if (username) {
            res.status(422).send({ message: ' Username is already in use!' });
            return;
        }
    } catch (e) {
        res.status(500).send({ message: e });
        return;
    }
    try {
        const email = await User.findOne({ email: req.body.email })
        if (email) {
            res.status(422).send({ message: 'Email already in use!' });
            return;
        }
    } catch (e) {
        res.status(500).send({ message: e });
        return;
    }
    next();

};
