import User from "../models/user.model.js";

const checkDuplicateInfo = async (req, res, next) => {
    try {
        const username = await User.findOne({ username: req.body.username });
        if (username) {
            return res.status(400).send({ message: 'Username already in use' });
        }

        const email = await User.findOne({ email: req.body.email });
        if (email) {
            return res.status(400).send({ message: 'Email already in use' });
        }

        next();

    } catch (error) {
        return res.status(500).send({ message: error.message });
    }
}

export default checkDuplicateInfo;
