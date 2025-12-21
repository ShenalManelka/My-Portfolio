import Skill from '../models/skill.js';

export const getSkills = async (req, res) => {
    const skills = await Skill.find();
    res.json(skills);
};

export const getSkillById = async (req, res) => {
    const skill = await Skill.findById(req.params.id);
    if (!skill) return res.status(404).json({ message: 'Skill not found' });
    res.json(skill);
};

export const addSkill = async (req, res) => {
    const newSkill = new Skill(req.body);
    await newSkill.save();
    res.status(201).json(newSkill);
};

export const updateSkill = async (req, res) => {
    const updatedSkill = await Skill.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedSkill) return res.status(404).json({ message: 'Skill not found' });
    res.json(updatedSkill);
};

export const deleteSkill = async (req, res) => {
    const deletedSkill = await Skill.findByIdAndDelete(req.params.id);
    if (!deletedSkill) return res.status(404).json({ message: 'Skill not found' });
    res.json({ message: 'Skill deleted successfully' });
};
