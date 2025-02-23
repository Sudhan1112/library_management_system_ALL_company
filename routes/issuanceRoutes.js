import express from "express";
import { issueBook, returnBook, getAllIssuances } from "../controllers/IssuanceController.js";

const router = express.Router();

router.get("/", getAllIssuances);
router.post("/issue", issueBook);
router.post("/return/:id", returnBook);

export default router;
