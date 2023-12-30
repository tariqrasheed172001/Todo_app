import mongoose from 'mongoose';

const DataSchema = new mongoose.Schema({
    data: {
        type: String,
        required: true,
    }
});

export default mongoose.model('data', DataSchema);