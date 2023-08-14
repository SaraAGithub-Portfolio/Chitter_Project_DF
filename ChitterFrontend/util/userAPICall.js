import axios from 'axios';

export const addUser = async (newUser) => {
    try {
        const response = await axios.post(`${import.meta.env.VITE_API_ENDPOINT}auth/signup`, newUser);
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
        const response = await axios.post(`${import.meta.env.VITE_API_ENDPOINT}auth/login`, loginDetails);
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

export const userLogOut = async (loginDetails) => {
    try {
        const response = await axios.post(`${import.meta.env.VITE_API_ENDPOINT}auth/logout`, loginDetails);
        return response.data;
    } catch (error) {
        return {
            status: error.response?.status,
            error: {
                type: 'logout',
                message: 'Error logging out'
            }
        };
    }
}