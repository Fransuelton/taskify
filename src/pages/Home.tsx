import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="flex justify-center flex-col items-center h-screen gap-28 bg-slate-900 ">
      <h1 className="text-white text-xl">Home</h1>
      <Link to={"/register"}>
      <Button>Registrar</Button>
      </Link>
    </section>
  );
};

export { Home };
