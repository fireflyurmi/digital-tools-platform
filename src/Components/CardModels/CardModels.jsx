import React, { use } from "react";
import { Check } from "lucide-react";

const CardModels = ({ cardModelPromise }) => {
  const cardModels = use(cardModelPromise);

  // to map tagType
  const getTagStyles = (type) => {
    switch (type) {
      case "best-seller":
        return "bg-orange-100 text-orange-600";
      case "popular":
        return "bg-blue-100 text-blue-600";
      case "new":
        return "bg-green-100 text-green-600";
      default:
        return "bg-gray-100 text-gray-600";
    }
  };

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-800">Premium Digital Tools</h2>
          <p className="text-gray-500 mt-2">
            Choose from our curated collection of premium digital products designed <br />
            to boost your productivity and creativity.
          </p>

          <div className="mt-6 flex justify-center gap-2">
            <button className="px-6 py-2 bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full text-sm font-medium">
              Products
            </button>
            <button className="px-6 py-2 bg-white text-gray-600 rounded-full text-sm border font-medium">
              Cart (2)
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cardModels.map((item) => (
            <div
              key={item.id}
              className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow relative"
            >
              {/* Tag */}
              <div className="absolute top-4 right-4">
                <span className={`text-[10px] uppercase font-bold px-3 py-1 rounded-full ${getTagStyles(item.tagType)}`}>
                  {item.tag}
                </span>
              </div>

              {/* Icon */}
              <div className="w-12 h-12 mb-4">
                <img src={item.icon} alt={item.name} className="w-full h-full object-contain" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-800">{item.name}</h3>
              <p className="text-gray-500 text-sm mt-2 leading-relaxed">
                {item.description}
              </p>

              {/* Pricing */}
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-2xl font-bold text-gray-900">{item.price}</span>
                <span className="text-gray-400 text-sm">
                  /{item.period === "one-time" ? "One-Time" : "Mo"}
                </span>
              </div>

              {/* Features */}
              <ul className="mt-6 space-y-3">
                {item.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-gray-600">
                    <Check className="w-4 h-4 text-green-500" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Button */}
              <button className="mt-8 w-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white py-3 rounded-xl font-semibold hover:brightness-150 transition transform active:scale-95">
                Buy Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CardModels;