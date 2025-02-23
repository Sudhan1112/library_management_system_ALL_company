import express from "express";
import { getAllBooks, createBook, updateBook } from "../controllers/BookController.js";

const router = express.Router();

router.get("/", getAllBooks);
router.post("/", createBook);
router.put("/:id", updateBook);

export default router;
