import { Book } from "../models/bookSchema";
import { Request, Response } from "express";

export const bookController = {
  getData: async (req: Request, res: Response) => {
    const allBooks = await Book.find();
    return res.json(allBooks);
  },
  createData: async (req: Request, res: Response) => {
    const { name, description, isbn, author } = req.body;
    
    // const file = req.file; //file yang akan diterima dari upload.single di book router dan akan di save di public folder

    const createBook = new Book({
      name,
      description,
      isbn,
      author,
      file: req.file?.originalname,
    });

    const saved = await createBook.save();

    return res.json({ message: "Good!", data: saved });
  },
};
