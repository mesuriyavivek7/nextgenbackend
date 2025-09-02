import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
    full_name: {
        type: String,
        required: [true, 'Full name is required.']
    },
    contact_no: {
        type: String,
        required: [true, 'Contact number is required.']
    },
    email: {
        type: String,
        required: [true, 'Email is required.'],
        lowercase: true,
        trim: true,
        match: [
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/,
            'Please fill a valid email address'
        ]
    },
    company: {
        type: String,
        required: [true, 'Company name is required.']
    }
}, { timestamps: true });

export default mongoose.model('Contact', contactSchema);
