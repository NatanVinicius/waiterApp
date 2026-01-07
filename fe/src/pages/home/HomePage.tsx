import { GrHomeRounded } from "react-icons/gr";
import { TfiReload } from "react-icons/tfi";
import { CardGrid } from "./CardGrid";
import { useOrders } from "../../hooks/useOrders";
import { HomePageSkeleton } from "./HomePageSkeleton";
import { ConfirmationModal } from "../../components/ui/ConfirmationModal";
import { useDeleteManyOrders } from "../../hooks/useDeleteManyOrders";
import type { Order } from "../../types/order";
import { useState } from "react";

export const HomePage = () => {
  const { data: ordersData, isLoading: ordersPending } = useOrders();
  const orders: Order[] = ordersData ?? [];
  const [handleOpenResetDayModal, setHandleOpenResetDayModal] = useState(false);
  const { mutate: deleteManyOrders, isPending: deletingOrders } =
    useDeleteManyOrders();

  const waitingOrders = orders.filter(
    (order: Order) => order.status == "WAITING"
  );
  const preparingOrders = orders.filter(
    (order: Order) => order.status == "PREPARING"
  );
  const doneOrders = orders.filter((order: Order) => order.status == "DONE");

  return (
    <>
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center gap-3">
            <GrHomeRounded size={21} />
            <h1 className="font-bold text-2xl">Home</h1>
          </div>
          <p className="mt-4 text-black opacity-60">
            Acompanhe os pedidos dos clientes
          </p>
        </div>
        <button
          className="flex items-center gap-2 text-[#D73035] cursor-pointer"
          onClick={() => setHandleOpenResetDayModal(true)}
        >
          <span>
            <TfiReload />
          </span>
          Reiniciar o dia
        </button>
      </div>
      <div className="mt-12 grid grid-cols-3 gap-4 items-start">
        {ordersPending ? (
          <HomePageSkeleton />
        ) : (
          <>
            <CardGrid icon={"🕘"} title="Em espera" orders={waitingOrders} />

            <CardGrid
              icon={"👨‍🍳"}
              title="Em preparação"
              orders={preparingOrders}
            />

            <CardGrid icon={"✅"} title="Pronto" orders={doneOrders} />
          </>
        )}
      </div>
      {handleOpenResetDayModal && (
        <ConfirmationModal
          text="Essa ação vai remover todos os pedidos existentes, deseja continuar?"
          setHandleOpenResetDayModal={setHandleOpenResetDayModal}
          isLoading={deletingOrders}
          onConfirm={() => {
            deleteManyOrders();
          }}
        />
      )}
    </>
  );
};
