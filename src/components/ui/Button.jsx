export const Button = ({
  children,
  onClick,
  variant = "yellow",
  size = "md",
  className = "",
  type = "button",
}) => {
  // Color presets matching your theme
  const bgColors = {
    yellow: "bg-retroYellow hover:bg-yellow-300",
    pink: "bg-retroPink hover:bg-pink-300",
    blue: "bg-retroBlue hover:bg-sky-300",
    green: "bg-retroGreen hover:bg-green-400",
    white: "bg-white hover:bg-gray-100",
    dark: "bg-black text-white hover:bg-gray-800",
  };

  // Size variations
  const sizes = {
    sm: "px-3 py-1.5 text-xs",
    md: "px-5 py-2.5 text-sm",
    lg: "px-7 py-3.5 text-base",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`
        font-black uppercase tracking-wider text-black 
        border-2 border-black rounded-xl 
        shadow-brutal btn-pop 
        cursor-pointer select-none
        ${bgColors[variant]} 
        ${sizes[size]} 
        ${className}
      `}
    >
      {children}
    </button>
  );
};

export default Button;
