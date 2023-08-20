import mongoose from 'mongoose';

const peepSchema = new mongoose.Schema({
    name: {
        type: String, required: true
    },
    username: { type: String, required: true },
    message: { type: String, required: true },
    timestamp: { type: String, required: true },
});

const Peep = mongoose.model(`Peep`, peepSchema);
export default Peep;