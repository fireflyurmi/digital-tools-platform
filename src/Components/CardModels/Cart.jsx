import React from "react";
import { ShoppingCart } from "lucide-react";

const Cart = ({ cartItems, removeFromCart, clearCart }) => {
  const total = cartItems.reduce((acc, item) => {
    const price = parseInt(item.price.replace("$", ""));
    return acc + price;
  }, 0);

  return (
    <div className="max-w-7xl mx-auto px-4 pb-16">
      <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-8">
        <h2 className="text-xl font-bold mb-6">Your Cart</h2>

        {cartItems.length > 0 ? (
          <div className="space-y-4">
            {/* Cart Items List */}
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between p-4 bg-gray-50 rounded-xl"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white p-2 rounded-lg border border-gray-100">
                    <img
                      src={item.icon}
                      alt={item.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">{item.name}</h4>
                    <p className="text-sm text-gray-500">{item.price}</p>
                  </div>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 text-sm font-medium hover:underline"
                >
                  Remove
                </button>
              </div>
            ))}

            <div className="flex justify-between items-center pt-6 border-t border-gray-100 mt-6">
              <span className="text-gray-500">Total:</span>
              <span className="text-2xl font-bold text-gray-900">${total}</span>
            </div>

            {/* Checkout Button */}
            <button
              onClick={clearCart}
              className="w-full mt-6 bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white py-4 rounded-xl font-bold hover:opacity-90 transition"
            >
              Proceed To Checkout
            </button>
          </div>
        ) : (
          /* Empty State */
          <div className="py-12 flex flex-col items-center justify-center text-center">
            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mb-4">
              <ShoppingCart className="w-10 h-10 text-gray-400" />
            </div>
            <h3 className="text-lg font-medium text-gray-800">
              Your cart is empty
            </h3>
            <p className="text-gray-500 text-sm mt-2">
              Add some amazing tools to get started!
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
