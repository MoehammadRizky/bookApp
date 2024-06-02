import { Book } from "../models/bookSchema";
import { Request, Response } from "express";

export const bookController = {
  getData: async (req: Request, res: Response) => {
    const { search } = req.query; //ngambil query
    console.log(search);

    const allBooks = await Book.find({
      name: { $regex: search, $options: "i" },
    });
    return res.json(allBooks);
  },

  getSingleData: async (req: Request, res: Response) => {
    const { id } = req.params;

    const book = await Book.findById(id);
    return res.json(book);
  },

  createData: async (req: Request, res: Response) => {
    const { name, description, isbn, author } = req.body;

    //  const file = req.file; //file yang akan diterima dari upload.single di book router dan akan di save di public folder

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
