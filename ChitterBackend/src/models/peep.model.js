import mongoose from 'mongoose';

const peepSchema = new mongoose.Schema({
    peepDescription: { type: String, required: true },
    peepDateCreated: {
        type: Date,
        default: Date.now,
        required: true
    },
    peepMessage: { type: String, required: true, minLength: 1, maxLength: 280 },
    peepUser: { type: String, required: true },
});

const Peep = mongoose.model('Peep', peepSchema);
export default Peep;