import type { IconType } from "react-icons";

interface Props {
  icon: IconType;
  text: string;
}

export const AsideMenuOption = ({ icon: Icon, text }: Props) => {
  return (
    <div className="w-full h-27 flex flex-col items-center justify-center gap-3 text-[#555]">
      <Icon className="w-5 h-5" />
      <p className="text-sm">{text}</p>
    </div>
  );
};
