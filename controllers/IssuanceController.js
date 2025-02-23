import { Issuance, Book } from "../models/index.js";

// Issue a book
export const issueBook = async (req, res) => {
  try {
    const { issuance_member, book_id } = req.body;

    // Check if the book is available
    const book = await Book.findByPk(book_id);
    if (!book || book.available_copies <= 0) {
      return res.status(400).json({ error: "Book is not available for issuance" });
    }

    // Issue the book
    const issuance = await Issuance.create({ issuance_member, book_id, issue_date: new Date() });

    // Reduce available copies
    await Book.update(
      { available_copies: book.available_copies - 1 },
      { where: { book_id } }
    );

    res.status(201).json(issuance);
  } catch (error) {
    res.status(400).json({ error: "Error issuing book" });
  }
};

// Return a book
export const returnBook = async (req, res) => {
  try {
    const { id } = req.params;

    // Find issuance record
    const issuance = await Issuance.findByPk(id);
    if (!issuance) {
      return res.status(404).json({ error: "Issuance record not found" });
    }

    // Update return date
    issuance.return_date = new Date();
    await issuance.save();

    // Increase available copies
    const book = await Book.findByPk(issuance.book_id);
    await Book.update(
      { available_copies: book.available_copies + 1 },
      { where: { book_id: book.book_id } }
    );

    res.json({ message: "Book returned successfully" });
  } catch (error) {
    res.status(400).json({ error: "Error returning book" });
  }
};

// Get all issuance records
export const getAllIssuances = async (req, res) => {
  try {
    const issuances = await Issuance.findAll();
    res.json(issuances);
  } catch (error) {
    res.status(500).json({ error: "Error fetching issuance records" });
  }
};

