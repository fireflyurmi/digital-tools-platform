import { Suspense, useState } from "react";
import "./App.css";
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
    }
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <>
      <Navbar cartCount={cart.length} />
      <Banner />
      <Counter />

      <Suspense fallback={<div className="text-center py-20 font-bold">Loading Tools...</div>}>
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