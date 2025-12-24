import { AsideMenuOption } from "../ui/AsideMenuOption";
import { MdHistory } from "react-icons/md";
import { GrHomeRounded } from "react-icons/gr";
import { BiFoodMenu } from "react-icons/bi";

export const NavMenu = () => {
  return (
    <>
      <aside className="fixed top-0 left-0 w-27 h-screen bg-white shadow-md">
        <div className="h-30 flex items-center justify-center">
          <p className="text-xl font-bold">
            W<span className="font-light">A</span>
          </p>
        </div>
        <AsideMenuOption icon={GrHomeRounded} text={"Home"} />
        <AsideMenuOption icon={MdHistory} text={"Histórico"} />
        <AsideMenuOption icon={BiFoodMenu} text={"Cardápio"} />
      </aside>
    </>
  );
};
