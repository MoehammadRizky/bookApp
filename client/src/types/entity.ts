export interface Ibook {
  _id?: string;
  name: string;
  description: string;
  isbn: string;
  author: string;
  file: null | FileList |string;
}
