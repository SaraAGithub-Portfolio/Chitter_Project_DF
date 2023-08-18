import User from "../models/user.model.js";

export const signupService = async (newUser) => {
    console.log(newUser)
    try {
        const user = new User(newUser);
        console.log(user)
        return await user.save();
    } catch (error) {
        throw Error
    }
}

export const loginUserService = async ({ username, password }) => {
    try {
        return await User.findOne({ username, password });
    } catch (error) {
        throw Error
    }
}