import Button from "@/components/Buttons/Button";
import { IoMdCloseCircle } from "react-icons/io";

export default function TextBox({ isVisible, toggleTextBox, longDescription }) {
  return (
    <div
      className={`flex items-center justify-center fixed top-[60px] lg:top-0 lg:left-[300px] right-0 bottom-0 p-0 lg:p-10 bg-opacity-100 bg-white  ${
        isVisible ? "hidden" : "block"
      }`}
    >
      <div className="flex flex-col items-center w-full max-w-[screen] h-full">
        <div className="w-full xl:w-[70%] flex-grow px-6 overflow-auto ">
          {/* Bottone Chiusura X */}
          <div className="w-full lg:mb-3">
            <Button
              addClass="p-2 mt-4 mb-4 shadow-stone-300 text-slate-400"
              onClick={toggleTextBox}
            >
              <IoMdCloseCircle size={30} />
            </Button>
          </div>
          {/* Testo */}
          <div className="link text-sm lg:text-base text-customBrown lg:font-semibold">
            {longDescription}
          </div>
        </div>
      </div>
    </div>
  );
}
