import { useState } from "react";
import type { Orders } from "../../types/order";
import { OrderModal } from "./OrderModal";

interface Props {
  order: Orders;
}

export const CardStatusHomePage = ({ order }: Props) => {
  const [handleOrderModal, setHandleOrderModal] = useState(false);

  const handleOrderModalEvent = () => {
    setHandleOrderModal(true);
  };

  return (
    <>
      <button
        className="min-h-30 flex flex-col items-center justify-center border gap-2 bg-white border-black/20 rounded-md cursor-pointer hover:bg-black/3 transition"
        onClick={handleOrderModalEvent}
      >
        <h1>Mesa {`${order.table}`}</h1>
        <p className="opacity-60">{`${order.products.length}`} itens</p>
      </button>
      {handleOrderModal && (
        <OrderModal order={order} setHandleOrderModal={setHandleOrderModal} />
      )}
    </>
  );
};
