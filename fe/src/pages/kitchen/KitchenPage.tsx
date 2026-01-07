import { IoCreateOutline } from "react-icons/io5";
import { RowTable } from "./rowTable";

export const KitchenPage = () => {
  return (
    <>
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center gap-3">
            <IoCreateOutline size={21} />
            <h1 className="font-bold text-2xl">Kitchen</h1>
          </div>
          <p className="mt-4 text-black opacity-60">Crie um novo pedido</p>
        </div>
      </div>
      <div className="mt-3 flex flex-col gap-3">
        <h2 className="font-bold">
          Produtos <span className="font-normal bg-[#ccc]/20 px-2">0</span>
        </h2>
        <div className="overflow-hidden rounded-xl border-[#ccc]/20 shadow-xs ">
          <table className="table-auto w-full">
            <thead className="w-full bg-[#cccccc]/20 ">
              <tr className="text-sm text-[#333]">
                <th className="p-2 text-start">Imagem</th>
                <th className="p-2 text-start">Nome</th>
                <th className="p-2 text-start">Categoria</th>
                <th className="p-2 text-start">Preço</th>
              </tr>
            </thead>
            <tbody>
              <RowTable />
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
