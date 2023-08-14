import axios from 'axios'

export const getPeepsData = async () => {
    try {
        const response = await axios.get(`${import.meta.env.VITE_API_ENDPOINT_TEST}/peeps`);
        return response.data;
    } catch (error) {
        console.error('Error fetching peeps data', error);
        return [];
    }
}

export const addPeepData = async (newPeep) => {
    try {
        const response = await axios.post(`${import.meta.env.VITE_API_ENDPOINT_TEST}/peeps`, newPeep);
        return response.data;
    } catch (error) {
        return {
            status: error.response?.status,
            error: {
                type: 'post',
                message: 'Error posting new peep'
            }
        };
    }
}

