import { MenuOption } from "./MenuOption";
import { MdHistory } from "react-icons/md";
import { GrHomeRounded } from "react-icons/gr";
import { BiFoodMenu } from "react-icons/bi";
import { MdFoodBank } from "react-icons/md";

export const NavMenu = () => {
  return (
    <>
      <aside className="fixed top-0 left-0 w-27 h-screen bg-white shadow-md">
        <div className="h-30 flex items-center justify-center">
          <p className="text-xl font-bold">
            W<span className="font-light">A</span>
          </p>
        </div>
        <MenuOption icon={GrHomeRounded} text={"Home"} routePath="/" />
        <MenuOption icon={BiFoodMenu} text={"Cardápio"} routePath="/menu" />
        <MenuOption icon={MdFoodBank} text={"Cozinha"} routePath="/kitchen" />
        <MenuOption icon={MdHistory} text={"Histórico"} routePath="/history" />
      </aside>
    </>
  );
};
