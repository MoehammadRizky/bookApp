import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";

Input;

export default function Register() {
  return (
    <main>
      <div>
        <section>
          <h2>Register</h2>
          <p>Create an account to get started</p>
        </section>
        <Input placeholder="Name"></Input>
        <Input placeholder="Email"></Input>
        <Input lang="Password"></Input>
        <Button>Register</Button>

        <section>
          Already have an account? <Link to={"/login"}>Login</Link>
        </section>
      </div>
    </main>
  );
}
