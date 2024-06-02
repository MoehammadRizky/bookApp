import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";

Input;

export default function Login() {
  return (
    <main>
      <div>
        <section>
          <h2>Login</h2>
          <p>Welcome Back!</p>
        </section>
        <Input placeholder="Email"></Input>
        <Input lang="Password"></Input>
        <Button>Register</Button>

        <section>
          Don't have an account? <Link to={"/register"}>Register</Link>
        </section>
      </div>
    </main>
  );
}
