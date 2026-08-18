export const Card = ({
  title,
  category,
  description,
  image,
  bgColor = "bg-white",
}) => {
  return (
    <div
      className={`border-3 border-black rounded-2xl p-5 shadow-brutal-lg ${bgColor} relative overflow-hidden flex flex-col justify-between`}
    >
      {category && (
        <span className="self-start bg-black text-white font-bold text-xs px-2.5 py-1 rounded mb-3 uppercase">
          {category}
        </span>
      )}
      {image && (
        <div className="border-2 border-black rounded-xl overflow-hidden mb-4 h-48">
          <img src={image} alt={title} className="w-full h-full object-cover" />
        </div>
      )}
      <div>
        <h3 className="text-xl font-black mb-2 text-black leading-tight">
          {title}
        </h3>
        <p className="text-sm font-medium text-gray-800">{description}</p>
      </div>
    </div>
  );
};
