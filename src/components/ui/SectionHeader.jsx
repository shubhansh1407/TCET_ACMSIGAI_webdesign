export const SectionHeader = ({ title, subtitle, badgeText }) => {
  return (
    <div className="text-center my-8 relative inline-block w-full">
      {badgeText && (
        <span className="bg-retroPink text-black font-black text-xs px-3 py-1 border-2 border-black rounded-full shadow-brutal uppercase tracking-wider inline-block -rotate-3 mb-2">
          {badgeText}
        </span>
      )}
      <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-black">
        {title}
      </h2>
      {subtitle && <p className="text-gray-700 font-medium mt-2">{subtitle}</p>}
    </div>
  );
};
