import axios from 'axios';

export const checkLogin = async ({ email, password }) => {
    try {

        const response = await axios.post(`http://localhost:4000/auth/login`, { email, password });


        console.log("Response from login API:", response.data);


        if (response.data.message) {
            alert(response.data.message);
        }

        return response.data;

    } catch (error) {
        console.error("Error during login:", error.response ? error.response.data : error.message);

        const errorMessage = error.response && error.response.data && error.response.data.message
            ? error.response.data.message
            : "Login failed!";

        return { error: errorMessage };
    }
}



