import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";

Input;

export default function Login() {
  return (
    <main className="h-screen flex justify-center items-center">
      <div className="w-[320px] space-y-2">
        <section>
          <h2>Login</h2>
          <p>Welcome Back!</p>
        </section>
        <Input placeholder="Email"></Input>
        <Input type="password" placeholder="Password"></Input>
        <Button className="w-full">Login</Button>

        <section>
          Don't have an account? <Link to={"/register"} className="font-bold text-green-500">Register</Link>
        </section>
      </div>
    </main>
  );
}
