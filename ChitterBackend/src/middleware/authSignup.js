import User from "../models/user.model";

export const checkDuplicateAccount = async (req, res, next) => {
    try {
        const username = await User.findOne({ username: req.body.username })
        if (username) {
            response.status(400).send({ message: 'Username already in use' });
            return;
        }
    } catch (error) {
        response.status(500).send({ message: error });
        return;
    }
    try {
        const email = await User.findOne({ email: req.body.email })
        if (email) {
            response.status(400).send({ message: "Email already in use" });
            return;
        }
    } catch (error) {
        response.status(500).send({ message: error });
        return;
    }
    next();
}