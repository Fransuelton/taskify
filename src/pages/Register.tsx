import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import signIn from "/undraw_sign_in.svg";
import { Link } from "react-router-dom";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "@/services/firebaseConfig";
import { useState } from "react";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [createUserWithEmailAndPassword,  loading] =
    useCreateUserWithEmailAndPassword(auth);

  function handleSignOut() {
    createUserWithEmailAndPassword(email, password);
  }

  return (
    <section className="flex justify-center items-center h-screen gap-28 bg-slate-900 ">
      <img src={signIn} alt="login image" className="w-96 h-96" />
      <div className="text-white w-96 flex flex-col gap-3">
        <h1 className="text-4xl">Registre-se no Taskify</h1>
        <p className="text-base">
          Preencha o formulário abaixo para criar sua conta e começar a
          organizar suas tarefas de maneira eficaz.
        </p>
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
        <p>
          Já tem uma conta?{" "}
          <Link to={"/login"} className="text-orange-500">
            Clique aqui
          </Link>
        </p>
        {loading  ? (
          <Button onClick={handleSignOut}>Carregando</Button>
        ) : (
          <Button onClick={handleSignOut}>Criar conta</Button>
        )}
      </div>
    </section>
  );
};

export { Register };
