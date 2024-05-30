import express from "express";
import { bookController } from "../controllers/bookcontrollers";
import multer from "multer";

const upload = multer({
  storage: multer.diskStorage({
    destination: (req, file, callback) => {
      callback(null, "./public");
    },
    filename: (req, file, callback) => {
      callback(null, file.originalname);
    },
  }),
});
export const bookRouter = express.Router();

bookRouter.get("/", bookController.getData);
// bookRouter.post("/", bookController.createData);

bookRouter.post("/", upload.single("file"), bookController.createData); //supaya setelah klik submit maka input langsung kosong dan data di save di mongodb
