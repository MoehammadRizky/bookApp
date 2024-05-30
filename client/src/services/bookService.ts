import { Ibook } from "@/types/entity";

export const bookServices = {
  getData: async () => {
    const res = await fetch("http://localhost:8000/books");
    const data = (await res.json()) as Ibook[];
    return data;
  },

  createData: async ({ name, description, isbn, author, file }: Ibook) => {
    if (!name || !description || !isbn || !author || !file) {
      throw new Error("Yo! All field must be filled!");
    }

    const formData = new FormData();
    formData.append("name", name);
    formData.append("description",description);
    formData.append("isbn",isbn);
    formData.append("author",author);
    formData.append("file",file[0]);
    const res = await fetch("http://localhost:8000/books", {
      method: "POST",
      body: formData,
    });
    const data = (await res.json()) as Ibook;
    return data;
  },
};
