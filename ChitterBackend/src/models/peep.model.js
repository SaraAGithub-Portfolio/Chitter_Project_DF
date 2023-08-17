import mongoose from 'mongoose';

const peepSchema = new mongoose.Schema({
    dateCreated: {
        type: Date,
        default: Date.now,
        required: true
    },
    message: { type: String, required: true, minLength: 1, maxLength: 280 },
    username: { type: String, required: true },
});

const Peep = mongoose.model('Peep', peepSchema);
export default Peep;