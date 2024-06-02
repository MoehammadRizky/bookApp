import { Header } from "@/components/sharedui/header";
import { bookServices } from "@/services/bookService";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { API_URL } from "@/config/apiUrl";
import { Button } from "@/components/ui/button";

export default function SinglePage() {
  const { id } = useParams();
  //fething dari ID
  const query = useQuery({
    queryKey: [`book-${id}`],
    queryFn: () => bookServices.getSingleData(id as string),
  });

  return (
    <main className="space-y-12 ">
      <Header />
      <section className="grid grid-cols-2 gap-8 max-w-7xl m-auto">
        <div>
          <img
            src={`${API_URL}/${query.data?.file}`}
            alt=""
            width={800}
            height={800}
            className="rounded-lg"
          />
        </div>
        <div className="space-y-4">
          <h1>{query.data?.name}</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti
            atque in adipisci eligendi maxime velit laudantium sit corporis
            numquam voluptate?
          </p>
          <p>{query.data?.description}</p>
          <p>{query.data?.author}</p>
          <p>{query.data?.isbn}</p>
          <Button>
            Pinjam
          </Button>
        </div>
      </section>
    </main>
  );
}
