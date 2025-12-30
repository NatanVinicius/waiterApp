import { GrHomeRounded } from "react-icons/gr";
import { TfiReload } from "react-icons/tfi";
import { CardStatusHomePage } from "./CardStatusHomePage";
import { CardGrid } from "./CardGrid";

export const HomePage = () => {
  return (
    <>
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center gap-3">
            <GrHomeRounded size={21} />
            <h2 className="font-bold text-2xl">Home</h2>
          </div>
          <p className="mt-4 text-black opacity-60">
            Acompanhe os pedidos dos clientes
          </p>
        </div>
        <button className="flex items-center gap-2 text-[#D73035] cursor-pointer">
          <span>
            <TfiReload />
          </span>
          Reiniciar o dia
        </button>
      </div>
      <div className="mt-12 grid grid-cols-3 gap-4">
        <CardGrid icon={"🕘"} title="Em espera">
          <CardStatusHomePage mesa={4} itens={2} />
        </CardGrid>
        <CardGrid icon={"👨‍🍳"} title="Em preparação">
          <CardStatusHomePage mesa={3} itens={1} />
        </CardGrid>
        <CardGrid icon={"✅"} title="Pronto">
          <CardStatusHomePage mesa={1} itens={6} />
        </CardGrid>
      </div>
    </>
  );
};
