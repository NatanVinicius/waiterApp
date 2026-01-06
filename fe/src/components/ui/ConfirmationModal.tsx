import type { SetStateAction } from "react";
import { RiErrorWarningLine } from "react-icons/ri";

interface ConfirmationModalType {
  text: string;
  setHandleOpenResetDayModal: React.Dispatch<SetStateAction<boolean>>;
}

export const ConfirmationModal = () => {
  return (
    <>
      <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-black/20 backdrop-blur-xs">
        <div className="p-4 rounded-md bg-white">
          <header>
            <RiErrorWarningLine size={20} />
            <h1>texto</h1>
          </header>
          <div>
            <button>Sim</button>
            <button>Não</button>
          </div>
        </div>
      </div>
    </>
  );
};
