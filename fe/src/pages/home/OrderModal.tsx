import type { SetStateAction } from "react";
import { IoMdClose } from "react-icons/io";
import type { Order } from "../../types/order";
import { formatDate } from "../../utils/formatDate";
import { formatCurrency } from "../../utils/formatCurrency";

type OrderModalProps = {
  order: Order;
  setHandleOrderModal: React.Dispatch<SetStateAction<boolean>>;
};

export const OrderModal = ({ order, setHandleOrderModal }: OrderModalProps) => {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-black/40 backdrop-blur-xs">
      <div className="w-120 flex flex-col gap-5 p-6 bg-white text-[#333333] rounded-2xl shadow-lg">
        <header className="flex items-center justify-between">
          <h1 className="font-bold text-2xl">Mesa {order.table}</h1>
          <IoMdClose
            size={20}
            className="cursor-pointer"
            onClick={() => setHandleOrderModal(false)}
          />
        </header>
        <div>
          <p>Data do pedido</p>
          <p className="font-bold">{formatDate(order.createdAt)}</p>
        </div>
        <div className="flex flex-col gap-6">
          <p>Itens</p>
          <div className="flex flex-col gap-3">
            {order.products.map((product, index) => {
              return (
                <div className="flex gap-4" key={index}>
                  <img
                    src={`http://localhost:3001/uploads/${product.product.imagePath}`}
                    alt="product-image"
                    className="w-12 rounded-md"
                  />
                  <div>
                    <p className="text-sm text-black/50">{product.quantity}x</p>
                  </div>
                  <div>
                    <p className="font-bold">{product.product.name}</p>
                    <p className="text-black/50">
                      {formatCurrency(product.product.price)}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="flex justify-between">
            <p>Total:</p>
            <p className="font-bold">{}</p>
          </div>
        </div>
        <div>
          <button className="font-bold text-[#D73035] cursor-pointer">
            Cancelar pedido
          </button>
        </div>
      </div>
    </div>
  );
};
