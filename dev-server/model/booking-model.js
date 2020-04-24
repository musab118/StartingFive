import mongoose from 'mongoose';

const bookingSchema = new mongoose.Schema({
    title: String,
    location: String,
    Date: { type: Date, default: Date.now },
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'user' }
});
bookingSchema.set('timestamps', true); // Adds create_at and updated_at timestamps

export default mongoose.model('booking', bookingSchema);