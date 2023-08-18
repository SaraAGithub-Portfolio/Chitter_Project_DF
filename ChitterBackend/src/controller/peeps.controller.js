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



// try {
//     const { username, message, date } = req.body;
//     if (!message || message.trim().length === 0) {
//         return res.status(400).json({ message: 'Peep message cannot be empty' });
//     }
//     if (message.length > 280) {
//         return res.status(400).json({ message: 'Peep message cannot be longer than 280 characters' });
//     }

// const newPeep = new peepSchema({
//     username: username,
//     message: message,  // Change this line
//     dateCreated: date
// });

// const savedPeep = await newPeep.save();
// console.log(req.body);
// res.status(201).json(savedPeep);

//     } catch (error) {
//         console.log(error);
//         res.status(500).send(error);
//     }
// }


export const getPeeps = async (req, res) => {
    try {
        const peeps = await getPeepsService();
        res.json(peeps)
    } catch (error) {
        res.status(404).send('Not found');
    }
}
//     try {
//         const peep = await peepSchema.find({});
//         console.log("Peeps retrieved:", peep);
//         res.status(200).json(peep);
//     } catch (error) {
//         console.log("Error retrieving peeps:", error);
//         res.status(500).send(error);
//     }
// };

