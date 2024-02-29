import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <section className="flex justify-center flex-col items-center h-screen gap-28 bg-slate-900">
        <h1 className="text-4xl text-white">
          Bem-vindo(a) ao <span className="text-orange-500">Taskify</span>
        </h1>
        <h2 className="text-white text-xl">
          Sua solução para manter suas tarefas organizadas de forma simples e
          eficiente. Comece a aumentar sua produtividade hoje mesmo!
        </h2>
        <Link to={"/register"}>
          <Button>Começar agora mesmo!</Button>
        </Link>
        <div>
        </div>
      </section>
    </>
  );
};

export { Home };
