export const StickerBadge = ({
  text,
  color = "bg-retroYellow",
  rotation = "rotate-2",
}) => {
  return (
    <div
      className={`inline-flex items-center gap-1 font-black text-xs uppercase border-2 border-black px-3 py-1 rounded-lg shadow-brutal ${color} ${rotation}`}
    >
      <span>★</span>
      <span>{text}</span>
    </div>
  );
};
