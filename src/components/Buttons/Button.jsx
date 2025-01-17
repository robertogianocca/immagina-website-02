import React from "react";

export default function Button({ children, addClass, onClick }) {
  return (
    <button
      className={`bg-stone-50  text-slate-400 hover:text-slate-500 shadow-button rounded-md flex items-center justify-center hover:shadow-buttonTwo transition-shadow active:bg-stone-100 ${addClass}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
