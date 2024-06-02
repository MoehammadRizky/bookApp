import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";

Input;

export default function Register() {
  return (
    <main className="h-screen flex justify-center items-center">
      <div className="w-[320px] space-y-2">
        <section>
          <h2>Register</h2>
          <p>Create an account to get started</p>
        </section>
        <Input placeholder="Name"></Input>
        <Input placeholder="Email"></Input>
        <Input type="password" placeholder="Password"></Input>
        <Button className="w-full">Register</Button>

        <section>
          Already have an account? <Link to={"/login"} className="font-bold text-green-500">Login</Link>
        </section>
      </div>
    </main>
  );
}
