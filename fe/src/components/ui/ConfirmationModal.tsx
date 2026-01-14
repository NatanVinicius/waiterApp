import type { SetStateAction } from "react";
import { PiWarningCircleThin } from "react-icons/pi";
import { LoadingSpinner } from "./loadingSpinner";

interface ConfirmationModalType {
  text: string;
  setHandleOpenModal: React.Dispatch<SetStateAction<boolean>>;
  isLoading: boolean;
  labelConfirm: string;
  labelRefuse: string;
  onConfirm: () => void;
}

export const ConfirmationModal = ({
  text,
  setHandleOpenModal,
  isLoading,
  labelConfirm,
  labelRefuse,
  onConfirm,
}: ConfirmationModalType) => {
  return (
    <>
      <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-black/20 backdrop-blur-xs">
        <div className="min-h-80 min-w-110 p-6 rounded-md bg-white flex flex-col items-center justify-center gap-10">
          {isLoading ? (
            <div>
              <LoadingSpinner />
            </div>
          ) : (
            <>
              <header className="flex items-center justify-center flex-col gap-4">
                <PiWarningCircleThin size={100} className="text-[#D73035]" />
                <h1 className="max-w-100 text-center">{text}</h1>
              </header>
              <div className="w-full flex justify-between">
                <button
                  className="text-[#d73035] font-bold cursor-pointer"
                  onClick={() => {
                    setHandleOpenModal(false);
                  }}
                >
                  {labelRefuse}
                </button>
                <button
                  className="px-4 py-2 bg-[#d73035] text-white font-bold rounded-xl cursor-pointer"
                  onClick={() => {
                    onConfirm();
                    setHandleOpenModal(false);
                  }}
                >
                  {labelConfirm}
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};
