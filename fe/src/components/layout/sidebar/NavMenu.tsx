import { MenuOption } from "./MenuOption";
import { MdFoodBank } from "react-icons/md";
import { IoCreateOutline } from "react-icons/io5";

export const NavMenu = () => {
  return (
    <>
      <aside className="fixed top-0 left-0 w-27 h-full bg-white shadow-md">
        <div className="h-30 flex items-center justify-center">
          <p className="text-xl font-bold">
            W<span className="font-light">A</span>
          </p>
        </div>
        <MenuOption icon={MdFoodBank} text={"Cozinha"} routePath="/" />
        <MenuOption
          icon={IoCreateOutline}
          text={"Pedido"}
          routePath="/pedido"
        />
      </aside>
    </>
  );
};
