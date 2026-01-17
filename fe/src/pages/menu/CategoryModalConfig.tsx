import React, { useState, type SetStateAction } from "react";

const emojiRegex = /(\p{Extended_Pictographic}|\p{Emoji_Component})/u;

interface CategoryModalProps {
  setModalCreateCategory: React.Dispatch<SetStateAction<boolean>>;
}

export const CategoryModalConfig = ({
  setModalCreateCategory,
}: CategoryModalProps) => {
  const [nameInput, setNameInput] = useState("");
  const [iconInput, setIconInput] = useState("");

  const handleNameInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const inputValue = event.target.value;
    // Remove tudo que não for emoji
    const emoji = inputValue.match(emojiRegex)?.[0] ?? "";

    setIconInput(emoji);
  };

  return (
    <>
      <div className="fixed left-0 top-0 h-screen w-screen flex items-center justify-center bg-black/20 backdrop-blur-sm">
        <div className="flex flex-col gap-6 min-h-80 min-w-110 p-6 rounded-md bg-white ">
          <h1 className="font-bold text-[#333]">Crie uma nova categoria</h1>
          <form className="flex flex-col">
            <label htmlFor="name">Nome da categoria</label>
            <input
              type="text"
              name="name"
              id="name"
              value={nameInput}
              onChange={(e) => setNameInput(e.target.value)}
              className="px-2 py-1 border border-[#ccc] rounded-sm outline-0 mb-3"
            />
            <label htmlFor="name">Ícone da categoria</label>
            <input
              type="text"
              name="icon"
              id="icon"
              value={iconInput}
              maxLength={2}
              onChange={handleNameInputChange}
              className="border border-[#ccc] rounded-sm px-2 py-1 outline-0 mb-3"
            />
          </form>
          <div className="flex justify-between">
            <button
              className="text-[#d73035] font-bold cursor-pointer"
              onClick={() => setModalCreateCategory(false)}
            >
              Cancelar
            </button>
            <button
              className="px-4 py-2 bg-[#d73035] text-white font-bold rounded-xl cursor-pointer"
              onClick={() => setModalCreateCategory(false)}
            >
              Confirmar
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
