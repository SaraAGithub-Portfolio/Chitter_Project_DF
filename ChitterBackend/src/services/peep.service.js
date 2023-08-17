import Peep from '../models/peep.model.js'

export const addPeepService = async peep => {
    try {
        const newPeep = new Peep(peep);
        return await newPeep.save();
    } catch (error) {
        console.error('Error adding peep:', error);
        throw new Error('Failed to add peep');
    }
}
export const getPeepsService = async () => {
    try {
        return await Peep.find().sort({ dateCreated: -1 });
    } catch (error) {
        console.error('Error fetching peeps:', error);
        throw new Error('Failed to fetch peeps');
    }
}
export const getPeepById = async id => {
    try {
        return await Peep.findById(id);
    } catch (error) {
        console.error('Error fetching peep by ID:', error);
        throw new Error('Failed to fetch peep by ID');
    }
}
