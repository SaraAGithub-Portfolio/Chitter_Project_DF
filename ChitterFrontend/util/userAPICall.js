import axios from 'axios';

export const addUser = async (newUser) => {
    try {
        const response = await axios.post(`http://localhost:4000/auth/signup`, newUser);
        return response.data;
    } catch (error) {

        if (error.response?.status === 422) {
            return {
                status: error.response?.status,
                errors: error.response?.data?.errors || {}
            };
        }
        return {
            status: error.response?.status,
            error: {
                type: 'post',
                message: 'Error adding new user'
            }
        };
    }
}

