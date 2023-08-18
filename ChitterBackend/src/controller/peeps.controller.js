import { validationResult } from 'express-validator';
import { addPeepService, getPeepsService } from '../services/peep.service.js';

export const addPeep = async (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).send('Adding new peep failed');
    }
    try {
        const addPeep = await addPeepService(req.body);
        res.status(201).json({ addPeep });
    } catch (error) {
        console.log(error);
        res.status(400).send('Adding new peep failed');
    }
}


export const getPeeps = async (req, res) => {
    try {
        const peeps = await getPeepsService();
        res.json(peeps)
    } catch (error) {
        res.status(404).send('Not found');
    }
}
//

