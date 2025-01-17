import { motion } from "framer-motion";

interface ButtonProps {
  children: React.ReactNode;
  addClass: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export default function RedButton({ children, addClass, onClick }: Readonly<ButtonProps>) {
  return (
    <button
      className={`bg-red-600 text-slate-50 flex items-center justify-center rounded-md ${addClass} hover:bg-gradient-to-tl hover:from-red-600 hover:to-orange-500 active:bg-gradient-to-br`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
