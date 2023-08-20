import axios from 'axios'

export const getPeepDataAsync = async () => {
    try {
        const responseData = await axios.get(`http://localhost:4000/peeps`);
        return responseData;
    }
    catch (e) {
        return { error: `Error` };
    }

}
export const sendPeepDataAsync = async (peep) => {

    try {
        const responseData = await axios.post(`http://localhost:4000/peeps`, peep);
        return responseData.data;

    }
    catch (e) {
        return {
            status: e.response?.status,
            error: {
                type: `post`,
                message: e.response?.message
            }
        };
    }
}



