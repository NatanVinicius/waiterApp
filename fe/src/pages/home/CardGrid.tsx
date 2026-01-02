import type { Orders } from "../../mock/order.mock";
import { CardStatusHomePage } from "./CardStatusHomePage";

interface Props {
  title: string;
  icon: string;
  orders: Orders[];
}

export const CardGrid = ({ title, icon, orders }: Props) => {
  return (
    <>
      <div className="p-4 border flex flex-col gap-6 border-black/20 rounded-md">
        <div className="flex items-center justify-center gap-2">
          <p className="font-bold">{`${icon} ${title}`}</p>
          <div className="px-1.5  bg-black/3 rounded-sm">1</div>
        </div>
        {orders?.map((order, index) => (
          <CardStatusHomePage order={order} key={index} />
        ))}
      </div>
    </>
  );
};
