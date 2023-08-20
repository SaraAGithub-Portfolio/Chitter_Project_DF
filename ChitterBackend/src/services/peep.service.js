import Peep from '../models/peep.model.js'

export const getPeepsService = async () => {
    try {
        return await Peep.find({})
    }
    catch (error) {
        throw error;
    }
}

export const addPeepService = async (peep) => {

    try {
        const newPeep = new Peep(peep);
        return await newPeep.save();
    }
    catch (error) {
        throw error;
    }
}
