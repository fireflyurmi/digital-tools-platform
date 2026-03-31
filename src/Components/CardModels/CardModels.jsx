import React, { use } from "react";
import Cards from "./Cards";

const CardModels = ({
  cardModelPromise,
  activeTab,
  setActiveTab,
  cartCount,
  addToCart,
  isAlreadyInCart,
}) => {
  const cardModels = use(cardModelPromise);

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-800">
            Premium Digital Tools
          </h2>

          <div className="tabs tabs-box bg-transparent flex justify-center gap-2 mt-6">
            <input
              type="radio"
              name="my_tabs_1"
              className="tab h-10 px-6 rounded-full text-sm font-medium border transition-all checked:bg-linear-to-r checked:from-[#4F39F6] checked:to-[#9514FA] checked:text-white checked:border-transparent not-checked:bg-white not-checked:text-gray-600 not-checked:border-gray-200"
              aria-label="Products"
              onClick={() => setActiveTab("products")}
              checked={activeTab === "products"}
              onChange={() => {}}
            />
            <input
              type="radio"
              name="my_tabs_1"
              className="tab h-10 px-6 rounded-full text-sm font-medium border transition-all checked:bg-linear-to-r checked:from-[#4F39F6] checked:to-[#9514FA] checked:text-white checked:border-transparent not-checked:bg-white not-checked:text-gray-600 not-checked:border-gray-200"
              aria-label={`Cart (${cartCount})`}
              onClick={() => setActiveTab("cart")}
              checked={activeTab === "cart"}
              onChange={() => {}}
            />
          </div>
        </div>

        {activeTab === "products" && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cardModels.map((item) => (
              <Cards
                key={item.id}
                item={item}
                addToCart={addToCart}
                isAlreadyInCart={isAlreadyInCart}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default CardModels;
