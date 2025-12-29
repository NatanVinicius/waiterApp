import headerBg from "../../../assets/header-bg.png";

export const Header = () => {
  return (
    <header className="ml-27 bg-red-500 h-65">
      <img
        src={headerBg}
        alt="bg-header-img"
        className="h-full w-full object"
      />
    </header>
  );
};
