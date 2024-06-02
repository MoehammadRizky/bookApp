import { Link } from "react-router-dom";
import { Button } from "../ui/button";

export const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 border-b">
      <Link to="/">
      <div className="font-semibold text-lg">Pinjam Buku</div>
      </Link>
      <div className="flex items-center gap-4">
        <div>Get started</div>
        <Button>Login</Button>
      </div>
    </header>
  );
};
