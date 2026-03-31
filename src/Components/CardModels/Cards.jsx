import React from "react";
import { Check } from "lucide-react";

const Cards = ({ item, addToCart, isAlreadyInCart }) => {
  const inCart = isAlreadyInCart(item.id);

  const getTagStyles = (type) => {
    switch (type) {
      case "best-seller": return "bg-orange-100 text-orange-600";
      case "popular": return "bg-blue-100 text-blue-600";
      case "new": return "bg-green-100 text-green-600";
      default: return "bg-gray-100 text-gray-600";
    }
  };

  return (
    <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow relative">
      <div className="absolute top-4 right-4">
        <span className={`text-[10px] uppercase font-bold px-3 py-1 rounded-full ${getTagStyles(item.tagType)}`}>
          {item.tag}
        </span>
      </div>

      <div className="w-12 h-12 mb-4">
        <img src={item.icon} alt={item.name} className="w-full h-full object-contain" />
      </div>

      <h3 className="text-xl font-bold text-gray-800">{item.name}</h3>
      <p className="text-gray-500 text-sm mt-2 leading-relaxed">{item.description}</p>

      <div className="mt-4 flex items-baseline gap-1">
        <span className="text-2xl font-bold text-gray-900">{item.price}</span>
        <span className="text-gray-400 text-sm">/{item.period === "one-time" ? "One-Time" : "Mo"}</span>
      </div>

      <ul className="mt-6 space-y-3">
        {item.features.map((feature, i) => (
          <li key={i} className="flex items-center gap-3 text-sm text-gray-600">
            <Check className="w-4 h-4 text-green-500" /> {feature}
          </li>
        ))}
      </ul>

      <button
        onClick={() => addToCart(item)}
        disabled={inCart}
        className={`mt-8 w-full flex items-center justify-center gap-2 py-3 rounded-xl font-semibold transition-all transform active:scale-95 ${
          inCart
            ? "bg-green-500 text-white cursor-default"
            : "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white hover:brightness-110"
        }`}
      >
        {inCart && <Check className="w-5 h-5 text-white" />}
        {inCart ? "Added To Cart" : "Buy Now"}
      </button>
    </div>
  );
};

export default Cards;