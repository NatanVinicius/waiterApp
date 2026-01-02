import type { Orders } from "../../mock/order.mock";

interface Props {
  order: Orders;
}

export const CardStatusHomePage = ({ order }: Props) => {
  return (
    <>
      <button className="min-h-30 flex flex-col items-center justify-center border gap-2 bg-white border-black/20 rounded-md cursor-pointer hover:bg-black/3 transition">
        <h1>Mesa {`${order.table}`}</h1>
        <p className="opacity-60">{`${order.products.length}`} itens</p>
      </button>
    </>
  );
};
