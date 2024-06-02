import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { useAuth } from "@/hooks/useAuth";
import Avatar from "boring-avatars";

export const Header = () => {
  const { user } = useAuth({});
  console.log(user);

  return (
    <header className="flex justify-between items-center p-4 border-b">
      <Link to="/">
        <div className="font-semibold text-lg">Pinjam Buku</div>
      </Link>
      {user ? (
        <div className="flex items-center gap-2">
          <div >Welcome back, {user.name}</div>{" "}
          <Avatar
            name={user.name}
            size={35}
            variant="beam"
            colors={["#92A1C6", "#146A7C", "#F0AB3D", "#C271B4", "#C20D90"]}
          />
        </div>
      ) : (
        <div className="flex items-center gap-4">
          <Link to={"/login"}>
            {" "}
            <div>Login</div>
          </Link>
          <Link to={"/register"}>
            {" "}
            <Button>Get started</Button>
          </Link>
        </div>
      )}
    </header>
  );
};
