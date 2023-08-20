import axios from 'axios';

export const addUserAsync = async (newUser) => {
    try {
        const response = await axios.post(`http://localhost:4000/auth/signup`, newUser);
        return response.data;
    } catch (e) {
        return {
            status: e.response?.status || undefined,
            error: {
                type: `post`,
                message: e.response?.message || e.message
            }
        };
    }

}
export const checkLoginAsync = async (loginDetails) => {
    try {
        const responseData = await axios.post(`http://localhost:4000/auth/login`, loginDetails);
        const data = responseData.data;

        if (data.accessToken) {
            localStorage.setItem(`user`, JSON.stringify(responseData.data));
        }

        return data;
    }
    catch (e) {
        return {
            status: e.response?.status || undefined,
            error: {
                type: `post`,
                message: e.response?.message || e.message
            }
        };
    }

}

export const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem(`user`));
};

export const logOut = () => {
    localStorage.removeItem(`user`);
    alert("Log out successful")
};
