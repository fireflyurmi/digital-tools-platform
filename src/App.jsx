import { Suspense, useState } from "react";
import "./App.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import CardModels from "./Components/CardModels/CardModels";
import Navbar from "./Components/Navbar/Navbar";
import Banner from "./Components/Ui/Banner";
import Counter from "./Components/Ui/Counter";
import Pricing from "./Components/Ui/Pricing";
import Steps from "./Components/Ui/Steps";
import Cart from "./Components/CardModels/Cart";

const getCardModels = async () => {
  const res = await fetch("/cardModels.json");
  return res.json();
};

const cardModelPromise = getCardModels();

function App() {
  const [activeTab, setActiveTab] = useState("products");
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    if (!cart.find((item) => item.id === product.id)) {
      setCart([...cart, product]);
      toast.success(`${product.name} added to cart!`, {
        position: "top-right",
        autoClose: 2000,
      });
    }
  };

  const removeFromCart = (id) => {
    const itemToRemove = cart.find(item => item.id === id);
    setCart(cart.filter((item) => item.id !== id));
    toast.info(`${itemToRemove?.name || "Item"} removed from cart`, {
      position: "top-right",
      autoClose: 2000,
    });
  };

  const clearCart = () => {
    if (cart.length > 0) {
      setCart([]);
      toast.success("Order processed successfully! Your cart is now empty.", {
        position: "top-center",
        autoClose: 3000,
      });
    }
  };

  return (
    <>
      <ToastContainer />
      
      <Navbar cartCount={cart.length} />
      <Banner />
      <Counter />

      <Suspense fallback={<div>Loading...</div>}>
        <CardModels
          cardModelPromise={cardModelPromise}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          cartCount={cart.length}
          addToCart={addToCart}
          isAlreadyInCart={(id) => cart.some((item) => item.id === id)}
        />

        {activeTab === "cart" && (
          <Cart
            cartItems={cart}
            removeFromCart={removeFromCart}
            clearCart={clearCart}
          />
        )}
      </Suspense>

      <Steps />
      <Pricing />
    </>
  );
}

export default App;