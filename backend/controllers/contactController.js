import Contact from '../models/contact.js';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

export const addContact = async (req, res) => {
    const { name, email, subject, message } = req.body;

    try {
        // 1. Save to MongoDB
        const newContact = new Contact({ name, email, message });
        await newContact.save();

        // 2. Setup Transporter
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS, // 16-character App Password
            },
        });

        // 3. Email Content
        const mailOptions = {
            from: email,
            to: process.env.EMAIL_USER,
            subject: `Portfolio: ${subject || 'New Message'}`,
            html: `
                <div style="font-family: Arial, sans-serif; background: #050505; color: #fff; padding: 20px; border-radius: 15px;">
                    <h2 style="color: #a855f7;">New Message from ${name}</h2>
                    <p><strong>Sender Email:</strong> ${email}</p>
                    <div style="background: #111; padding: 15px; border: 1px solid #222; border-radius: 10px; margin-top: 10px;">
                        ${message}
                    </div>
                </div>
            `
        };

        await transporter.sendMail(mailOptions);
        res.status(201).json({ success: true, message: "Message sent!" });

    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Error sending message" });
    }
};

// Standard CRUD exports
export const getContacts = async (req, res) => {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json(contacts);
};

export const getContactById = async (req, res) => {
    const contact = await Contact.findById(req.params.id);
    if (!contact) return res.status(404).json({ message: 'Not found' });
    res.json(contact);
};

export const updateContact = async (req, res) => {
    const updated = await Contact.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
};

export const deleteContact = async (req, res) => {
    await Contact.findByIdAndDelete(req.params.id);
    res.json({ message: 'Deleted' });
};