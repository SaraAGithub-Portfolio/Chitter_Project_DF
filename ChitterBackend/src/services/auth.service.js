import User from "../models/user.model.js";

export const signupService = async (newUser) => {
    console.log(newUser)
    try {
        const user = new User(newUser);
        console.log(user)
        return await user.save();
    } catch (error) {
        throw error
    }
}

export const loginUserService = async ({ email, password }) => {
    console.log('Attempting login for', email, password);
    try {
        const user = await User.findOne({ email, password });
        console.log('User found:', user);
        return user;
    } catch (error) {
        console.error('Error during login:', error);
        throw error
    }
}
