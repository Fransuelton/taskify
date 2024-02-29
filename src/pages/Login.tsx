import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import loginImage from "/undraw_login.svg";
import { Link } from "react-router-dom";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useState } from "react";
import { auth } from "@/services/firebaseConfig";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  function handleSignIn() {
    signInWithEmailAndPassword(email, password);
  }

  if (user) {
    console.log("Usuário Logado: ", user);
  }

  if (error) {
    console.log(error);
  }

  return (
    <section className="flex justify-center items-center h-screen gap-28 bg-slate-900 ">
      <img src={loginImage} alt="login image" className="w-96 h-96" />
      <div className="text-white w-96 flex flex-col gap-3">
        <h1 className="text-4xl">Login no Taskify</h1>
        <p className="text-base">
          Faça login abaixo para acessar sua lista de tarefas.
        </p>
        <form className="flex flex-col gap-3">
          <Input
            placeholder="Email"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            placeholder="Senha"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </form>
        <p>
          Não tem uma conta?{" "}
          <Link to={"/register"} className="text-orange-500">
            Clique aqui
          </Link>
        </p>
        <Button onClick={handleSignIn}>Login</Button>
      </div>
    </section>
  );
};

export { Login };
