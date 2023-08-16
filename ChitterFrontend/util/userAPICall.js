import axios from 'axios';

export const addUser = async (newUser) => {
    try {
        const response = await axios.post(`http://localhost:4000/auth/signup`, newUser);
        return response.data;
    } catch (error) {
        return {
            status: error.response?.status,
            error: {
                type: 'post',
                message: 'Error adding new user'
            }
        };
    }
}

export const userLogin = async (loginDetails) => {
    try {
        const response = await axios.post(`http://localhost:4000/auth/login`, loginDetails);
        return response.data;
    } catch (error) {
        return {
            status: error.response?.status,
            error: {
                type: 'login',
                message: 'Error logging in'
            }
        };
    }
}

export const userLogout = async (loginDetails) => {
    try {
        const response = await axios.post(`http://localhost:4000/auth/logout`, loginDetails);
        return response.data;
    } catch (error) {
        return {
            status: 500,
            error: {
                type: 'logout',
                message: 'Error logging out'
            }
        };
    }
}
