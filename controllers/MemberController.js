import { Member } from "../models/index.js";

// Get all members
export const getAllMembers = async (req, res) => {
  try {
    const members = await Member.findAll();
    res.json(members);
  } catch (error) {
    res.status(500).json({ error: "Error fetching members" });
  }
};

// Create a new member
export const createMember = async (req, res) => {
  try {
    const member = await Member.create(req.body);
    res.status(201).json(member);
  } catch (error) {
    res.status(400).json({ error: "Error creating member" });
  }
};

// Update a member
export const updateMember = async (req, res) => {
  try {
    const { id } = req.params;
    await Member.update(req.body, { where: { mem_id: id } });
    res.json({ message: "Member updated successfully" });
  } catch (error) {
    res.status(400).json({ error: "Error updating member" });
  }
};
