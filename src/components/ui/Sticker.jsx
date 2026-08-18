import React from "react";

export const Sticker = ({
  children,
  bgColor = "bg-retroYellow",
  rotate = "rotate-3",
  className = "",
}) => {
  return (
    <div
      className={`
      inline-block px-3 py-1.5 
      border-2 border-black rounded-xl 
      shadow-brutal font-black text-xs uppercase tracking-wider text-black
      hover:scale-110 hover:rotate-0 transition-all duration-200 cursor-pointer
      select-none z-30
      ${bgColor} ${rotate} ${className}
    `}
    >
      {children}
    </div>
  );
};

export default Sticker;
