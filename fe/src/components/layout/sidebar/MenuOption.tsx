import type { IconType } from "react-icons";
import { Link } from "react-router";

interface Props {
  icon: IconType;
  text: string;
  routePath: string;
}

export const MenuOption = ({ icon: Icon, text, routePath }: Props) => {
  return (
    <Link
      to={`${routePath}`}
      className="w-full h-28 flex flex-col items-center justify-center gap-2
                 text-[#555] hover:bg-[#E1E1E1] transition cursor-pointer"
    >
      <Icon size={20} />
      <span className="text-sm">{text}</span>
    </Link>
  );
};
