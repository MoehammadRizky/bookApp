import { Button } from "@/components/ui/button";
import { useQuery } from "react-query";
import { bookServices } from "@/services/bookService";
import { Header } from "@/components/sharedui/header";
import { BookCard } from "@/components/sharedui/bookCard";

export default function Home() {
  const query = useQuery({
    queryKey: ["books"],
    queryFn: bookServices.getData,
  });
  return (
    <main className="space-y-12">
      <Header />
      <section className="grid grid-cols-4 gap-8 max-w-7xl m-auto">
        {query.data?.map((book) => {
          return <BookCard key={book._id} book={book} />;
        })}
      </section>
    </main>
  );
}
