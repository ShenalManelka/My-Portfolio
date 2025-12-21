import Contact from '../models/contact.js';

export const getContacts = async (req, res) => {
    const contacts = await Contact.find();
    res.json(contacts);
};

export const getContactById = async (req, res) => {
    const contact = await Contact.findById(req.params.id);
    if (!contact) return res.status(404).json({ message: 'Contact not found' });
    res.json(contact);
};

export const addContact = async (req, res) => {
    const newContact = new Contact(req.body);
    await newContact.save();
    res.status(201).json(newContact);
};

export const updateContact = async (req, res) => {
    const updatedContact = await Contact.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedContact) return res.status(404).json({ message: 'Contact not found' });
    res.json(updatedContact);
};

export const deleteContact = async (req, res) => {
    const deletedContact = await Contact.findByIdAndDelete(req.params.id);
    if (!deletedContact) return res.status(404).json({ message: 'Contact not found' });
    res.json({ message: 'Contact deleted successfully' });
};
