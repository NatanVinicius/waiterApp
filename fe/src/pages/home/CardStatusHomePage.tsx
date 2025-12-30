interface Props {
  mesa: number;
  itens: number;
}

export const CardStatusHomePage = ({ mesa, itens }: Props) => {
  return (
    <>
      <button className="min-h-30 flex flex-col items-center justify-center border gap-2 bg-white border-black/20 rounded-md cursor-pointer hover:bg-black/3 transition">
        <h1>Mesa {`${mesa}`}</h1>
        <p className="opacity-60">{`${itens}`} itens</p>
      </button>
    </>
  );
};
