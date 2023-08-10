import User from '../models/user.model.js';

export const createUser = async (req, res) => {
    try {
        const newUser = new User(req.body);
        await newUser.save();
        res.status(201).json({ user: newUser, message: 'User successfully registered' });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

export const loginUser = async (req, res) => {
    try {
        const { email, username, password } = req.body;

        const condition = email ? { email } : { username };
        const user = await User.findOne(condition);

        // If both email and username are provided, ensure both match
        if (email && username && (user.username !== username || user.email !== email)) {
            return res.status(404).json({ message: 'User not found' });
        }

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        if (password !== user.password) {
            return res.status(401).json({ message: 'Incorrect password' });
        }

        res.status(200).json({ message: 'Login successful', user });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};





