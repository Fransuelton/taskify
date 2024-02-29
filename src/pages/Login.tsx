import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import loginImage from "/undraw_login.svg";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <section className="flex justify-center items-center h-screen gap-28 bg-slate-900 ">
      <img src={loginImage} alt="login image" className="w-96 h-96" />
      <div className="text-white w-96 flex flex-col gap-3">
        <h1 className="text-4xl">Login no Taskify</h1>
        <p className="text-base">
          Faça login abaixo para acessar sua lista de tarefas.
        </p>
        <Input placeholder="Email" />
        <Input placeholder="Senha" />
        <p>
          Não tem uma conta?{" "}
          <Link to={"/register"} className="text-orange-500">
            Clique aqui
          </Link>
        </p>
        <Button>Login</Button>
      </div>
    </section>
  );
};

export { Login };
