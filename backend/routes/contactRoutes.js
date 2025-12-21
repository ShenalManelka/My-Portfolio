import express from 'express';
import { 
    getContacts, addContact, getContactById, updateContact, deleteContact 
} from '../controllers/contactController.js';

const router = express.Router();

router.get('/', getContacts);
router.get('/:id', getContactById);
router.post('/', addContact);
router.put('/:id', updateContact);
router.delete('/:id', deleteContact);

export default router;
