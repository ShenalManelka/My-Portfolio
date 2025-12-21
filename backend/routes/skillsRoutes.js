import express from 'express';
import { 
    getSkills, addSkill, getSkillById, updateSkill, deleteSkill 
} from '../controllers/skillsController.js';

const router = express.Router();

router.get('/', getSkills);
router.get('/:id', getSkillById);
router.post('/', addSkill);
router.put('/:id', updateSkill);
router.delete('/:id', deleteSkill);

export default router;
