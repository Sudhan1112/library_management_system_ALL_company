import express from "express";
import { getAllMembers, createMember, updateMember } from "../controllers/MemberController.js";

const router = express.Router();

router.get("/", getAllMembers);
router.post("/", createMember);
router.put("/:id", updateMember);

export default router;
