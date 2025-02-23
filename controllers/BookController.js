import { Book } from "../models/index.js";

// Get all books
export const getAllBooks = async (req, res) => {
  try {
    const books = await Book.findAll();
    res.json(books);
  } catch (error) {
    res.status(500).json({ error: "Error fetching books" });
  }
};

// Create a new book
export const createBook = async (req, res) => {
  try {
    const book = await Book.create(req.body);
    res.status(201).json(book);
  } catch (error) {
    res.status(400).json({ error: "Error creating book" });
  }
};

// Update a book
export const updateBook = async (req, res) => {
  try {
    const { id } = req.params;
    await Book.update(req.body, { where: { book_id: id } });
    res.json({ message: "Book updated successfully" });
  } catch (error) {
    res.status(400).json({ error: "Error updating book" });
  }
};
