import peepSchema from '../models/peep.model.js';

export const addPeep = async (req, res) => {
    try {
        const { peepMessage } = req.body;
        if (!peepMessage || peepMessage.trim().length === 0) {
            return res.status(400).json({ message: 'Peep message cannot be empty' });
        }
        if (peepMessage.length > 280) {
            return res.status(400).json({ message: 'Peep message cannot be longer than 280 characters' });
        }

        const newPeep = new peepSchema(req.body);
        const savedPeep = await newPeep.save();
        console.log(req.body);
        res.status(201).json(savedPeep);

    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
}

export const getPeeps = async (req, res) => {
    try {
        const peep = await peepSchema.find({});
        console.log("Peeps retrieved:", peep);
        res.status(200).json(peep);
    } catch (error) {
        console.log("Error retrieving peeps:", error);
        res.status(500).send(error);
    }
};

