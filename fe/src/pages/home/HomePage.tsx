import { GrHomeRounded } from "react-icons/gr";
import { TfiReload } from "react-icons/tfi";
import { CardGrid } from "./CardGrid";
import { useEffect, useState } from "react";
import { ordersMock, type Orders } from "../../mock/order.mock";
import { useOrders } from "../../hooks/useOrders";
import { HomePageSkeleton } from "./HomePageSkeleton";

export const HomePage = () => {
  const [loading, setLoading] = useState(true);
  const [orders] = useState<Orders[]>(ordersMock);
  const { data, isLoading, error } = useOrders();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const waitingOrders = orders.filter((order) => order.status == "WAITING");
  const preparingOrders = orders.filter((order) => order.status == "PREPARING");
  const doneOrders = orders.filter((order) => order.status == "DONE");

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
      <div className="mt-12 grid grid-cols-3 gap-4 items-start">
        {!loading ? (
          <>
            <CardGrid icon={"🕘"} title="Em espera" orders={waitingOrders} />

            <CardGrid
              icon={"👨‍🍳"}
              title="Em preparação"
              orders={preparingOrders}
            />

            <CardGrid icon={"✅"} title="Pronto" orders={doneOrders} />
          </>
        ) : (
          <HomePageSkeleton />
        )}
      </div>
    </>
  );
};
