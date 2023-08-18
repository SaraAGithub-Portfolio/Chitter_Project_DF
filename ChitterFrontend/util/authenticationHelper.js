import axios from 'axios';

export const checkLogin = async ({ email, password }) => {
    const loginReturn = await axios.post(`http://localhost:4000/login`, { email, password });

    const loginStatus = loginReturn.status === 200;

    return loginStatus;
}