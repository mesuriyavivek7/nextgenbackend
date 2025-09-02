import Contact from '../models/CONTACT.js';

// Submit contact form
export const submitContact = async (req, res) => {
    try {
        const { full_name, contact_no, email, company } = req.body;

        // Validate required fields
        if (!full_name || !contact_no || !email || !company) {
            return res.status(400).json({
                success: false,
                message: "All fields are required"
            });
        }

        // Create new contact
        const newContact = new Contact({
            full_name,
            contact_no,
            email,
            company
        });

        const savedContact = await newContact.save();

        res.status(201).json({
            success: true,
            message: "Contact form submitted successfully",
            data: savedContact
        });

    } catch (error) {
        next(error)
    }
};

// Get all contact submissions
export const getAllContacts = async (req, res) => {
    try {
        const contacts = await Contact.find().sort({ createdAt: -1 });

        res.status(200).json({
            success: true,
            message: "Contacts retrieved successfully",
            data: contacts
        });

    } catch (error) {
       next(error)
    }
};
