import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import signIn from "/undraw_sign_in.svg"
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <section className="flex justify-center items-center h-screen gap-28 bg-slate-900 ">
      <img src={signIn} alt="login image" className="w-96 h-96"/>
      <div className="text-white w-96 flex flex-col gap-3">
        <h1 className="text-4xl">Registre-se no Taskify</h1>
        <p className="text-base">Preencha o formulário abaixo para criar sua conta e começar a organizar suas tarefas de maneira eficaz.</p>
        <Input placeholder="Nome"/>
        <Input placeholder="Email"/>
        <Input placeholder="Senha"/>
        <p>Já tem uma conta? <Link to={"/login"} className="text-orange-500">Clique aqui</Link></p>
        <Button>Login</Button>
      </div>
    </section>
  );
};

export { Register };