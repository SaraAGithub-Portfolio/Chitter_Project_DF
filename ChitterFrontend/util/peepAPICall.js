import axios from 'axios'

export const getPeepsData = async () => {
    try {
        const response = await axios.get(`http://localhost:4000/peeps`);
        return response.data;
    } catch (error) {
        console.error('Error fetching peeps data', error);
        return [];
    }
}
export const addPeepData = async peep => {
    console.log("Peep being sent:", peep);
    try {
        const response = await axios.post(`http://localhost:4000/peeps`, peep);
        return { peep: response.data, status: response.status };
    } catch (error) {
        return {
            status: error.response?.status ?? error.status,
            error: {
                type: 'post',
                message: error.response?.message ?? error.message
            }
        };
    }
}



